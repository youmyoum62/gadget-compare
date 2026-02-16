import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkImageUrls() {
  console.log("🖼️  Checking Product Image URLs\n");

  const { data, error } = await supabase
    .from("products")
    .select("title, image_url_large, image_url_medium, image_url_small, is_active")
    .eq("is_active", true)
    .limit(10);

  if (error) {
    console.error("Error:", error);
    return;
  }

  console.log("Sample products (first 10):\n");

  data?.forEach((p, i) => {
    const shortTitle = p.title.substring(0, 50);
    console.log(`${i + 1}. ${shortTitle}...`);
    console.log(`   Large:  ${p.image_url_large || "❌ MISSING"}`);
    console.log(`   Medium: ${p.image_url_medium || "❌ MISSING"}`);
    console.log(`   Small:  ${p.image_url_small || "❌ MISSING"}`);
    console.log("");
  });

  // Check for products without images
  const missingImages = data?.filter(
    (p) => !p.image_url_large && !p.image_url_medium && !p.image_url_small
  ) || [];

  console.log(`\n📊 Summary:`);
  console.log(`   Total checked: ${data?.length || 0}`);
  console.log(`   Missing images: ${missingImages.length}`);

  if (missingImages.length > 0) {
    console.log("\n⚠️  Products without images:");
    missingImages.forEach((p) => {
      console.log(`   - ${p.title}`);
    });
  } else {
    console.log("\n✅ All products have image URLs!");
  }
}

checkImageUrls();
