# デプロイトラブルシューティング

## 🔍 現在の状況

**データベース**: ✅ **57商品** (目標50商品達成!)
- すべての商品に画像URL設定済み
- 19商品がフィーチャー設定
- 12カテゴリに分散

**問題**: サイトに商品が表示されない、または画像が表示されない

## 🛠️ 解決手順

### 1. Vercel環境変数の確認

Vercelダッシュボードで以下の環境変数が正しく設定されているか確認:

```
NEXT_PUBLIC_SUPABASE_URL=https://kqvmnmigxufqszobvjde.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[Your Anon Key]
```

**手順**:
1. https://vercel.com/youmyoum62/gadget-compare/settings/environment-variables
2. `NEXT_PUBLIC_SUPABASE_URL` と `NEXT_PUBLIC_SUPABASE_ANON_KEY` を確認
3. 値が正しいことを確認 (特にURLの末尾に余分な文字がないか)
4. 変更した場合は「Save」をクリック

### 2. キャッシュのクリアと再デプロイ

**オプションA: Vercelダッシュボードから**
1. https://vercel.com/youmyoum62/gadget-compare
2. 最新のデプロイを開く
3. 右上の3点メニュー → "Redeploy"
4. "Use existing Build Cache" のチェックを**外す**
5. "Redeploy" をクリック

**オプションB: コマンドラインから**
```bash
# 空のコミットでデプロイトリガー
git commit --allow-empty -m "Force rebuild without cache"
git push origin master
```

### 3. ISRキャッシュの手動クリア

Next.js 15のISR (Incremental Static Regeneration) が24時間キャッシュしています。

**方法1: revalidate APIを使用** (推奨)
```bash
# REVALIDATE_SECRETを.env.localに追加
echo "REVALIDATE_SECRET=your-secure-random-string" >> .env.local

# Vercelにも同じ環境変数を設定
# https://vercel.com/youmyoum62/gadget-compare/settings/environment-variables

# APIを呼び出し
curl -X POST "https://gadget-compare.vercel.app/api/revalidate?secret=your-secure-random-string&path=/"
```

**方法2: 24時間待つ**
- `revalidate = 86400` (24時間) が設定されているため、自動的に更新されます

### 4. ブラウザキャッシュのクリア

**Chrome/Edge**:
1. `Ctrl + Shift + Delete` (Windows) または `Cmd + Shift + Delete` (Mac)
2. 「キャッシュされた画像とファイル」を選択
3. 「データを削除」をクリック
4. サイトをハードリフレッシュ: `Ctrl + Shift + R` (Windows) または `Cmd + Shift + R` (Mac)

**シークレットモードでテスト**:
- `Ctrl + Shift + N` (Chrome) または `Ctrl + Shift + P` (Edge/Firefox)
- キャッシュなしで動作確認

### 5. 画像URLの検証

データベースの画像URLが正しいか確認:

```bash
cd F:\Affiliates\gadget-compare
npm run check:products  # カスタムスクリプトを追加する場合
```

または:

```typescript
// 手動で確認
npx tsx src/scripts/verify-deployment.ts
```

### 6. Next.js Image Optimizationの確認

Next.js の `<Image>` コンポーネントは外部ドメインから画像を読み込む際に設定が必要です。

**next.config.ts を確認**:
```typescript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/I/**',
      },
    ],
  },
}
```

### 7. ローカル開発サーバーでテスト

```bash
cd F:\Affiliates\gadget-compare
npm run dev
```

ブラウザで http://localhost:3000 を開いて、商品が表示されるか確認。

ローカルで表示される場合 → Vercelのビルド/キャッシュ問題
ローカルでも表示されない場合 → コード/データベース問題

## 🔧 追加のデバッグコマンド

### データベース接続確認
```bash
npx tsx src/scripts/check-products.ts
```

### デプロイ検証レポート
```bash
npx tsx src/scripts/verify-deployment.ts
```

### ビルドログ確認
```bash
npm run build
```

## 📊 現在のデータベース統計

```
総商品数: 57
フィーチャー商品: 19
アクティブカテゴリ: 12
公開済み比較記事: 0

カテゴリ別商品数:
- ワイヤレスイヤホン: 10
- ワイヤレス充電器: 12
- スマートウォッチ: 13
- モバイルバッテリー: 6
- NCヘッドホン: 2
- USB充電器: 3
- タブレット: 3
- ノートPC・ミニPC: 6
- スマートホームデバイス: 1
- その他: 1
```

## 🎯 期待される結果

デプロイ成功後、以下が表示されるはずです:

1. **ホームページ (/)**
   - Featured Review (ヒーロー商品カード)
   - カテゴリタブ (12カテゴリ)
   - 最新レビュー (6商品グリッド)

2. **商品一覧 (/products)**
   - 57商品のグリッド表示
   - 各商品カードに画像、評価、価格

3. **ランキング (/rankings)**
   - カテゴリ別Top 10

4. **検索 (/search)**
   - 全商品の検索・フィルタリング

## 📞 サポート

上記の手順で解決しない場合:

1. Vercelのデプロイログを確認:
   https://vercel.com/youmyoum62/gadget-compare/deployments

2. ブラウザのコンソールでエラー確認:
   `F12` → Console タブ

3. Network タブで画像読み込みエラー確認:
   `F12` → Network タブ → 画像ファイルのステータスコード

---

**最終更新**: 2026-02-15
**データベース確認日時**: 2026-02-15 23:00 JST
**商品数**: 57 (目標50達成 ✓)
