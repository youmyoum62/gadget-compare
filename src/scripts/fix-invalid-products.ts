/**
 * Fix invalid products script
 * Deactivates products with invalid ASINs (404 on Amazon)
 */

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ASINs that return 404 on Amazon.co.jp
const INVALID_ASINS = [
  'B0DJKL9MNP',  // Apple AirPods Pro 第3世代 (invalid)
  'B0CCZ1L489',  // Belkin 3-in-1 ワイヤレス充電スタンド (invalid)
  'B0BZV4QFP8',  // UGREEN Nexode 100W (invalid)
];

async function main() {
  console.log('Starting invalid products fix...');
  console.log(`Deactivating ${INVALID_ASINS.length} products with invalid ASINs...`);

  // First, let's see what products we're about to deactivate
  const { data: productsToDeactivate, error: fetchError } = await supabase
    .from('products')
    .select('id, title, asin, slug')
    .in('asin', INVALID_ASINS);

  if (fetchError) {
    console.error('Error fetching products:', fetchError);
    process.exit(1);
  }

  if (!productsToDeactivate || productsToDeactivate.length === 0) {
    console.log('No products found with these ASINs.');
    return;
  }

  console.log('\nProducts to be deactivated:');
  productsToDeactivate.forEach((p: any) => {
    console.log(`  - ${p.title} (ASIN: ${p.asin})`);
  });

  // Deactivate the products
  const { error: updateError } = await supabase
    .from('products')
    .update({ is_active: false })
    .in('asin', INVALID_ASINS);

  if (updateError) {
    console.error('Error updating products:', updateError);
    process.exit(1);
  }

  console.log(`\n✅ Successfully deactivated ${productsToDeactivate.length} products.`);
  console.log('\nThese products will no longer appear on the site.');
  console.log('To reactivate them later with correct ASINs, update the products table in Supabase.');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
