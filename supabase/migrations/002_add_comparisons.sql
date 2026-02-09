-- ===========================================
-- 002_add_comparisons.sql
-- Comparison articles and sync logging
-- ===========================================

-- Comparison articles (AI-generated)
CREATE TABLE comparisons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,

  -- Content
  introduction TEXT,
  body_content TEXT,
  conclusion TEXT,
  faq_content JSONB DEFAULT '[]',

  -- SEO
  meta_title TEXT,
  meta_description TEXT,
  keywords TEXT[],

  -- Status
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  is_featured BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,

  -- AI tracking
  ai_model_used TEXT,
  ai_prompt_version TEXT,
  ai_generated_at TIMESTAMPTZ,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Junction: products in comparisons
CREATE TABLE comparison_products (
  comparison_id UUID REFERENCES comparisons(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  rank INT,
  highlight TEXT,
  PRIMARY KEY (comparison_id, product_id)
);

-- API sync log
CREATE TABLE sync_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sync_type TEXT NOT NULL,
  status TEXT NOT NULL,
  products_processed INT DEFAULT 0,
  errors JSONB DEFAULT '[]',
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  metadata JSONB DEFAULT '{}'
);

-- Indexes
CREATE INDEX idx_comparisons_slug ON comparisons(slug);
CREATE INDEX idx_comparisons_status ON comparisons(status) WHERE status = 'published';
CREATE INDEX idx_sync_log_date ON sync_log(started_at DESC);

CREATE TRIGGER comparisons_updated_at
  BEFORE UPDATE ON comparisons
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
