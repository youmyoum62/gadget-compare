interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renders JSON-LD structured data for SEO/AEO.
 * Supports Product, FAQPage, Article, BreadcrumbList schemas.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Build Product schema */
export function buildProductSchema(product: {
  title: string;
  brand?: string | null;
  image?: string | null;
  description?: string | null;
  price?: number | null;
  currency?: string;
  url: string;
  rating?: number | null;
  reviewCount?: number | null;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.image,
    description: product.description,
    url: product.url,
  };

  if (product.brand) {
    schema.brand = { "@type": "Brand", name: product.brand };
  }

  if (product.price != null) {
    schema.offers = {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency ?? "JPY",
      availability: "https://schema.org/InStock",
    };
  }

  if (product.rating != null && product.reviewCount != null) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    };
  }

  return schema;
}

/** Build FAQPage schema */
export function buildFaqSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Build BreadcrumbList schema */
export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
