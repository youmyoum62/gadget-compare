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

/**
 * Generate a detailed product report prompt.
 * Output: JSON with specs_analysis, merit_details, demerit_details,
 *         competitive_comparison, recommended_users, verdict, meta_title, meta_description.
 */
export function buildProductDetailReportPrompt(
  product: {
    title: string;
    brand?: string | null;
    price_amount?: number | null;
    price_currency?: string;
    features?: string[] | null;
    specs?: Record<string, string>;
    amazon_rating?: number | null;
    amazon_review_count?: number | null;
  },
  competitors: Array<{
    title: string;
    brand?: string | null;
    price_amount?: number | null;
    amazon_rating?: number | null;
  }>
): string {
  const priceStr =
    product.price_amount != null
      ? `${product.price_amount.toLocaleString()}${product.price_currency ?? "JPY"}`
      : "価格未取得";

  const specsStr = product.specs
    ? Object.entries(product.specs)
        .map(([k, v]) => `- ${k}: ${v}`)
        .join("\n")
    : "スペック情報なし";

  const competitorList = competitors
    .map(
      (c, i) =>
        `${i + 1}. ${c.title}（${c.brand ?? "不明"}）- ${c.price_amount != null ? `${c.price_amount.toLocaleString()}円` : "N/A"} / 評価: ${c.amazon_rating ?? "N/A"}`
    )
    .join("\n");

  return `
あなたはガジェット専門の詳細レビュアーです。以下の商品について、購入検討者向けの詳細レポートを日本語で作成してください。

## 対象商品
商品名: ${product.title}
ブランド: ${product.brand ?? "不明"}
価格: ${priceStr}
Amazon評価: ${product.amazon_rating ?? "N/A"}（${product.amazon_review_count ?? 0}件のレビュー）

特徴:
${(product.features ?? []).map((f) => `- ${f}`).join("\n")}

スペック:
${specsStr}

## 同カテゴリの競合商品
${competitorList || "競合情報なし"}

以下のJSON形式で回答してください:
{
  "specs_analysis": "各スペック項目を分析し、何が優れていて何が平凡かを解説するMarkdownテキスト（## 見出しを使用）",
  "merit_details": [
    {"title": "メリットの短いタイトル", "description": "2〜3文の詳細な説明"}
  ],
  "demerit_details": [
    {"title": "デメリットの短いタイトル", "description": "2〜3文の詳細な説明"}
  ],
  "competitive_comparison": "競合商品と比較した際のポジショニングを分析するMarkdownテキスト",
  "recommended_users": "この商品が向いている人・向いていない人をMarkdownで記述",
  "verdict": "3〜4文の詳細な総合評価",
  "meta_title": "60文字以内のSEOタイトル",
  "meta_description": "155文字以内のメタディスクリプション"
}

ルール:
- merit_detailsは3〜5個、demerit_detailsは2〜4個作成してください
- 提供された情報のみを参照し、スペックを捏造しないでください
- 競合比較は提供された競合商品のデータに基づいてください
- 価格帯を考慮した実用的なアドバイスを含めてください
- 自然で読みやすい日本語で、購入検討者の視点で書いてください
`.trim();
}

/**
 * Generate a single tweet about a product.
 * Output: JSON with tweet (text <=240 chars).
 */
export function buildProductTweetPrompt(product: {
  title: string;
  brand?: string | null;
  price_amount?: number | null;
  amazon_rating?: number | null;
  ai_summary?: string | null;
  ai_pros?: string[] | null;
}): string {
  const priceStr =
    product.price_amount != null
      ? `${product.price_amount.toLocaleString()}円`
      : "";

  return `
あなたはガジェット紹介のX（Twitter）アカウント運営者です。以下の商品を紹介する魅力的なツイートを1つ作成してください。

商品名: ${product.title}
ブランド: ${product.brand ?? ""}
価格: ${priceStr}
Amazon評価: ${product.amazon_rating ?? "N/A"}
概要: ${product.ai_summary ?? ""}
メリット: ${(product.ai_pros ?? []).join("、")}

以下のJSON形式で回答してください:
{
  "tweet": "ツイート本文（日本語、最大220文字）"
}

ルール:
- 最大220文字（URLの分を40文字分確保するため280文字制限から引いています）
- 商品の最も魅力的なポイントを1〜2点に絞ってください
- 絵文字を1〜2個使って視覚的に目立たせてください
- ハッシュタグを1〜2個含めてください（例: #ガジェット #おすすめイヤホン）
- 宣伝臭くなく、情報提供的なトーンで
- 価格がある場合は含めてください
`.trim();
}

/**
 * Generate a review thread (3-5 tweets) about a product.
 * Output: JSON with tweets[] array.
 */
export function buildProductThreadPrompt(product: {
  title: string;
  brand?: string | null;
  price_amount?: number | null;
  features?: string[] | null;
  specs?: Record<string, string>;
  amazon_rating?: number | null;
  ai_summary?: string | null;
  ai_pros?: string[] | null;
  ai_cons?: string[] | null;
  ai_verdict?: string | null;
}): string {
  const priceStr =
    product.price_amount != null
      ? `${product.price_amount.toLocaleString()}円`
      : "";

  const specsStr = product.specs
    ? Object.entries(product.specs)
        .slice(0, 5)
        .map(([k, v]) => `${k}: ${v}`)
        .join("、")
    : "";

  return `
あなたはガジェット紹介のX（Twitter）アカウント運営者です。以下の商品について、スレッド形式（3〜5ツイート）のレビューを作成してください。

商品名: ${product.title}
ブランド: ${product.brand ?? ""}
価格: ${priceStr}
Amazon評価: ${product.amazon_rating ?? "N/A"}
主要スペック: ${specsStr}
特徴: ${(product.features ?? []).slice(0, 5).join("、")}
概要: ${product.ai_summary ?? ""}
メリット: ${(product.ai_pros ?? []).join("、")}
デメリット: ${(product.ai_cons ?? []).join("、")}
総評: ${product.ai_verdict ?? ""}

以下のJSON形式で回答してください:
{
  "tweets": [
    "1つ目: 興味を引くフック（商品名+注目ポイント）",
    "2つ目: 主要スペックと特徴",
    "3つ目: メリットまとめ",
    "4つ目: デメリットと注意点",
    "5つ目: 総評とおすすめ度"
  ]
}

ルール:
- 各ツイートは最大220文字（最後のツイートはURL用に余裕を持たせる）
- 1つ目のツイートは「🧵スレッド」と明記して興味を引くフックを
- 各ツイートに関連する絵文字を1〜2個使用
- 最後のツイートにハッシュタグを1〜2個含めてください
- 3〜5ツイートで構成してください
- 自然な日本語で、情報提供的なトーンで
`.trim();
}
