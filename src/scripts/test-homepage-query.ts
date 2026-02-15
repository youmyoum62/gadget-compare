import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function testHomepageQuery() {
  console.log("🔍 Testing Homepage Queries\n");

  // Query 1: Featured products
  const { data: featured, error: e1 } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .eq("is_featured", true);

  console.log(`Featured products: ${featured?.length || 0}`);
  if (e1) console.error("Error:", e1);

  // Query 2: All active products (sorted by created_at DESC)
  const { data: all, error: e2 } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  console.log(`Total active products: ${all?.length || 0}`);
  if (e2) console.error("Error:", e2);

  // Show first 10
  console.log("\nFirst 10 products (created_at DESC):");
  all?.slice(0, 10).forEach((p, i) => {
    const shortTitle = p.title.length > 50 ? p.title.substring(0, 50) + "..." : p.title;
    console.log(`  ${i + 1}. ${shortTitle}`);
    console.log(`     Created: ${p.created_at}`);
    console.log(`     Featured: ${p.is_featured}`);
  });

  // Check what homepage would show
  const heroProduct = featured?.[0] || all?.[0];
  const latestProducts = all?.slice(0, 6) || [];

  console.log("\n📄 What Homepage Would Display:");
  console.log(`  Hero Product: ${heroProduct?.title.substring(0, 50) || "None"}...`);
  console.log(`  Latest Products (6): ${latestProducts.length} products`);
  latestProducts.forEach((p, i) => {
    console.log(`    ${i + 1}. ${p.title.substring(0, 40)}...`);
  });
}

testHomepageQuery();
