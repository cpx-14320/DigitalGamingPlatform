"use client";

import { useState } from "react";

import Carousel from "@/components/Carousel";
import { type TopupDrawTab } from "@/lib/data";
import ActivityCard from "@/components/topup/ActivityCard";
import FieldLabel from "@/components/topup/FieldLabel";

export default function TopupDrawCard({ tabs }: { tabs: TopupDrawTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <ActivityCard id="draw">
      <div
        role="tablist"
        aria-label="抽獎活動"
        className="mb-6 flex border-b border-gray-200"
      >
        {tabs.map((tab) => {
          const selected = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(tab.id)}
              className={`-mb-px flex-1 border-b-2 px-3 py-3 text-center text-base font-bold transition sm:text-lg ${
                selected
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-5">
        <div>
          <FieldLabel>活動時間</FieldLabel>
          <p className="mt-2 text-sm text-gray-600">{active.period}</p>
        </div>

        <div>
          <FieldLabel>活動內容</FieldLabel>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {active.content}
          </p>
        </div>

        <div>
          <FieldLabel>活動獎項</FieldLabel>
          <div className="mt-3">
            <Carousel
              key={active.id}
              ariaLabel={`${active.label} 獎項輪播`}
              slideClassName="basis-1/2 sm:basis-1/3 lg:basis-1/5"
              gapClassName="gap-3"
              step={3}
            >
              {active.prizes.map((prize) => (
                <div key={prize.id} className="px-1 text-center">
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                    <img
                      src={prize.image}
                      alt={prize.name}
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-2 text-xs font-medium leading-snug text-gray-700">
                    {prize.name}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-1">
          {active.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition ${
                cta.primary
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "border border-orange-500 text-orange-600 hover:bg-orange-50"
              }`}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </ActivityCard>
  );
}
