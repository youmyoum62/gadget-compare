import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function checkImageUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

async function main() {
  console.log('Checking images...\n');
  const { data: products } = await supabase
    .from('products')
    .select('title, asin, image_url_medium')
    .eq('is_active', true);

  if (!products) return;

  const invalid: string[] = [];
  for (const p of products) {
    const ok = await checkImageUrl(p.image_url_medium);
    console.log(`${ok ? '✅' : '❌'} ${p.title}`);
    if (!ok) invalid.push(p.asin);
    await new Promise(r => setTimeout(r, 300));
  }

  console.log(`\nInvalid: ${invalid.length} products`);
  if (invalid.length > 0) {
    console.log('ASINs:', invalid.join(', '));
  }
}

main();
