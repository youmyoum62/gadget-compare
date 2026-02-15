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
    <div className="space-y-8">
      {specEntries.length > 0 && (
        <div>
          <h3 className="mb-5 px-1 font-display text-lg font-bold text-foreground">
            主な仕様
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {specEntries.map(([key, value]) => (
              <div
                key={key}
                className="flex flex-col rounded-xl bg-background-secondary p-4 transition-colors hover:border-border-light"
              >
                <span className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-foreground-muted">
                  {key}
                </span>
                <span className="font-display text-sm font-semibold text-foreground">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {features && features.length > 0 && (
        <div>
          <h3 className="mb-4 px-1 font-display text-lg font-bold text-foreground">
            特徴
          </h3>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, i) => (
              <span
                key={i}
                className="rounded-full bg-primary-soft px-3 py-1.5 text-xs font-medium text-primary"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
