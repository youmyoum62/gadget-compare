import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, getActiveProducts } from "@/lib/supabase/queries";
import { AmazonButton } from "@/components/product/AmazonButton";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { StarRating } from "@/components/ui/StarRating";
import { ProductSpecs } from "@/components/product/ProductSpecs";
import { AffiliateDisclosure } from "@/components/seo/AffiliateDisclosure";
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

      <AffiliateDisclosure variant="inline" />

      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Image */}
        <div className="flex items-center justify-center rounded-lg bg-gray-50 p-8">
          {product.image_url_large ? (
            <Image
              src={product.image_url_large}
              alt={product.title}
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          ) : (
            <div className="text-gray-400">No Image</div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          {product.brand && (
            <p className="text-sm font-medium text-gray-500">
              {product.brand}
            </p>
          )}
          <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>

          {product.amazon_rating != null && (
            <StarRating
              rating={product.amazon_rating}
              reviewCount={product.amazon_review_count ?? undefined}
            />
          )}

          {product.price_amount != null && (
            <PriceDisplay
              amount={product.price_amount}
              currency={product.price_currency}
              listPrice={product.list_price_amount}
              updatedAt={product.price_updated_at}
            />
          )}

          {product.availability && (
            <p className="text-sm text-green-600">{product.availability}</p>
          )}

          <AmazonButton
            affiliateUrl={product.affiliate_url}
            productTitle={product.title}
            price={
              product.price_amount != null
                ? formatPrice(product.price_amount, product.price_currency)
                : undefined
            }
          />
        </div>
      </div>

      {/* AI Summary */}
      {product.ai_summary && (
        <section className="mt-8 rounded-lg border border-gray-200 p-6">
          <h2 className="mb-3 text-lg font-bold text-gray-900">AI レビュー要約</h2>
          <p className="text-gray-700">{product.ai_summary}</p>

          {product.ai_pros && product.ai_pros.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-green-700">メリット</h3>
              <ul className="mt-1 list-inside list-disc text-sm text-gray-700">
                {product.ai_pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
            </div>
          )}

          {product.ai_cons && product.ai_cons.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-red-700">デメリット</h3>
              <ul className="mt-1 list-inside list-disc text-sm text-gray-700">
                {product.ai_cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Specs & Features */}
      <section className="mt-8">
        <ProductSpecs specs={product.specs} features={product.features} />
      </section>
    </>
  );
}
