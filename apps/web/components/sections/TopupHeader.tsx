import { type QuickTopupGame } from "@/lib/data";

// 快速儲值頁頂部：橫式主視覺 + 疊在左下的遊戲 icon + 名稱／發行商／信任小標
export default function TopupHeader({ game }: { game: QuickTopupGame }) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-900">
      <img
        src={game.banner}
        alt={`${game.name} 主視覺`}
        className="aspect-[16/6] w-full object-cover sm:aspect-[16/3]"
      />

      {/* 底部漸層，讓疊層文字可讀 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end gap-4 p-4 sm:gap-5 sm:p-6">
        <img
          src={game.cover}
          alt={`${game.name} 圖示`}
          className="size-24 shrink-0 rounded-2xl border-4 border-white object-cover shadow-lg sm:size-32"
        />
        <div className="min-w-0 pb-1">
          <h1 className="truncate text-xl font-bold text-white sm:text-2xl">
            {game.name}
          </h1>
          <p className="mt-0.5 text-xs text-white/70 sm:text-sm">
            {game.publisher}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {game.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium text-white sm:text-xs"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
