"use client";

import { useState } from "react";

import { type QuickTopupFaq } from "@/lib/data";
import ActivityCard from "@/components/topup/ActivityCard";

export default function TopupFaq({ faqs }: { faqs: QuickTopupFaq[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <ActivityCard id="faq" title="常見問題">
      <ul className="divide-y divide-gray-200 border-y border-gray-200">
        {faqs.map((faq, i) => {
          const open = openIdx === i;
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => setOpenIdx(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-3 py-4 text-left"
              >
                <span className="text-sm font-semibold text-gray-900">
                  {faq.q}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className={`size-5 shrink-0 text-gray-400 transition ${
                    open ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {open ? (
                <p className="pb-4 text-sm leading-relaxed text-gray-600">
                  {faq.a}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </ActivityCard>
  );
}
