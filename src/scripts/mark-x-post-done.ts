/**
 * Mark an X post as manually posted.
 * Run: npx tsx src/scripts/mark-x-post-done.ts <post-id>
 *   or: npx tsx src/scripts/mark-x-post-done.ts all
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
  const arg = process.argv[2];

  if (!arg) {
    console.log("Usage:");
    console.log("  npx tsx src/scripts/mark-x-post-done.ts <post-id>");
    console.log("  npx tsx src/scripts/mark-x-post-done.ts all");
    process.exit(1);
  }

  const update = {
    status: "posted",
    posted_at: new Date().toISOString(),
    ai_model_used: "template(manual)",
  };

  if (arg === "all") {
    const { error, count } = await supabase
      .from("x_posts")
      .update(update)
      .eq("status", "pending")
      .select("id", { count: "exact", head: true });

    if (error) {
      console.error("Error:", error.message);
    } else {
      console.log(`✅ Marked ${count ?? "all"} pending posts as posted.`);
    }
  } else {
    const { error } = await supabase
      .from("x_posts")
      .update(update)
      .eq("id", arg);

    if (error) {
      console.error("Error:", error.message);
    } else {
      console.log(`✅ Post ${arg} marked as posted.`);
    }
  }
}

main();
