/**
 * Generate a URL-friendly slug from a product title.
 * Handles Japanese characters by using transliteration-friendly output.
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s\u3000-\u9fff-]/g, "") // Keep alphanumeric, spaces, Japanese chars, hyphens
    .replace(/[\s\u3000]+/g, "-") // Replace spaces (including full-width) with hyphens
    .replace(/-+/g, "-") // Collapse multiple hyphens
    .replace(/^-|-$/g, "") // Trim leading/trailing hyphens
    .slice(0, 100); // Limit length
}

/**
 * Generate a slug from an ASIN (simple fallback).
 */
export function asinToSlug(asin: string, brand?: string): string {
  const prefix = brand ? brand.toLowerCase().replace(/\s+/g, "-") : "product";
  return `${prefix}-${asin.toLowerCase()}`;
}
