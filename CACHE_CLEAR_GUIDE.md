# ISRキャッシュクリア完全ガイド

## 🚨 現在の問題

Next.js 16のISR (Incremental Static Regeneration) が24時間キャッシュしているため、新しい商品データが表示されません。

## ✅ 解決方法

### 方法1: Revalidation APIを使用 (推奨・即座に反映)

#### ステップ1: Vercelに環境変数を設定

1. https://vercel.com/youmyoum62/gadget-compare/settings/environment-variables を開く
2. 「Add」をクリック
3. 以下を入力:
   ```
   Name: REVALIDATION_SECRET
   Value: y2B1YoTQTbnUON9oAHS4a7DAmOF+XhIuuktVSV57MzQ=
   Environment: Production, Preview, Development (すべて選択)
   ```
4. 「Save」をクリック
5. **重要**: Vercelで再デプロイ (Deployments → 最新のデプロイ → Redeploy)

#### ステップ2: キャッシュをクリア

環境変数設定後、以下のURLにアクセス:

```bash
# 全ページのキャッシュをクリア
https://gadget-compare.vercel.app/api/revalidate?secret=y2B1YoTQTbnUON9oAHS4a7DAmOF+XhIuuktVSV57MzQ=&path=all

# または個別ページ
https://gadget-compare.vercel.app/api/revalidate?secret=y2B1YoTQTbnUON9oAHS4a7DAmOF+XhIuuktVSV57MzQ=&path=/
https://gadget-compare.vercel.app/api/revalidate?secret=y2B1YoTQTbnUON9oAHS4a7DAmOF+XhIuuktVSV57MzQ=&path=/products
```

**cURLで実行する場合**:
```bash
curl "https://gadget-compare.vercel.app/api/revalidate?secret=y2B1YoTQTbnUON9oAHS4a7DAmOF+XhIuuktVSV57MzQ=&path=all"
```

**成功レスポンス**:
```json
{
  "revalidated": true,
  "paths": ["/", "/products", "/rankings", "/search", "/categories"],
  "now": 1739648400000
}
```

#### ステップ3: 確認

1. ブラウザで https://gadget-compare.vercel.app を開く
2. ハードリフレッシュ: `Ctrl + Shift + R` (Windows) / `Cmd + Shift + R` (Mac)
3. 商品数が57商品に更新されていることを確認

---

### 方法2: Vercelで再デプロイ (5分程度)

#### オプションA: キャッシュなしで再デプロイ

1. https://vercel.com/youmyoum62/gadget-compare を開く
2. 最新のデプロイをクリック
3. 右上の3点メニュー → **"Redeploy"**
4. **"Use existing Build Cache"のチェックを外す** ← 重要!
5. "Redeploy"をクリック
6. 約3-5分待つ

#### オプションB: コミットで再デプロイ

```bash
git commit --allow-empty -m "Force cache clear"
git push origin master
```

---

### 方法3: 24時間待つ (自動)

`revalidate = 86400` (24時間) が設定されているため、最初のデプロイから24時間後に自動的に更新されます。

---

## 🔍 トラブルシューティング

### 問題: revalidate APIが "Invalid secret" を返す

**原因**: Vercelに環境変数が設定されていない、または再デプロイしていない

**解決策**:
1. Vercel環境変数設定を確認
2. Vercelで再デプロイ (環境変数変更後は必須)

### 問題: キャッシュクリア後も変わらない

**原因**: ブラウザキャッシュが残っている

**解決策**:
1. ブラウザのハードリフレッシュ: `Ctrl + Shift + R`
2. シークレットモードで確認: `Ctrl + Shift + N`
3. ブラウザキャッシュを完全クリア:
   - `Ctrl + Shift + Delete` → キャッシュをクリア

### 問題: 商品一覧には57商品あるが、ホームには6商品しかない

**原因**: ホームページのISRキャッシュだけが古い

**解決策**:
```bash
# ホームページのみrevalidate
curl "https://gadget-compare.vercel.app/api/revalidate?secret=y2B1YoTQTbnUON9oAHS4a7DAmOF+XhIuuktVSV57MzQ=&path=/"
```

---

## 📊 期待される結果

キャッシュクリア成功後:

### ホームページ (/)
- Featured Review: 19商品からランダムに1商品
- 最新レビュー: 57商品から最新6商品
- カテゴリタブ: 12カテゴリ

### 商品一覧 (/products)
- 57商品のグリッド表示
- カテゴリタブでフィルタリング可能

### ランキング (/rankings)
- カテゴリ別Top 10
- スコアバッジ表示

### 検索 (/search)
- 57商品の検索・フィルタリング
- カテゴリ、ブランド、価格帯、評価で絞り込み

---

## 🛠️ デバッグコマンド

### ローカルでデータ確認
```bash
cd F:\Affiliates\gadget-compare

# 商品データ確認
npm run check:products

# デプロイ検証レポート
npm run verify:deployment

# ホームページクエリテスト
npx tsx src/scripts/test-homepage-query.ts
```

### 本番環境の確認
```bash
# 商品一覧ページの商品数
curl -s "https://gadget-compare.vercel.app/products" | grep -o "商品" | wc -l

# Revalidate APIのテスト
curl "https://gadget-compare.vercel.app/api/revalidate?secret=WRONG_SECRET&path=/"
# → {"error":"Invalid secret"} と返ればAPI自体は動作している
```

---

## 📝 今後の予防策

### 1. 自動revalidation webhookの設定

Supabaseでデータが更新されたときに自動的にキャッシュクリア:

```sql
-- Supabase Database Webhook
CREATE OR REPLACE FUNCTION notify_product_change()
RETURNS trigger AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://gadget-compare.vercel.app/api/revalidate?secret=y2B1YoTQTbnUON9oAHS4a7DAmOF+XhIuuktVSV57MzQ=&path=all',
    headers := '{"Content-Type": "application/json"}'::jsonb
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER product_change_trigger
AFTER INSERT OR UPDATE OR DELETE ON products
FOR EACH STATEMENT
EXECUTE FUNCTION notify_product_change();
```

### 2. revalidateの期間を短縮

`src/app/page.tsx` を編集:

```typescript
// Before
export const revalidate = 86400; // 24時間

// After
export const revalidate = 3600; // 1時間
```

### 3. GitHub Actionsで定期的にrevalidate

`.github/workflows/revalidate-cache.yml`:

```yaml
name: Revalidate ISR Cache
on:
  schedule:
    - cron: '0 */6 * * *'  # 6時間ごと
  workflow_dispatch:

jobs:
  revalidate:
    runs-on: ubuntu-latest
    steps:
      - name: Clear ISR Cache
        run: |
          curl "https://gadget-compare.vercel.app/api/revalidate?secret=${{ secrets.REVALIDATION_SECRET }}&path=all"
```

---

**最終更新**: 2026-02-15 23:30 JST
**問題**: ISRキャッシュにより新商品が表示されない
**解決策**: Revalidation API実装 + Vercel環境変数設定
