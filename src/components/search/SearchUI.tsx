"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/types/database";

interface SearchUIProps {
  products: Product[];
  categories: Array<{ id: string; name: string; slug: string }>;
}

export function SearchUI({ products, categories }: SearchUIProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minRating, setMinRating] = useState(0);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // Extract unique brands
  const brands = useMemo(() => {
    const brandSet = new Set<string>();
    products.forEach((p) => {
      if (p.brand) brandSet.add(p.brand);
    });
    return Array.from(brandSet).sort();
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search term
      if (searchTerm && !product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      // Category
      if (selectedCategory && product.category_id !== selectedCategory) {
        return false;
      }
      // Rating
      if (product.amazon_rating != null && product.amazon_rating < minRating) {
        return false;
      }
      // Price
      if (product.price_amount != null) {
        if (product.price_amount < priceRange[0] || product.price_amount > priceRange[1]) {
          return false;
        }
      }
      // Brand
      if (selectedBrand && product.brand !== selectedBrand) {
        return false;
      }
      return true;
    });
  }, [products, searchTerm, selectedCategory, minRating, priceRange, selectedBrand]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
    setMinRating(0);
    setPriceRange([0, 100000]);
    setSelectedBrand(null);
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Search Bar */}
      <div className="relative">
        <span className="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-foreground-muted">
          search
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="製品名で検索..."
          className="w-full rounded-2xl border border-border bg-white py-3.5 pl-12 pr-4 font-display text-foreground placeholder:text-foreground-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Category Grid */}
      {categories.length > 0 && (
        <div>
          <h3 className="mb-3 px-1 font-display text-sm font-bold uppercase tracking-widest text-foreground-muted">
            カテゴリ
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-xl border p-3 text-center text-sm font-semibold transition-all ${
                selectedCategory === null
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-foreground hover:border-primary/30"
              }`}
            >
              すべて
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-xl border p-3 text-center text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-white text-foreground hover:border-primary/30"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Brand Filter */}
      {brands.length > 0 && (
        <div>
          <h3 className="mb-3 px-1 font-display text-sm font-bold uppercase tracking-widest text-foreground-muted">
            ブランド
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedBrand(null)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedBrand === null
                  ? "bg-primary text-white"
                  : "bg-background-secondary text-foreground-muted hover:bg-primary-soft hover:text-primary"
              }`}
            >
              すべて
            </button>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedBrand === brand
                    ? "bg-primary text-white"
                    : "bg-background-secondary text-foreground-muted hover:bg-primary-soft hover:text-primary"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Rating Filter */}
      <div>
        <h3 className="mb-3 px-1 font-display text-sm font-bold uppercase tracking-widest text-foreground-muted">
          最低評価
        </h3>
        <div className="flex gap-2">
          {[0, 3, 4, 4.5].map((rating) => (
            <button
              key={rating}
              onClick={() => setMinRating(rating)}
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                minRating === rating
                  ? "bg-primary text-white"
                  : "bg-background-secondary text-foreground-muted hover:bg-primary-soft hover:text-primary"
              }`}
            >
              <span className="material-icons-outlined text-sm">star</span>
              {rating === 0 ? "指定なし" : `${rating}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-3 px-1 font-display text-sm font-bold uppercase tracking-widest text-foreground-muted">
          価格帯
        </h3>
        <div className="rounded-2xl border border-border bg-white p-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="font-semibold text-foreground">
              ¥{priceRange[0].toLocaleString()}
            </span>
            <span className="text-foreground-muted">〜</span>
            <span className="font-semibold text-foreground">
              ¥{priceRange[1].toLocaleString()}
            </span>
          </div>
          <div className="flex gap-3">
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="flex-1"
            />
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="flex-1"
            />
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      {(searchTerm || selectedCategory || minRating > 0 || selectedBrand || priceRange[0] > 0 || priceRange[1] < 100000) && (
        <button
          onClick={clearFilters}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-white py-3 font-display font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-background-secondary"
        >
          <span className="material-icons-outlined text-sm">close</span>
          フィルターをクリア
        </button>
      )}

      {/* Results */}
      <div>
        <div className="mb-4 flex items-center justify-between px-1">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-foreground-muted">
            検索結果 ({filteredProducts.length})
          </h2>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-background-secondary py-12">
            <span className="material-icons-outlined text-foreground-muted" style={{ fontSize: "64px" }}>
              search_off
            </span>
            <p className="text-center text-foreground-muted">
              条件に一致する製品が見つかりませんでした
            </p>
            <button
              onClick={clearFilters}
              className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              フィルターをクリア
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
