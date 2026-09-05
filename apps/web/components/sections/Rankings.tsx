import SkeletonImage from "@/components/SkeletonImage";
import { rankBlocks } from "@/lib/data";

export default function Rankings() {
  return (
    <section id="rankings" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">排行榜</h2>
        <a
          href="#"
          className="shrink-0 text-sm font-medium text-orange-600 transition hover:text-orange-700"
        >
          view all →
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {rankBlocks.map((block) => (
          <div
            key={block.id}
            className="rounded-xl border border-gray-200 bg-white p-4"
          >
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              {block.label}
            </h3>

            {/* 手機版：參考編輯精選專題的條列式，一列 2 欄、共 4 列（8 筆） */}
            <ul className="grid grid-cols-2 gap-3 sm:hidden">
              {block.items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm transition hover:border-gray-300"
                >
                  <SkeletonImage
                    src={item.image}
                    alt={`${item.title} 商品圖`}
                    ratioClassName="size-14 shrink-0 rounded-lg"
                  />
                  <p className="min-w-0 self-center line-clamp-2 text-xs font-medium text-gray-900">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>

            {/* sm 以上：維持原本的卡片式 4 欄 */}
            <ul className="grid grid-cols-4 gap-3 max-sm:hidden">
              {block.items.map((item) => (
                <li key={item.id} className="group">
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <SkeletonImage
                      src={item.image}
                      alt={`${item.title} 商品圖`}
                      className="transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-xs font-medium text-gray-900">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
