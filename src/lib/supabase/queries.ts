import { getSupabase } from "./client";
import type { Product, Category, Comparison, ProductReport } from "@/types/database";

export async function getActiveProducts(): Promise<Product[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) throw error;
  return (data as Product[]) ?? [];
}

export async function getProductBySlug(
  slug: string
): Promise<Product | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return data as Product | null;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .eq("is_featured", true)
    .order("display_order", { ascending: true });

  if (error) throw error;
  return (data as Product[]) ?? [];
}

export async function getProductsByCategory(
  categorySlug: string
): Promise<Product[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data: category } = await supabase
    .from("categories")
    .select("id")
    .eq("slug", categorySlug)
    .single();

  if (!category) return [];

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category_id", (category as { id: string }).id)
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) throw error;
  return (data as Product[]) ?? [];
}

export async function getActiveCategories(): Promise<Category[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) throw error;
  return (data as Category[]) ?? [];
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return data as Category | null;
}

export async function getPublishedComparisons(): Promise<Comparison[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("comparisons")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw error;
  return (data as Comparison[]) ?? [];
}

export async function getComparisonBySlug(
  slug: string
): Promise<Comparison | null> {
  const supabase = getSupabase();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("comparisons")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return data as Comparison | null;
}

export async function getComparisonProducts(
  comparisonId: string
): Promise<Product[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data: links, error: linkError } = await supabase
    .from("comparison_products")
    .select("product_id, rank")
    .eq("comparison_id", comparisonId)
    .order("rank", { ascending: true });

  if (linkError) throw linkError;
  if (!links?.length) return [];

  const typedLinks = links as Array<{ product_id: string; rank: number }>;
  const productIds = typedLinks.map((l) => l.product_id);

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .in("id", productIds);

  if (error) throw error;

  const rankMap = new Map(typedLinks.map((l) => [l.product_id, l.rank]));
  return ((data as Product[]) ?? []).sort(
    (a, b) => (rankMap.get(a.id) ?? 99) - (rankMap.get(b.id) ?? 99)
  );
}

export async function getProductReport(
  productId: string
): Promise<ProductReport | null> {
  const supabase = getSupabase();
  if (!supabase) {
    console.log("[getProductReport] supabase client is null");
    return null;
  }

  const { data, error } = await supabase
    .from("product_reports")
    .select("*")
    .eq("product_id", productId)
    .eq("status", "published")
    .single();

  if (error) {
    console.log(`[getProductReport] product_id=${productId} error: ${error.code} ${error.message}`);
    if (error.code !== "PGRST116") throw error;
  } else {
    console.log(`[getProductReport] product_id=${productId} found report id=${data?.id}`);
  }

  return data as ProductReport | null;
}
