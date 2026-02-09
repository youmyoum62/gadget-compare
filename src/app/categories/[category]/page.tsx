import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getProductsByCategory, getActiveCategories } from "@/lib/supabase/queries";
import { ProductCard } from "@/components/product/ProductCard";
import { AffiliateDisclosure } from "@/components/seo/AffiliateDisclosure";
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

  const products = await getProductsByCategory(category).catch(() => []);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "ホーム", url: SITE_URL },
          { name: "カテゴリ", url: `${SITE_URL}/categories` },
          { name: cat.name, url: `${SITE_URL}/categories/${cat.slug}` },
        ])}
      />

      <h1 className="mb-2 text-2xl font-bold text-gray-900">{cat.name}</h1>
      {cat.description && (
        <p className="mb-6 text-gray-600">{cat.description}</p>
      )}

      <AffiliateDisclosure variant="inline" />

      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-gray-50 p-8 text-center text-gray-500">
          このカテゴリの商品を準備中です。
        </p>
      )}
    </>
  );
}
