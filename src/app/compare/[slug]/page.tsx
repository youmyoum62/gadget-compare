import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getComparisonBySlug, getComparisonProducts, getPublishedComparisons } from "@/lib/supabase/queries";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { PageFooter } from "@/components/layout/PageFooter";
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

      <article className="space-y-8 pb-8">
        {/* Header */}
        <header className="space-y-3">
          <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {comparison.title}
          </h1>
          {comparison.published_at && (
            <div className="flex items-center gap-2 text-sm text-foreground-muted">
              <span className="material-icons-outlined text-base">event</span>
              <time dateTime={comparison.published_at}>
                {new Date(comparison.published_at).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          )}
        </header>

        {/* Introduction */}
        {comparison.introduction && (
          <div
            className="prose prose-sm max-w-none text-foreground prose-headings:font-display prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground sm:prose-base"
            dangerouslySetInnerHTML={{ __html: comparison.introduction }}
          />
        )}

        {/* Comparison Table */}
        {products.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">
              比較表
            </h2>
            <ComparisonTable products={products} />
          </section>
        )}

        {/* Body Content */}
        {comparison.body_content && (
          <div
            className="prose prose-sm max-w-none text-foreground prose-headings:font-display prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground sm:prose-base"
            dangerouslySetInnerHTML={{ __html: comparison.body_content }}
          />
        )}

        {/* Conclusion */}
        {comparison.conclusion && (
          <section className="space-y-4 rounded-2xl bg-primary-soft p-6 md:p-8">
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined text-primary">
                check_circle
              </span>
              <h2 className="font-display text-2xl font-bold text-foreground">
                まとめ
              </h2>
            </div>
            <div
              className="prose prose-sm max-w-none text-foreground prose-headings:font-display prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground sm:prose-base"
              dangerouslySetInnerHTML={{ __html: comparison.conclusion }}
            />
          </section>
        )}

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined text-primary">
                help_outline
              </span>
              <h2 className="font-display text-2xl font-bold text-foreground">
                よくある質問
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-border bg-white p-5 transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <summary className="flex cursor-pointer items-start gap-3 font-display font-semibold text-foreground">
                    <span className="material-icons-outlined mt-0.5 text-primary transition-transform group-open:rotate-90">
                      chevron_right
                    </span>
                    <span className="flex-1">{faq.question}</span>
                  </summary>
                  <p className="ml-8 mt-3 leading-relaxed text-foreground-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}
      </article>

      <PageFooter />
    </>
  );
}
