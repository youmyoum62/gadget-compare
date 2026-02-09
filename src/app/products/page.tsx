import type { Metadata } from "next";
import { getActiveProducts } from "@/lib/supabase/queries";
import { ProductCard } from "@/components/product/ProductCard";
import { AffiliateDisclosure } from "@/components/seo/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "商品一覧",
  description: "ガジェット製品の一覧ページ。価格、評価、スペックを比較して最適な商品を見つけましょう。",
};

export const revalidate = 86400;

export default async function ProductsPage() {
  const products = await getActiveProducts().catch(() => []);

  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-gray-900">商品一覧</h1>
      <p className="mb-6 text-gray-600">
        ガジェット製品を価格・評価・スペックで比較
      </p>

      <AffiliateDisclosure variant="inline" />

      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-gray-50 p-8 text-center text-gray-500">
          商品データを準備中です。
        </p>
      )}
    </div>
  );
}
