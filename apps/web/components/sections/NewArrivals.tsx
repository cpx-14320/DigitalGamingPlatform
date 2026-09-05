"use client";

import { useEffect, useState } from "react";

import SkeletonImage from "@/components/SkeletonImage";
import { newArrivals } from "@/lib/data";

// 手機版：3 欄 × 2 列 = 6 項；sm 以上：6 欄 × 2 列 = 12 項
const MOBILE_PAGE_SIZE = 6;
const DESKTOP_PAGE_SIZE = 12;

export default function NewArrivals() {
  // SSR 先以桌機值渲染，掛載後再依螢幕寬度校正，避免 hydration 不一致
  const [pageSize, setPageSize] = useState(DESKTOP_PAGE_SIZE);
  const [steps, setSteps] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)"); // < sm
    const apply = () =>
      setPageSize(mq.matches ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const visible = steps * pageSize;
  const shown = newArrivals.slice(0, visible);
  const remaining = Math.max(newArrivals.length - visible, 0);

  return (
    <section id="arrivals" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">新品上架</h2>
          <p className="mt-1 text-sm text-gray-500">
            本週新增的正版序號與 DLC，手機版預設顯示 6 項、sm 以上顯示 12 項。
          </p>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
        >
          view all →
        </a>
      </div>

      <ul className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
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
            onClick={() => setSteps((s) => s + 1)}
            className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
          >
            顯示更多（剩餘 {remaining} 項）
          </button>
        </div>
      )}
    </section>
  );
}
