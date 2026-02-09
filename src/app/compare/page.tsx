import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedComparisons } from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "比較記事一覧",
  description: "ガジェット製品の比較記事一覧。カテゴリ別に商品を徹底比較します。",
};

export const revalidate = 86400;

export default async function ComparePage() {
  const comparisons = await getPublishedComparisons().catch(() => []);

  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-gray-900">比較記事</h1>
      <p className="mb-6 text-gray-600">
        カテゴリ別にガジェット製品を徹底比較
      </p>

      {comparisons.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {comparisons.map((comp) => (
            <Link
              key={comp.id}
              href={`/compare/${comp.slug}`}
              className="block rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {comp.title}
              </h2>
              {comp.meta_description && (
                <p className="mt-2 text-sm text-gray-600">
                  {comp.meta_description}
                </p>
              )}
              {comp.published_at && (
                <p className="mt-3 text-xs text-gray-400">
                  {new Date(comp.published_at).toLocaleDateString("ja-JP")}
                </p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-gray-50 p-8 text-center text-gray-500">
          比較記事を準備中です。
        </p>
      )}
    </div>
  );
}
