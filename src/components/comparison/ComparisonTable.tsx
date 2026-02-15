import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/database";
import { formatPrice } from "@/lib/utils/format";
import { ScoreBadge } from "@/components/ui/ScoreBadge";

interface ComparisonTableProps {
  products: Product[];
}

export function ComparisonTable({ products }: ComparisonTableProps) {
  if (products.length === 0) return null;

  const findWinner = (values: (number | null)[], higherIsBetter = true) => {
    const validValues = values.map((v, i) => ({ value: v, index: i })).filter((v) => v.value !== null);
    if (validValues.length === 0) return -1;
    const winner = validValues.reduce((best, curr) => {
      if (higherIsBetter) {
        return (curr.value ?? 0) > (best.value ?? 0) ? curr : best;
      }
      return (curr.value ?? 0) < (best.value ?? 0) ? curr : best;
    });
    return winner.index;
  };

  const priceWinner = findWinner(products.map((p) => p.price_amount), false);
  const ratingWinner = findWinner(products.map((p) => p.amazon_rating), true);

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="min-w-max">
        <div className="flex border-b border-border-light">
          <div className="sticky left-0 z-20 w-28 flex flex-col justify-end bg-background p-3 border-r border-border shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]">
            <span className="text-xs font-medium text-foreground-muted uppercase tracking-wide">Specs</span>
          </div>
          {products.map((p, i) => (
            <div key={p.id} className="w-40 p-4 text-center border-r border-border-light bg-white relative">
              {i === 0 && products.length > 1 && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm z-10">
                  Best Value
                </div>
              )}
              <div className="relative w-24 h-24 mx-auto mb-3 bg-background-secondary rounded-xl flex items-center justify-center overflow-hidden">
                {p.image_url_small ? (
                  <Image
                    src={p.image_url_small}
                    alt={p.title}
                    width={96}
                    height={96}
                    className="object-contain mix-blend-multiply"
                  />
                ) : (
                  <span className="text-foreground-muted text-xs">No Image</span>
                )}
                <div className="absolute top-1 right-1">
                  <ScoreBadge rating={p.amazon_rating} size="sm" />
                </div>
              </div>
              <Link href={`/products/${p.slug}`} className="font-bold text-sm leading-tight mb-1 block hover:text-primary transition-colors">
                {p.brand || "Product"}
              </Link>
              <p className="text-xs text-foreground-muted truncate">{p.title.slice(0, 30)}</p>
            </div>
          ))}
        </div>

        <div className="flex border-b border-border-light">
          <div className="sticky left-0 z-20 w-28 bg-white flex items-center p-3 border-r border-border shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-2 text-foreground-muted">
              <span className="material-icons-outlined text-[16px]">payments</span>
              <span className="text-xs font-semibold">Price</span>
            </div>
          </div>
          {products.map((p, i) => (
            <div key={p.id} className={`w-40 p-3 flex flex-col justify-center items-center border-r border-border-light ${i === priceWinner ? "bg-green-soft/50" : "bg-white"}`}>
              <span className="font-bold text-primary text-base">
                {p.price_amount != null ? formatPrice(p.price_amount, p.price_currency) : "-"}
              </span>
              {i === priceWinner && p.price_amount != null && (
                <span className="text-[10px] text-green-600 font-medium bg-green-100 px-1.5 rounded mt-1">Winner</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex border-b border-border-light">
          <div className="sticky left-0 z-20 w-28 bg-white flex items-center p-3 border-r border-border shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-2 text-foreground-muted">
              <span className="material-icons-outlined text-[16px]">star</span>
              <span className="text-xs font-semibold">Rating</span>
            </div>
          </div>
          {products.map((p, i) => (
            <div key={p.id} className={`w-40 p-3 flex flex-col justify-center items-center border-r border-border-light ${i === ratingWinner ? "bg-green-soft/50" : "bg-white"}`}>
              {p.amazon_rating != null ? (
                <>
                  <div className="flex items-center gap-1">
                    <span className="material-icons-outlined text-amber text-sm">star</span>
                    <span className="font-medium text-sm">{p.amazon_rating.toFixed(1)}</span>
                  </div>
                  {i === ratingWinner && (
                    <span className="text-[10px] text-green-600 font-medium bg-green-100 px-1.5 rounded mt-1">Highest</span>
                  )}
                </>
              ) : (
                <span className="text-foreground-muted">-</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex">
          <div className="sticky left-0 z-20 w-28 bg-white flex items-center p-3 border-r border-border shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-2 text-foreground-muted">
              <span className="material-icons-outlined text-[16px]">info</span>
              <span className="text-xs font-semibold">Verdict</span>
            </div>
          </div>
          {products.map((p) => (
            <div key={p.id} className="w-40 p-3 text-center bg-white border-r border-border-light">
              <p className="text-xs text-foreground-muted line-clamp-2">
                {p.ai_verdict || "-"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-[10px] text-foreground-muted leading-tight">
          価格は変動する場合があります。最新価格はリンク先でご確認ください。
        </p>
      </div>
    </div>
  );
}
