import type { AmazonApiClient } from "./types";
import { ScraperClient } from "./scraper";

/**
 * Factory function to get the Amazon product data client.
 * Returns a ScraperClient that fetches data directly from Amazon.co.jp pages.
 */
export function getAmazonClient(): AmazonApiClient {
  return new ScraperClient();
}

export type { AmazonApiClient, AmazonProduct, SearchItemsParams } from "./types";
