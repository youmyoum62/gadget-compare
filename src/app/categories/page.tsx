import type { Metadata } from "next";
import Link from "next/link";
import { getActiveCategories } from "@/lib/supabase/queries";
import { CATEGORY_ICONS } from "@/lib/utils/constants";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata: Metadata = {
  title: "カテゴリ一覧",
  description: "ガジェット製品のカテゴリ一覧。スマートフォン、イヤホン、充電器などカテゴリ別に商品を探せます。",
};

export const revalidate = 86400;

export default async function CategoriesPage() {
  const categories = await getActiveCategories().catch(() => []);

  return (
    <div className="space-y-6 pb-8">
      <header>
        <h1 className="mb-2 font-display text-3xl font-bold text-foreground">
          カテゴリ
        </h1>
        <p className="text-foreground-muted">
          カテゴリ別にガジェット製品を探す
        </p>
      </header>

      {categories.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat) => {
            const icon = CATEGORY_ICONS[cat.slug] || "category";
            return (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-background-secondary p-6 text-center transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <span className="material-icons-outlined text-3xl">
                    {icon}
                  </span>
                </div>
                <div>
                  <h2 className="mb-1 font-display text-lg font-bold text-foreground">
                    {cat.name}
                  </h2>
                  {cat.description && (
                    <p className="text-sm text-foreground-muted">
                      {cat.description}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <EmptyState
          icon="category"
          message="カテゴリを準備中です。"
          actionLabel="ホームに戻る"
          actionHref="/"
        />
      )}
    </div>
  );
}
