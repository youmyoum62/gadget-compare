/**
 * AI-powered product review generation script.
 * Generates both short summaries and detailed reports for products.
 *
 * Per product (2 steps):
 *   1. If ai_summary is null → generate summary/pros/cons/verdict → UPDATE products
 *   2. If no published report → generate detail report → UPSERT product_reports (published)
 *
 * Run: npx tsx src/scripts/generate-product-reports.ts
 * Auto-run: GitHub Actions (.github/workflows/generate-content.yml) every Sunday 5:00 JST
 */

import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local"), override: true });

import { createClient } from "@supabase/supabase-js";
import { generateContent } from "../lib/ai/client";
import {
  buildProductSummaryPrompt,
  buildProductDetailReportPrompt,
} from "../lib/ai/prompts";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const BATCH_SIZE = 10;
// 5 RPM free tier limit → wait 13s between each API call to stay safe
const DELAY_MS = 13000;
const AI_MODEL = "gemini-2.5-flash";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("Starting product review generation...");

  // Get all active products with their current AI content status
  const { data: allProducts, error: fetchError } = await supabase
    .from("products")
    .select(
      "id, title, brand, price_amount, price_currency, features, specs, amazon_rating, amazon_review_count, category_id, ai_summary"
    )
    .eq("is_active", true);

  if (fetchError) {
    console.error("Failed to fetch products:", fetchError.message);
    process.exit(1);
  }

  if (!allProducts?.length) {
    console.log("No active products found.");
    return;
  }

  // Get product IDs that already have a published report
  const { data: existingReports } = await supabase
    .from("product_reports")
    .select("product_id")
    .eq("status", "published");

  const publishedReportIds = new Set(
    (existingReports ?? []).map((r: { product_id: string }) => r.product_id)
  );

  // Find products that need work: missing summary OR missing published report
  const productsNeedingWork = allProducts.filter(
    (p) => p.ai_summary === null || !publishedReportIds.has(p.id)
  );

  if (productsNeedingWork.length === 0) {
    console.log(
      `✅ All ${allProducts.length} active products already have summaries and published reports.`
    );
    return;
  }

  console.log(
    `Found ${productsNeedingWork.length} products needing reviews. Processing up to ${BATCH_SIZE}...`
  );
  console.log(
    `  - Missing summary: ${allProducts.filter((p) => p.ai_summary === null).length}`
  );
  console.log(
    `  - Missing published report: ${allProducts.filter((p) => !publishedReportIds.has(p.id)).length}\n`
  );

  // Process in batches
  const batch = productsNeedingWork.slice(0, BATCH_SIZE);
  let summarySuccessCount = 0;
  let reportSuccessCount = 0;
  let errorCount = 0;

  for (const product of batch) {
    console.log(`Processing: ${product.title.substring(0, 60)}`);

    // ─── Step 1: Generate summary if missing ───────────────────────────────
    if (product.ai_summary === null) {
      try {
        process.stdout.write("  [1/2] Generating summary... ");

        const summaryResult = await generateContent(
          "あなたはガジェット専門のレビュアーです。必ず有効なJSONで回答してください。",
          buildProductSummaryPrompt(product),
          { maxTokens: 2000 }
        );

        const { error: updateError } = await supabase
          .from("products")
          .update({
            ai_summary: (summaryResult.summary as string) ?? null,
            ai_pros: (summaryResult.pros as string[]) ?? [],
            ai_cons: (summaryResult.cons as string[]) ?? [],
            ai_verdict: (summaryResult.verdict as string) ?? null,
            ai_content_generated_at: new Date().toISOString(),
          })
          .eq("id", product.id);

        if (updateError) throw updateError;

        console.log("✅");
        summarySuccessCount++;
      } catch (err) {
        console.log(
          `❌ ${err instanceof Error ? err.message : String(err)}`
        );
        errorCount++;
      }

      await delay(DELAY_MS);
    } else {
      console.log("  [1/2] Summary already exists, skipping.");
    }

    // ─── Step 2: Generate detail report if missing ─────────────────────────
    if (!publishedReportIds.has(product.id)) {
      try {
        process.stdout.write("  [2/2] Generating detail report... ");

        // Fetch competitors in same category
        let competitors: Array<{
          title: string;
          brand: string | null;
          price_amount: number | null;
          amazon_rating: number | null;
        }> = [];

        if (product.category_id) {
          const { data: comps } = await supabase
            .from("products")
            .select("title, brand, price_amount, amazon_rating")
            .eq("category_id", product.category_id)
            .eq("is_active", true)
            .neq("id", product.id)
            .order("amazon_rating", { ascending: false })
            .limit(5);

          competitors = comps ?? [];
        }

        const reportResult = await generateContent(
          "あなたはガジェット専門の詳細レビュアーです。必ず有効なJSONで回答してください。",
          buildProductDetailReportPrompt(product, competitors),
          { maxTokens: 8000 }
        );

        const { error: upsertError } = await supabase
          .from("product_reports")
          .upsert(
            {
              product_id: product.id,
              specs_analysis: (reportResult.specs_analysis as string) ?? null,
              merit_details: (reportResult.merit_details as object[]) ?? [],
              demerit_details:
                (reportResult.demerit_details as object[]) ?? [],
              competitive_comparison:
                (reportResult.competitive_comparison as string) ?? null,
              recommended_users:
                (reportResult.recommended_users as string) ?? null,
              verdict: (reportResult.verdict as string) ?? null,
              meta_title: (reportResult.meta_title as string) ?? null,
              meta_description:
                (reportResult.meta_description as string) ?? null,
              ai_model_used: AI_MODEL,
              ai_prompt_version: "v1",
              ai_generated_at: new Date().toISOString(),
              status: "published",
            },
            { onConflict: "product_id" }
          );

        if (upsertError) throw upsertError;

        console.log("✅");
        reportSuccessCount++;
      } catch (err) {
        const msg = err instanceof Error
          ? err.message
          : (typeof err === "object" ? JSON.stringify(err) : String(err));
        console.log(`❌ ${msg}`);
        errorCount++;
      }

      await delay(DELAY_MS);
    } else {
      console.log("  [2/2] Published report already exists, skipping.");
    }

    console.log("");
  }

  const remaining = productsNeedingWork.length - batch.length;
  console.log("=".repeat(50));
  console.log(`✅ Summaries generated: ${summarySuccessCount}`);
  console.log(`✅ Reports generated:   ${reportSuccessCount}`);
  console.log(`❌ Errors:              ${errorCount}`);
  if (remaining > 0) {
    console.log(
      `ℹ️  Remaining products (run again): ${remaining}`
    );
  } else {
    console.log("🎉 All products processed!");
  }
}

main().catch(console.error);
