import type { Metadata } from "next";
import { getActiveProducts, getActiveCategories } from "@/lib/supabase/queries";
import { SearchUI } from "@/components/search/SearchUI";

export const metadata: Metadata = {
  title: "製品検索",
  description: "ガジェット製品を検索・フィルタリング。カテゴリ、ブランド、価格帯、評価で絞り込みができます。",
};

export const revalidate = 86400;

export default async function SearchPage() {
  const products = await getActiveProducts().catch(() => []);
  const categories = await getActiveCategories().catch(() => []);

  return (
    <div>
      <header className="mb-6">
        <h1 className="mb-2 font-display text-3xl font-bold text-foreground">
          製品検索
        </h1>
        <p className="text-foreground-muted">
          条件を指定してお探しの製品を見つけましょう
        </p>
      </header>

      <SearchUI products={products} categories={categories} />
    </div>
  );
}
