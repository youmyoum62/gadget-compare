import * as cheerio from "cheerio";
import type { AmazonApiClient, AmazonProduct, SearchItemsParams } from "./types";
import { amazonRateLimiter } from "./rate-limiter";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

/**
 * Amazon product data client using web scraping.
 * Fetches product pages from Amazon.co.jp and extracts data with cheerio.
 *
 * Implements AmazonApiClient interface so it can replace PaApiClient
 * without changing calling code.
 */
export class ScraperClient implements AmazonApiClient {
  /** searchItems is not supported via scraping — returns empty array. */
  async searchItems(_params: SearchItemsParams): Promise<AmazonProduct[]> {
    console.warn("ScraperClient.searchItems() is not supported, returning [].");
    return [];
  }

  async getItems(asins: string[]): Promise<AmazonProduct[]> {
    const results: AmazonProduct[] = [];

    for (const asin of asins) {
      try {
        await amazonRateLimiter.waitForSlot();
        const product = await this.scrapeProduct(asin);
        if (product) results.push(product);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error(`Scrape failed for ${asin}: ${msg}`);
        // Skip this ASIN, continue with the rest
      }
    }

    return results;
  }

  private async scrapeProduct(asin: string): Promise<AmazonProduct | null> {
    const url = `https://www.amazon.co.jp/dp/${asin}`;
    const res = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
        "Accept-Language": "ja-JP,ja;q=0.9,en;q=0.8",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });

    if (!res.ok) {
      console.warn(`HTTP ${res.status} for ASIN ${asin}, skipping.`);
      return null;
    }

    const html = await res.text();

    // Detect captcha / bot check
    if (html.includes("captcha") || html.includes("Type the characters")) {
      console.warn(`Captcha detected for ASIN ${asin}, skipping.`);
      return null;
    }

    const $ = cheerio.load(html);

    const title = $("#productTitle").text().trim();
    if (!title) {
      console.warn(`Could not extract title for ASIN ${asin}, skipping.`);
      return null;
    }

    return {
      asin,
      title,
      brand: this.extractBrand($),
      manufacturer: undefined,
      price: this.extractPrice($),
      listPrice: undefined,
      detailPageUrl: url,
      imageUrls: this.extractImages($),
      rating: this.extractRating($),
      reviewCount: this.extractReviewCount($),
      availability: this.extractAvailability($),
      features: this.extractFeatures($),
    };
  }

  private extractAvailability($: cheerio.CheerioAPI): string | undefined {
    const avail =
      $("#availability span").first().text().trim() ||
      $("#outOfStock .a-color-price").first().text().trim();
    if (!avail) return undefined;
    // Normalize: "在庫あり。" → "在庫あり"
    return avail.replace(/[。\s]+$/, "").trim() || undefined;
  }

  private extractBrand($: cheerio.CheerioAPI): string | undefined {
    const byline = $("#bylineInfo").text().trim();
    if (byline) {
      // "ブランド: Sony" or "Sony のストアを表示"
      const match = byline.match(/(?:ブランド[:：]\s*)(.+)|^(.+?)(?:\s*の)/);
      if (match) return (match[1] ?? match[2]).trim();
      return byline;
    }
    const poBrand = $(".po-brand .po-break-word").text().trim();
    if (poBrand) return poBrand;
    return undefined;
  }

  private extractPrice(
    $: cheerio.CheerioAPI
  ): AmazonProduct["price"] | undefined {
    // Scope to #centerCol (main product area) first to avoid picking up
    // sponsored product prices or "customers also bought" section prices.
    const priceText =
      $("#centerCol .a-price .a-offscreen").first().text().trim() ||
      $("#centerCol .a-price-whole").first().text().trim() ||
      $("#corePriceDisplay_desktop_feature_div .a-price .a-offscreen").first().text().trim() ||
      $("#corePrice_feature_div .a-price .a-offscreen").first().text().trim() ||
      $("#apex_offerDisplay_desktop .a-price .a-offscreen").first().text().trim() ||
      $("#price_inside_buybox").text().trim() ||
      $("#priceblock_ourprice").text().trim() ||
      $("#priceblock_dealprice").text().trim();

    if (!priceText) return undefined;

    // Parse "￥12,345" or "¥12,345" or "12,345"
    const cleaned = priceText.replace(/[^\d]/g, "");
    const amount = parseInt(cleaned, 10);
    if (isNaN(amount) || amount === 0) return undefined;

    return {
      amount,
      currency: "JPY",
      displayAmount: `¥${amount.toLocaleString()}`,
    };
  }

  private extractRating($: cheerio.CheerioAPI): number | undefined {
    const altText = $("i.a-icon-star span.a-icon-alt").first().text();
    // "4.5 5つ星のうち" or "5つ星のうち4.5"
    const match = altText.match(/([\d.]+)/);
    if (match) {
      const rating = parseFloat(match[1]);
      if (!isNaN(rating) && rating >= 0 && rating <= 5) return rating;
    }
    return undefined;
  }

  private extractReviewCount($: cheerio.CheerioAPI): number | undefined {
    const text = $("#acrCustomerReviewText").text();
    const match = text.match(/([\d,]+)/);
    if (match) {
      const count = parseInt(match[1].replace(/,/g, ""), 10);
      if (!isNaN(count)) return count;
    }
    return undefined;
  }

  private extractFeatures($: cheerio.CheerioAPI): string[] | undefined {
    const features: string[] = [];
    $("#feature-bullets ul li span.a-list-item").each((_i, el) => {
      const text = $(el).text().trim();
      if (text && !text.startsWith("›")) {
        features.push(text);
      }
    });
    return features.length > 0 ? features : undefined;
  }

  private extractImages(
    $: cheerio.CheerioAPI
  ): AmazonProduct["imageUrls"] {
    const landingImage = $("#landingImage");
    const large =
      landingImage.attr("data-old-hires") || landingImage.attr("src") || undefined;
    return {
      large,
      medium: large,
      small: large,
    };
  }
}
