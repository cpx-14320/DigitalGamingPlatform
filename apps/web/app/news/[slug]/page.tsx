import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import CampaignSection from "@/components/campaign/CampaignSection";
import SkeletonImage from "@/components/SkeletonImage";
import {
  gameNews,
  getArticle,
  memberTask,
  newsCategoryLabel,
  pre,
  toNewsCard,
  type NewsBlock,
} from "@/lib/data";

import RecommendedNews from "../_components/RecommendedNews";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return gameNews.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "找不到新聞 | SuneoCard" };
  const card = toNewsCard(article);
  return {
    title: `${article.title} | SuneoCard 遊戲新聞`,
    description: card.summary,
    openGraph: {
      title: article.title,
      description: card.summary,
      images: [card.cover],
      type: "article",
    },
  };
}

function Block({ block }: { block: NewsBlock }) {
  if (block.type === "heading") {
    return (
      <h2 className="mt-8 text-lg font-bold text-gray-900 sm:text-xl">
        {block.text}
      </h2>
    );
  }
  if (block.type === "image") {
    return (
      <figure className="my-6">
        <SkeletonImage
          src={block.src}
          alt={block.caption ?? ""}
          natural
          ratioClassName="rounded-xl border border-gray-200"
        />
        {block.caption ? (
          <figcaption className="mt-2 text-center text-xs text-gray-400">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }
  return (
    <p className="mt-4 whitespace-pre-line text-sm leading-7 text-gray-700">
      {block.text}
    </p>
  );
}

export default async function NewsDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  // 側欄有資料才變雙欄；pre / member-task 兩檔清空 → 自動單欄滿版
  const hasAside = pre.length > 0 || memberTask.length > 0;

  return (
    <main className="pb-16">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">
            首頁
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <Link href="/news" className="hover:text-gray-900">
            遊戲新聞
          </Link>
        </nav>

        <div
          className={
            hasAside
              ? "grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]"
              : undefined
          }
        >
          <article className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link
              href={`/news?cat=${article.category}`}
              className="rounded bg-orange-50 px-1.5 py-0.5 font-medium text-orange-600 hover:bg-orange-100"
            >
              {newsCategoryLabel(article.category)}
            </Link>
            <time dateTime={article.date}>{article.date}</time>
          </div>

          <h1 className="mt-3 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
            {article.title}
          </h1>

          <div className="mt-4">
            {article.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/news"
              className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
            >
              ← 回遊戲新聞列表
            </Link>
          </div>
          </article>

          {hasAside ? (
            <aside className="hidden space-y-8 lg:block lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:self-start lg:overflow-y-auto lg:overscroll-contain">
              <CampaignSection heading="遊戲事前登錄" items={pre} />
              <CampaignSection heading="會員活動" items={memberTask} />
            </aside>
          ) : null}
        </div>

        <RecommendedNews article={article} />

        {hasAside ? (
          <div className="mt-12 space-y-10 lg:hidden">
            <CampaignSection heading="遊戲事前登錄" items={pre} />
            <CampaignSection heading="會員活動" items={memberTask} />
          </div>
        ) : null}
      </div>
    </main>
  );
}
