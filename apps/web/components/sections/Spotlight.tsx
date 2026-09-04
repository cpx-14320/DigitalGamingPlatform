import Carousel from "@/components/Carousel";
import SkeletonImage from "@/components/SkeletonImage";
import { spotlightImages, spotlightRows, type SpotlightRow } from "@/lib/data";

const ITEMS_PER_SLIDE = 6; // 2 欄 × 3 列

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function Spotlight() {
  const rowSlides = chunk(spotlightRows, ITEMS_PER_SLIDE);

  return (
    <section id="spotlight" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-5 max-w-2xl">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          編輯精選專題
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          左側主題與右側清單皆可獨立輪播，右側每則顯示 6 項（2 欄 × 3 列）。
        </p>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-5 lg:items-stretch">
        {/* 左：主題圖輪播（占 2/5）；圖維持 16:9，高度差由 figcaption 吸收 */}
        <Carousel
          ariaLabel="專題主圖輪播"
          className="lg:col-span-2 lg:h-full"
          slideClassName="basis-full"
          gapClassName="gap-6"
          autoPlayMs={5000}
          fillHeight
          showArrows={false}
        >
          {spotlightImages.map((img) => (
            <figure
              key={img.id}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <SkeletonImage
                src={img.image}
                alt={img.caption}
                ratioClassName="aspect-video shrink-0"
              />
              <figcaption className="flex flex-1 items-center px-4 py-3 text-sm font-medium text-gray-800">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </Carousel>

        {/* 右：條列輪播（占 3/5），一則 6 項＝2 欄 × 3 列（1:1 圖 + 內文）*/}
        <Carousel
          ariaLabel="專題項目輪播"
          className="lg:col-span-3"
          slideClassName="basis-full"
          gapClassName="gap-6"
          showArrows={false}
        >
          {rowSlides.map((rows, i) => (
            <ul key={i} className="grid gap-3 sm:grid-cols-2">
              {rows.map((row: SpotlightRow) => (
                <li
                  key={row.id}
                  className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:border-gray-300"
                >
                  <SkeletonImage
                    src={row.image}
                    alt={row.title}
                    ratioClassName="size-20 shrink-0 rounded-lg sm:size-[72px]"
                  />
                  <div className="min-w-0 self-center">
                    <h3 className="truncate text-sm font-semibold text-gray-900">
                      {row.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500">
                      {row.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
