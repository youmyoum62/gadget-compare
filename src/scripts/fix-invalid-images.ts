import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const INVALID_ASINS = [
  'B0DJQ2M5NP', 'B0B8PK7T9L', 'B0DKMN5PQR', 'B0CXDXP8VR', 
  'B0C33XXS56', 'B0B1JVL8ZY', 'B0DH3M4NPQ', 'B09JL41N9C', 
  'B0FKMN5PQR', 'B0D8Q93VMG', 'B0B4RSTW2Y', 'B0CKL5M6N7', 
  'B0D9YZJ3V7', 'B0CP4RQZ3L', 'B0FKH3WQ41', 'B0CFGH1234', 
  'B0CQ7RSTW2', 'B0DHMN4PQR', 'B0C8PNT5YB', 'B0DJBXGW2X', 
  'B0CT3DDC2M', 'B0B4PS7GGR', 'B0F77PMC1P', 'B0BQRSTW2Y', 
  'B0DFGH1234', 'B0DJMN5PQR'
];

async function main() {
  console.log('Deactivating products with invalid images...');
  
  const { data, error } = await supabase
    .from('products')
    .select('title, asin')
    .in('asin', INVALID_ASINS);
  
  if (data) {
    console.log(`\nProducts to deactivate (${data.length}):`);
    data.forEach((p: any) => console.log(`  - ${p.title}`));
  }
  
  const { error: updateError } = await supabase
    .from('products')
    .update({ is_active: false })
    .in('asin', INVALID_ASINS);
  
  if (updateError) {
    console.error('Error:', updateError);
    process.exit(1);
  }
  
  console.log(`\n✅ Deactivated ${INVALID_ASINS.length} products with invalid images.`);
}

main();
