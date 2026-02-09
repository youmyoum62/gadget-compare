/**
 * Daily product data update script.
 * Run by GitHub Actions: .github/workflows/update-products.yml
 *
 * 1. Reads all active products from Supabase
 * 2. Fetches latest data from Amazon PA-API (batched, rate-limited)
 * 3. Updates product data in Supabase
 * 4. Logs price changes to price_history
 * 5. Records sync status to sync_log
 */

import { createClient } from "@supabase/supabase-js";
import { PaApiClient } from "../lib/amazon/paapi";
import type { AmazonProduct } from "../lib/amazon/types";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  console.log("Starting product update...");

  // Ping Supabase to prevent free-tier inactivity pause
  const { count } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });
  console.log(`Database has ${count} products.`);

  // Log sync start
  const { data: syncLog } = await supabase
    .from("sync_log")
    .insert({ sync_type: "product_update", status: "started" })
    .select()
    .single();

  const errors: Array<{ asin?: string; batch?: string[]; error: string }> = [];
  let processedCount = 0;

  try {
    // Get all active products
    const { data: products } = await supabase
      .from("products")
      .select("id, asin")
      .eq("is_active", true);

    if (!products?.length) {
      console.log("No active products to update.");
      await updateSyncLog(syncLog!.id, "completed", 0, []);
      return;
    }

    const amazon = new PaApiClient();

    // Batch ASINs in groups of 10 (PA-API max per request)
    const batches: string[][] = [];
    for (let i = 0; i < products.length; i += 10) {
      batches.push(products.slice(i, i + 10).map((p) => p.asin));
    }

    for (const batch of batches) {
      try {
        console.log(`Fetching batch: ${batch.join(", ")}`);
        const amazonProducts = await amazon.getItems(batch);

        for (const ap of amazonProducts) {
          try {
            await updateProduct(ap, products);
            processedCount++;
          } catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            console.error(`Error updating ${ap.asin}: ${msg}`);
            errors.push({ asin: ap.asin, error: msg });
          }
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error(`Batch failed: ${msg}`);
        errors.push({ batch, error: msg });
      }
    }

    const status = errors.length > 0 ? "completed_with_errors" : "completed";
    await updateSyncLog(syncLog!.id, status, processedCount, errors);
    console.log(
      `Update complete. Processed: ${processedCount}, Errors: ${errors.length}`
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`Fatal error: ${msg}`);
    await updateSyncLog(syncLog!.id, "failed", processedCount, [
      { error: msg },
    ]);
    process.exit(1);
  }
}

async function updateProduct(
  ap: AmazonProduct,
  products: Array<{ id: string; asin: string }>
) {
  const now = new Date().toISOString();
  const product = products.find((p) => p.asin === ap.asin);
  if (!product) return;

  const partnerTag = process.env.AMAZON_PARTNER_TAG!;
  const affiliateUrl = `${ap.detailPageUrl}?tag=${partnerTag}`;

  await supabase
    .from("products")
    .update({
      title: ap.title,
      brand: ap.brand,
      manufacturer: ap.manufacturer,
      price_amount: ap.price?.amount ?? null,
      price_currency: ap.price?.currency ?? "JPY",
      list_price_amount: ap.listPrice?.amount ?? null,
      detail_page_url: ap.detailPageUrl,
      affiliate_url: affiliateUrl,
      image_url_large: ap.imageUrls.large ?? null,
      image_url_medium: ap.imageUrls.medium ?? null,
      image_url_small: ap.imageUrls.small ?? null,
      amazon_rating: ap.rating ?? null,
      amazon_review_count: ap.reviewCount ?? null,
      availability: ap.availability ?? null,
      features: ap.features ?? null,
      price_updated_at: now,
      last_api_sync_at: now,
    })
    .eq("asin", ap.asin);

  // Log price to history
  if (ap.price?.amount != null) {
    await supabase.from("price_history").insert({
      product_id: product.id,
      price_amount: ap.price.amount,
    });
  }
}

async function updateSyncLog(
  id: string,
  status: string,
  processedCount: number,
  errors: unknown[]
) {
  await supabase
    .from("sync_log")
    .update({
      status,
      products_processed: processedCount,
      errors,
      completed_at: new Date().toISOString(),
    })
    .eq("id", id);
}

main();
