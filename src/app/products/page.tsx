import type { Metadata } from "next";
import { getActiveProducts, getActiveCategories } from "@/lib/supabase/queries";
import { ProductCard } from "@/components/product/ProductCard";
import { CategoryTabs } from "@/components/ui/CategoryTabs";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageFooter } from "@/components/layout/PageFooter";

export const metadata: Metadata = {
  title: "商品一覧",
  description: "ガジェット製品の一覧ページ。価格、評価、スペックを比較して最適な商品を見つけましょう。",
};

export const revalidate = 86400;

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getActiveProducts().catch(() => []),
    getActiveCategories().catch(() => []),
  ]);

  return (
    <div className="space-y-8 pb-6">
      <div className="px-1">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
          商品一覧
        </h1>
        <p className="mt-2 text-foreground-muted">
          ガジェット製品を価格・評価・スペックで比較
        </p>
      </div>

      {categories.length > 0 && <CategoryTabs categories={categories} />}

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
