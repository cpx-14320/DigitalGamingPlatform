import { type QuickTopupGame } from "@/lib/data";

// 快速儲值頁左欄：遊戲身分卡（封面 + 評分 + 信任小標）
export default function TopupGameCard({ game }: { game: QuickTopupGame }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <img
        src={game.cover}
        alt={`${game.name} 封面`}
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="p-5">
        <h1 className="text-lg font-bold text-gray-900">{game.name}</h1>
        <p className="mt-0.5 text-xs text-gray-500">{game.publisher}</p>

        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex gap-0.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 20 20"
                className={`size-4 ${
                  i < Math.round(game.rating)
                    ? "fill-amber-400"
                    : "fill-gray-200"
                }`}
              >
                <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-900">
            {game.rating.toFixed(1)}
          </span>
          <span className="text-xs text-gray-400">
            （{game.ratingCount.toLocaleString()} 則評價）
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">{game.blurb}</p>

        <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
          {game.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
              <svg
                viewBox="0 0 24 24"
                className="size-4 shrink-0 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden
              >
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
