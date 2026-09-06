"use client";

import { useState } from "react";

import Carousel from "@/components/Carousel";
import SkeletonImage from "@/components/SkeletonImage";
import TabBar from "@/components/tabs/TabBar";
import { featuredPicks } from "@/lib/data";

export default function FeaturedPicks() {
  const [l1Id, setL1Id] = useState(featuredPicks[0].id);
  const l1 = featuredPicks.find((c) => c.id === l1Id) ?? featuredPicks[0];

  const [l2Id, setL2Id] = useState(l1.subs[0].id);
  const l2 = l1.subs.find((s) => s.id === l2Id) ?? l1.subs[0];

  // 切換主分類時，子分類回到第一個
  const selectL1 = (id: string) => {
    setL1Id(id);
    const next = featuredPicks.find((c) => c.id === id);
    if (next) setL2Id(next.subs[0].id);
  };

  const showL2 = l1.subs.length > 1;

  return (
    <section id="featured" className="border-y border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">熱門推薦</h2>
          <a
            href="#"
            className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
          >
            view all →
          </a>
        </div>

        {/* L1：主分類（膠囊） */}
        <TabBar
          variant="segmented"
          ariaLabel="熱門推薦分類"
          idPrefix="featured-l1"
          tabs={featuredPicks.map((c) => ({ id: c.id, label: c.label }))}
          activeId={l1Id}
          onSelect={selectL1}
        />

        <div id="featured-l1-panel">
          {/* L2：子分類（底線）—— 只有一個子分類時隱藏 */}
          {showL2 && (
            <TabBar
              variant="underline"
              ariaLabel={`${l1.label}子分類`}
              idPrefix="featured-l2"
              tabs={l1.subs.map((s) => ({ id: s.id, label: s.label }))}
              activeId={l2.id}
              onSelect={setL2Id}
              className="mt-4"
            />
          )}

          <div
            id="featured-l2-panel"
            role="tabpanel"
            aria-labelledby={`featured-l2-tab-${l2.id}`}
            className="mt-6"
          >
            <Carousel
              key={`${l1.id}-${l2.id}`}
              /* lg：扣掉 5 個 gap-4（5rem）再除以 6，讓 6 欄完整呈現 */
              slideClassName="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-[calc((100%_-_5rem)/6)]"
              gapClassName="gap-3 sm:gap-4"
              ariaLabel={`${l2.label}輪播`}
              step={3}
            >
              {l2.items.slice(0, 6).map((item) => (
                /* href 之後換成實際導向頁面 */
                <a key={item.id} href={item.href} className="group block">
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition group-hover:border-gray-300 group-hover:shadow-md">
                    <SkeletonImage
                      src={item.image}
                      alt={`${item.title} 圖片`}
                      className="transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-2 truncate text-sm font-medium text-gray-900 transition group-hover:text-orange-600">
                    {item.title}
                  </h3>
                </a>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
