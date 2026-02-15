interface AmazonButtonProps {
  affiliateUrl: string;
  productTitle: string;
  price?: string;
  variant?: "button" | "sticky";
}

export function AmazonButton({
  affiliateUrl,
  productTitle,
  price,
  variant = "button",
}: AmazonButtonProps) {
  if (variant === "sticky") {
    return (
      <div className="fixed bottom-20 left-0 right-0 z-40 glass border-t border-border pb-safe">
        <div className="mx-auto flex max-w-md items-center justify-between gap-3 px-4 py-3 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          <div className="flex-1">
            <div className="text-[10px] font-medium uppercase tracking-wide text-primary">
              Best Price
            </div>
            <div className="font-display text-lg font-bold leading-none text-foreground">
              {price || "価格を確認"}
            </div>
          </div>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="group flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 font-display font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark active:scale-95"
            aria-label={`${productTitle} - Amazonで詳細を見る`}
          >
            <span className="text-sm">Amazonで見る</span>
            <span className="material-icons-outlined text-xl transition-transform group-hover:translate-x-1">
              open_in_new
            </span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <a
        href={affiliateUrl}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white shadow-sm shadow-primary/30 transition-all hover:scale-105 hover:bg-primary-dark hover:shadow-md hover:shadow-primary/40"
        aria-label={`${productTitle} - Amazonで詳細を見る`}
      >
        <span className="material-icons-outlined text-sm">shopping_cart</span>
        Amazonで見る
        {price && <span className="text-sm font-normal">({price})</span>}
      </a>
      <span className="text-xs text-foreground-muted">(広告リンク)</span>
    </div>
  );
}
