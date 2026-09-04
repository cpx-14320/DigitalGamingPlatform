"use client";

import { useState } from "react";

import SkeletonImage from "@/components/SkeletonImage";
import { newArrivals } from "@/lib/data";

// 電腦版一列 6 欄、兩列為一頁
const PAGE_SIZE = 12;

export default function NewArrivals() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = newArrivals.slice(0, visible);
  const remaining = newArrivals.length - visible;

  return (
    <section id="arrivals" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">新品上架</h2>
          <p className="mt-1 text-sm text-gray-500">
            本週新增的正版序號與 DLC，預設顯示 12 項。
          </p>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
        >
          view all →
        </a>
      </div>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {shown.map((item) => (
          <li key={item.id} className="group">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition group-hover:border-gray-300 group-hover:shadow-md">
              <SkeletonImage
                src={item.image}
                alt={`${item.title} 商品圖`}
                className="transition duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 line-clamp-2 text-sm font-medium text-gray-900">
              {item.title}
            </h3>
          </li>
        ))}
      </ul>

      {remaining > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
          >
            顯示更多（剩餘 {remaining} 項）
          </button>
        </div>
      )}
    </section>
  );
}
