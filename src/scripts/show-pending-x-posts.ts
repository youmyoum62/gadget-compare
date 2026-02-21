/**
 * Show pending X posts ready for manual posting.
 * Run: npx tsx src/scripts/show-pending-x-posts.ts
 */

import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local"), override: true });

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  const { data: pending, error } = await supabase
    .from("x_posts")
    .select("id, post_type, tweet_text, thread_texts, image_url, ai_generated_at")
    .eq("status", "pending")
    .order("ai_generated_at", { ascending: true });

  if (error) {
    console.error("Error:", error.message);
    return;
  }

  if (!pending?.length) {
    console.log("✅ No pending posts.");
    return;
  }

  console.log(`📋 ${pending.length} pending post(s) to publish:\n`);
  console.log("=".repeat(60));

  for (let i = 0; i < pending.length; i++) {
    const post = pending[i];
    console.log(`\n[${i + 1}/${pending.length}] ${post.post_type.toUpperCase()}`);
    console.log(`ID: ${post.id}`);

    if (post.post_type === "review_thread" && post.thread_texts?.length) {
      console.log(`\n🧵 Thread (${post.thread_texts.length} tweets):`);
      post.thread_texts.forEach((t: string, idx: number) => {
        console.log(`\n  Tweet ${idx + 1}/${post.thread_texts.length}:`);
        console.log(`  ${t.replace(/\n/g, "\n  ")}`);
        console.log(`  (${t.length} chars)`);
      });
    } else {
      console.log(`\n📝 Tweet (${post.tweet_text.length} chars):`);
      console.log(post.tweet_text);
    }

    if (post.image_url) {
      console.log(`\n🖼  Image: ${post.image_url}`);
    }

    console.log("\n" + "-".repeat(60));
  }

  console.log("\n📌 After posting, mark as done:");
  console.log(
    `   npx tsx src/scripts/mark-x-post-done.ts <post-id>`
  );
}

main();
