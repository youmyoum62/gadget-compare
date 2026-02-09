interface AmazonButtonProps {
  affiliateUrl: string;
  productTitle: string;
  price?: string;
}

/**
 * Amazon affiliate CTA button with required compliance attributes.
 * - rel="nofollow sponsored noopener" (required by Amazon Associates)
 * - Opens in new tab
 * - Visible "(広告リンク)" disclosure
 */
export function AmazonButton({
  affiliateUrl,
  productTitle,
  price,
}: AmazonButtonProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <a
        href={affiliateUrl}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-bold text-black transition-colors hover:bg-amber-500"
        aria-label={`${productTitle} - Amazonで詳細を見る`}
      >
        Amazonで詳細を見る
        {price && <span className="text-sm font-normal">({price})</span>}
      </a>
      <span className="text-xs text-gray-400">(広告リンク)</span>
    </div>
  );
}
