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
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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
