import {
  AMAZON_AFFILIATE_DISCLAIMER_JP,
  AMAZON_AFFILIATE_DISCLAIMER_EN,
  AMAZON_TRADEMARK_NOTICE,
} from "@/lib/utils/constants";

interface AffiliateDisclosureProps {
  variant?: "footer" | "inline";
}

/**
 * Amazon Associates required disclosure.
 * Must appear on every page with affiliate links.
 */
export function AffiliateDisclosure({
  variant = "footer",
}: AffiliateDisclosureProps) {
  if (variant === "inline") {
    return (
      <div className="mb-6 rounded-md border border-gray-200 bg-gray-50 p-3 text-sm text-gray-600">
        <p>{AMAZON_AFFILIATE_DISCLAIMER_JP}</p>
        <p className="mt-1 text-xs text-gray-500">
          {AMAZON_AFFILIATE_DISCLAIMER_EN}
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 border-t pt-4 text-xs text-gray-500">
      <p>{AMAZON_TRADEMARK_NOTICE}</p>
      <p className="mt-1">{AMAZON_AFFILIATE_DISCLAIMER_JP}</p>
    </div>
  );
}
