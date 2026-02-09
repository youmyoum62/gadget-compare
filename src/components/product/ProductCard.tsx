import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/database";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { StarRating } from "@/components/ui/StarRating";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-square bg-gray-50 p-4">
        {product.image_url_medium ? (
          <Image
            src={product.image_url_medium}
            alt={product.title}
            fill
            className="object-contain p-2 transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            No Image
          </div>
        )}
        {product.is_featured && (
          <span className="absolute left-2 top-2 rounded bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
            おすすめ
          </span>
        )}
      </div>

      <div className="p-4">
        {product.brand && (
          <p className="text-xs font-medium text-gray-500">{product.brand}</p>
        )}
        <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-gray-900">
          {product.title}
        </h3>

        {product.amazon_rating != null && (
          <div className="mt-2">
            <StarRating
              rating={product.amazon_rating}
              reviewCount={product.amazon_review_count ?? undefined}
            />
          </div>
        )}

        {product.price_amount != null && (
          <div className="mt-2">
            <PriceDisplay
              amount={product.price_amount}
              currency={product.price_currency}
              listPrice={product.list_price_amount}
              updatedAt={product.price_updated_at}
            />
          </div>
        )}

        {product.ai_verdict && (
          <p className="mt-2 line-clamp-2 text-xs text-gray-600">
            {product.ai_verdict}
          </p>
        )}
      </div>
    </Link>
  );
}
