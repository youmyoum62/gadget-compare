# ガジェット売れ筋リサーチレポート

**リサーチ日:** YYYY-MM-DD
**リサーチ対象:** Amazon.co.jp
**対象カテゴリ数:** X カテゴリ
**ピックアップ商品数:** XX 商品

---

## エグゼクティブサマリー

<!-- リサーチ全体の概要を2〜3文で記載 -->

---

## カテゴリ別リサーチ結果

### 1. [カテゴリ名]（slug: `category-slug`）

**市場動向:** <!-- 1〜2文で市場のトレンドを記載 -->

| # | 商品名 | ASIN | ブランド | 価格帯 | 評価 | レビュー数 | 推奨理由 |
|---|--------|------|----------|--------|------|-----------|----------|
| 1 | [商品名] | B0XXXXXXXXX | [ブランド] | ¥X,XXX | ★X.X | XXX件 | [理由] |
| 2 | [商品名] | B0YYYYYYYYY | [ブランド] | ¥X,XXX | ★X.X | XXX件 | [理由] |

<!-- 上記テーブルを5〜10行で埋める。各カテゴリにつき1セクション作成する -->

---

## 新規カテゴリ提案

<!-- 新たに追加を提案するカテゴリがある場合のみ記載 -->

| カテゴリ名 | slug | 検索ボリューム | アフィ単価 | 比較ニーズ | 総合評価 |
|---|---|---|---|---|---|
| [カテゴリ名] | [slug] | ★★★ | ★★☆ | ★★★ | A/B/C |

---

## DB投入用データ

### ASIN リスト（TypeScript）

```typescript
const NEW_PRODUCTS: Array<{ asin: string; categorySlug: string }> = [
  // [カテゴリ名]
  { asin: "B0XXXXXXXXX", categorySlug: "category-slug" },
];
```

### 新規カテゴリ SQL（該当がある場合のみ）

```sql
INSERT INTO categories (name, slug, description, display_order, is_active)
VALUES
  ('カテゴリ名', 'slug', '説明文', 10, true)
ON CONFLICT (slug) DO NOTHING;
```

---

## 既存DBとの重複チェック結果

- 重複ASIN数: X 件
- 新規ASIN数: X 件
- 除外ASIN（販売終了・在庫切れ等）: X 件

---

## 次回リサーチへのメモ

<!-- 次回リサーチ時に注意すべき点や、追跡したいトレンドなどを記載 -->
