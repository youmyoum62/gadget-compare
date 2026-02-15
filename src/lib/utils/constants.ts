export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Gadget Compare";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gadget-compare.vercel.app";
export const SITE_DESCRIPTION =
  "ガジェット製品の比較・レビューサイト。Amazon商品の価格比較、おすすめランキングを掲載。";

export const AMAZON_AFFILIATE_DISCLAIMER_JP =
  "当サイトはAmazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。";

export const AMAZON_AFFILIATE_DISCLAIMER_EN =
  "As an Amazon Associate I earn from qualifying purchases.";

export const AMAZON_TRADEMARK_NOTICE =
  "Amazon、Amazon.co.jpおよびそれらのロゴはAmazon.com, Inc.またはその関連会社の商標です。";

export const NAV_ITEMS = [
  { href: "/", icon: "home", label: "ホーム" },
  { href: "/rankings", icon: "emoji_events", label: "ランキング" },
  { href: "/search", icon: "search", label: "検索", isFab: true },
  { href: "/compare", icon: "compare_arrows", label: "比較" },
  { href: "/categories", icon: "category", label: "カテゴリ" },
] as const;

export const CATEGORY_ICONS: Record<string, string> = {
  smartphone: "smartphone",
  earphone: "headphones",
  headphone: "headphones",
  charger: "battery_charging_full",
  tablet: "tablet_mac",
  laptop: "laptop_mac",
  camera: "photo_camera",
  audio: "headphones",
  wearable: "watch",
  default: "devices",
};
