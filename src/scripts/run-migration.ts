/**
 * Run a SQL migration file against Supabase.
 * Usage: npx tsx src/scripts/run-migration.ts <migration_file_path>
 */
import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";

// Read .env.local manually (no dotenv dependency)
function loadEnvFile(filePath: string): Record<string, string> {
  const env: Record<string, string> = {};
  if (!fs.existsSync(filePath)) return env;
  const content = fs.readFileSync(filePath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) continue;
    const key = trimmed.substring(0, eqIndex).trim();
    const value = trimmed.substring(eqIndex + 1).trim();
    env[key] = value;
  }
  return env;
}

const envPath = path.resolve(__dirname, "../../.env.local");
const env = loadEnvFile(envPath);

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ SUPABASE_URL or SERVICE_ROLE_KEY not found");
  console.error(`  URL: ${supabaseUrl ? "✅" : "❌ missing"}`);
  console.error(`  Key: ${supabaseKey ? `✅ (${supabaseKey.substring(0, 20)}...)` : "❌ missing"}`);
  process.exit(1);
}

console.log(`🔗 Supabase URL: ${supabaseUrl}`);
console.log(`🔑 Service Key: ${supabaseKey.substring(0, 20)}...`);

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const migrationFile = process.argv[2];
  if (!migrationFile) {
    console.error("Usage: npx tsx src/scripts/run-migration.ts <migration_file>");
    process.exit(1);
  }

  const filePath = path.resolve(migrationFile);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  const sql = fs.readFileSync(filePath, "utf-8");
  console.log(`\n📄 Running migration: ${path.basename(filePath)}`);
  console.log(`📊 SQL length: ${sql.length} characters\n`);

  // First, test connection by counting products
  console.log("🔍 Testing connection...");
  const { count, error: testError } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });

  if (testError) {
    console.error(`❌ Connection test failed: ${testError.message}`);
    console.error(`   Code: ${testError.code}`);
    console.error(`   Details: ${testError.details}`);
    process.exit(1);
  }
  console.log(`✅ Connected! Current product count: ${count}\n`);

  // Split by INSERT INTO statements
  const statements = sql
    .split(/;\s*\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && s.toUpperCase().includes("INSERT INTO"));

  console.log(`📋 Found ${statements.length} INSERT statements\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < statements.length; i++) {
    const stmt = statements[i];
    // Extract product name from comment
    const commentMatch = stmt.match(/--\s*\d+\.\s*(.+)/);
    const asinMatch = stmt.match(/'(B0[A-Z0-9]{8,9})'/);
    const label = commentMatch ? commentMatch[1].trim() : (asinMatch ? asinMatch[1] : `Statement ${i + 1}`);

    console.log(`[${i + 1}/${statements.length}] ${label}...`);

    // Use Supabase SQL query via REST
    const { error } = await supabase.rpc("", {} as any).then(() => ({ error: null })).catch(() => ({ error: { message: "RPC not available" } }));

    // Since RPC might not work, try using the PostgREST-compatible approach
    // We'll parse the INSERT and use the Supabase client directly
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/rpc/`, {
        method: "POST",
        headers: {
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal",
        },
        body: JSON.stringify({}),
      });

      // Actually, let's just use the Management API to run SQL
      // The correct endpoint is the Supabase Management API
      // But it requires the project password, not the service role key

      // For now, let's try the pg_execute approach
      const sqlResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/`, {
        method: "POST",
        headers: {
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: stmt + ";" }),
      });

      if (sqlResponse.ok) {
        console.log(`  ✅ Success`);
        success++;
      } else {
        const errBody = await sqlResponse.text();
        console.log(`  ❌ Error (${sqlResponse.status}): ${errBody.substring(0, 200)}`);
        failed++;
      }
    } catch (err: any) {
      console.log(`  ❌ Error: ${err.message}`);
      failed++;
    }
  }

  // Verify final count
  const { count: finalCount } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });

  console.log(`\n========================================`);
  console.log(`✅ Success: ${success}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📊 Final product count: ${finalCount}`);
  console.log(`========================================`);
}

main().catch(console.error);
