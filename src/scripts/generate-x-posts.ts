/**
 * Generate tweet content for X posting using templates (no AI API required).
 * Creates pending posts in the x_posts table for later execution.
 *
 * Run: npx tsx src/scripts/generate-x-posts.ts
 */

import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local"), override: true });

import { createClient } from "@supabase/supabase-js";
import {
  generateTweetFromTemplate,
  generateThreadFromTemplate,
} from "../lib/x/template-generator";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const POSTS_PER_RUN = 2;
const COOLDOWN_DAYS = 7;

async function main() {
  console.log("Starting X post content generation (template mode)...");

  // Get products that haven't been posted recently
  const cooldownDate = new Date();
  cooldownDate.setDate(cooldownDate.getDate() - COOLDOWN_DAYS);

  // Get recently posted product IDs
  const { data: recentPosts } = await supabase
    .from("x_posts")
    .select("product_id")
    .eq("status", "posted")
    .gte("posted_at", cooldownDate.toISOString());

  const recentProductIds = new Set(
    (recentPosts ?? [])
      .map((p: { product_id: string | null }) => p.product_id)
      .filter(Boolean)
  );

  // Also exclude products with pending posts
  const { data: pendingPosts } = await supabase
    .from("x_posts")
    .select("product_id")
    .eq("status", "pending");

  const pendingProductIds = new Set(
    (pendingPosts ?? [])
      .map((p: { product_id: string | null }) => p.product_id)
      .filter(Boolean)
  );

  // Get eligible products
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("amazon_rating", { ascending: false });

  if (!products?.length) {
    console.log("No active products found.");
    return;
  }

  const eligible = products.filter(
    (p: { id: string }) =>
      !recentProductIds.has(p.id) && !pendingProductIds.has(p.id)
  );

  if (eligible.length === 0) {
    console.log(
      "All products have been posted recently. Waiting for cooldown."
    );
    return;
  }

  console.log(
    `Found ${eligible.length} eligible products. Generating ${POSTS_PER_RUN} posts...`
  );

  const selected = eligible.slice(0, POSTS_PER_RUN);
  let successCount = 0;

  for (let i = 0; i < selected.length; i++) {
    const product = selected[i];

    try {
      // First product with sufficient AI data → thread; otherwise single tweet
      const hasDetailedData =
        product.ai_summary && product.ai_pros?.length > 0;
      const isThread = i === 0 && hasDetailedData;

      if (isThread) {
        console.log(`  Generating thread for: ${product.title}`);

        const tweets = generateThreadFromTemplate(product);

        // Append affiliate URL to the last tweet
        const lastIndex = tweets.length - 1;
        tweets[lastIndex] = `${tweets[lastIndex]}\n${product.affiliate_url}`;

        await supabase.from("x_posts").insert({
          product_id: product.id,
          post_type: "review_thread",
          tweet_text: tweets[0],
          thread_texts: tweets,
          image_url: product.image_url_large,
          affiliate_url: product.affiliate_url,
          status: "pending",
          ai_model_used: "template",
          ai_generated_at: new Date().toISOString(),
        });

        console.log(`  ✓ Created thread post (${tweets.length} tweets)`);
        console.log(`    Preview: ${tweets[0].substring(0, 60)}...`);
      } else {
        console.log(`  Generating tweet for: ${product.title}`);

        const tweetText = generateTweetFromTemplate(product, product.id);

        // Append affiliate URL
        const fullText = `${tweetText}\n${product.affiliate_url}`;

        await supabase.from("x_posts").insert({
          product_id: product.id,
          post_type: "product_highlight",
          tweet_text: fullText,
          image_url: product.image_url_large,
          affiliate_url: product.affiliate_url,
          status: "pending",
          ai_model_used: "template",
          ai_generated_at: new Date().toISOString(),
        });

        console.log(`  ✓ Created highlight post`);
        console.log(`    Preview: ${tweetText.substring(0, 80)}...`);
      }

      successCount++;
    } catch (err) {
      console.error(
        `  Error generating post for ${product.title}:`,
        err instanceof Error ? err.message : err
      );
    }
  }

  console.log(`\nContent generation complete. Created ${successCount} posts.`);
}

main();
