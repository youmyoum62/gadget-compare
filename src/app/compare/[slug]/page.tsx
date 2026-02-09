import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getComparisonBySlug, getComparisonProducts, getPublishedComparisons } from "@/lib/supabase/queries";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { AffiliateDisclosure } from "@/components/seo/AffiliateDisclosure";
import { JsonLd, buildFaqSchema, buildBreadcrumbSchema } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/utils/constants";

export const revalidate = 86400;

export async function generateStaticParams() {
  const comparisons = await getPublishedComparisons().catch(() => []);
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = await getComparisonBySlug(slug);
  if (!comparison) return { title: "記事が見つかりません" };

  return {
    title: comparison.meta_title ?? comparison.title,
    description: comparison.meta_description ?? comparison.introduction?.slice(0, 155),
    alternates: {
      canonical: `${SITE_URL}/compare/${comparison.slug}`,
    },
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = await getComparisonBySlug(slug);
  if (!comparison) notFound();

  const products = await getComparisonProducts(comparison.id).catch(() => []);

  const faqs = comparison.faq_content ?? [];

  return (
    <>
      {faqs.length > 0 && <JsonLd data={buildFaqSchema(faqs)} />}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "ホーム", url: SITE_URL },
          { name: "比較記事", url: `${SITE_URL}/compare` },
          { name: comparison.title, url: `${SITE_URL}/compare/${comparison.slug}` },
        ])}
      />

      <article className="space-y-8">
        <header>
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {comparison.title}
          </h1>
          {comparison.published_at && (
            <p className="mt-2 text-sm text-gray-500">
              {new Date(comparison.published_at).toLocaleDateString("ja-JP")} 公開
            </p>
          )}
        </header>

        <AffiliateDisclosure variant="inline" />

        {/* Introduction */}
        {comparison.introduction && (
          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: comparison.introduction }}
          />
        )}

        {/* Comparison Table */}
        {products.length > 0 && (
          <section>
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              比較表
            </h2>
            <ComparisonTable products={products} />
          </section>
        )}

        {/* Body Content */}
        {comparison.body_content && (
          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: comparison.body_content }}
          />
        )}

        {/* Conclusion */}
        {comparison.conclusion && (
          <section className="rounded-lg bg-blue-50 p-6">
            <h2 className="mb-3 text-xl font-bold text-gray-900">まとめ</h2>
            <div
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: comparison.conclusion }}
            />
          </section>
        )}

        {/* FAQ */}
        {faqs.length > 0 && (
          <section>
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              よくある質問
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-lg border border-gray-200 p-4"
                >
                  <summary className="cursor-pointer font-semibold text-gray-900">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
