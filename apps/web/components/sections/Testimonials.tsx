import Carousel from "@/components/Carousel";
import SkeletonImage from "@/components/SkeletonImage";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section
      id="voices"
      className="border-b border-gray-200 bg-white py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-5 max-w-2xl">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            會員評價
          </h2>
        </div>

        <Carousel
          slideClassName="basis-full sm:basis-1/2 lg:basis-1/3"
          gapClassName="gap-4"
          autoPlayMs={5000}
          showArrows={false}
          ariaLabel="會員評價輪播"
        >
          {testimonials.map((t) => (
            /* href 之後換成實際導向頁面 */
            <a
              key={t.name}
              href="#"
              className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 transition hover:border-gray-300 hover:shadow-md"
            >
              <div className="mb-3 flex gap-0.5" aria-label="5 星評價">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className="size-4 fill-amber-400"
                    aria-hidden
                  >
                    <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6z" />
                  </svg>
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-gray-700">
                「{t.quote}」
              </p>
              <div className="mt-4 flex items-center gap-3">
                <SkeletonImage
                  src={t.avatar}
                  alt={t.name}
                  ratioClassName="size-9 shrink-0 rounded-full"
                  className="transition duration-500 group-hover:scale-105"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-900 transition group-hover:text-orange-600">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
