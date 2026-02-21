/**
 * Check product availability for products with missing price or availability data.
 * Deactivates products that are no longer sold.
 *
 * Run: npx tsx src/scripts/check-availability.ts
 */

import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local"), override: true });

import { createClient } from "@supabase/supabase-js";
import { ScraperClient } from "../lib/amazon/scraper";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  // 価格なし + nullavailabilityの商品を取得（優先度高）
  const { data: products } = await supabase
    .from("products")
    .select("id, asin, title, price_amount, availability, is_active")
    .eq("is_active", true)
    .is("price_amount", null);

  if (!products?.length) {
    console.log("✅ No products with missing price found.");
    return;
  }

  console.log(`🔍 Checking ${products.length} products with missing price...\n`);

  const scraper = new ScraperClient();
  const unavailable: string[] = [];
  const recovered: string[] = [];

  for (const product of products) {
    process.stdout.write(`  Checking ${product.asin}... `);
    try {
      const results = await scraper.getItems([product.asin]);
      const data = results[0];

      if (!data) {
        console.log(`❌ Not found (404 or scrape failed)`);
        unavailable.push(product.asin);
        continue;
      }

      const avail = data.availability ?? "";
      const hasPrice = data.price?.amount != null;
      const isUnavailable =
        avail.toLowerCase().includes("unavailable") ||
        avail.toLowerCase().includes("discontinued") ||
        avail.includes("この商品は現在お取り扱いできません") ||
        avail.includes("販売停止") ||
        (!hasPrice && !avail);

      if (isUnavailable) {
        console.log(`❌ Unavailable (availability: "${avail}", price: ${data.price?.amount ?? "none"})`);
        unavailable.push(product.asin);
      } else {
        console.log(`✅ Available (availability: "${avail}", price: ¥${data.price?.amount ?? "null"})`);
        recovered.push(product.asin);

        // 価格データが取れた場合はDBを更新
        if (hasPrice) {
          await supabase
            .from("products")
            .update({
              price_amount: data.price!.amount,
              availability: avail || null,
              last_api_sync_at: new Date().toISOString(),
            })
            .eq("asin", product.asin);
        }
      }
    } catch (err) {
      console.log(`⚠️  Error: ${err instanceof Error ? err.message : err}`);
    }
  }

  console.log(`\n${"=".repeat(50)}`);
  console.log(`✅ Available: ${recovered.length}件`);
  console.log(`❌ Unavailable: ${unavailable.length}件`);

  if (unavailable.length > 0) {
    console.log(`\n非アクティブ化する商品:`);
    unavailable.forEach((asin) => {
      const p = products.find((x) => x.asin === asin);
      console.log(`  - ${asin}: ${p?.title?.substring(0, 50)}`);
    });

    const { error } = await supabase
      .from("products")
      .update({ is_active: false })
      .in("asin", unavailable);

    if (error) {
      console.error("❌ Deactivation error:", error.message);
    } else {
      console.log(`\n✅ ${unavailable.length}件を非アクティブ化しました。`);
    }
  }
}

main().catch(console.error);
