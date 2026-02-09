import type { MetadataRoute } from "next";
import { getActiveProducts, getPublishedComparisons, getActiveCategories } from "@/lib/supabase/queries";
import { SITE_URL } from "@/lib/utils/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, comparisons, categories] = await Promise.all([
    getActiveProducts().catch(() => []),
    getPublishedComparisons().catch(() => []),
    getActiveCategories().catch(() => []),
  ]);

  const productUrls = products.map((p) => ({
    url: `${SITE_URL}/products/${p.slug}`,
    lastModified: new Date(p.updated_at),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const comparisonUrls = comparisons.map((c) => ({
    url: `${SITE_URL}/compare/${c.slug}`,
    lastModified: new Date(c.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const categoryUrls = categories.map((c) => ({
    url: `${SITE_URL}/categories/${c.slug}`,
    lastModified: new Date(c.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/compare`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...productUrls,
    ...comparisonUrls,
    ...categoryUrls,
  ];
}
