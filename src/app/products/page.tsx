import type { Metadata } from "next";
import { getActiveProducts, getActiveCategories, getProductsByCategory, getCategoryBySlug } from "@/lib/supabase/queries";
import { ProductCard } from "@/components/product/ProductCard";
import { CategoryTabs } from "@/components/ui/CategoryTabs";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageFooter } from "@/components/layout/PageFooter";

export const revalidate = 86400;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}): Promise<Metadata> {
  const { category } = await searchParams;
  if (!category) {
    return {
      title: "商品一覧",
      description: "ガジェット製品の一覧ページ。価格、評価、スペックを比較して最適な商品を見つけましょう。",
    };
  }
  const cat = await getCategoryBySlug(category).catch(() => null);
  return {
    title: cat ? `${cat.name}の商品一覧` : "商品一覧",
    description: cat?.description ?? "ガジェット製品の一覧ページ。価格、評価、スペックを比較して最適な商品を見つけましょう。",
  };
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const [products, categories, categoryInfo] = await Promise.all([
    category
      ? getProductsByCategory(category).catch(() => [])
      : getActiveProducts().catch(() => []),
    getActiveCategories().catch(() => []),
    category ? getCategoryBySlug(category).catch(() => null) : Promise.resolve(null),
  ]);

  const pageTitle = categoryInfo ? `${categoryInfo.name}の商品` : "商品一覧";

  return (
    <div className="space-y-8 pb-6">
      <div className="px-1">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
          {pageTitle}
        </h1>
        <p className="mt-2 text-foreground-muted">
          ガジェット製品を価格・評価・スペックで比較
        </p>
      </div>

      {categories.length > 0 && (
        <CategoryTabs categories={categories} activeSlug={category} basePath="/products" />
      )}

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon="inventory_2"
          message="商品データを準備中です。"
          actionHref="/"
          actionLabel="ホームへ戻る"
        />
      )}

      <PageFooter />
    </div>
  );
}
