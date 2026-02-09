import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/database";
import { formatPrice } from "@/lib/utils/format";

interface ComparisonTableProps {
  products: Product[];
}

export function ComparisonTable({ products }: ComparisonTableProps) {
  if (products.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] text-sm">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="py-3 text-left font-semibold text-gray-600">
              項目
            </th>
            {products.map((p) => (
              <th key={p.id} className="px-3 py-3 text-center">
                <Link
                  href={`/products/${p.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {p.brand ?? ""} {p.title.slice(0, 30)}
                  {p.title.length > 30 ? "..." : ""}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Image row */}
          <tr className="border-b border-gray-100">
            <td className="py-3 font-medium text-gray-600">画像</td>
            {products.map((p) => (
              <td key={p.id} className="px-3 py-3 text-center">
                {p.image_url_small ? (
                  <Image
                    src={p.image_url_small}
                    alt={p.title}
                    width={80}
                    height={80}
                    className="mx-auto object-contain"
                  />
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
            ))}
          </tr>

          {/* Price row */}
          <tr className="border-b border-gray-100">
            <td className="py-3 font-medium text-gray-600">価格</td>
            {products.map((p) => (
              <td key={p.id} className="px-3 py-3 text-center font-bold">
                {p.price_amount != null
                  ? formatPrice(p.price_amount, p.price_currency)
                  : "-"}
              </td>
            ))}
          </tr>

          {/* Rating row */}
          <tr className="border-b border-gray-100">
            <td className="py-3 font-medium text-gray-600">評価</td>
            {products.map((p) => (
              <td key={p.id} className="px-3 py-3 text-center">
                {p.amazon_rating != null ? (
                  <span>
                    {"★".repeat(Math.floor(p.amazon_rating))}{" "}
                    {p.amazon_rating}
                  </span>
                ) : (
                  "-"
                )}
              </td>
            ))}
          </tr>

          {/* Brand row */}
          <tr className="border-b border-gray-100">
            <td className="py-3 font-medium text-gray-600">ブランド</td>
            {products.map((p) => (
              <td key={p.id} className="px-3 py-3 text-center">
                {p.brand ?? "-"}
              </td>
            ))}
          </tr>

          {/* AI Verdict row */}
          <tr className="border-b border-gray-100">
            <td className="py-3 font-medium text-gray-600">AI評価</td>
            {products.map((p) => (
              <td key={p.id} className="px-3 py-3 text-center text-xs">
                {p.ai_verdict ?? "-"}
              </td>
            ))}
          </tr>

          {/* Amazon link row */}
          <tr>
            <td className="py-3 font-medium text-gray-600">リンク</td>
            {products.map((p) => (
              <td key={p.id} className="px-3 py-3 text-center">
                <a
                  href={p.affiliate_url}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="inline-block rounded bg-amber-400 px-3 py-1.5 text-xs font-bold text-black hover:bg-amber-500"
                >
                  Amazon
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
