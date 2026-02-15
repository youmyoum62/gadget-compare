import Link from "next/link";
import { SITE_NAME } from "@/lib/utils/constants";

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 glass border-b border-border">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white shadow-md shadow-primary/20">
            G
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            {SITE_NAME}
          </span>
        </Link>
        <button
          type="button"
          className="rounded-full p-2 text-foreground-muted transition-colors hover:bg-background-secondary"
          aria-label="通知"
        >
          <span className="material-icons-outlined text-xl">notifications_none</span>
        </button>
      </div>
    </header>
  );
}
