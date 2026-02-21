/**
 * Post pending tweets to X (Twitter).
 * Takes pending posts from x_posts table and publishes them.
 *
 * Run: npx tsx src/scripts/post-to-x.ts
 */

import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local"), override: true });

import { createClient } from "@supabase/supabase-js";
import { postTweet, postThread, uploadMediaFromUrl } from "../lib/x/client";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const MAX_POSTS_PER_RUN = 3;

async function main() {
  console.log("Starting X posting...");

  // Get pending posts
  const { data: pendingPosts, error: fetchError } = await supabase
    .from("x_posts")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: true })
    .limit(MAX_POSTS_PER_RUN);

  if (fetchError) {
    console.error("Failed to fetch pending posts:", fetchError.message);
    return;
  }

  if (!pendingPosts?.length) {
    console.log("No pending posts to publish.");
    return;
  }

  console.log(`Found ${pendingPosts.length} pending posts.`);

  let postedCount = 0;
  let errorCount = 0;

  for (const post of pendingPosts) {
    try {
      console.log(`  Posting: ${post.post_type} (${post.id})`);

      // Upload media if available
      let mediaId: string | undefined;
      if (post.image_url) {
        try {
          mediaId = await uploadMediaFromUrl(post.image_url);
          console.log(`    Media uploaded: ${mediaId}`);
        } catch (mediaErr) {
          console.warn(
            `    Media upload failed, posting without image:`,
            mediaErr instanceof Error ? mediaErr.message : mediaErr
          );
        }
      }

      if (
        post.post_type === "review_thread" &&
        post.thread_texts?.length
      ) {
        // Post as thread
        const threadIds = await postThread(post.thread_texts, mediaId);

        await supabase
          .from("x_posts")
          .update({
            status: "posted",
            tweet_id: threadIds[0],
            thread_ids: threadIds,
            posted_at: new Date().toISOString(),
          })
          .eq("id", post.id);

        console.log(
          `    Thread posted (${threadIds.length} tweets): ${threadIds[0]}`
        );
      } else {
        // Post single tweet
        const tweetId = await postTweet(post.tweet_text, mediaId);

        await supabase
          .from("x_posts")
          .update({
            status: "posted",
            tweet_id: tweetId,
            posted_at: new Date().toISOString(),
          })
          .eq("id", post.id);

        console.log(`    Tweet posted: ${tweetId}`);
      }

      postedCount++;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : String(err);
      console.error(`    Post failed: ${errorMessage}`);

      // Check for rate limit
      if (errorMessage.includes("429") || errorMessage.includes("rate")) {
        console.log("    Rate limited. Stopping this run.");
        await supabase
          .from("x_posts")
          .update({
            status: "failed",
            error_message: `Rate limited: ${errorMessage}`,
          })
          .eq("id", post.id);
        break;
      }

      await supabase
        .from("x_posts")
        .update({
          status: "failed",
          error_message: errorMessage,
        })
        .eq("id", post.id);

      errorCount++;
    }
  }

  // Log to sync_log
  await supabase.from("sync_log").insert({
    sync_type: "x_post",
    status: errorCount > 0 ? "completed_with_errors" : "completed",
    products_processed: postedCount,
    errors: errorCount > 0 ? [{ count: errorCount }] : [],
    completed_at: new Date().toISOString(),
  });

  console.log(
    `\nPosting complete. Posted: ${postedCount}, Errors: ${errorCount}`
  );
}

main();
