-- ===========================================
-- 001_initial_schema.sql
-- Core tables for products and categories
-- ===========================================

-- Categories (smartphones, earbuds, chargers, etc.)
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products (core product information from Amazon)
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  asin TEXT NOT NULL UNIQUE,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,

  -- Basic information
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  brand TEXT,
  manufacturer TEXT,

  -- Pricing (refreshed daily via PA-API)
  price_amount DECIMAL(10,2),
  price_currency TEXT DEFAULT 'JPY',
  list_price_amount DECIMAL(10,2),
  price_updated_at TIMESTAMPTZ,

  -- Amazon data
  detail_page_url TEXT NOT NULL,
  affiliate_url TEXT NOT NULL,
  image_url_large TEXT,
  image_url_medium TEXT,
  image_url_small TEXT,
  amazon_rating DECIMAL(2,1),
  amazon_review_count INT,
  availability TEXT,

  -- Product features/specs
  features TEXT[],
  specs JSONB DEFAULT '{}',

  -- Site-specific
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  display_order INT DEFAULT 0,

  -- AI-generated content
  ai_summary TEXT,
  ai_pros TEXT[],
  ai_cons TEXT[],
  ai_verdict TEXT,
  ai_content_generated_at TIMESTAMPTZ,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  last_api_sync_at TIMESTAMPTZ
);

-- Price history for tracking trends
CREATE TABLE price_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  price_amount DECIMAL(10,2) NOT NULL,
  recorded_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_price_history_product_date ON price_history(product_id, recorded_at DESC);
CREATE INDEX idx_products_asin ON products(asin);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_active ON products(is_active) WHERE is_active = true;

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER categories_updated_at
  BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
