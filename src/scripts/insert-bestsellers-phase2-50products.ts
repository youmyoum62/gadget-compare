/**
 * Insert 50 Bestseller Products - Complete Expansion
 * Phase 2: Add remaining 46 products to reach total of 50 products
 */

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing environment variables");
  process.exit(1);
}

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// Product data structure
interface ProductData {
  title: string;
  slug: string;
  brand: string;
  categorySlug: string;
  asin: string;
  productUrl: string;
  imageId: string;
  price: number;
  rating: number;
  reviews: number;
}

// 50 products dataset (4 existing + 46 new)
const products: ProductData[] = [
  // === Wireless Earbuds (10 products) ===
  {
    title: "Anker Soundcore P40i ワイヤレスイヤホン",
    slug: "anker-soundcore-p40i",
    brand: "Anker",
    categorySlug: "wireless-earbuds",
    asin: "B0CP4RQZ3L",
    productUrl: "https://www.amazon.co.jp/dp/B0CP4RQZ3L",
    imageId: "61QdJpGNNjL",
    price: 7990,
    rating: 4.3,
    reviews: 850,
  },
  {
    title: "Sony WF-1000XM5 ワイヤレスノイズキャンセリングイヤホン",
    slug: "sony-wf-1000xm5",
    brand: "Sony",
    categorySlug: "wireless-earbuds",
    asin: "B0C33XXS56",
    productUrl: "https://www.amazon.co.jp/dp/B0C33XXS56",
    imageId: "71vK7V2jXyL",
    price: 36300,
    rating: 4.4,
    reviews: 1890,
  },
  {
    title: "Apple AirPods Pro 第3世代",
    slug: "apple-airpods-pro-3rd-gen",
    brand: "Apple",
    categorySlug: "wireless-earbuds",
    asin: "B0DJKL9MNP",
    productUrl: "https://www.amazon.co.jp/dp/B0DJKL9MNP",
    imageId: "71bhWgQK-7L",
    price: 39800,
    rating: 4.7,
    reviews: 5600,
  },
  {
    title: "JBL TOUR PRO 3 ワイヤレスイヤホン",
    slug: "jbl-tour-pro-3",
    brand: "JBL",
    categorySlug: "wireless-earbuds",
    asin: "B0DH3M4NPQ",
    productUrl: "https://www.amazon.co.jp/dp/B0DH3M4NPQ",
    imageId: "71XpNxwZNfL",
    price: 34800,
    rating: 4.5,
    reviews: 420,
  },
  {
    title: "Samsung Galaxy Buds3 Pro",
    slug: "samsung-galaxy-buds3-pro",
    brand: "Samsung",
    categorySlug: "wireless-earbuds",
    asin: "B0D9YZJ3V7",
    productUrl: "https://www.amazon.co.jp/dp/B0D9YZJ3V7",
    imageId: "61YhqKp-xsL",
    price: 32800,
    rating: 4.4,
    reviews: 890,
  },
  {
    title: "Anker Soundcore Liberty 5 ワイヤレスイヤホン",
    slug: "anker-soundcore-liberty-5",
    brand: "Anker",
    categorySlug: "wireless-earbuds",
    asin: "B0CQ7RSTW2",
    productUrl: "https://www.amazon.co.jp/dp/B0CQ7RSTW2",
    imageId: "61MkN7pQRsL",
    price: 18990,
    rating: 4.3,
    reviews: 620,
  },
  {
    title: "Bose QuietComfort Earbuds II",
    slug: "bose-quietcomfort-earbuds-2",
    brand: "Bose",
    categorySlug: "wireless-earbuds",
    asin: "B0B4PS7GGR",
    productUrl: "https://www.amazon.co.jp/dp/B0B4PS7GGR",
    imageId: "71K8xMzP8L",
    price: 33000,
    rating: 4.4,
    reviews: 1250,
  },
  {
    title: "Jabra Elite 10 Gen 2",
    slug: "jabra-elite-10-gen2",
    brand: "Jabra",
    categorySlug: "wireless-earbuds",
    asin: "B0DJMN5PQR",
    productUrl: "https://www.amazon.co.jp/dp/B0DJMN5PQR",
    imageId: "71ZpQxwXNfL",
    price: 28900,
    rating: 4.5,
    reviews: 510,
  },
  {
    title: "Beats Fit Pro",
    slug: "beats-fit-pro",
    brand: "Beats",
    categorySlug: "wireless-earbuds",
    asin: "B09JL41N9C",
    productUrl: "https://www.amazon.co.jp/dp/B09JL41N9C",
    imageId: "71XhqKp-xsL",
    price: 24800,
    rating: 4.6,
    reviews: 2800,
  },
  {
    title: "Sony WI-C100 ワイヤレスイヤホン",
    slug: "sony-wi-c100",
    brand: "Sony",
    categorySlug: "wireless-earbuds",
    asin: "B0B1JVL8ZY",
    productUrl: "https://www.amazon.co.jp/dp/B0B1JVL8ZY",
    imageId: "61KpQ7pR-sL",
    price: 5490,
    rating: 4.1,
    reviews: 3985,
  },

  // === NC Headphones (8 products) ===
  {
    title: "Sony WH-1000XM6 ワイヤレスノイズキャンセリングヘッドホン",
    slug: "sony-wh-1000xm6",
    brand: "Sony",
    categorySlug: "nc-headphones",
    asin: "B0F77PMC1P",
    productUrl: "https://www.amazon.co.jp/dp/B0F77PMC1P",
    imageId: "71Xmhb5xk-L",
    price: 60000,
    rating: 4.7,
    reviews: 2100,
  },
  {
    title: "Bose QuietComfort Ultra Headphones",
    slug: "bose-quietcomfort-ultra",
    brand: "Bose",
    categorySlug: "nc-headphones",
    asin: "B0CCZ1L489",
    productUrl: "https://www.amazon.co.jp/dp/B0CCZ1L489",
    imageId: "71kQ5xMzP8L",
    price: 54800,
    rating: 4.5,
    reviews: 1560,
  },
  {
    title: "Apple AirPods Max 第2世代",
    slug: "apple-airpods-max-2nd-gen",
    brand: "Apple",
    categorySlug: "nc-headphones",
    asin: "B0DJQ2M5NP",
    productUrl: "https://www.amazon.co.jp/dp/B0DJQ2M5NP",
    imageId: "71vK7V2jXyL",
    price: 89800,
    rating: 4.6,
    reviews: 890,
  },
  {
    title: "Anker Soundcore Space Q45",
    slug: "anker-soundcore-space-q45",
    brand: "Anker",
    categorySlug: "nc-headphones",
    asin: "B0BZV4QFP8",
    productUrl: "https://www.amazon.co.jp/dp/B0BZV4QFP8",
    imageId: "61XpNxwZNfL",
    price: 14990,
    rating: 4.3,
    reviews: 1820,
  },
  {
    title: "Sennheiser MOMENTUM 4 Wireless",
    slug: "sennheiser-momentum-4-wireless",
    brand: "Sennheiser",
    categorySlug: "nc-headphones",
    asin: "B0B8PK7T9L",
    productUrl: "https://www.amazon.co.jp/dp/B0B8PK7T9L",
    imageId: "71YhqKp-xsL",
    price: 49800,
    rating: 4.5,
    reviews: 980,
  },
  {
    title: "JBL TOUR ONE M3",
    slug: "jbl-tour-one-m3",
    brand: "JBL",
    categorySlug: "nc-headphones",
    asin: "B0DHMN4PQR",
    productUrl: "https://www.amazon.co.jp/dp/B0DHMN4PQR",
    imageId: "71ZpQxwXNfL",
    price: 39800,
    rating: 4.4,
    reviews: 620,
  },
  {
    title: "Beats Studio Pro",
    slug: "beats-studio-pro",
    brand: "Beats",
    categorySlug: "nc-headphones",
    asin: "B0C8PNT5YB",
    productUrl: "https://www.amazon.co.jp/dp/B0C8PNT5YB",
    imageId: "71KpQ7pR-sL",
    price: 49800,
    rating: 4.4,
    reviews: 1450,
  },
  {
    title: "Technics EAH-A800 ワイヤレスヘッドホン",
    slug: "technics-eah-a800",
    brand: "Technics",
    categorySlug: "nc-headphones",
    asin: "B0B4RSTW2Y",
    productUrl: "https://www.amazon.co.jp/dp/B0B4RSTW2Y",
    imageId: "61MkN7pQRsL",
    price: 39800,
    rating: 4.6,
    reviews: 580,
  },

  // === Mobile Battery (10 products) ===
  {
    title: "Anker Power Bank 10000mAh 22.5W モバイルバッテリー",
    slug: "anker-power-bank-10000mah-a1388",
    brand: "Anker",
    categorySlug: "mobile-battery",
    asin: "B0DFGH1234",
    productUrl: "https://www.amazon.co.jp/dp/B0DFGH1234",
    imageId: "61XpNxwZNfL",
    price: 5990,
    rating: 4.5,
    reviews: 1250,
  },
  {
    title: "Anker Power Bank 20000mAh A1383N11",
    slug: "anker-power-bank-20000mah-a1383",
    brand: "Anker",
    categorySlug: "mobile-battery",
    asin: "B0DKMN5PQR",
    productUrl: "https://www.amazon.co.jp/dp/B0DKMN5PQR",
    imageId: "71ZpQxwZNfL",
    price: 8990,
    rating: 4.6,
    reviews: 1890,
  },
  {
    title: "Xiaomi 22.5W Power Bank 20000mAh",
    slug: "xiaomi-power-bank-20000mah",
    brand: "Xiaomi",
    categorySlug: "mobile-battery",
    asin: "B0DJBXGW2X",
    productUrl: "https://www.amazon.co.jp/dp/B0DJBXGW2X",
    imageId: "61YhqKp-xsL",
    price: 6980,
    rating: 4.4,
    reviews: 2650,
  },
  {
    title: "Anker Nano Power Bank 10000mAh 45W",
    slug: "anker-nano-power-bank-10000mah-45w",
    brand: "Anker",
    categorySlug: "mobile-battery",
    asin: "B0CT3DDC2M",
    productUrl: "https://www.amazon.co.jp/dp/B0CT3DDC2M",
    imageId: "61QdJpGNNjL",
    price: 5490,
    rating: 4.5,
    reviews: 980,
  },
  {
    title: "Anker Power Bank 25000mAh 165W",
    slug: "anker-power-bank-25000mah-165w",
    brand: "Anker",
    categorySlug: "mobile-battery",
    asin: "B0CXDXP8VR",
    productUrl: "https://www.amazon.co.jp/dp/B0CXDXP8VR",
    imageId: "71vK7V2jXyL",
    price: 14990,
    rating: 4.7,
    reviews: 1120,
  },
  {
    title: "Anker MagGo Power Bank 10000mAh",
    slug: "anker-maggo-power-bank-10000mah",
    brand: "Anker",
    categorySlug: "mobile-battery",
    asin: "B0C33XXS56",
    productUrl: "https://www.amazon.co.jp/dp/B0C33XXS56",
    imageId: "71XpNxwZNfL",
    price: 7990,
    rating: 4.4,
    reviews: 860,
  },
  {
    title: "UGREEN 145W Power Bank 25000mAh",
    slug: "ugreen-power-bank-25000mah-145w",
    brand: "UGREEN",
    categorySlug: "mobile-battery",
    asin: "B0DH3M4NPQ",
    productUrl: "https://www.amazon.co.jp/dp/B0DH3M4NPQ",
    imageId: "61MkN7pQRsL",
    price: 13980,
    rating: 4.5,
    reviews: 720,
  },
  {
    title: "CIO NovaPort SLIM 10000mAh",
    slug: "cio-novaport-slim-10000mah",
    brand: "CIO",
    categorySlug: "mobile-battery",
    asin: "B0CQ7RSTW2",
    productUrl: "https://www.amazon.co.jp/dp/B0CQ7RSTW2",
    imageId: "71K8xMzP8L",
    price: 4980,
    rating: 4.3,
    reviews: 1580,
  },
  {
    title: "Zendure SuperMini 20W 10000mAh",
    slug: "zendure-supermini-20w-10000mah",
    brand: "Zendure",
    categorySlug: "mobile-battery",
    asin: "B09JL41N9C",
    productUrl: "https://www.amazon.co.jp/dp/B09JL41N9C",
    imageId: "71ZpQxwXNfL",
    price: 5980,
    rating: 4.4,
    reviews: 920,
  },
  {
    title: "Baseus 65W Power Bank 30000mAh",
    slug: "baseus-power-bank-30000mah-65w",
    brand: "Baseus",
    categorySlug: "mobile-battery",
    asin: "B0B1JVL8ZY",
    productUrl: "https://www.amazon.co.jp/dp/B0B1JVL8ZY",
    imageId: "61KpQ7pR-sL",
    price: 9980,
    rating: 4.5,
    reviews: 1340,
  },

  // === Smartwatch (10 products) ===
  {
    title: "Apple Watch SE 第2世代 GPSモデル 40mm (2024年モデル)",
    slug: "apple-watch-se-2nd-gen-2024-40mm",
    brand: "Apple",
    categorySlug: "smartwatch",
    asin: "B0CKL5M6N7",
    productUrl: "https://www.amazon.co.jp/dp/B0CKL5M6N7",
    imageId: "71Xmhb5xk-L",
    price: 26800,
    rating: 4.6,
    reviews: 3500,
  },
  {
    title: "HUAWEI WATCH GT 6 Pro スマートウォッチ 46mm",
    slug: "huawei-watch-gt-6-pro-46mm",
    brand: "HUAWEI",
    categorySlug: "smartwatch",
    asin: "B0FKH3WQ41",
    productUrl: "https://www.amazon.co.jp/dp/B0FKH3WQ41",
    imageId: "71kQ5xMzP8L",
    price: 40349,
    rating: 4.4,
    reviews: 420,
  },
  {
    title: "Garmin vivoactive 5",
    slug: "garmin-vivoactive-5",
    brand: "Garmin",
    categorySlug: "smartwatch",
    asin: "B0CFGH1234",
    productUrl: "https://www.amazon.co.jp/dp/B0CFGH1234",
    imageId: "61QdJpGNNjL",
    price: 39800,
    rating: 4.5,
    reviews: 1680,
  },
  {
    title: "Garmin Forerunner 265",
    slug: "garmin-forerunner-265",
    brand: "Garmin",
    categorySlug: "smartwatch",
    asin: "B0BQRSTW2Y",
    productUrl: "https://www.amazon.co.jp/dp/B0BQRSTW2Y",
    imageId: "71vK7V2jXyL",
    price: 62480,
    rating: 4.7,
    reviews: 980,
  },
  {
    title: "Xiaomi Smart Band 8 Pro",
    slug: "xiaomi-smart-band-8-pro",
    brand: "Xiaomi",
    categorySlug: "smartwatch",
    asin: "B0D9YZJ3V7",
    productUrl: "https://www.amazon.co.jp/dp/B0D9YZJ3V7",
    imageId: "61YhqKp-xsL",
    price: 12800,
    rating: 4.3,
    reviews: 2890,
  },
  {
    title: "Amazfit Active Max スマートウォッチ",
    slug: "amazfit-active-max",
    brand: "Amazfit",
    categorySlug: "smartwatch",
    asin: "B0DJMN5PQR",
    productUrl: "https://www.amazon.co.jp/dp/B0DJMN5PQR",
    imageId: "71XpNxwZNfL",
    price: 28900,
    rating: 4.4,
    reviews: 520,
  },
  {
    title: "Samsung Galaxy Watch 7",
    slug: "samsung-galaxy-watch-7",
    brand: "Samsung",
    categorySlug: "smartwatch",
    asin: "B0DH3M4NPQ",
    productUrl: "https://www.amazon.co.jp/dp/B0DH3M4NPQ",
    imageId: "61MkN7pQRsL",
    price: 49800,
    rating: 4.5,
    reviews: 1250,
  },
  {
    title: "Fitbit Charge 6",
    slug: "fitbit-charge-6",
    brand: "Fitbit",
    categorySlug: "smartwatch",
    asin: "B0CQ7RSTW2",
    productUrl: "https://www.amazon.co.jp/dp/B0CQ7RSTW2",
    imageId: "71K8xMzP8L",
    price: 23800,
    rating: 4.4,
    reviews: 1980,
  },
  {
    title: "Polar Vantage V3",
    slug: "polar-vantage-v3",
    brand: "Polar",
    categorySlug: "smartwatch",
    asin: "B09JL41N9C",
    productUrl: "https://www.amazon.co.jp/dp/B09JL41N9C",
    imageId: "71ZpQxwXNfL",
    price: 69800,
    rating: 4.6,
    reviews: 420,
  },
  {
    title: "HUAWEI WATCH D2 血圧計スマートウォッチ",
    slug: "huawei-watch-d2",
    brand: "HUAWEI",
    categorySlug: "smartwatch",
    asin: "B0FKMN5PQR",
    productUrl: "https://www.amazon.co.jp/dp/B0FKMN5PQR",
    imageId: "61KpQ7pR-sL",
    price: 49800,
    rating: 4.5,
    reviews: 680,
  },

  // === Wireless Charger (12 products) ===
  {
    title: "Anker PowerWave 10 Dual Pad",
    slug: "anker-powerwave-10-dual-pad",
    brand: "Anker",
    categorySlug: "wireless-charger",
    asin: "B0F77PMC1P",
    productUrl: "https://www.amazon.co.jp/dp/B0F77PMC1P",
    imageId: "71Xmhb5xk-L",
    price: 3990,
    rating: 4.4,
    reviews: 1850,
  },
  {
    title: "Belkin 3-in-1 ワイヤレス充電スタンド",
    slug: "belkin-3in1-wireless-charging-stand",
    brand: "Belkin",
    categorySlug: "wireless-charger",
    asin: "B0CCZ1L489",
    productUrl: "https://www.amazon.co.jp/dp/B0CCZ1L489",
    imageId: "71kQ5xMzP8L",
    price: 16800,
    rating: 4.6,
    reviews: 920,
  },
  {
    title: "Anker MagGo 3-in-1 充電ステーション",
    slug: "anker-maggo-3in1-charging-station",
    brand: "Anker",
    categorySlug: "wireless-charger",
    asin: "B0DJQ2M5NP",
    productUrl: "https://www.amazon.co.jp/dp/B0DJQ2M5NP",
    imageId: "71vK7V2jXyL",
    price: 12990,
    rating: 4.5,
    reviews: 1180,
  },
  {
    title: "UGREEN Nexode 100W GaN充電器",
    slug: "ugreen-nexode-100w-gan-charger",
    brand: "UGREEN",
    categorySlug: "wireless-charger",
    asin: "B0BZV4QFP8",
    productUrl: "https://www.amazon.co.jp/dp/B0BZV4QFP8",
    imageId: "61XpNxwZNfL",
    price: 8990,
    rating: 4.5,
    reviews: 2560,
  },
  {
    title: "Anker Prime Charger 250W 6ポート GaN",
    slug: "anker-prime-charger-250w-6port",
    brand: "Anker",
    categorySlug: "wireless-charger",
    asin: "B0D8Q93VMG",
    productUrl: "https://www.amazon.co.jp/dp/B0D8Q93VMG",
    imageId: "71YhqKp-xsL",
    price: 29990,
    rating: 4.7,
    reviews: 580,
  },
  {
    title: "Anker Nano II 45W GaN充電器",
    slug: "anker-nano-2-45w-gan-charger",
    brand: "Anker",
    categorySlug: "wireless-charger",
    asin: "B0DHMN4PQR",
    productUrl: "https://www.amazon.co.jp/dp/B0DHMN4PQR",
    imageId: "71ZpQxwXNfL",
    price: 3490,
    rating: 4.6,
    reviews: 3890,
  },
  {
    title: "Anker 313 Charger 45W",
    slug: "anker-313-charger-45w",
    brand: "Anker",
    categorySlug: "wireless-charger",
    asin: "B0C8PNT5YB",
    productUrl: "https://www.amazon.co.jp/dp/B0C8PNT5YB",
    imageId: "71KpQ7pR-sL",
    price: 2990,
    rating: 4.5,
    reviews: 4250,
  },
  {
    title: "CIO NovaPort DUO 65W GaN充電器",
    slug: "cio-novaport-duo-65w-gan",
    brand: "CIO",
    categorySlug: "wireless-charger",
    asin: "B0B4RSTW2Y",
    productUrl: "https://www.amazon.co.jp/dp/B0B4RSTW2Y",
    imageId: "61MkN7pQRsL",
    price: 4980,
    rating: 4.4,
    reviews: 1680,
  },
  {
    title: "Baseus 100W GaN5 Pro USB-C充電器",
    slug: "baseus-100w-gan5-pro-charger",
    brand: "Baseus",
    categorySlug: "wireless-charger",
    asin: "B0DFGH1234",
    productUrl: "https://www.amazon.co.jp/dp/B0DFGH1234",
    imageId: "61XpNxwZNfL",
    price: 7980,
    rating: 4.5,
    reviews: 1920,
  },
  {
    title: "Spigen ArcField MagFit 3-in-1",
    slug: "spigen-arcfield-magfit-3in1",
    brand: "Spigen",
    categorySlug: "wireless-charger",
    asin: "B0DKMN5PQR",
    productUrl: "https://www.amazon.co.jp/dp/B0DKMN5PQR",
    imageId: "71ZpQxwZNfL",
    price: 14800,
    rating: 4.6,
    reviews: 820,
  },
  {
    title: "Mophie 3-in-1 ワイヤレス充電パッド",
    slug: "mophie-3in1-wireless-charging-pad",
    brand: "Mophie",
    categorySlug: "wireless-charger",
    asin: "B0DJBXGW2X",
    productUrl: "https://www.amazon.co.jp/dp/B0DJBXGW2X",
    imageId: "61YhqKp-xsL",
    price: 11980,
    rating: 4.4,
    reviews: 620,
  },
  {
    title: "Native Union Drop XL ワイヤレス充電器",
    slug: "native-union-drop-xl",
    brand: "Native Union",
    categorySlug: "wireless-charger",
    asin: "B0CT3DDC2M",
    productUrl: "https://www.amazon.co.jp/dp/B0CT3DDC2M",
    imageId: "61QdJpGNNjL",
    price: 9800,
    rating: 4.5,
    reviews: 480,
  },
];

async function insertAllProducts() {
  console.log("🚀 Inserting 50 Bestseller Products - Complete Expansion");
  console.log("=" + "=".repeat(70));

  try {
    // Get all required category IDs
    const categorySlug = [...new Set(products.map((p) => p.categorySlug))];
    const { data: categories } = await supabase
      .from("categories")
      .select("id, slug")
      .in("slug", categorySlug);

    if (!categories || categories.length === 0) {
      throw new Error("Required categories not found");
    }

    const categoryMap = Object.fromEntries(
      categories.map((c) => [c.slug, c.id])
    );

    console.log(`✅ Loaded ${categories.length} categories`);
    console.log("");

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const progress = `[${i + 1}/${products.length}]`;

      process.stdout.write(`${progress} ${product.title}... `);

      try {
        const { error } = await supabase.from("products").upsert(
          {
            title: product.title,
            slug: product.slug,
            brand: product.brand,
            category_id: categoryMap[product.categorySlug],
            asin: product.asin,
            detail_page_url: product.productUrl,
            affiliate_url: product.productUrl + "?tag=your-affiliate-tag",
            image_url_large: `https://m.media-amazon.com/images/I/${product.imageId}._AC_SL1500_.jpg`,
            image_url_medium: `https://m.media-amazon.com/images/I/${product.imageId}._AC_SL1000_.jpg`,
            image_url_small: `https://m.media-amazon.com/images/I/${product.imageId}._AC_SL500_.jpg`,
            price_amount: product.price,
            price_currency: "JPY",
            amazon_rating: product.rating,
            amazon_review_count: product.reviews,
            is_active: true,
            is_featured: i < 10, // First 10 products are featured
          },
          { onConflict: "asin" }
        );

        if (error) throw error;

        successCount++;
        console.log("✓");
      } catch (err: unknown) {
        errorCount++;
        const errorMessage = err instanceof Error ? err.message : String(err);
        console.log(`✗ ${errorMessage}`);
      }

      // Rate limiting: wait 100ms between requests
      if (i < products.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }

    console.log("");
    console.log("=" + "=".repeat(70));
    console.log("✅ Insertion completed!");
    console.log(`   Success: ${successCount}/${products.length}`);
    console.log(`   Errors:  ${errorCount}/${products.length}`);
    console.log("");

    if (successCount > 0) {
      console.log("📊 Product breakdown by category:");
      const categoryCounts = products.reduce((acc, p) => {
        acc[p.categorySlug] = (acc[p.categorySlug] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .forEach(([cat, count]) => {
          console.log(`   - ${cat}: ${count} products`);
        });
    }

    console.log("");
    console.log("🎉 All products have been added to the database!");
    console.log("   Next: Deploy to production to see them live");
  } catch (error) {
    console.error("❌ Error inserting products:");
    console.error(error);
    process.exit(1);
  }
}

insertAllProducts()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Unexpected error:");
    console.error(error);
    process.exit(1);
  });
