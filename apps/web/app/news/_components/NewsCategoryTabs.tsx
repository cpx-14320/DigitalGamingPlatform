import Link from "next/link";

import { NEWS_CATEGORIES, type NewsCategoryKey } from "@/lib/data";

type Props = {
  active?: NewsCategoryKey;
  query?: string;
};

function hrefFor(cat: NewsCategoryKey | undefined, query?: string): string {
  const p = new URLSearchParams();
  if (cat) p.set("cat", cat);
  if (query) p.set("q", query);
  const s = p.toString();
  return s ? `/news?${s}` : "/news";
}

export default function NewsCategoryTabs({ active, query }: Props) {
  const tabs: { key: NewsCategoryKey | undefined; label: string }[] = [
    { key: undefined, label: "全部" },
    ...NEWS_CATEGORIES.map((c) => ({ key: c.key, label: c.label })),
  ];

  return (
    <div
      role="tablist"
      aria-label="遊戲新聞分類"
      className="flex gap-1 overflow-x-auto scrollbar-hide border-b border-gray-200"
    >
      {tabs.map((t) => {
        const selected = t.key === active;
        return (
          <Link
            key={t.label}
            role="tab"
            aria-selected={selected}
            href={hrefFor(t.key, query)}
            className={`-mb-px shrink-0 border-b-2 px-3.5 py-2.5 text-sm font-medium transition ${
              selected
                ? "border-orange-500 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}
