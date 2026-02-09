import { AffiliateDisclosure } from "@/components/seo/AffiliateDisclosure";
import { SITE_NAME } from "@/lib/utils/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div>
            <p className="font-semibold text-gray-900">{SITE_NAME}</p>
            <p className="mt-1 text-sm text-gray-500">
              ガジェット製品の比較・レビューサイト
            </p>
          </div>
          <div className="text-sm text-gray-500">
            <p>&copy; {year} {SITE_NAME}. All rights reserved.</p>
          </div>
        </div>
        <AffiliateDisclosure variant="footer" />
      </div>
    </footer>
  );
}
