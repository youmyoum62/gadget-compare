/**
 * Fix Affiliate URLs - Add correct Amazon Associate tag to all products
 */

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const AFFILIATE_TAG = "lowpricesearc-22";

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing environment variables");
  process.exit(1);
}

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

async function fixAffiliateUrls() {
  console.log("🔧 Fixing affiliate URLs...\n");

  // Get all products
  const { data: products, error } = await supabase
    .from("products")
    .select("id, asin, detail_page_url, affiliate_url");

  if (error) {
    console.error("❌ Failed to fetch products:", error);
    process.exit(1);
  }

  console.log(`📦 Found ${products.length} products\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const product of products) {
    const correctUrl = `https://www.amazon.co.jp/dp/${product.asin}?tag=${AFFILIATE_TAG}`;

    // Update both detail_page_url and affiliate_url
    const { error: updateError } = await supabase
      .from("products")
      .update({
        detail_page_url: correctUrl,
        affiliate_url: correctUrl,
      })
      .eq("id", product.id);

    if (updateError) {
      console.error(`❌ Failed to update product ${product.id}:`, updateError);
      errorCount++;
    } else {
      console.log(`✅ Updated: ${product.asin} → ${correctUrl}`);
      successCount++;
    }
  }

  console.log(`\n✅ Success: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`\n🎉 Affiliate URLs fixed! All products now use tag: ${AFFILIATE_TAG}`);
}

fixAffiliateUrls().catch(console.error);
