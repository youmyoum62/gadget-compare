import {
  AMAZON_AFFILIATE_DISCLAIMER_JP,
  AMAZON_AFFILIATE_DISCLAIMER_EN,
  AMAZON_TRADEMARK_NOTICE,
} from "@/lib/utils/constants";

interface AffiliateDisclosureProps {
  variant?: "footer" | "inline";
}

export function AffiliateDisclosure({
  variant = "footer",
}: AffiliateDisclosureProps) {
  if (variant === "inline") {
    return (
      <div className="mb-6 flex items-start gap-3 rounded-2xl border border-border bg-background-secondary p-4 text-sm text-foreground-muted">
        <span className="material-icons-outlined text-primary flex-shrink-0">info</span>
        <div>
          <p className="leading-relaxed">{AMAZON_AFFILIATE_DISCLAIMER_JP}</p>
          <p className="mt-2 text-xs text-foreground-muted">
            {AMAZON_AFFILIATE_DISCLAIMER_EN}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 border-t border-border pt-4 text-xs text-foreground-muted">
      <p className="leading-relaxed">{AMAZON_TRADEMARK_NOTICE}</p>
      <p className="mt-2 leading-relaxed">{AMAZON_AFFILIATE_DISCLAIMER_JP}</p>
    </div>
  );
}
