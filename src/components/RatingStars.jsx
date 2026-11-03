export default function RatingStars({ rating = 5, size = "md" }) {
  const roundedRating = Math.round(rating);
  const sizeClasses = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <div className="flex items-center gap-1" aria-label={`Rating: ${rating} dari 5 bintang`}>
      <div className="flex text-amber-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            viewBox="0 0 24 24"
            className={`${sizeClasses} ${
              star <= roundedRating ? "fill-amber-400 text-amber-500" : "fill-stone-200 text-stone-300"
            }`}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <span className="text-xs font-semibold text-stone-700 ml-0.5">
        {Number(rating).toFixed(1)}
      </span>
    </div>
  );
}

