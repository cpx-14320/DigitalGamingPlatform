"use client";

import type { ReactNode } from "react";

import Carousel from "@/components/Carousel";
import { quickLinks } from "@/lib/data";

// 扁平風格 icon：統一 24 viewBox、線條、單色，跟站上其他 svg 一致
const ICONS: Record<string, ReactNode> = {
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v3M16 3v3M8.5 14l2.5 2.5L16 12" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 8a2 2 0 012-2h12a2 2 0 012 2" />
      <path d="M3 8v9a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 01-2-2z" />
      <circle cx="16.5" cy="13" r="1.15" fill="currentColor" stroke="none" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M10.8 12.2L20 3M17 6l2 2M14 9l2 2" />
    </>
  ),
  tag: (
    <>
      <path d="M4 4h7l9 9-7 7-9-9V4z" />
      <circle cx="8.5" cy="8.5" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.6-3.6 4.6-5.2 8-5.2S18.4 16.4 20 20" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v4a5 5 0 01-10 0V4z" />
      <path d="M7 6H4v2a3 3 0 003 3M17 6h3v2a3 3 0 01-3 3M9 20h6M10 20l.5-3h3l.5 3" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H8l-4 4V5z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  gift: (
    <>
      <path d="M4 11h16v9H4zM3 7h18v4H3z" />
      <path d="M12 7v13M12 7S10.5 3 8.5 3 6 6.2 12 7zM12 7s1.5-4 3.5-4S18 6.2 12 7z" />
    </>
  ),
  heart: (
    <path d="M12 20S3.5 14.5 3.5 8.8C3.5 6 5.7 4 8.3 4c1.7 0 3.1.9 3.7 2.2C12.6 4.9 14 4 15.7 4c2.6 0 4.8 2 4.8 4.8C20.5 14.5 12 20 12 20z" />
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <path d="M3 4h2l2.4 12h11l2-8H6" />
    </>
  ),
  box: (
    <>
      <path d="M3 8l9-4 9 4-9 4-9-4z" />
      <path d="M3 8v8l9 4 9-4V8M12 12v8" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
};

function QuickIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {ICONS[name] ?? ICONS.tag}
    </svg>
  );
}

export default function QuickMenu() {
  return (
    <section aria-label="快速選單" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
      <Carousel
        ariaLabel="快速選單輪播"
        slideClassName="basis-1/4 sm:basis-1/6 lg:basis-[12.5%]"
        gapClassName="gap-0"
        step={4}
        showArrows={false}
      >
        {quickLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="flex flex-col items-center gap-2 rounded-xl px-2 py-3 text-center transition hover:bg-gray-50"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-orange-50 text-orange-600">
              <QuickIcon name={item.icon} />
            </span>
            <span className="text-xs font-medium text-gray-700">{item.label}</span>
          </a>
        ))}
      </Carousel>
    </section>
  );
}
