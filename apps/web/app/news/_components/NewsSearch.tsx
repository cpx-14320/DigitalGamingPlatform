"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function NewsSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlQ = searchParams.get("q") ?? "";

  const [value, setValue] = useState(urlQ);
  // 網址的 q 若被外部改動（例如上一頁），在 render 期間同步回輸入框
  const [syncedQ, setSyncedQ] = useState(urlQ);
  if (urlQ !== syncedQ) {
    setSyncedQ(urlQ);
    setValue(urlQ);
  }

  // 輸入 debounce → 更新網址（保留 cat，重置 page）
  useEffect(() => {
    if (value.trim() === urlQ) return;
    const id = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      const q = value.trim();
      if (q) params.set("q", q);
      else params.delete("q");
      params.delete("page");
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }, 300);
    return () => clearTimeout(id);
  }, [value, urlQ, pathname, router, searchParams]);

  return (
    <div className="relative w-full sm:max-w-xs">
      <svg
        viewBox="0 0 24 24"
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400"
        fill="none"
        aria-hidden
      >
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M20 20l-3.5-3.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="搜尋新聞標題或摘要"
        aria-label="搜尋遊戲新聞"
        className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
      />
    </div>
  );
}
