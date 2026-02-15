import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/database";
import { StarRating } from "@/components/ui/StarRating";
import { formatPrice } from "@/lib/utils/format";

interface RankingCardProps {
  product: Product;
  rank: number;
  isHero?: boolean;
}

export function RankingCard({ product, rank, isHero = false }: RankingCardProps) {
  if (isHero) {
    return (
      <Link
        href={`/products/${product.slug}`}
        className="group relative block h-64 w-full overflow-hidden rounded-2xl border border-border shadow-md transition-all hover:shadow-xl"
      >
        <div className="absolute inset-0">
          {product.image_url_large ? (
            <Image
              src={product.image_url_large}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-background-secondary text-foreground-muted">
              No Image
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute -top-2 left-1/2 z-10 -translate-x-1/2">
          <div className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
            編集者のおすすめ
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber font-bold text-white">
              #{rank}
            </span>
            {product.amazon_rating != null && (
              <StarRating rating={product.amazon_rating} size="sm" />
            )}
          </div>
          <h3 className="mb-2 font-display text-2xl font-bold text-white">
            {product.title}
          </h3>
          {product.price_amount != null && (
            <p className="text-lg font-bold text-primary-soft">
              {formatPrice(product.price_amount, product.price_currency)}
            </p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-background-secondary font-display text-sm font-bold text-foreground-muted">
        #{rank}
      </div>
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-background-secondary">
        {product.image_url_small ? (
          <Image
            src={product.image_url_small}
            alt={product.title}
            fill
            className="object-contain p-2"
            sizes="80px"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-foreground-muted text-xs">
            No Image
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="mb-1 truncate font-display font-bold text-foreground transition-colors group-hover:text-primary">
          {product.title}
        </h3>
        {product.amazon_rating != null && (
          <div className="mb-1">
            <StarRating rating={product.amazon_rating} size="sm" />
          </div>
        )}
        {product.price_amount != null && (
          <p className="text-sm font-bold text-primary">
            {formatPrice(product.price_amount, product.price_currency)}
          </p>
        )}
      </div>
      <button className="flex-shrink-0 rounded-lg bg-primary-soft px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
        Check Price
      </button>
    </Link>
  );
}
