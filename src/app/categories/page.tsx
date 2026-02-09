import type { Metadata } from "next";
import Link from "next/link";
import { getActiveCategories } from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "カテゴリ一覧",
  description: "ガジェット製品のカテゴリ一覧。スマートフォン、イヤホン、充電器などカテゴリ別に商品を探せます。",
};

export const revalidate = 86400;

export default async function CategoriesPage() {
  const categories = await getActiveCategories().catch(() => []);

  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-gray-900">カテゴリ</h1>
      <p className="mb-6 text-gray-600">
        カテゴリ別にガジェット製品を探す
      </p>

      {categories.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="block rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {cat.name}
              </h2>
              {cat.description && (
                <p className="mt-2 text-sm text-gray-600">{cat.description}</p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-gray-50 p-8 text-center text-gray-500">
          カテゴリを準備中です。
        </p>
      )}
    </div>
  );
}
