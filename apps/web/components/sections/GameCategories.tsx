"use client";

import { useState } from "react";

import Carousel from "@/components/Carousel";
import SkeletonImage from "@/components/SkeletonImage";
import { gameCategories } from "@/lib/data";

export default function GameCategories() {
  const [activeId, setActiveId] = useState(gameCategories[0].id);
  const current =
    gameCategories.find((c) => c.id === activeId) ?? gameCategories[0];

  return (
    <section
      id="categories"
      className="border-t border-gray-200 bg-white py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              儲值教學
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              依平台與類型瀏覽，點擊頁籤切換。
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
          >
            view all →
          </a>
        </div>

        <div
          role="tablist"
          aria-label="儲值教學"
          className="mb-6 flex gap-1 overflow-x-auto scrollbar-hide border-b border-gray-200"
        >
          {gameCategories.map((category) => {
            const selected = category.id === activeId;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`tab-${category.id}`}
                aria-selected={selected}
                aria-controls={`panel-${category.id}`}
                onClick={() => setActiveId(category.id)}
                className={`-mb-px shrink-0 border-b-2 px-3.5 py-2.5 text-sm font-medium transition ${
                  selected
                    ? "border-orange-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
        >
          <Carousel
            key={current.id}
            /* lg：扣掉 5 個 gap-4（5rem）再除以 6，讓 6 欄完整呈現、不露出第 7 欄的半張 */
            slideClassName="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-[calc((100%_-_5rem)/6)]"
            gapClassName="gap-3 sm:gap-4"
            ariaLabel={`${current.label}輪播`}
            step={3}
          >
            {current.games.slice(0, 6).map((game) => (
              <article key={game.id} className="group">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition group-hover:border-gray-300 group-hover:shadow-md">
                  <SkeletonImage
                    src={game.image}
                    alt={`${game.title} 商品圖`}
                    className="transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 truncate text-sm font-medium text-gray-900">
                  {game.title}
                </h3>
              </article>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
