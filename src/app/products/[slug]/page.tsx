import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, getActiveProducts } from "@/lib/supabase/queries";
import { AmazonButton } from "@/components/product/AmazonButton";
import { StarRating } from "@/components/ui/StarRating";
import { ScoreBadge } from "@/components/ui/ScoreBadge";
import { ProductSpecs } from "@/components/product/ProductSpecs";
import { JsonLd, buildProductSchema, buildBreadcrumbSchema } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/utils/constants";
import { formatPrice } from "@/lib/utils/format";

export const revalidate = 86400;

export async function generateStaticParams() {
  const products = await getActiveProducts().catch(() => []);
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "商品が見つかりません" };

  return {
    title: product.title,
    description:
      product.ai_summary?.slice(0, 155) ??
      `${product.title}の価格、レビュー、スペック情報`,
    openGraph: {
      title: product.title,
      description: product.ai_summary ?? "",
      images: product.image_url_large ? [product.image_url_large] : [],
    },
    alternates: {
      canonical: `${SITE_URL}/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <JsonLd
        data={buildProductSchema({
          title: product.title,
          brand: product.brand,
          image: product.image_url_large,
          description: product.ai_summary,
          price: product.price_amount,
          currency: product.price_currency,
          url: `${SITE_URL}/products/${product.slug}`,
          rating: product.amazon_rating,
          reviewCount: product.amazon_review_count,
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "ホーム", url: SITE_URL },
          { name: "商品一覧", url: `${SITE_URL}/products` },
          { name: product.title, url: `${SITE_URL}/products/${product.slug}` },
        ])}
      />

      <div className="-mx-4 -mt-4 mb-8 sm:-mx-0 sm:-mt-0 sm:rounded-b-3xl overflow-hidden">
        <div className="relative h-[420px] w-full bg-background-secondary">
          {product.image_url_large ? (
            <Image
              src={product.image_url_large}
              alt={product.title}
              fill
              className="object-cover opacity-95 mix-blend-multiply"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-foreground-muted">
              No Image
            </div>
          )}
          <div className="absolute bottom-6 right-6">
            <ScoreBadge rating={product.amazon_rating} size="lg" />
          </div>
        </div>
      </div>

      <div className="-mx-4 px-6 sm:mx-0 sm:px-0 relative z-10 -mt-6">
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            {product.brand && (
              <span className="rounded-md bg-primary-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                {product.brand}
              </span>
            )}
            {product.availability && (
              <span className="text-xs text-green-600">{product.availability}</span>
            )}
          </div>
          <h1 className="mb-3 font-display text-3xl font-bold leading-tight tracking-tight text-foreground">
            {product.title}
          </h1>
          <div className="mb-3 flex items-baseline gap-2">
            {product.amazon_rating != null && (
              <StarRating
                rating={product.amazon_rating}
                reviewCount={product.amazon_review_count ?? undefined}
                size="lg"
              />
            )}
          </div>
          {product.price_amount != null && (
            <div className="mb-4 text-4xl font-bold text-primary">
              {formatPrice(product.price_amount, product.price_currency)}
            </div>
          )}
        </div>

        {product.ai_summary && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <div className="border-b border-border-light bg-background-secondary p-5">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                <span className="material-icons-outlined text-primary">gavel</span> The Verdict
              </h3>
            </div>
            <div className="p-5">
              <p className="mb-4 leading-relaxed text-foreground-muted">{product.ai_summary}</p>
            </div>

            {product.ai_pros && product.ai_pros.length > 0 && (
              <div className="border-t border-emerald-100/50 bg-emerald-50/50 p-5">
                <h4 className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600">
                  <span className="material-icons-outlined text-sm">thumb_up</span> The Good
                </h4>
                <ul className="space-y-3">
                  {product.ai_pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium leading-snug text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
                        <span className="material-icons-outlined text-[10px] font-bold">check</span>
                      </span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.ai_cons && product.ai_cons.length > 0 && (
              <div className="border-t border-border-light bg-rose-50/50 p-5">
                <h4 className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-600">
                  <span className="material-icons-outlined text-sm">thumb_down</span> The Bad
                </h4>
                <ul className="space-y-3">
                  {product.ai_cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium leading-snug text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500 shadow-sm">
                        <span className="material-icons-outlined text-[10px] font-bold">close</span>
                      </span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="mb-10">
          <ProductSpecs specs={product.specs} features={product.features} />
        </div>

        <div className="mb-32 text-center">
          <p className="text-[11px] italic text-foreground-muted">
            価格は変動する場合があります。最新価格はAmazonでご確認ください。
          </p>
        </div>
      </div>

      <AmazonButton
        variant="sticky"
        affiliateUrl={product.affiliate_url}
        productTitle={product.title}
        price={
          product.price_amount != null
            ? formatPrice(product.price_amount, product.price_currency)
            : undefined
        }
      />
    </>
  );
}
