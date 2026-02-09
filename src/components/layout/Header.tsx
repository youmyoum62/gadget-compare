import Link from "next/link";
import { SITE_NAME } from "@/lib/utils/constants";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          {SITE_NAME}
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/products" className="hover:text-gray-900">
            商品一覧
          </Link>
          <Link href="/compare" className="hover:text-gray-900">
            比較記事
          </Link>
          <Link href="/categories" className="hover:text-gray-900">
            カテゴリ
          </Link>
        </nav>
      </div>
    </header>
  );
}
