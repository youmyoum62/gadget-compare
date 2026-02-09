import type { AmazonApiClient } from "./types";
import { PaApiClient } from "./paapi";

/**
 * Factory function to get the Amazon API client.
 * Currently returns PA-API 5.0 client.
 * Will be updated to return Creators API client before April 2026 deadline.
 */
export function getAmazonClient(): AmazonApiClient {
  return new PaApiClient();
}

export type { AmazonApiClient, AmazonProduct, SearchItemsParams } from "./types";
