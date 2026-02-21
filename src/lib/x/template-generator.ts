/**
 * Template-based tweet generator for X posting.
 * No external API required - uses product data directly.
 * Produces varied tweets using multiple patterns.
 */

interface ProductData {
  title: string;
  brand?: string | null;
  price_amount?: number | null;
  amazon_rating?: number | null;
  amazon_review_count?: number | null;
  features?: string[] | null;
  ai_summary?: string | null;
  ai_pros?: string[] | null;
  ai_cons?: string[] | null;
  ai_verdict?: string | null;
}

function shortenTitle(title: string, maxLen = 28): string {
  if (title.length <= maxLen) return title;
  return title.substring(0, maxLen - 1) + "…";
}

function priceStr(price?: number | null): string {
  return price != null ? `¥${price.toLocaleString()}` : "";
}

function ratingStr(rating?: number | null): string {
  return rating != null ? `★${rating}` : "";
}

/** カテゴリに応じたハッシュタグを返す */
function detectCategoryTag(title: string): string {
  const t = title;
  if (/イヤホン|earphone|AirPods|earbud/i.test(t)) return "#イヤホン";
  if (/充電|charger|バッテリー|battery|GaN/i.test(t)) return "#充電器";
  if (/スマートウォッチ|smartwatch|Apple Watch|Garmin|Xiaomi.*watch/i.test(t)) return "#スマートウォッチ";
  if (/スピーカー|speaker/i.test(t)) return "#スピーカー";
  if (/タブレット|tablet|iPad/i.test(t)) return "#タブレット";
  if (/キーボード|keyboard/i.test(t)) return "#キーボード";
  if (/マウス|mouse/i.test(t)) return "#マウス";
  if (/カメラ|camera/i.test(t)) return "#カメラ";
  if (/ヘッドホン|headphone/i.test(t)) return "#ヘッドホン";
  if (/Echo|Alexa|スマートディスプレイ/i.test(t)) return "#スマートスピーカー";
  return "#おすすめガジェット";
}

/** 同一商品に対して毎回異なるテンプレートが選ばれるよう、商品IDをシードに使う */
function pickTemplate(seed: string, count: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  // 日付も混ぜて毎日違うパターンに
  const today = new Date().toISOString().slice(0, 10);
  let dateHash = 0;
  for (let i = 0; i < today.length; i++) {
    dateHash = (dateHash * 31 + today.charCodeAt(i)) >>> 0;
  }
  return (hash + dateHash) % count;
}

/** 220文字以内に収まるよう切り詰める */
function fitToLimit(text: string, limit = 220): string {
  if (text.length <= limit) return text;
  return text.substring(0, limit - 1) + "…";
}

/**
 * 単体ツイートをテンプレートから生成する
 */
export function generateTweetFromTemplate(
  product: ProductData,
  seed = product.title
): string {
  const title = shortenTitle(product.title, 26);
  const price = priceStr(product.price_amount);
  const rating = ratingStr(product.amazon_rating);
  const pros = product.ai_pros ?? (product.features ?? []).slice(0, 3);
  const summary = product.ai_summary ?? "";
  const verdict = product.ai_verdict ?? "";
  const categoryTag = detectCategoryTag(product.title);

  // 利用可能なテンプレートを構築
  const candidates: string[] = [];

  // パターン A: メリット重視
  if (pros.length >= 2) {
    candidates.push(
      fitToLimit(
        `💡 ${title}\n✅ ${pros[0]}\n✅ ${pros[1]}${price ? `\n${price}` : ""}${rating ? ` ${rating}` : ""}\n#ガジェット ${categoryTag}`
      )
    );
  }

  // パターン B: 概要 + 価格
  if (summary && price) {
    const short = summary.length > 55 ? summary.substring(0, 54) + "…" : summary;
    candidates.push(
      fitToLimit(`🛒 ${title}\n${short}\n${price}${rating ? ` ${rating}` : ""}\n#ガジェット ${categoryTag}`)
    );
  }

  // パターン C: 評価重視
  if (rating && pros.length >= 1) {
    candidates.push(
      fitToLimit(
        `⭐ Amazon${rating} 高評価！\n${title}\n${pros[0]}${price ? `\n${price}` : ""}\n#ガジェット ${categoryTag}`
      )
    );
  }

  // パターン D: 総評
  if (verdict) {
    const short = verdict.length > 70 ? verdict.substring(0, 69) + "…" : verdict;
    candidates.push(
      fitToLimit(`🔍 ${title}\n${short}${price ? `\n${price}` : ""}${rating ? ` ${rating}` : ""}\n#ガジェット ${categoryTag}`)
    );
  }

  // パターン E: シンプル（フォールバック）
  candidates.push(
    fitToLimit(
      `📦 ${title}${price ? ` ${price}` : ""}${rating ? ` ${rating}` : ""}\n${pros[0] ?? "おすすめの一品！"}\n#ガジェット ${categoryTag}`
    )
  );

  const idx = pickTemplate(seed, candidates.length);
  return candidates[idx];
}

/**
 * スレッド（複数ツイート）をテンプレートから生成する
 */
export function generateThreadFromTemplate(product: ProductData): string[] {
  const title = shortenTitle(product.title, 30);
  const price = priceStr(product.price_amount);
  const rating = ratingStr(product.amazon_rating);
  const reviewCount = product.amazon_review_count ?? 0;
  const pros = product.ai_pros ?? (product.features ?? []).slice(0, 3);
  const cons = product.ai_cons ?? [];
  const verdict = product.ai_verdict ?? product.ai_summary ?? "";
  const features = (product.features ?? []).slice(0, 3);
  const categoryTag = detectCategoryTag(product.title);

  const tweets: string[] = [];

  // ツイート1: フック
  tweets.push(
    fitToLimit(`🧵 ${title}のレビュースレッド！\n購入前に知っておきたいポイントをまとめました👇`)
  );

  // ツイート2: 基本情報
  const infoLines = ["📋 基本情報"];
  if (price) infoLines.push(`💰 価格: ${price}`);
  if (rating) infoLines.push(`⭐ 評価: ${rating}（${reviewCount}件）`);
  features.slice(0, 2).forEach((f) => {
    const short = f.length > 35 ? f.substring(0, 34) + "…" : f;
    infoLines.push(`✨ ${short}`);
  });
  tweets.push(fitToLimit(infoLines.join("\n")));

  // ツイート3: メリット
  if (pros.length > 0) {
    const prosLines = ["✅ メリット"];
    pros.slice(0, 3).forEach((p) => {
      const short = p.length > 40 ? p.substring(0, 39) + "…" : p;
      prosLines.push(`・${short}`);
    });
    tweets.push(fitToLimit(prosLines.join("\n")));
  }

  // ツイート4: デメリット（データあれば）
  if (cons.length > 0) {
    const consLines = ["⚠️ デメリット"];
    cons.slice(0, 2).forEach((c) => {
      const short = c.length > 40 ? c.substring(0, 39) + "…" : c;
      consLines.push(`・${short}`);
    });
    tweets.push(fitToLimit(consLines.join("\n")));
  }

  // ツイート5: 総評
  if (verdict) {
    const short = verdict.length > 130 ? verdict.substring(0, 129) + "…" : verdict;
    tweets.push(fitToLimit(`🎯 総評\n${short}\n#ガジェット ${categoryTag}`));
  } else {
    tweets.push(fitToLimit(`🎯 気になった方はチェック！\n#ガジェット ${categoryTag}`));
  }

  return tweets;
}
