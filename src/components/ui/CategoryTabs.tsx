"use client";

import Link from "next/link";
import type { Category } from "@/types/database";

interface CategoryTabsProps {
  categories: Category[];
  activeSlug?: string;
  basePath?: string;
}

export function CategoryTabs({ categories, activeSlug, basePath = "/" }: CategoryTabsProps) {
  return (
    <div className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 py-3">
      <Link
        href={basePath}
        className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide shadow-sm transition-all ${
          !activeSlug
            ? "bg-primary text-white shadow-primary/30"
            : "border border-border bg-background text-foreground-muted hover:border-primary/50 hover:bg-primary-soft hover:text-primary"
        }`}
      >
        すべて
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`${basePath}?category=${cat.slug}`}
          className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide shadow-sm transition-all ${
            activeSlug === cat.slug
              ? "bg-primary text-white shadow-primary/30"
              : "border border-border bg-background text-foreground-muted hover:border-primary/50 hover:bg-primary-soft hover:text-primary"
          }`}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}
