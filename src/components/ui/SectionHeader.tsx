import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  href?: string;
  linkText?: string;
}

export function SectionHeader({ title, href, linkText = "すべて見る" }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between px-1">
      <h2 className="font-display text-xs font-bold uppercase tracking-widest text-foreground-muted">
        {title}
      </h2>
      {href && (
        <Link
          href={href}
          className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}
