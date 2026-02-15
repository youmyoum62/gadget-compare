import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkProducts() {
  console.log("🔍 Checking products in database...\n");

  const { data, error, count } = await supabase
    .from("products")
    .select("id, title, asin, image_url_large, is_active", { count: "exact" })
    .eq("is_active", true);

  if (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }

  console.log(`✅ Total active products: ${count}\n`);

  if (data && data.length > 0) {
    console.log("Sample products (first 10):");
    data.slice(0, 10).forEach((p, i) => {
      console.log(`${i + 1}. ${p.title}`);
      console.log(`   ASIN: ${p.asin}`);
      console.log(`   Image: ${p.image_url_large || "❌ MISSING"}`);
      console.log("");
    });
  }

  // Check for products with missing images
  const missingImages = data?.filter((p) => !p.image_url_large) || [];
  console.log(`\n⚠️  Products with missing images: ${missingImages.length}`);

  if (missingImages.length > 0) {
    missingImages.forEach((p) => {
      console.log(`   - ${p.title} (ASIN: ${p.asin})`);
    });
  }
}

checkProducts();
