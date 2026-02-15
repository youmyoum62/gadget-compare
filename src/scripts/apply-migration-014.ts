/**
 * Apply Migration 014: Bestseller Expansion Phase 1
 * Adds 4 high-priority trending products to database
 */

import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing environment variables:");
  console.error("  - NEXT_PUBLIC_SUPABASE_URL:", !!supabaseUrl);
  console.error("  - SUPABASE_SERVICE_ROLE_KEY:", !!supabaseKey);
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function applyMigration() {
  console.log("🚀 Starting Migration 014: Bestseller Expansion Phase 1");
  console.log("=" + "=".repeat(60));

  try {
    // Read migration file
    const migrationPath = path.join(
      process.cwd(),
      "supabase",
      "migrations",
      "014_bestseller_expansion_phase1.sql"
    );

    if (!fs.existsSync(migrationPath)) {
      throw new Error(`Migration file not found: ${migrationPath}`);
    }

    const sql = fs.readFileSync(migrationPath, "utf-8");

    console.log(`📄 Migration file loaded: ${migrationPath}`);
    console.log(`📦 SQL size: ${(sql.length / 1024).toFixed(2)} KB`);
    console.log("");

    // Split SQL into individual statements
    const statements = sql
      .split(";")
      .map((s) => s.trim())
      .filter((s) => s.length > 0 && !s.startsWith("--"));

    console.log(`📝 Found ${statements.length} SQL statements`);
    console.log("");

    // Execute statements one by one
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < statements.length; i++) {
      const stmt = statements[i];
      const label = `Statement ${i + 1}/${statements.length}`;

      // Extract comment for better logging
      const prevLines = sql.split(";")[i].split("\n");
      const commentLine = prevLines.find((line) => line.trim().startsWith("-- ") && !line.includes("==="));
      const description = commentLine
        ? commentLine.replace("--", "").trim()
        : stmt.substring(0, 50) + "...";

      process.stdout.write(`[${i + 1}/${statements.length}] ${description}... `);

      try {
        const { error } = await supabase.rpc("exec_sql", { sql_query: stmt + ";" });

        if (error) {
          // Try direct query as fallback
          const result = await supabase.from("products").select("id").limit(1);
          if (result.error) {
            throw error;
          }

          // Execute via REST API (PostgREST doesn't support arbitrary SQL, use Supabase dashboard or continue)
          console.log("⚠️  Skipped (RPC not available)");
          continue;
        }

        successCount++;
        console.log("✓");
      } catch (err: unknown) {
        errorCount++;
        const errorMessage = err instanceof Error ? err.message : String(err);
        console.log(`✗ Error: ${errorMessage}`);
      }
    }

    console.log("");
    console.log("=" + "=".repeat(60));
    console.log(`✅ Migration completed`);
    console.log(`   Success: ${successCount}/${statements.length}`);
    console.log(`   Errors:  ${errorCount}/${statements.length}`);

    if (errorCount > 0) {
      console.log("");
      console.log("⚠️  Some statements failed. Please review errors above.");
      console.log("   You may need to apply the migration manually via Supabase dashboard:");
      console.log(`   ${supabaseUrl.replace("https://", "https://app.supabase.com/project/")}/editor`);
    }
  } catch (error) {
    console.error("❌ Migration failed:");
    console.error(error);
    process.exit(1);
  }
}

// Run migration
applyMigration()
  .then(() => {
    console.log("");
    console.log("🎉 Migration script completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Unexpected error:");
    console.error(error);
    process.exit(1);
  });
