import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedComparisons } from "@/lib/supabase/queries";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata: Metadata = {
  title: "比較記事一覧",
  description: "ガジェット製品の比較記事一覧。カテゴリ別に商品を徹底比較します。",
};

export const revalidate = 86400;

export default async function ComparePage() {
  const comparisons = await getPublishedComparisons().catch(() => []);

  return (
    <div className="space-y-6 pb-8">
      <header>
        <h1 className="mb-2 font-display text-3xl font-bold text-foreground">
          比較記事
        </h1>
        <p className="text-foreground-muted">
          カテゴリ別にガジェット製品を徹底比較
        </p>
      </header>

      {comparisons.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((comp) => (
            <Link
              key={comp.id}
              href={`/compare/${comp.slug}`}
              className="group block overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="p-6">
                <div className="mb-3 flex items-start gap-2">
                  <span className="material-icons-outlined mt-0.5 text-primary">
                    compare_arrows
                  </span>
                  <h2 className="flex-1 font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {comp.title}
                  </h2>
                </div>
                {comp.meta_description && (
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-foreground-muted">
                    {comp.meta_description}
                  </p>
                )}
                {comp.published_at && (
                  <div className="flex items-center gap-1.5 text-xs text-foreground-muted">
                    <span className="material-icons-outlined text-sm">event</span>
                    <time dateTime={comp.published_at}>
                      {new Date(comp.published_at).toLocaleDateString("ja-JP")}
                    </time>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <EmptyState
          icon="compare_arrows"
          message="比較記事を準備中です。"
          actionLabel="ホームに戻る"
          actionHref="/"
        />
      )}
    </div>
  );
}
