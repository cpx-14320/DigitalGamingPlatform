import Link from "next/link";

import type { NewsCategoryKey } from "@/lib/data";

type Props = {
  page: number;
  pageCount: number;
  cat?: NewsCategoryKey;
  query?: string;
};

function pageHref(
  p: number,
  cat?: NewsCategoryKey,
  query?: string,
): string {
  const params = new URLSearchParams();
  if (cat) params.set("cat", cat);
  if (query) params.set("q", query);
  if (p > 1) params.set("page", String(p));
  const s = params.toString();
  return s ? `/news?${s}` : "/news";
}

/** 產生含收合的頁碼序列，例如 1 … 4 5 6 7 8 … 20 */
function pageWindow(page: number, pageCount: number): (number | "…")[] {
  const span = 1;
  const out: (number | "…")[] = [];
  const push = (n: number) => out.push(n);
  const first = 1;
  const last = pageCount;
  const from = Math.max(first, page - span);
  const to = Math.min(last, page + span);

  push(first);
  if (from > first + 1) out.push("…");
  for (let n = from; n <= to; n++) if (n !== first && n !== last) push(n);
  if (to < last - 1) out.push("…");
  if (last !== first) push(last);
  return out;
}

const linkBase =
  "grid h-9 min-w-9 place-items-center rounded-lg border px-2 text-sm font-medium transition";

export default function NewsPagination({ page, pageCount, cat, query }: Props) {
  if (pageCount <= 1) return null;

  return (
    <nav
      className="mt-10 flex items-center justify-center gap-1.5"
      aria-label="分頁"
    >
      {page > 1 ? (
        <Link
          href={pageHref(page - 1, cat, query)}
          rel="prev"
          className={`${linkBase} border-gray-300 bg-white text-gray-700 hover:bg-gray-50`}
        >
          上一頁
        </Link>
      ) : (
        <span
          className={`${linkBase} border-gray-200 bg-white text-gray-300`}
          aria-disabled
        >
          上一頁
        </span>
      )}

      {pageWindow(page, pageCount).map((n, i) =>
        n === "…" ? (
          <span
            key={`gap-${i}`}
            className="grid h-9 w-9 place-items-center text-sm text-gray-400"
          >
            …
          </span>
        ) : (
          <Link
            key={n}
            href={pageHref(n, cat, query)}
            aria-current={n === page ? "page" : undefined}
            className={`${linkBase} ${
              n === page
                ? "border-orange-500 bg-orange-500 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {n}
          </Link>
        ),
      )}

      {page < pageCount ? (
        <Link
          href={pageHref(page + 1, cat, query)}
          rel="next"
          className={`${linkBase} border-gray-300 bg-white text-gray-700 hover:bg-gray-50`}
        >
          下一頁
        </Link>
      ) : (
        <span
          className={`${linkBase} border-gray-200 bg-white text-gray-300`}
          aria-disabled
        >
          下一頁
        </span>
      )}
    </nav>
  );
}
