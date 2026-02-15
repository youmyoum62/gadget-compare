# product-detail エージェント指示書

## 役割
amazon-scoutが見つけた各商品のASINから、Amazon.co.jpの商品ページにアクセスし、
詳細データ（価格、画像URL、スペック、特徴）を取得する。

## 入力
amazon-scoutの出力（商品リスト with ASIN）

## 手順

### 1. 価格を取得
各商品について WebSearch で以下を検索:
- `amazon.co.jp {ASIN} 価格`
- `kakaku.com {商品名} 最安値`

### 2. 画像URLを取得
Amazon商品ページのHTMLから画像IDを抽出する。

**方法**: Bashでnode.jsスクリプトを実行:
```bash
node -e "
const https = require('https');
const url = 'https://www.amazon.co.jp/dp/{ASIN}';
https.get(url, {headers: {'User-Agent': 'Mozilla/5.0', 'Accept-Language': 'ja'}}, res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    // hiRes画像を検索
    const hiRes = data.match(/\"hiRes\":\"https:\/\/m\.media-amazon\.com\/images\/I\/([^\"]+)\"/);
    // data-old-hiresを検索
    const oldHires = data.match(/data-old-hires=\"https:\/\/m\.media-amazon\.com\/images\/I\/([^\"]+)\"/);
    const imgId = hiRes ? hiRes[1] : (oldHires ? oldHires[1] : null);
    if (imgId) {
      const base = imgId.replace(/\._[^.]+_\./, '.');
      console.log('IMAGE_ID=' + base.replace('.jpg',''));
    } else {
      console.log('IMAGE_ID=NOT_FOUND');
    }
    // 価格を検索
    const price = data.match(/\"priceAmount\":([0-9.]+)/);
    if (price) console.log('PRICE=' + price[1]);
  });
});
"
```

画像URLの構成:
- Large: `https://m.media-amazon.com/images/I/{IMAGE_ID}._AC_SL500_.jpg`
- Medium: `https://m.media-amazon.com/images/I/{IMAGE_ID}._AC_SL300_.jpg`
- Small: `https://m.media-amazon.com/images/I/{IMAGE_ID}._AC_SL160_.jpg`

### 3. スペック・特徴を取得
WebSearchで以下を検索:
- `{商品名} スペック 仕様`
- `{商品名} レビュー 特徴`

以下の情報を収集:
- **features**: 主要な特徴（6項目程度、日本語）
- **specs**: キー・バリュー形式のスペック（JSON）
- **amazon_rating**: 評価（例: 4.5）
- **amazon_review_count**: レビュー件数
- **ai_summary**: 商品の簡潔な説明（2-3文）
- **ai_pros**: メリット（3-4項目）
- **ai_cons**: デメリット（2-3項目）
- **ai_verdict**: 総評（1文）

## 出力フォーマット
```json
{
  "products": [
    {
      "asin": "B0XXXXXXXXX",
      "title": "商品名（日本語）",
      "slug": "brand-model-name",
      "brand": "ブランド名",
      "manufacturer": "メーカー名",
      "price_amount": 12980,
      "list_price_amount": 15980,
      "image_id": "51XXXXXXXXL",
      "amazon_rating": 4.5,
      "amazon_review_count": 2345,
      "features": ["特徴1", "特徴2", ...],
      "specs": {"キー": "値", ...},
      "ai_summary": "商品の簡潔な説明",
      "ai_pros": ["メリット1", "メリット2", ...],
      "ai_cons": ["デメリット1", "デメリット2", ...],
      "ai_verdict": "総評"
    }
  ]
}
```

## slug生成ルール
`{brand}-{model}` 形式。英語小文字、ハイフン区切り。
例: `sony-wf-1000xm5`, `anker-powercore-10000`

## 注意事項
- 価格が取得できない場合はWebSearchでkakaku.comの情報を使う
- 画像IDが取得できない場合は `image_id: null` とする
- specsのキーは日本語で統一（例: "バッテリー", "重量", "防水"）
- パートナータグは `lowpricesearc-22`
