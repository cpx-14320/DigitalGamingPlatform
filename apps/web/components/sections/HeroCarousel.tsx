import Carousel from "@/components/Carousel";
import SkeletonImage from "@/components/SkeletonImage";
import { heroSlides } from "@/lib/data";

export default function HeroCarousel() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <Carousel
        autoPlayMs={6000}
        ariaLabel="首頁主打輪播"
        gapClassName="gap-4"
        showArrows={false}
      >
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:h-[380px] md:h-[420px]"
          >
            <SkeletonImage
              src={slide.image}
              alt=""
              fill
              ratioClassName="absolute inset-0"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
            <div className="relative flex h-full max-w-lg flex-col justify-center px-6 sm:px-10">
              <span className="mb-3 inline-flex w-fit items-center rounded bg-orange-500 px-2.5 py-1 text-xs font-semibold text-white">
                {slide.eyebrow}
              </span>
              <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                {slide.title}
              </h1>
              <p className="mt-3 text-sm text-white/85 sm:text-base">
                {slide.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#deals"
                  className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  前往選購
                </a>
                <a
                  href="#categories"
                  className="rounded-lg bg-white/95 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-white"
                >
                  瀏覽分類
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
