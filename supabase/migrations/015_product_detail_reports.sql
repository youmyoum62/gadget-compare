-- ===========================================
-- 015_product_detail_reports.sql
-- Product detail reports (AI-generated in-depth reviews)
-- ===========================================

CREATE TABLE product_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,

  -- Content sections (Japanese, Markdown)
  specs_analysis TEXT,
  merit_details JSONB DEFAULT '[]',
  demerit_details JSONB DEFAULT '[]',
  competitive_comparison TEXT,
  recommended_users TEXT,
  verdict TEXT,

  -- SEO
  meta_title TEXT,
  meta_description TEXT,

  -- AI tracking
  ai_model_used TEXT,
  ai_prompt_version TEXT,
  ai_generated_at TIMESTAMPTZ,

  -- Status
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMPTZ,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(product_id)
);

CREATE INDEX idx_product_reports_product ON product_reports(product_id);
CREATE INDEX idx_product_reports_status ON product_reports(status) WHERE status = 'published';

CREATE TRIGGER product_reports_updated_at
  BEFORE UPDATE ON product_reports
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
