import type { AmazonProduct } from "../amazon/types";

/**
 * Generate a product summary prompt.
 * Output: JSON with summary, pros, cons, verdict in Japanese.
 */
export function buildProductSummaryPrompt(product: {
  title: string;
  brand?: string | null;
  price_amount?: number | null;
  price_currency?: string;
  features?: string[] | null;
}): string {
  const priceStr =
    product.price_amount != null
      ? `${product.price_amount.toLocaleString()}${product.price_currency ?? "JPY"}`
      : "価格未取得";

  return `
あなたはガジェット専門のレビュアーです。以下の商品情報をもとに、日本語で簡潔な商品サマリーを書いてください。

商品名: ${product.title}
ブランド: ${product.brand ?? "不明"}
価格: ${priceStr}
特徴:
${(product.features ?? []).map((f) => `- ${f}`).join("\n")}

以下のJSON形式で回答してください:
{
  "summary": "2〜3文の商品概要（日本語）",
  "pros": ["メリット1", "メリット2", "メリット3"],
  "cons": ["デメリット1", "デメリット2"],
  "verdict": "一文でのおすすめポイント（日本語）"
}

ルール:
- 上記の情報に記載されている内容のみを参照してください
- スペックを捏造しないでください
- 自然な日本語で、情報的かつ中立的なトーンで書いてください
`.trim();
}

/**
 * Generate a comparison article prompt.
 * Output: JSON with title, metaDescription, introduction, body, conclusion, faq in Japanese.
 */
export function buildComparisonArticlePrompt(
  products: Array<{
    title: string;
    brand?: string | null;
    price_amount?: number | null;
    amazon_rating?: number | null;
    amazon_review_count?: number | null;
    features?: string[] | null;
  }>,
  category: string,
  targetKeyword: string
): string {
  const productList = products
    .map(
      (p, i) => `
商品${i + 1}: ${p.title}
- ブランド: ${p.brand ?? "不明"}
- 価格: ${p.price_amount != null ? `${p.price_amount.toLocaleString()}円` : "N/A"}
- 評価: ${p.amazon_rating ?? "N/A"} (${p.amazon_review_count ?? 0}件)
- 主な特徴: ${(p.features ?? []).slice(0, 5).join("、")}
`
    )
    .join("\n");

  return `
あなたはガジェット比較記事のプロライターです。以下の商品を比較する記事を日本語で書いてください。

カテゴリ: ${category}
ターゲットキーワード: ${targetKeyword}
比較商品:
${productList}

以下のJSON形式で回答してください:
{
  "title": "SEOに最適化されたタイトル（2026年を含む、日本語）",
  "metaDescription": "155文字以内のメタディスクリプション（日本語）",
  "introduction": "導入部 2〜3段落（Markdown、日本語）",
  "body": "本文（Markdown、各商品ごとに##見出しを使用、日本語）",
  "conclusion": "まとめ・おすすめ（Markdown、日本語）",
  "faq": [
    {"question": "よくある質問（日本語）", "answer": "回答（日本語）"}
  ]
}

ルール:
- 商品名と価格を必ず記載してください
- 用途別に整理してください（コスパ重視、品質重視、機能重視など）
- FAQは3〜5個作成してください
- 提供された情報以外のスペックを捏造しないでください
- 自然で読みやすい日本語で書いてください
`.trim();
}
