import type { Metadata } from "next";
import Link from "next/link";

import NewsCard from "@/components/news/NewsCard";
import {
  NEWS_CATEGORIES,
  filterNewsCards,
  gameNewsCards,
  paginate,
  type NewsCategoryKey,
} from "@/lib/data";

import NewsCategoryTabs from "./_components/NewsCategoryTabs";
import NewsPagination from "./_components/NewsPagination";
import NewsSearch from "./_components/NewsSearch";

export const metadata: Metadata = {
  title: "遊戲新聞 | SuneoCard",
  description:
    "最新遊戲、手機遊戲、PC遊戲、電競賽事與實況直播情報，支援分類與關鍵字搜尋。",
};

const CATEGORY_KEYS = new Set<string>(NEWS_CATEGORIES.map((c) => c.key));

function asString(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

type SearchParams = Promise<{
  cat?: string | string[];
  q?: string | string[];
  page?: string | string[];
}>;

export default async function NewsListPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const catRaw = asString(sp.cat);
  const cat = (
    catRaw && CATEGORY_KEYS.has(catRaw) ? catRaw : undefined
  ) as NewsCategoryKey | undefined;
  const q = asString(sp.q)?.trim() || undefined;
  const pageNum = Number.parseInt(asString(sp.page) ?? "1", 10) || 1;

  const filtered = filterNewsCards(gameNewsCards, { cat, q });
  const { items, page, pageCount, total } = paginate(filtered, pageNum);

  return (
    <main className="pb-12">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">
            首頁
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-900">遊戲新聞</span>
        </nav>

        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            遊戲新聞
          </h1>
          <NewsSearch />
        </div>

        <NewsCategoryTabs active={cat} query={q} />

        <p className="mt-4 text-sm text-gray-500">
          {q ? (
            <>
              「{q}」的搜尋結果共 <span className="font-medium">{total}</span> 則
            </>
          ) : (
            <>
              共 <span className="font-medium">{total}</span> 則新聞
            </>
          )}
        </p>

        {items.length > 0 ? (
          <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((card) => (
              <li key={card.slug}>
                <NewsCard card={card} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-gray-300 bg-white py-16 text-center text-sm text-gray-500">
            找不到符合的新聞，換個關鍵字或分類試試。
          </div>
        )}

        <NewsPagination
          page={page}
          pageCount={pageCount}
          cat={cat}
          query={q}
        />
      </div>
    </main>
  );
}
