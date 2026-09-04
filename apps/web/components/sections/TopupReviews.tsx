import { type QuickTopupGame } from "@/lib/data";
import ActivityCard from "@/components/topup/ActivityCard";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} 星`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`size-3.5 ${
            i < rating ? "fill-amber-400" : "fill-gray-200"
          }`}
          aria-hidden
        >
          <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function TopupReviews({
  reviews,
  rating,
  ratingCount,
}: {
  reviews: QuickTopupGame["reviews"];
  rating: number;
  ratingCount: number;
}) {
  return (
    <ActivityCard id="reviews" title="玩家評價">
      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="text-3xl font-black text-gray-900">
          {rating.toFixed(1)}
        </span>
        <div>
          <Stars rating={Math.round(rating)} />
          <p className="mt-0.5 text-xs text-gray-400">
            共 {ratingCount.toLocaleString()} 則評價
          </p>
        </div>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {reviews.map((r) => (
          <li
            key={r.name}
            className="rounded-lg border border-gray-200 bg-gray-50 p-4"
          >
            <div className="flex items-center gap-3">
              <img
                src={r.avatar}
                alt={r.name}
                className="size-9 rounded-full object-cover"
                loading="lazy"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    {r.name}
                  </span>
                  <span className="text-xs text-gray-400">{r.date}</span>
                </div>
                <Stars rating={r.rating} />
              </div>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              「{r.text}」
            </p>
          </li>
        ))}
      </ul>
    </ActivityCard>
  );
}
