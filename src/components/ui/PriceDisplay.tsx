import { formatPrice, formatDate } from "@/lib/utils/format";

interface PriceDisplayProps {
  amount: number;
  currency?: string;
  listPrice?: number | null;
  updatedAt?: string | null;
}

export function PriceDisplay({
  amount,
  currency = "JPY",
  listPrice,
  updatedAt,
}: PriceDisplayProps) {
  const discountPercent =
    listPrice && listPrice > amount
      ? Math.round(((listPrice - amount) / listPrice) * 100)
      : null;

  return (
    <div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-gray-900">
          {formatPrice(amount, currency)}
        </span>
        {listPrice && listPrice > amount && (
          <span className="text-sm text-gray-500 line-through">
            {formatPrice(listPrice, currency)}
          </span>
        )}
        {discountPercent && (
          <span className="text-sm font-semibold text-red-600">
            -{discountPercent}%
          </span>
        )}
      </div>
      {updatedAt && (
        <span className="text-xs text-gray-400">
          ({formatDate(updatedAt)} 時点の価格)
        </span>
      )}
    </div>
  );
}
