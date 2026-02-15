-- ===========================================
-- カテゴリ追加テンプレート
-- gadget-compare プロジェクト用
--
-- 使い方:
--   1. このファイルをコピーして supabase/migrations/ に配置
--   2. ファイル名は連番で命名: 0XX_add_[category_name].sql
--   3. VALUES の中身を実際のカテゴリ情報に置き換え
--   4. Supabase CLI または管理画面から実行
-- ===========================================

-- 新規カテゴリの追加
-- display_order は既存カテゴリの最大値 + 1 に設定すること
INSERT INTO categories (name, slug, description, display_order, is_active)
VALUES
  -- ('カテゴリ名', 'slug', '説明文', display_order, true)
  -- 例:
  -- ('ポータブルスピーカー', 'portable-speaker', 'Bluetooth対応ポータブルスピーカーの比較', 10, true),
  -- ('電動歯ブラシ', 'electric-toothbrush', '電動歯ブラシの比較', 11, true),
ON CONFLICT (slug) DO NOTHING;

-- ===========================================
-- 商品追加テンプレート（手動投入用）
-- 通常は seed-products.ts や update-products.ts を使用するが、
-- 直接SQLで投入する場合のテンプレート
-- ===========================================

/*
-- カテゴリIDの取得
-- 先にカテゴリのUUIDを確認する
SELECT id, name, slug FROM categories WHERE is_active = true ORDER BY display_order;

-- 商品の直接投入例
INSERT INTO products (
  asin, category_id, title, slug, brand,
  price_amount, price_currency,
  detail_page_url, affiliate_url,
  is_active, display_order
)
VALUES (
  'B0XXXXXXXXX',
  (SELECT id FROM categories WHERE slug = 'category-slug'),
  '商品名',
  'brand-b0xxxxxxxxx',
  'ブランド名',
  12345, 'JPY',
  'https://www.amazon.co.jp/dp/B0XXXXXXXXX',
  'https://www.amazon.co.jp/dp/B0XXXXXXXXX?tag=your-partner-tag',
  true, 0
)
ON CONFLICT (asin) DO UPDATE SET
  price_amount = EXCLUDED.price_amount,
  price_updated_at = NOW(),
  last_api_sync_at = NOW();
*/
