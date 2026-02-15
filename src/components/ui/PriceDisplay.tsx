import { formatPrice, formatDate } from "@/lib/utils/format";

interface PriceDisplayProps {
  amount: number;
  currency?: string;
  listPrice?: number | null;
  updatedAt?: string | null;
  size?: "sm" | "md" | "lg";
}

export function PriceDisplay({
  amount,
  currency = "JPY",
  listPrice,
  updatedAt,
  size = "md",
}: PriceDisplayProps) {
  const discountPercent =
    listPrice && listPrice > amount
      ? Math.round(((listPrice - amount) / listPrice) * 100)
      : null;

  const priceClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const subTextClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div>
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className={`font-bold text-primary ${priceClasses[size]}`}>
          {formatPrice(amount, currency)}
        </span>
        {listPrice && listPrice > amount && (
          <span className={`text-foreground-muted line-through ${subTextClasses[size]}`}>
            {formatPrice(listPrice, currency)}
          </span>
        )}
        {discountPercent && (
          <span className={`rounded-full bg-red-soft px-2 py-0.5 font-semibold text-red ${subTextClasses[size]}`}>
            -{discountPercent}%
          </span>
        )}
      </div>
      {updatedAt && (
        <span className="text-xs text-foreground-muted">
          ({formatDate(updatedAt)} 時点の価格)
        </span>
      )}
    </div>
  );
}
