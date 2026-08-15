import { StarIcon } from "hugeicons-react";

export default function StarRating({
  rating,
  count,
  size = 14,
}: {
  rating: number;
  count?: number;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            size={size}
            className={i < Math.round(rating) ? "fill-peach text-peach" : "text-line"}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-espresso-soft">
        {rating.toFixed(1)}
        {count !== undefined ? ` (${count})` : ""}
      </span>
    </div>
  );
}
