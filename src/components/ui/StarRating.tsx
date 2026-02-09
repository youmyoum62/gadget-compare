interface StarRatingProps {
  rating: number;
  reviewCount?: number;
}

export function StarRating({ rating, reviewCount }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex text-amber-400" aria-label={`${rating}点`}>
        {"★".repeat(fullStars)}
        {hasHalf && "★"}
        {"☆".repeat(emptyStars)}
      </div>
      <span className="text-sm font-medium text-gray-700">{rating}</span>
      {reviewCount != null && (
        <span className="text-sm text-gray-500">({reviewCount}件)</span>
      )}
    </div>
  );
}
