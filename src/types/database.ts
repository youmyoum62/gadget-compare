export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  asin: string;
  category_id: string | null;
  title: string;
  slug: string;
  brand: string | null;
  manufacturer: string | null;
  price_amount: number | null;
  price_currency: string;
  list_price_amount: number | null;
  price_updated_at: string | null;
  detail_page_url: string;
  affiliate_url: string;
  image_url_large: string | null;
  image_url_medium: string | null;
  image_url_small: string | null;
  amazon_rating: number | null;
  amazon_review_count: number | null;
  availability: string | null;
  features: string[] | null;
  specs: Record<string, string>;
  is_featured: boolean;
  is_active: boolean;
  display_order: number;
  ai_summary: string | null;
  ai_pros: string[] | null;
  ai_cons: string[] | null;
  ai_verdict: string | null;
  ai_content_generated_at: string | null;
  created_at: string;
  updated_at: string;
  last_api_sync_at: string | null;
}

export interface Comparison {
  id: string;
  title: string;
  slug: string;
  category_id: string | null;
  introduction: string | null;
  body_content: string | null;
  conclusion: string | null;
  faq_content: Array<{ question: string; answer: string }>;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string[] | null;
  status: "draft" | "published" | "archived";
  is_featured: boolean;
  published_at: string | null;
  ai_model_used: string | null;
  ai_prompt_version: string | null;
  ai_generated_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ComparisonProduct {
  comparison_id: string;
  product_id: string;
  rank: number | null;
  highlight: string | null;
}

export interface PriceHistory {
  id: string;
  product_id: string;
  price_amount: number;
  recorded_at: string;
}

export interface SyncLog {
  id: string;
  sync_type: string;
  status: string;
  products_processed: number;
  errors: unknown[];
  started_at: string;
  completed_at: string | null;
  metadata: Record<string, unknown>;
}

export interface Database {
  public: {
    Tables: {
      categories: { Row: Category; Insert: Partial<Category> & Pick<Category, "name" | "slug">; Update: Partial<Category> };
      products: { Row: Product; Insert: Partial<Product> & Pick<Product, "asin" | "title" | "slug" | "detail_page_url" | "affiliate_url">; Update: Partial<Product> };
      comparisons: { Row: Comparison; Insert: Partial<Comparison> & Pick<Comparison, "title" | "slug">; Update: Partial<Comparison> };
      comparison_products: { Row: ComparisonProduct; Insert: ComparisonProduct; Update: Partial<ComparisonProduct> };
      price_history: { Row: PriceHistory; Insert: Omit<PriceHistory, "id" | "recorded_at">; Update: Partial<PriceHistory> };
      sync_log: { Row: SyncLog; Insert: Partial<SyncLog> & Pick<SyncLog, "sync_type" | "status">; Update: Partial<SyncLog> };
    };
  };
}
