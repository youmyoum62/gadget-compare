import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/database";
import { ScoreBadge } from "@/components/ui/ScoreBadge";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "featured";
}

export function ProductCard({ product, variant = "grid" }: ProductCardProps) {
  if (variant === "featured") {
    return (
      <Link
        href={`/products/${product.slug}`}
        className="group relative block h-[26rem] w-full overflow-hidden rounded-2xl border border-border-light shadow-sm transition-all duration-300 hover:shadow-lg"
      >
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105">
          {product.image_url_large ? (
            <Image
              src={product.image_url_large}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-background-secondary text-foreground-muted">
              No Image
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="mb-3 flex items-center gap-2">
            {product.is_featured && (
              <span className="rounded-md bg-primary/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                Editor&apos;s Choice
              </span>
            )}
            {product.amazon_rating != null && (
              <div className="flex text-amber text-xs">
                {Array.from({ length: Math.floor(product.amazon_rating) }).map((_, i) => (
                  <span key={i} className="material-icons-outlined text-sm">star</span>
                ))}
              </div>
            )}
          </div>
          <h3 className="mb-3 font-display text-3xl font-bold leading-tight text-white drop-shadow-sm">
            {product.title}
          </h3>
          {product.ai_verdict && (
            <p className="mb-5 line-clamp-2 text-sm font-light leading-relaxed text-gray-200">
              {product.ai_verdict}
            </p>
          )}
          <div className="flex gap-3">
            <a
              href={product.affiliate_url}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-primary-dark"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${product.title} - Amazonで詳細を見る`}
            >
              <span className="material-icons-outlined text-base">shopping_cart</span>
              Amazonで見る
            </a>
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/20 py-3.5 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-all hover:bg-white/30">
              Read Full Review
              <span className="material-icons-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] transition-all hover:border-blue-100 hover:shadow-[0_8px_16px_-4px_rgba(59,130,246,0.1)] hover:-translate-y-1"
    >
      <div className="relative h-56 w-full bg-background-secondary">
        {product.image_url_medium ? (
          <Image
            src={product.image_url_medium}
            alt={product.title}
            fill
            className="object-contain p-4 transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-foreground-muted">
            No Image
          </div>
        )}
        {product.is_featured && (
          <span className="absolute left-4 top-4 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-foreground shadow-sm backdrop-blur-md">
            おすすめ
          </span>
        )}
        {product.amazon_rating != null && (
          <div className="absolute bottom-4 right-4">
            <ScoreBadge rating={product.amazon_rating} size="sm" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex-1 space-y-1">
            {product.brand && (
              <p className="text-xs font-medium text-foreground-muted">{product.brand}</p>
            )}
            <h3 className="line-clamp-2 font-display text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
              {product.title}
            </h3>
            {product.amazon_rating != null && (
              <div className="flex items-center gap-1.5">
                <span className="material-icons-outlined text-amber text-base">star</span>
                <span className="text-xs font-semibold text-foreground-muted">
                  {product.amazon_rating.toFixed(1)}
                  {product.amazon_review_count != null && (
                    <>
                      <span className="mx-1 text-border">|</span>
                      {product.amazon_review_count} reviews
                    </>
                  )}
                </span>
              </div>
            )}
          </div>
          {product.price_amount != null && (
            <span className="ml-2 rounded-md bg-primary-soft px-2 py-1 font-bold text-primary text-sm">
              {new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: product.price_currency,
                maximumFractionDigits: 0,
              }).format(product.price_amount)}
            </span>
          )}
        </div>

        {product.ai_verdict && (
          <p className="mb-6 flex-1 line-clamp-2 text-sm font-light leading-relaxed text-foreground-muted">
            {product.ai_verdict}
          </p>
        )}

        <div className="mt-auto flex flex-col gap-3">
          <a
            href={product.affiliate_url}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/30 transition-all hover:scale-[1.02] hover:bg-primary-dark hover:shadow-md hover:shadow-primary/40"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${product.title} - Amazonで詳細を見る`}
          >
            <span className="material-icons-outlined text-base">shopping_cart</span>
            Amazonで見る
          </a>
          <div className="flex gap-3">
            <button className="flex-1 rounded-xl border-2 border-primary/10 bg-white py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white">
              Read Review
            </button>
            <button className="rounded-xl border-2 border-border px-3.5 py-2.5 text-foreground-muted transition-all hover:border-primary/30 hover:bg-primary-soft hover:text-primary">
              <span className="material-icons-outlined text-xl">bookmark_border</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
