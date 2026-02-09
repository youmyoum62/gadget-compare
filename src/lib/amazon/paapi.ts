import crypto from "crypto";
import type { AmazonApiClient, AmazonProduct, SearchItemsParams } from "./types";
import { amazonRateLimiter } from "./rate-limiter";

const RESOURCES = [
  "Images.Primary.Large",
  "Images.Primary.Medium",
  "Images.Primary.Small",
  "ItemInfo.Title",
  "ItemInfo.ByLineInfo",
  "ItemInfo.Features",
  "ItemInfo.ManufactureInfo",
  "Offers.Listings.Price",
  "Offers.Listings.SavingBasis",
  "Offers.Listings.Availability.Message",
];

/**
 * PA-API 5.0 client implementation.
 * Uses AWS Signature V4 for request signing.
 *
 * Note: PA-API 5.0 will be deprecated April 30, 2026.
 * This client implements the AmazonApiClient interface so it can be
 * swapped with CreatorsApiClient without changing calling code.
 */
export class PaApiClient implements AmazonApiClient {
  private accessKey: string;
  private secretKey: string;
  private partnerTag: string;
  private host: string;
  private region: string;

  constructor() {
    this.accessKey = process.env.AMAZON_ACCESS_KEY!;
    this.secretKey = process.env.AMAZON_SECRET_KEY!;
    this.partnerTag = process.env.AMAZON_PARTNER_TAG!;
    this.host = process.env.AMAZON_HOST ?? "webservices.amazon.co.jp";
    this.region = process.env.AMAZON_REGION ?? "us-west-2";
  }

  async getItems(asins: string[]): Promise<AmazonProduct[]> {
    const payload = {
      ItemIds: asins.slice(0, 10),
      PartnerTag: this.partnerTag,
      PartnerType: "Associates",
      Marketplace: "www.amazon.co.jp",
      Resources: RESOURCES,
    };

    const response = await this.sendRequest("GetItems", payload);
    return (response.ItemsResult?.Items ?? []).map(mapItem);
  }

  async searchItems(params: SearchItemsParams): Promise<AmazonProduct[]> {
    const payload: Record<string, unknown> = {
      Keywords: params.keywords,
      SearchIndex: params.searchIndex ?? "Electronics",
      ItemCount: params.itemCount ?? 10,
      PartnerTag: this.partnerTag,
      PartnerType: "Associates",
      Marketplace: "www.amazon.co.jp",
      Resources: RESOURCES,
    };

    if (params.sortBy) payload.SortBy = params.sortBy;
    if (params.minPrice) payload.MinPrice = params.minPrice;
    if (params.maxPrice) payload.MaxPrice = params.maxPrice;

    const response = await this.sendRequest("SearchItems", payload);
    return (response.SearchResult?.Items ?? []).map(mapItem);
  }

  private async sendRequest(
    operation: string,
    payload: Record<string, unknown>
  ): Promise<Record<string, any>> {
    await amazonRateLimiter.waitForSlot();

    const path = `/paapi5/${operation.toLowerCase()}`;
    const target = `com.amazon.paapi5.v1.ProductAdvertisingAPIv1.${operation}`;
    const body = JSON.stringify(payload);

    const now = new Date();
    const dateStamp = now.toISOString().replace(/[-:T]/g, "").slice(0, 8);
    const amzDate = now.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

    const headers: Record<string, string> = {
      "content-type": "application/json; charset=utf-8",
      "content-encoding": "amz-1.0",
      host: this.host,
      "x-amz-date": amzDate,
      "x-amz-target": target,
    };

    const signedHeaders = Object.keys(headers).sort().join(";");
    const canonicalHeaders = Object.keys(headers)
      .sort()
      .map((k) => `${k}:${headers[k]}\n`)
      .join("");

    const payloadHash = sha256(body);

    const canonicalRequest = [
      "POST",
      path,
      "",
      canonicalHeaders,
      signedHeaders,
      payloadHash,
    ].join("\n");

    const credentialScope = `${dateStamp}/${this.region}/ProductAdvertisingAPI/aws4_request`;
    const stringToSign = [
      "AWS4-HMAC-SHA256",
      amzDate,
      credentialScope,
      sha256(canonicalRequest),
    ].join("\n");

    const signingKey = getSignatureKey(
      this.secretKey,
      dateStamp,
      this.region,
      "ProductAdvertisingAPI"
    );
    const signature = hmac(signingKey, stringToSign, "hex");

    headers[
      "Authorization"
    ] = `AWS4-HMAC-SHA256 Credential=${this.accessKey}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

    const res = await fetch(`https://${this.host}${path}`, {
      method: "POST",
      headers,
      body,
    });

    if (!res.ok) {
      const errorBody = await res.text();
      throw new Error(
        `PA-API ${operation} failed (${res.status}): ${errorBody}`
      );
    }

    return res.json();
  }
}

// --- Helper functions ---

function sha256(data: string): string {
  return crypto.createHash("sha256").update(data, "utf8").digest("hex");
}

function hmac(
  key: string | Buffer,
  data: string,
  encoding?: "hex"
): string | Buffer {
  const h = crypto.createHmac("sha256", key).update(data, "utf8");
  return encoding ? h.digest(encoding) : h.digest();
}

function getSignatureKey(
  key: string,
  dateStamp: string,
  region: string,
  service: string
): Buffer {
  const kDate = hmac(`AWS4${key}`, dateStamp) as Buffer;
  const kRegion = hmac(kDate, region) as Buffer;
  const kService = hmac(kRegion, service) as Buffer;
  return hmac(kService, "aws4_request") as Buffer;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function mapItem(item: any): AmazonProduct {
  const listing = item.Offers?.Listings?.[0];
  const price = listing?.Price;
  const savingBasis = listing?.SavingBasis;

  return {
    asin: item.ASIN,
    title: item.ItemInfo?.Title?.DisplayValue ?? "",
    brand: item.ItemInfo?.ByLineInfo?.Brand?.DisplayValue,
    manufacturer: item.ItemInfo?.ManufactureInfo?.ItemPartNumber?.DisplayValue,
    price: price
      ? {
          amount: price.Amount,
          currency: price.Currency,
          displayAmount: price.DisplayAmount,
        }
      : undefined,
    listPrice: savingBasis
      ? {
          amount: savingBasis.Amount,
          currency: savingBasis.Currency,
          displayAmount: savingBasis.DisplayAmount,
        }
      : undefined,
    detailPageUrl: item.DetailPageURL ?? "",
    imageUrls: {
      large: item.Images?.Primary?.Large?.URL,
      medium: item.Images?.Primary?.Medium?.URL,
      small: item.Images?.Primary?.Small?.URL,
    },
    rating: undefined, // PA-API doesn't return rating directly in all cases
    reviewCount: undefined,
    availability: listing?.Availability?.Message,
    features: item.ItemInfo?.Features?.DisplayValues,
  };
}
