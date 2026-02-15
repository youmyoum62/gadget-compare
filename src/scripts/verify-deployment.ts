/**
 * Verify deployment data and image URLs
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyDeployment() {
  console.log("🔍 Deployment Verification Report");
  console.log("=" + "=".repeat(70));
  console.log("");

  try {
    // 1. Check total products
    const { data: allProducts, count: totalCount } = await supabase
      .from("products")
      .select("*", { count: "exact" })
      .eq("is_active", true);

    console.log(`✅ Total active products: ${totalCount}`);
    console.log("");

    // 2. Check featured products
    const { data: featuredProducts, count: featuredCount } = await supabase
      .from("products")
      .select("*", { count: "exact" })
      .eq("is_active", true)
      .eq("is_featured", true);

    console.log(`⭐ Featured products: ${featuredCount}`);
    console.log("");

    // 3. Check products by category
    const { data: categories } = await supabase
      .from("categories")
      .select("id, name, slug")
      .eq("is_active", true);

    if (categories) {
      console.log("📊 Products by category:");
      for (const cat of categories) {
        const { count } = await supabase
          .from("products")
          .select("*", { count: "exact", head: true })
          .eq("is_active", true)
          .eq("category_id", cat.id);

        console.log(`   - ${cat.name}: ${count} products`);
      }
      console.log("");
    }

    // 4. Verify image URLs
    const productsWithoutImages = allProducts?.filter(
      (p) => !p.image_url_large && !p.image_url_medium
    );

    console.log("🖼️  Image URL status:");
    console.log(`   - Products with images: ${(allProducts?.length || 0) - (productsWithoutImages?.length || 0)}`);
    console.log(`   - Products missing images: ${productsWithoutImages?.length || 0}`);
    console.log("");

    // 5. Sample product data
    if (allProducts && allProducts.length > 0) {
      console.log("📦 Sample product (first product):");
      const sample = allProducts[0];
      console.log(`   Title: ${sample.title}`);
      console.log(`   Slug: ${sample.slug}`);
      console.log(`   ASIN: ${sample.asin}`);
      console.log(`   Brand: ${sample.brand || "N/A"}`);
      console.log(`   Price: ¥${sample.price_amount?.toLocaleString() || "N/A"}`);
      console.log(`   Rating: ${sample.amazon_rating || "N/A"}/5.0`);
      console.log(`   Reviews: ${sample.amazon_review_count || 0}`);
      console.log(`   Image (large): ${sample.image_url_large || "❌ MISSING"}`);
      console.log(`   Image (medium): ${sample.image_url_medium || "❌ MISSING"}`);
      console.log(`   Image (small): ${sample.image_url_small || "❌ MISSING"}`);
      console.log(`   Featured: ${sample.is_featured ? "Yes" : "No"}`);
      console.log(`   Active: ${sample.is_active ? "Yes" : "No"}`);
      console.log("");
    }

    // 6. Check comparisons
    const { count: comparisonCount } = await supabase
      .from("comparisons")
      .select("*", { count: "exact", head: true })
      .eq("status", "published");

    console.log(`📝 Published comparisons: ${comparisonCount || 0}`);
    console.log("");

    // 7. Summary
    console.log("=" + "=".repeat(70));
    console.log("✅ VERIFICATION SUMMARY");
    console.log("");
    console.log(`   Total Products: ${totalCount}`);
    console.log(`   Featured Products: ${featuredCount}`);
    console.log(`   Active Categories: ${categories?.length || 0}`);
    console.log(`   Published Comparisons: ${comparisonCount || 0}`);
    console.log(`   Products with Images: ${(allProducts?.length || 0) - (productsWithoutImages?.length || 0)}`);
    console.log("");

    if ((totalCount || 0) >= 50) {
      console.log("🎉 SUCCESS: 50+ products are in the database!");
    } else {
      console.log(`⚠️  WARNING: Only ${totalCount} products found (target: 50)`);
    }

    console.log("");
    console.log("🌐 Next steps:");
    console.log("   1. Check Vercel deployment logs");
    console.log("   2. Verify NEXT_PUBLIC_SUPABASE_URL is set in Vercel");
    console.log("   3. Clear browser cache and hard refresh");
    console.log("   4. Wait for ISR revalidation (24 hours) or trigger manual rebuild");
  } catch (error) {
    console.error("❌ Verification failed:");
    console.error(error);
    process.exit(1);
  }
}

verifyDeployment();
