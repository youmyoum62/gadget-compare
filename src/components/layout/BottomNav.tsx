"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/utils/constants";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-border pb-safe"
      aria-label="メインナビゲーション"
    >
      <div className="mx-auto flex max-w-md items-center justify-around px-2 py-2">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          if ("isFab" in item && item.isFab) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="-mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/40 active:scale-95"
                aria-label={item.label}
              >
                <span className="material-icons-outlined text-2xl">{item.icon}</span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] font-medium transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-foreground-muted hover:text-foreground"
              }`}
            >
              <span
                className={`material-icons-outlined text-xl transition-transform ${
                  isActive ? "" : "group-hover:-translate-y-0.5"
                }`}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
