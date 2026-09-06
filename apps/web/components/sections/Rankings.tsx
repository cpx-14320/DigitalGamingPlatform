"use client";

import { useState } from "react";

import SkeletonImage from "@/components/SkeletonImage";
import { rankBlocks } from "@/lib/data";

export default function Rankings() {
  // 只影響手機版：以頁籤切換兩個排行，縮短版面
  const [activeId, setActiveId] = useState(rankBlocks[0].id);
  const activeBlock =
    rankBlocks.find((block) => block.id === activeId) ?? rankBlocks[0];

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

      {/* 手機版：頁籤切換，點文字換內容（sm 以上完全不套用） */}
      <div className="sm:hidden">
        <div
          role="tablist"
          aria-label="排行榜"
          className="mb-4 flex gap-1 overflow-x-auto scrollbar-hide border-b border-gray-200"
        >
          {rankBlocks.map((block) => {
            const selected = block.id === activeId;
            return (
              <button
                key={block.id}
                type="button"
                role="tab"
                id={`rank-tab-${block.id}`}
                aria-selected={selected}
                aria-controls={`rank-panel-${block.id}`}
                onClick={() => setActiveId(block.id)}
                className={`-mb-px shrink-0 border-b-2 px-3.5 py-2.5 text-sm font-medium transition ${
                  selected
                    ? "border-orange-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {block.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`rank-panel-${activeBlock.id}`}
          aria-labelledby={`rank-tab-${activeBlock.id}`}
        >
          <ul className="grid grid-cols-2 gap-3">
            {activeBlock.items.map((item) => (
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
        </div>
      </div>

      {/* sm 以上：維持原本左右並排、兩塊皆顯示的卡片式排行 */}
      <div className="grid gap-6 max-sm:hidden lg:grid-cols-2">
        {rankBlocks.map((block) => (
          <div
            key={block.id}
            className="rounded-xl border border-gray-200 bg-white p-4"
          >
            <h3 className="mb-3 text-sm font-semibold text-gray-900">
              {block.label}
            </h3>
            <ul className="grid grid-cols-4 gap-3">
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
