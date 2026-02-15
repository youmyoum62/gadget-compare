import { calculateScore } from "@/lib/utils/format";

interface ScoreBadgeProps {
  rating: number | null | undefined;
  size?: "sm" | "md" | "lg";
}

export function ScoreBadge({ rating, size = "md" }: ScoreBadgeProps) {
  const score = calculateScore(rating);

  if (score == null) return null;

  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-12 w-12 text-base",
    lg: "h-16 w-16 text-xl",
  };

  return (
    <div
      className={`score-badge flex items-center justify-center rounded-full font-bold text-white shadow-lg shadow-primary/40 ${sizeClasses[size]}`}
      aria-label={`スコア ${score}点`}
    >
      {score.toFixed(1)}
    </div>
  );
}
