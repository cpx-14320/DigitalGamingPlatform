import Carousel from "@/components/Carousel";
import SkeletonImage from "@/components/SkeletonImage";
import { spotlightImages, spotlightRows, type SpotlightRow } from "@/lib/data";

const ITEMS_PER_SLIDE = 6; // sm 以上：2 欄 × 3 列
const MOBILE_ITEMS_PER_SLIDE = 3; // 手機版：1 欄 × 3 列

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function SpotlightRowItem({ row }: { row: SpotlightRow }) {
  return (
    <li>
      {/* href 之後換成實際導向頁面 */}
      <a
        href="#"
        className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:border-gray-300 hover:shadow-md"
      >
        <SkeletonImage
          src={row.image}
          alt={row.title}
          ratioClassName="size-20 shrink-0 rounded-lg sm:size-[72px]"
          className="transition duration-500 group-hover:scale-105"
        />
        <div className="min-w-0 self-center">
          <h3 className="truncate text-sm font-semibold text-gray-900 transition group-hover:text-orange-600">
            {row.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500">
            {row.text}
          </p>
        </div>
      </a>
    </li>
  );
}

export default function Spotlight() {
  const rowSlides = chunk(spotlightRows, ITEMS_PER_SLIDE);
  const mobileRowSlides = chunk(spotlightRows, MOBILE_ITEMS_PER_SLIDE);

  return (
    <section
      id="spotlight"
      className="border-t border-gray-200 bg-white py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              駐站創作者
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
          >
            view all →
          </a>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-5 lg:items-stretch">
          {/* 左：主題圖輪播（占 2/5）；圖維持 16:9，高度差由標題列吸收 */}
          <Carousel
            ariaLabel="專題主圖輪播"
            className="min-w-0 lg:col-span-2 lg:h-full"
            slideClassName="basis-full"
            gapClassName="gap-6"
            autoPlayMs={5000}
            fillHeight
            showArrows={false}
          >
            {spotlightImages.map((img) => (
              /* href 之後換成實際導向頁面 */
              <a
                key={img.id}
                href="#"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:border-gray-300 hover:shadow-md"
              >
                <SkeletonImage
                  src={img.image}
                  alt={img.caption}
                  ratioClassName="aspect-video shrink-0"
                  className="transition duration-500 group-hover:scale-105"
                />
                <div className="flex flex-1 items-center px-4 py-3 text-sm font-medium text-gray-800 transition group-hover:text-orange-600">
                  {img.caption}
                </div>
              </a>
            ))}
          </Carousel>

          {/* 右：條列輪播（占 3/5）。手機版一則 3 項＝1 欄 × 3 列，sm 以上一則 6 項＝2 欄 × 3 列 */}
          <div className="min-w-0 sm:hidden lg:col-span-3">
            <Carousel
              ariaLabel="專題項目輪播"
              slideClassName="basis-full"
              gapClassName="gap-6"
              showArrows={false}
            >
              {mobileRowSlides.map((rows, i) => (
                <ul key={i} className="grid gap-3">
                  {rows.map((row) => (
                    <SpotlightRowItem key={row.id} row={row} />
                  ))}
                </ul>
              ))}
            </Carousel>
          </div>
          <div className="hidden min-w-0 sm:block lg:col-span-3">
            <Carousel
              ariaLabel="專題項目輪播"
              slideClassName="basis-full"
              gapClassName="gap-6"
              showArrows={false}
            >
              {rowSlides.map((rows, i) => (
                <ul key={i} className="grid gap-3 sm:grid-cols-2">
                  {rows.map((row) => (
                    <SpotlightRowItem key={row.id} row={row} />
                  ))}
                </ul>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
