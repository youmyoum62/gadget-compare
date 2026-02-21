/**
 * Weekly AI content generation script.
 * Run by GitHub Actions: .github/workflows/generate-content.yml
 *
 * Generates comparison articles for categories with 3+ products.
 * Note: AI summaries are now handled by generate-product-reports.ts (Step 1).
 */

import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local"), override: true });

import { createClient } from "@supabase/supabase-js";
import { generateContent } from "../lib/ai/client";
import { buildComparisonArticlePrompt } from "../lib/ai/prompts";
import { generateSlug } from "../lib/utils/slug";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  console.log("Starting comparison article generation...");

  await generateComparisonArticles();

  console.log("Comparison article generation complete.");
}

async function generateComparisonArticles() {
  // Find categories with 3+ products and no recent comparison
  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, slug")
    .eq("is_active", true);

  if (!categories?.length) return;

  for (const category of categories) {
    const { data: products } = await supabase
      .from("products")
      .select("*")
      .eq("category_id", category.id)
      .eq("is_active", true)
      .order("amazon_rating", { ascending: false })
      .limit(5);

    if (!products || products.length < 3) continue;

    // Check if a comparison already exists for this category
    const { data: existing } = await supabase
      .from("comparisons")
      .select("id")
      .eq("category_id", category.id)
      .limit(1);

    if (existing && existing.length > 0) {
      console.log(`Comparison already exists for ${category.name}, skipping.`);
      continue;
    }

    try {
      console.log(`Generating comparison for: ${category.name}`);

      const targetKeyword = `おすすめ ${category.name} 2026`;
      const result = await generateContent(
        "あなたはガジェット比較記事のプロライターです。必ず有効なJSONで回答してください。",
        buildComparisonArticlePrompt(products, category.name, targetKeyword)
      );

      const title = (result.title as string) ?? `${category.name} おすすめ比較 2026`;
      const slug = generateSlug(title);

      const { data: comparison } = await supabase
        .from("comparisons")
        .insert({
          title,
          slug,
          category_id: category.id,
          introduction: (result.introduction as string) ?? null,
          body_content: (result.body as string) ?? null,
          conclusion: (result.conclusion as string) ?? null,
          faq_content: (result.faq as Array<{ question: string; answer: string }>) ?? [],
          meta_title: title,
          meta_description: (result.metaDescription as string) ?? null,
          ai_model_used: "gemini-2.5-flash",
          ai_prompt_version: "v1",
          ai_generated_at: new Date().toISOString(),
          status: "draft", // Requires manual review
        })
        .select()
        .single();

      if (comparison) {
        // Link products to comparison
        for (let i = 0; i < products.length; i++) {
          await supabase.from("comparison_products").insert({
            comparison_id: comparison.id,
            product_id: products[i].id,
            rank: i + 1,
          });
        }
        console.log(`  Created draft comparison: ${title}`);
      }
    } catch (err) {
      console.error(
        `  Error generating comparison for ${category.name}:`,
        err instanceof Error ? err.message : err
      );
    }
  }
}

main();
