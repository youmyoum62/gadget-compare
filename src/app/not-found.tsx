import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-20">
      <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-background-secondary">
        <span className="material-icons-outlined text-foreground-muted" style={{ fontSize: "80px" }}>
          sentiment_dissatisfied
        </span>
      </div>
      <h1 className="mb-3 font-display text-6xl font-bold text-foreground">
        404
      </h1>
      <p className="mb-8 text-center text-lg text-foreground-muted">
        ページが見つかりませんでした
      </p>
      <Link
        href="/"
        className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-display font-bold text-white shadow-sm shadow-primary/30 transition-all hover:scale-105 hover:bg-primary-dark hover:shadow-md hover:shadow-primary/40"
      >
        <span className="material-icons-outlined">home</span>
        ホームに戻る
      </Link>
    </div>
  );
}
