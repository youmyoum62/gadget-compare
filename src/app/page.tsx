import { getActiveProducts, getFeaturedProducts, getPublishedComparisons, getActiveCategories } from "@/lib/supabase/queries";
import { ProductCard } from "@/components/product/ProductCard";
import { AffiliateDisclosure } from "@/components/seo/AffiliateDisclosure";
import Link from "next/link";

export const revalidate = 86400; // 24 hours

export default async function HomePage() {
  const [featuredProducts, allProducts, comparisons, categories] =
    await Promise.all([
      getFeaturedProducts().catch(() => []),
      getActiveProducts().catch(() => []),
      getPublishedComparisons().catch(() => []),
      getActiveCategories().catch(() => []),
    ]);

  const displayProducts =
    featuredProducts.length > 0 ? featuredProducts : allProducts.slice(0, 6);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          ガジェット製品 比較・レビュー
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Amazon商品の価格比較、スペック比較、おすすめランキングを掲載
        </p>
      </section>

      <AffiliateDisclosure variant="inline" />

      {/* Categories */}
      {categories.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900">カテゴリ</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Featured / Recent Products */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            {featuredProducts.length > 0 ? "おすすめ商品" : "最新商品"}
          </h2>
          <Link
            href="/products"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            すべて見る
          </Link>
        </div>
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="rounded-lg bg-gray-50 p-8 text-center text-gray-500">
            商品データを準備中です。Supabaseにデータを登録してください。
          </p>
        )}
      </section>

      {/* Comparison Articles */}
      {comparisons.length > 0 && (
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">最新の比較記事</h2>
            <Link
              href="/compare"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              すべて見る
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {comparisons.slice(0, 4).map((comp) => (
              <Link
                key={comp.id}
                href={`/compare/${comp.slug}`}
                className="block rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md"
              >
                <h3 className="font-semibold text-gray-900">{comp.title}</h3>
                {comp.meta_description && (
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                    {comp.meta_description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
