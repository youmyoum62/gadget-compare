-- ===========================================
-- 016_x_posts.sql
-- X (Twitter) post tracking
-- ===========================================

CREATE TABLE x_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- What was posted
  product_id UUID REFERENCES products(id) ON DELETE SET NULL,
  comparison_id UUID REFERENCES comparisons(id) ON DELETE SET NULL,
  post_type TEXT NOT NULL CHECK (post_type IN ('product_highlight', 'review_thread', 'comparison', 'deal_alert')),

  -- Post content
  tweet_text TEXT NOT NULL,
  thread_texts TEXT[],
  image_url TEXT,
  affiliate_url TEXT,

  -- X API response
  tweet_id TEXT,
  thread_ids TEXT[],

  -- Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'posted', 'failed', 'skipped')),
  error_message TEXT,

  -- Scheduling
  scheduled_for TIMESTAMPTZ,
  posted_at TIMESTAMPTZ,

  -- AI tracking
  ai_model_used TEXT,
  ai_generated_at TIMESTAMPTZ,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_x_posts_product ON x_posts(product_id);
CREATE INDEX idx_x_posts_status ON x_posts(status);
CREATE INDEX idx_x_posts_posted_at ON x_posts(posted_at DESC);
CREATE INDEX idx_x_posts_scheduled ON x_posts(scheduled_for) WHERE status = 'pending';
CREATE INDEX idx_x_posts_product_recent ON x_posts(product_id, posted_at DESC)
  WHERE status = 'posted';
