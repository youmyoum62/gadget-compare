import Link from "next/link";

interface EmptyStateProps {
  icon?: string;
  message: string;
  actionHref?: string;
  actionLabel?: string;
}

export function EmptyState({
  icon = "inbox",
  message,
  actionHref,
  actionLabel,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <span className="material-icons-outlined mb-4 text-6xl text-foreground-muted opacity-50">
        {icon}
      </span>
      <p className="mb-6 text-sm text-foreground-muted">{message}</p>
      {actionHref && actionLabel && (
        <Link
          href={actionHref}
          className="rounded-xl bg-primary px-6 py-2.5 font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
