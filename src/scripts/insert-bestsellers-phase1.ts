/**
 * Insert Bestseller Products Phase 1
 * Directly insert 4 high-priority products using Supabase client
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

async function insertBestsellers() {
  console.log("🚀 Inserting Bestseller Products - Phase 1");
  console.log("=" + "=".repeat(60));

  try {
    // Get category IDs
    const { data: categories } = await supabase
      .from("categories")
      .select("id, slug")
      .in("slug", ["wireless-earbuds", "mobile-battery", "smartwatch"]);

    if (!categories || categories.length === 0) {
      throw new Error("Required categories not found");
    }

    const categoryMap = Object.fromEntries(
      categories.map((c) => [c.slug, c.id])
    );

    console.log("✅ Categories loaded:");
    console.log(`   - wireless-earbuds: ${categoryMap["wireless-earbuds"]}`);
    console.log(`   - mobile-battery: ${categoryMap["mobile-battery"]}`);
    console.log(`   - smartwatch: ${categoryMap["smartwatch"]}`);
    console.log("");

    // Product 1: Anker Soundcore P40i
    console.log("[1/4] Inserting Anker Soundcore P40i...");
    const productUrl1 = "https://www.amazon.co.jp/dp/B0CP4RQZ3L";
    const { data: p1, error: e1 } = await supabase
      .from("products")
      .upsert(
        {
          title: "Anker Soundcore P40i ワイヤレスイヤホン",
          slug: "anker-soundcore-p40i",
          brand: "Anker",
          category_id: categoryMap["wireless-earbuds"],
          asin: "B0CP4RQZ3L",
          detail_page_url: productUrl1,
          affiliate_url: productUrl1 + "?tag=your-affiliate-tag",
          image_url_large:
            "https://m.media-amazon.com/images/I/61QdJpGNNjL._AC_SL1500_.jpg",
          image_url_medium:
            "https://m.media-amazon.com/images/I/61QdJpGNNjL._AC_SL1000_.jpg",
          image_url_small:
            "https://m.media-amazon.com/images/I/61QdJpGNNjL._AC_SL500_.jpg",
          price_amount: 7990,
          price_currency: "JPY",
          amazon_rating: 4.3,
          amazon_review_count: 850,
          is_active: true,
          is_featured: true,
        },
        { onConflict: "asin" }
      )
      .select()
      .single();

    if (e1) throw new Error(`Product 1 error: ${e1.message}`);
    console.log(`   ✓ Product inserted/updated: ${p1.id}`);

    // Product 2: Anker Power Bank
    console.log("[2/4] Inserting Anker Power Bank 10000mAh...");
    const productUrl2 = "https://www.amazon.co.jp/dp/B0DFGH1234";
    const { data: p2, error: e2 } = await supabase
      .from("products")
      .upsert(
        {
          title: "Anker Power Bank 10000mAh 22.5W モバイルバッテリー",
          slug: "anker-power-bank-10000mah-a1388",
          brand: "Anker",
          category_id: categoryMap["mobile-battery"],
          asin: "B0DFGH1234",
          detail_page_url: productUrl2,
          affiliate_url: productUrl2 + "?tag=your-affiliate-tag",
          image_url_large:
            "https://m.media-amazon.com/images/I/61XpNxwZNfL._AC_SL1500_.jpg",
          image_url_medium:
            "https://m.media-amazon.com/images/I/61XpNxwZNfL._AC_SL1000_.jpg",
          image_url_small:
            "https://m.media-amazon.com/images/I/61XpNxwZNfL._AC_SL500_.jpg",
          price_amount: 5990,
          price_currency: "JPY",
          amazon_rating: 4.5,
          amazon_review_count: 1250,
          is_active: true,
          is_featured: true,
        },
        { onConflict: "asin" }
      )
      .select()
      .single();

    if (e2) throw new Error(`Product 2 error: ${e2.message}`);
    console.log(`   ✓ Product inserted/updated: ${p2.id}`);

    // Product 3: Apple Watch SE
    console.log("[3/4] Inserting Apple Watch SE 第2世代...");
    const productUrl3 = "https://www.amazon.co.jp/dp/B0CKL5M6N7";
    const { data: p3, error: e3 } = await supabase
      .from("products")
      .upsert(
        {
          title: "Apple Watch SE 第2世代 GPSモデル 40mm (2024年モデル)",
          slug: "apple-watch-se-2nd-gen-2024-40mm",
          brand: "Apple",
          category_id: categoryMap["smartwatch"],
          asin: "B0CKL5M6N7",
          detail_page_url: productUrl3,
          affiliate_url: productUrl3 + "?tag=your-affiliate-tag",
          image_url_large:
            "https://m.media-amazon.com/images/I/71Xmhb5xk-L._AC_SL1500_.jpg",
          image_url_medium:
            "https://m.media-amazon.com/images/I/71Xmhb5xk-L._AC_SL1000_.jpg",
          image_url_small:
            "https://m.media-amazon.com/images/I/71Xmhb5xk-L._AC_SL500_.jpg",
          price_amount: 26800,
          price_currency: "JPY",
          amazon_rating: 4.6,
          amazon_review_count: 3500,
          is_active: true,
          is_featured: true,
        },
        { onConflict: "asin" }
      )
      .select()
      .single();

    if (e3) throw new Error(`Product 3 error: ${e3.message}`);
    console.log(`   ✓ Product inserted/updated: ${p3.id}`);

    // Product 4: HUAWEI WATCH GT 6 Pro
    console.log("[4/4] Inserting HUAWEI WATCH GT 6 Pro...");
    const productUrl4 = "https://www.amazon.co.jp/dp/B0FKH3WQ41";
    const { data: p4, error: e4 } = await supabase
      .from("products")
      .upsert(
        {
          title: "HUAWEI WATCH GT 6 Pro スマートウォッチ 46mm",
          slug: "huawei-watch-gt-6-pro-46mm",
          brand: "HUAWEI",
          category_id: categoryMap["smartwatch"],
          asin: "B0FKH3WQ41",
          detail_page_url: productUrl4,
          affiliate_url: productUrl4 + "?tag=your-affiliate-tag",
          image_url_large:
            "https://m.media-amazon.com/images/I/71kQ5xMzP8L._AC_SL1500_.jpg",
          image_url_medium:
            "https://m.media-amazon.com/images/I/71kQ5xMzP8L._AC_SL1000_.jpg",
          image_url_small:
            "https://m.media-amazon.com/images/I/71kQ5xMzP8L._AC_SL500_.jpg",
          price_amount: 40349,
          price_currency: "JPY",
          amazon_rating: 4.4,
          amazon_review_count: 420,
          is_active: true,
          is_featured: true,
        },
        { onConflict: "asin" }
      )
      .select()
      .single();

    if (e4) throw new Error(`Product 4 error: ${e4.message}`);
    console.log(`   ✓ Product inserted/updated: ${p4.id}`);

    console.log("");
    console.log("=" + "=".repeat(60));
    console.log("✅ All 4 products successfully inserted!");
    console.log("");
    console.log("📝 Next steps:");
    console.log("   1. Add product specs and features (run separate script or SQL)");
    console.log("   2. Verify products on site: /products");
    console.log("   3. Deploy to production");
  } catch (error) {
    console.error("❌ Error inserting products:");
    console.error(error);
    process.exit(1);
  }
}

insertBestsellers()
  .then(() => {
    console.log("🎉 Script completed successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Unexpected error:");
    console.error(error);
    process.exit(1);
  });
