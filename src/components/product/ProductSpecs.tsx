interface ProductSpecsProps {
  specs: Record<string, string>;
  features?: string[] | null;
}

export function ProductSpecs({ specs, features }: ProductSpecsProps) {
  const specEntries = Object.entries(specs);

  if (specEntries.length === 0 && (!features || features.length === 0)) {
    return null;
  }

  return (
    <div className="space-y-4">
      {specEntries.length > 0 && (
        <div>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            主な仕様
          </h3>
          <table className="w-full text-sm">
            <tbody>
              {specEntries.map(([key, value]) => (
                <tr key={key} className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium text-gray-600">
                    {key}
                  </td>
                  <td className="py-2 text-gray-900">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {features && features.length > 0 && (
        <div>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">特徴</h3>
          <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
