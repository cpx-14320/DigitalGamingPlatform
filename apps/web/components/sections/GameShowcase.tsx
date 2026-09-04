import Carousel from "@/components/Carousel";
import SkeletonImage from "@/components/SkeletonImage";
import { games, listPrice } from "@/lib/data";

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="size-3.5 fill-amber-400" aria-hidden>
      <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6z" />
    </svg>
  );
}

export default function GameShowcase() {
  return (
    <section id="deals" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">本日特賣</h2>
          <p className="mt-1 text-sm text-gray-500">
            每日 00:00 更新，售完不補，把握折扣。
          </p>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
        >
          查看全部特賣 →
        </a>
      </div>

      <Carousel
        slideClassName="basis-[46%] sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
        gapClassName="gap-4"
        ariaLabel="本日特賣輪播"
      >
        {games.map((game) => {
          const original = listPrice(game.price, game.discount);
          return (
            <article
              key={game.id}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:border-gray-300 hover:shadow-md"
            >
              <div className="relative">
                <SkeletonImage
                  src={game.image}
                  alt={`${game.title} 商品圖`}
                  ratioClassName="aspect-[3/4]"
                  className="transition duration-500 group-hover:scale-105"
                />
                {game.discount ? (
                  <span className="absolute left-2 top-2 z-10 rounded bg-orange-500 px-1.5 py-0.5 text-xs font-bold text-white">
                    -{game.discount}%
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="rounded bg-gray-100 px-1.5 py-0.5">
                    {game.platform}
                  </span>
                  <span className="inline-flex items-center gap-0.5">
                    <Star />
                    {game.rating.toFixed(1)}
                  </span>
                </div>

                <h3 className="mt-1.5 line-clamp-1 text-sm font-semibold text-gray-900">
                  {game.title}
                </h3>
                <p className="text-xs text-gray-400">{game.genre}</p>

                <div className="mt-auto flex items-baseline gap-2 pt-2">
                  <span className="text-base font-bold text-orange-600">
                    NT${game.price.toLocaleString()}
                  </span>
                  {game.discount ? (
                    <span className="text-xs text-gray-400 line-through">
                      NT${original.toLocaleString()}
                    </span>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </Carousel>
    </section>
  );
}
