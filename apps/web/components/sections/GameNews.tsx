import Carousel from "@/components/Carousel";
import SkeletonImage from "@/components/SkeletonImage";
import { gameNews } from "@/lib/data";

export default function GameNews() {
  return (
    <section id="news" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            遊戲新聞
          </h2>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
        >
          view all →
        </a>
      </div>

      <Carousel
        /* lg：扣掉 2 個 gap-4（2rem）再除以 3，完整呈現 3 欄 */
        slideClassName="basis-[82%] sm:basis-[55%] lg:basis-[calc((100%_-_2rem)/3)]"
        gapClassName="gap-4"
        autoPlayMs={4500}
        ariaLabel="遊戲新聞輪播"
      >
        {gameNews.map((item) => (
          <a
            key={item.id}
            href="#"
            className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:border-gray-300 hover:shadow-md"
          >
            <SkeletonImage
              src={item.image}
              alt={item.title}
              ratioClassName="aspect-[16/9]"
              className="transition duration-500 group-hover:scale-105"
            />
            <div className="px-4 py-3">
              <time className="text-xs text-gray-400" dateTime={item.date}>
                {item.date}
              </time>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500">
                {item.summary}
              </p>
            </div>
          </a>
        ))}
      </Carousel>
    </section>
  );
}
