/** Normalized product data from Amazon API */
export interface AmazonProduct {
  asin: string;
  title: string;
  brand?: string;
  manufacturer?: string;
  price?: {
    amount: number;
    currency: string;
    displayAmount: string;
  };
  listPrice?: {
    amount: number;
    currency: string;
    displayAmount: string;
  };
  detailPageUrl: string;
  imageUrls: {
    large?: string;
    medium?: string;
    small?: string;
  };
  rating?: number;
  reviewCount?: number;
  availability?: string;
  features?: string[];
}

/** Amazon API client interface */
export interface AmazonApiClient {
  searchItems(params: SearchItemsParams): Promise<AmazonProduct[]>;
  getItems(asins: string[]): Promise<AmazonProduct[]>;
}

export interface SearchItemsParams {
  keywords: string;
  searchIndex?: string;
  itemCount?: number;
  sortBy?:
    | "Price:LowToHigh"
    | "Price:HighToLow"
    | "AvgCustomerReviews"
    | "Relevance";
  minPrice?: number;
  maxPrice?: number;
}
