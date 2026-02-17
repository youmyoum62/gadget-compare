import { getActiveProducts, getFeaturedProducts, getPublishedComparisons, getActiveCategories } from "@/lib/supabase/queries";
import { ProductCard } from "@/components/product/ProductCard";
import { CategoryTabs } from "@/components/ui/CategoryTabs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageFooter } from "@/components/layout/PageFooter";
import Link from "next/link";

export const revalidate = 86400;

export default async function HomePage() {
  const [featuredProducts, allProducts, comparisons, categories] =
    await Promise.all([
      getFeaturedProducts().catch(() => []),
      getActiveProducts().catch(() => []),
      getPublishedComparisons().catch(() => []),
      getActiveCategories().catch(() => []),
    ]);

  const heroProduct = featuredProducts[0] || allProducts[0];
  const latestProducts = allProducts.slice(0, 6);

  return (
    <div className="space-y-10 pb-6">
      {heroProduct && (
        <section>
          <SectionHeader title="Featured Review" />
          <ProductCard product={heroProduct} variant="featured" />
        </section>
      )}

      {categories.length > 0 && (
        <section>
          <CategoryTabs categories={categories} basePath="/products" />
        </section>
      )}

      <section className="space-y-8">
        <SectionHeader title="最新レビュー" href="/products" linkText="View All" />
        {latestProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {latestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="inventory_2"
            message="商品データを準備中です。Supabaseにデータを登録してください。"
            actionHref="/products"
            actionLabel="商品一覧へ"
          />
        )}
      </section>

      {comparisons.length > 0 && (
        <section className="space-y-8">
          <SectionHeader title="比較記事" href="/compare" linkText="View All" />
          <div className="grid gap-6 sm:grid-cols-2">
            {comparisons.slice(0, 4).map((comp) => (
              <Link
                key={comp.id}
                href={`/compare/${comp.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="mb-3 font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {comp.title}
                </h3>
                {comp.meta_description && (
                  <p className="line-clamp-2 text-sm leading-relaxed text-foreground-muted">
                    {comp.meta_description}
                  </p>
                )}
                {comp.published_at && (
                  <p className="mt-3 text-xs text-foreground-muted">
                    {new Date(comp.published_at).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      <PageFooter />
    </div>
  );
}
