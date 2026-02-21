import type { ProductReport as ProductReportType } from "@/types/database";

interface ProductReportProps {
  report: ProductReportType;
}

export function ProductReport({ report }: ProductReportProps) {
  const meritDetails = report.merit_details as
    | Array<{ title: string; description: string }>
    | null;
  const demeritDetails = report.demerit_details as
    | Array<{ title: string; description: string }>
    | null;

  return (
    <div className="space-y-6">
      <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-foreground">
        <span className="material-icons-outlined text-primary">analytics</span>
        Detail Report
      </h2>

      {/* Specs Analysis */}
      {report.specs_analysis && (
        <section className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
          <div className="border-b border-border-light bg-background-secondary p-5">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <span className="material-icons-outlined text-primary">
                settings
              </span>
              Specs Analysis
            </h3>
          </div>
          <div
            className="prose prose-sm max-w-none p-5 text-foreground-muted"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(report.specs_analysis) }}
          />
        </section>
      )}

      {/* Merit Details */}
      {meritDetails && meritDetails.length > 0 && (
        <section className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
          <div className="border-b border-emerald-100 bg-emerald-50/50 p-5">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-emerald-700">
              <span className="material-icons-outlined">thumb_up</span>
              Merits
            </h3>
          </div>
          <div className="divide-y divide-border-light">
            {meritDetails.map((merit, i) => (
              <div key={i} className="p-5">
                <h4 className="mb-2 flex items-start gap-2 font-bold text-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <span className="material-icons-outlined text-[10px] font-bold">
                      check
                    </span>
                  </span>
                  {merit.title}
                </h4>
                <p className="ml-7 text-sm leading-relaxed text-foreground-muted">
                  {merit.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Demerit Details */}
      {demeritDetails && demeritDetails.length > 0 && (
        <section className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
          <div className="border-b border-rose-100 bg-rose-50/50 p-5">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-rose-700">
              <span className="material-icons-outlined">thumb_down</span>
              Demerits
            </h3>
          </div>
          <div className="divide-y divide-border-light">
            {demeritDetails.map((demerit, i) => (
              <div key={i} className="p-5">
                <h4 className="mb-2 flex items-start gap-2 font-bold text-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                    <span className="material-icons-outlined text-[10px] font-bold">
                      close
                    </span>
                  </span>
                  {demerit.title}
                </h4>
                <p className="ml-7 text-sm leading-relaxed text-foreground-muted">
                  {demerit.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Competitive Comparison */}
      {report.competitive_comparison && (
        <section className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
          <div className="border-b border-border-light bg-background-secondary p-5">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <span className="material-icons-outlined text-primary">
                compare_arrows
              </span>
              Competitive Comparison
            </h3>
          </div>
          <div
            className="prose prose-sm max-w-none p-5 text-foreground-muted"
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(report.competitive_comparison),
            }}
          />
        </section>
      )}

      {/* Recommended Users */}
      {report.recommended_users && (
        <section className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
          <div className="border-b border-border-light bg-background-secondary p-5">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <span className="material-icons-outlined text-primary">
                people
              </span>
              Recommended For
            </h3>
          </div>
          <div
            className="prose prose-sm max-w-none p-5 text-foreground-muted"
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(report.recommended_users),
            }}
          />
        </section>
      )}

      {/* Detailed Verdict */}
      {report.verdict && (
        <section className="overflow-hidden rounded-2xl border-2 border-primary/20 bg-primary-soft shadow-card">
          <div className="border-b border-primary/10 p-5">
            <h3 className="flex items-center gap-2 font-display text-lg font-bold text-primary">
              <span className="material-icons-outlined">verified</span>
              Detailed Verdict
            </h3>
          </div>
          <div className="p-5">
            <p className="leading-relaxed text-foreground">{report.verdict}</p>
          </div>
        </section>
      )}
    </div>
  );
}

/**
 * Simple markdown to HTML converter for AI-generated content.
 * Handles: headings (##, ###), bold (**), lists (- ), line breaks.
 */
function markdownToHtml(md: string): string {
  return md
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("### ")) {
        return `<h4 class="font-bold text-foreground mt-4 mb-2">${escapeHtml(trimmed.slice(4))}</h4>`;
      }
      if (trimmed.startsWith("## ")) {
        return `<h3 class="font-bold text-foreground mt-4 mb-2">${escapeHtml(trimmed.slice(3))}</h3>`;
      }
      if (trimmed.startsWith("- ")) {
        const content = trimmed.slice(2).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
        return `<li class="ml-4 list-disc">${content}</li>`;
      }
      if (trimmed === "") return "<br />";
      const content = trimmed.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      return `<p>${content}</p>`;
    })
    .join("\n");
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
