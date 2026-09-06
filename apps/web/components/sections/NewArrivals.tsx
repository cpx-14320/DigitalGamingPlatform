"use client";

import { useState } from "react";

import SkeletonImage from "@/components/SkeletonImage";
import { newArrivals } from "@/lib/data";

// < lg（手機／平板）：3 欄 × 2 列 = 6 項
// lg 以上（電腦）：6 欄 × 1 列 = 6 項
// 每按一次「顯示更多」多 6 項
const PAGE_SIZE = 6;

export default function NewArrivals() {
  const [steps, setSteps] = useState(1);

  const visible = steps * PAGE_SIZE;
  const shown = newArrivals.slice(0, visible);
  const remaining = Math.max(newArrivals.length - visible, 0);

  return (
    <section id="arrivals" className="border-y border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              新品上架
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
          >
            view all →
          </a>
        </div>

        <ul className="grid grid-cols-3 gap-4 lg:grid-cols-6">
          {shown.map((item) => (
            <li key={item.id}>
              {/* href 之後換成實際導向頁面 */}
              <a href="#" className="group block">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition group-hover:border-gray-300 group-hover:shadow-md">
                  <SkeletonImage
                    src={item.image}
                    alt={`${item.title} 商品圖`}
                    className="transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 line-clamp-2 text-sm font-medium text-gray-900 transition group-hover:text-orange-600">
                  {item.title}
                </h3>
              </a>
            </li>
          ))}
        </ul>

        {remaining > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setSteps((s) => s + 1)}
              className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
            >
              顯示更多
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
