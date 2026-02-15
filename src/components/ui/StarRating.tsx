interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md" | "lg";
}

export function StarRating({ rating, reviewCount, size = "md" }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className="flex items-center gap-1.5">
      <div className={`flex text-amber ${sizeClasses[size]}`} aria-label={`${rating}点`}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`} className="material-icons-outlined">star</span>
        ))}
        {hasHalf && <span className="material-icons-outlined">star_half</span>}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`} className="material-icons-outlined">star_border</span>
        ))}
      </div>
      <span className={`font-medium text-foreground ${textSizeClasses[size]}`}>
        {rating.toFixed(1)}
      </span>
      {reviewCount != null && (
        <span className={`text-foreground-muted ${textSizeClasses[size]}`}>
          ({reviewCount}件)
        </span>
      )}
    </div>
  );
}
