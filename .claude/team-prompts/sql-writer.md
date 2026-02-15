# sql-writer エージェント指示書

## 役割
product-detailが収集した商品データを、Supabase用のINSERT SQLに変換する。

## 入力
product-detailの出力（商品詳細データリスト）

## 参照ファイル
- `src/types/database.ts` - テーブルの型定義
- `supabase/migrations/003_seed_real_products.sql` - SQLのテンプレート

## SQLテンプレート

### INSERT文
```sql
INSERT INTO products (
  asin, category_id, title, slug, brand, manufacturer,
  price_amount, price_currency, list_price_amount, price_updated_at,
  detail_page_url, affiliate_url,
  image_url_large, image_url_medium, image_url_small,
  amazon_rating, amazon_review_count, availability,
  features, specs,
  is_featured, is_active, display_order,
  ai_summary, ai_pros, ai_cons, ai_verdict, ai_content_generated_at
) VALUES (
  '{asin}',
  (SELECT id FROM categories WHERE slug = '{category_slug}'),
  '{title}',
  '{slug}',
  '{brand}',
  '{manufacturer}',
  {price_amount}, 'JPY', {list_price_amount},
  NOW(),
  'https://www.amazon.co.jp/dp/{asin}',
  'https://www.amazon.co.jp/dp/{asin}?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/{image_id}._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/{image_id}._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/{image_id}._AC_SL160_.jpg',
  {rating}, {review_count}, '在庫あり',
  ARRAY[{features}],
  '{specs}'::jsonb,
  {is_featured}, true, {display_order},
  '{ai_summary}',
  ARRAY[{ai_pros}],
  ARRAY[{ai_cons}],
  '{ai_verdict}',
  NOW()
);
```

## カテゴリslug一覧
| カテゴリ | slug |
|---------|------|
| ワイヤレスイヤホン | wireless-earbuds |
| モバイルバッテリー | mobile-battery |
| スマートウォッチ | smartwatch |
| USB充電器 | usb-charger |
| タブレット | tablet |

## 出力ルール
1. ファイル名: `supabase/migrations/{次の番号}_{説明}.sql`
   - 既存のマイグレーション番号を確認して次の番号を使う
   - 例: 006まであれば `007_add_wireless_earbuds.sql`

2. ファイルの先頭にコメントを付ける:
```sql
-- ===========================================
-- {番号}_{説明}.sql
-- Added by product research team on {date}
-- Category: {category_name}
-- Products: {count} items
-- ===========================================
```

3. 画像IDがnullの商品は `image_url_*` に NULL を設定

4. list_price_amountがnullの場合は `NULL` を使用（文字列ではなく）

5. SQLの文字列内のシングルクォートは `''` でエスケープ

6. `is_featured` は最初の2件を `true`、残りを `false` に設定

7. `display_order` は既存商品の後に連番で設定

## 注意事項
- SQLは必ず `f:\Affiliates\gadget-compare\supabase\migrations\` に保存
- ON CONFLICT句は使わない（重複ASINは事前にscoutが除外済み）
- パートナータグは必ず `lowpricesearc-22` を使用
- price_currencyは必ず `'JPY'`
