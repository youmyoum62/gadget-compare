import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getProductsByCategory, getActiveCategories } from "@/lib/supabase/queries";
import { RankingCard } from "@/components/product/RankingCard";
import { PageFooter } from "@/components/layout/PageFooter";
import { EmptyState } from "@/components/ui/EmptyState";
import { CATEGORY_ICONS } from "@/lib/utils/constants";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/utils/constants";

export const revalidate = 86400;

export async function generateStaticParams() {
  const categories = await getActiveCategories().catch(() => []);
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = await getCategoryBySlug(category);
  if (!cat) return { title: "カテゴリが見つかりません" };

  return {
    title: `${cat.name}の商品一覧`,
    description: cat.description ?? `${cat.name}カテゴリのガジェット製品を比較`,
    alternates: {
      canonical: `${SITE_URL}/categories/${cat.slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = await getCategoryBySlug(category);
  if (!cat) notFound();

  const allProducts = await getProductsByCategory(category).catch(() => []);
  
  // Sort by rating for ranking display
  const products = allProducts
    .filter((p) => p.amazon_rating != null)
    .sort((a, b) => (b.amazon_rating ?? 0) - (a.amazon_rating ?? 0))
    .slice(0, 10);

  const icon = CATEGORY_ICONS[cat.slug] || "category";

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "ホーム", url: SITE_URL },
          { name: "カテゴリ", url: `${SITE_URL}/categories` },
          { name: cat.name, url: `${SITE_URL}/categories/${cat.slug}` },
        ])}
      />

      <div className="space-y-6 pb-8">
        {/* Header */}
        <header className="flex items-start gap-4">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
            <span className="material-icons-outlined text-3xl">{icon}</span>
          </div>
          <div className="flex-1">
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">
              {cat.name}
            </h1>
            {cat.description && (
              <p className="text-foreground-muted">{cat.description}</p>
            )}
          </div>
        </header>

        {products.length > 0 ? (
          <div className="space-y-6">
            {/* Top Product - Hero */}
            <div>
              <div className="mb-3 px-1">
                <h2 className="font-display text-xs font-bold uppercase tracking-widest text-foreground-muted">
                  Top Pick
                </h2>
              </div>
              <RankingCard product={products[0]} rank={1} isHero />
            </div>

            {/* Remaining Products - List */}
            {products.length > 1 && (
              <div>
                <div className="mb-3 px-1">
                  <h2 className="font-display text-xs font-bold uppercase tracking-widest text-foreground-muted">
                    Top {products.length}
                  </h2>
                </div>
                <div className="space-y-3">
                  {products.slice(1).map((product, i) => (
                    <RankingCard key={product.id} product={product} rank={i + 2} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <EmptyState
            icon={icon}
            message="このカテゴリの商品を準備中です。"
            actionLabel="カテゴリ一覧に戻る"
            actionHref="/categories"
          />
        )}
      </div>

      <PageFooter />
    </>
  );
}
