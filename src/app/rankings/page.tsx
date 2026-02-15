import type { Metadata } from "next";
import { getActiveProducts, getActiveCategories } from "@/lib/supabase/queries";
import { CategoryTabs } from "@/components/ui/CategoryTabs";
import { RankingCard } from "@/components/product/RankingCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageFooter } from "@/components/layout/PageFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "人気ランキング",
  description: "ガジェット製品の人気ランキング。評価の高い商品をカテゴリ別に掲載。",
};

export const revalidate = 86400;

export default async function RankingsPage() {
  const [products, categories] = await Promise.all([
    getActiveProducts().catch(() => []),
    getActiveCategories().catch(() => []),
  ]);

  const rankedProducts = [...products]
    .filter((p) => p.amazon_rating != null)
    .sort((a, b) => (b.amazon_rating ?? 0) - (a.amazon_rating ?? 0))
    .slice(0, 10);

  return (
    <div className="space-y-8 pb-6">
      <div className="px-1">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
          人気ランキング
        </h1>
        <p className="mt-2 text-foreground-muted">
          評価の高いガジェット製品トップ10
        </p>
      </div>

      {categories.length > 0 && <CategoryTabs categories={categories} />}

      {rankedProducts.length > 0 ? (
        <div className="space-y-6">
          {rankedProducts.map((product, index) => (
            <RankingCard
              key={product.id}
              product={product}
              rank={index + 1}
              isHero={index === 0}
            />
          ))}

          <div className="pt-4 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-border px-6 py-3 font-semibold text-foreground transition-all hover:border-primary hover:bg-primary hover:text-white"
            >
              全て見る
              <span className="material-icons-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      ) : (
        <EmptyState
          icon="emoji_events"
          message="ランキングデータを準備中です。"
          actionHref="/products"
          actionLabel="商品一覧へ"
        />
      )}

      <PageFooter />
    </div>
  );
}
