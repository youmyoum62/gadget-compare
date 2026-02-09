/**
 * Initial product seeding script.
 * Run manually to add initial products to the database.
 *
 * Usage: npx tsx src/scripts/seed-products.ts
 *
 * This script:
 * 1. Creates default categories
 * 2. Adds sample product ASINs
 * 3. Fetches product data from Amazon PA-API
 * 4. Saves to Supabase
 */

import { createClient } from "@supabase/supabase-js";
import { PaApiClient } from "../lib/amazon/paapi";
import { asinToSlug } from "../lib/utils/slug";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Default categories for gadget site
const CATEGORIES = [
  { name: "ワイヤレスイヤホン", slug: "wireless-earbuds", description: "Bluetooth対応ワイヤレスイヤホンの比較" },
  { name: "モバイルバッテリー", slug: "mobile-battery", description: "モバイルバッテリー・充電器の比較" },
  { name: "スマートウォッチ", slug: "smartwatch", description: "スマートウォッチ・フィットネストラッカーの比較" },
  { name: "USB充電器", slug: "usb-charger", description: "USB充電器・急速充電器の比較" },
  { name: "タブレット", slug: "tablet", description: "タブレット端末の比較" },
];

// Sample ASINs to seed (replace with real ASINs for your niche)
// These are placeholder ASINs - replace with actual product ASINs
const SEED_PRODUCTS: Array<{ asin: string; categorySlug: string }> = [
  // Add your target ASINs here, for example:
  // { asin: "B0XXXXXXXXX", categorySlug: "wireless-earbuds" },
  // { asin: "B0YYYYYYYYY", categorySlug: "wireless-earbuds" },
  // { asin: "B0ZZZZZZZZZ", categorySlug: "mobile-battery" },
];

async function main() {
  console.log("Seeding database...\n");

  // 1. Create categories
  console.log("Creating categories...");
  for (const cat of CATEGORIES) {
    const { error } = await supabase.from("categories").upsert(cat, {
      onConflict: "slug",
    });
    if (error) {
      console.error(`  Error creating ${cat.name}: ${error.message}`);
    } else {
      console.log(`  Created: ${cat.name}`);
    }
  }

  // 2. Fetch and seed products
  if (SEED_PRODUCTS.length === 0) {
    console.log(
      "\nNo product ASINs configured. Edit SEED_PRODUCTS in this file to add ASINs."
    );
    console.log("Example:");
    console.log(
      '  { asin: "B0XXXXXXXXX", categorySlug: "wireless-earbuds" }'
    );
    return;
  }

  console.log(`\nFetching ${SEED_PRODUCTS.length} products from Amazon...`);
  const amazon = new PaApiClient();

  // Get category IDs
  const { data: dbCategories } = await supabase
    .from("categories")
    .select("id, slug");
  const categoryMap = new Map(
    (dbCategories ?? []).map((c) => [c.slug, c.id])
  );

  // Batch ASINs
  const asins = SEED_PRODUCTS.map((p) => p.asin);
  const batches: string[][] = [];
  for (let i = 0; i < asins.length; i += 10) {
    batches.push(asins.slice(i, i + 10));
  }

  for (const batch of batches) {
    try {
      const products = await amazon.getItems(batch);

      for (const ap of products) {
        const seedInfo = SEED_PRODUCTS.find((s) => s.asin === ap.asin);
        if (!seedInfo) continue;

        const categoryId = categoryMap.get(seedInfo.categorySlug) ?? null;
        const partnerTag = process.env.AMAZON_PARTNER_TAG!;
        const slug = asinToSlug(ap.asin, ap.brand);

        const { error } = await supabase.from("products").upsert(
          {
            asin: ap.asin,
            category_id: categoryId,
            title: ap.title,
            slug,
            brand: ap.brand ?? null,
            manufacturer: ap.manufacturer ?? null,
            price_amount: ap.price?.amount ?? null,
            price_currency: ap.price?.currency ?? "JPY",
            list_price_amount: ap.listPrice?.amount ?? null,
            detail_page_url: ap.detailPageUrl,
            affiliate_url: `${ap.detailPageUrl}?tag=${partnerTag}`,
            image_url_large: ap.imageUrls.large ?? null,
            image_url_medium: ap.imageUrls.medium ?? null,
            image_url_small: ap.imageUrls.small ?? null,
            amazon_rating: ap.rating ?? null,
            amazon_review_count: ap.reviewCount ?? null,
            availability: ap.availability ?? null,
            features: ap.features ?? null,
            price_updated_at: new Date().toISOString(),
            last_api_sync_at: new Date().toISOString(),
          },
          { onConflict: "asin" }
        );

        if (error) {
          console.error(`  Error seeding ${ap.asin}: ${error.message}`);
        } else {
          console.log(`  Seeded: ${ap.title}`);
        }
      }
    } catch (err) {
      console.error(
        `  Batch error:`,
        err instanceof Error ? err.message : err
      );
    }
  }

  console.log("\nSeeding complete!");
}

main();
