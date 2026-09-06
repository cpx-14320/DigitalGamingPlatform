import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import SkeletonImage from "@/components/SkeletonImage";
import {
  gameNews,
  getArticle,
  newsCategoryLabel,
  newsCover,
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
          ratioClassName="aspect-[16/9] rounded-xl border border-gray-200"
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
    <p className="mt-4 text-sm leading-7 text-gray-700">{block.text}</p>
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
          <span className="mx-2 text-gray-300">/</span>
          <span className="line-clamp-1 text-gray-900">{article.title}</span>
        </nav>

        <article className="mx-auto max-w-3xl">
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

          <SkeletonImage
            src={newsCover(article)}
            alt={article.title}
            ratioClassName="mt-6 aspect-[16/9] rounded-xl border border-gray-200"
          />

          <div className="mt-2">
            {article.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {article.sourceUrl ? (
            <p className="mt-8 text-xs text-gray-400">
              資料來源：
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                {article.source ?? article.sourceUrl}
              </a>
            </p>
          ) : article.source ? (
            <p className="mt-8 text-xs text-gray-400">
              資料來源：{article.source}
            </p>
          ) : null}

          <div className="mt-10">
            <Link
              href="/news"
              className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
            >
              ← 回遊戲新聞列表
            </Link>
          </div>
        </article>

        <RecommendedNews article={article} />
      </div>
    </main>
  );
}
