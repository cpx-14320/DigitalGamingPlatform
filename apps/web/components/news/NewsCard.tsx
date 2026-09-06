import Link from "next/link";

import SkeletonImage from "@/components/SkeletonImage";
import { newsCategoryLabel, type GameNewsCard } from "@/lib/data";

export default function NewsCard({ card }: { card: GameNewsCard }) {
  return (
    <Link
      href={`/news/${card.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:border-gray-300 hover:shadow-md"
    >
      <SkeletonImage
        src={card.cover}
        alt={card.title}
        ratioClassName="aspect-[16/9]"
        className="transition duration-500 group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="rounded bg-orange-50 px-1.5 py-0.5 font-medium text-orange-600">
            {newsCategoryLabel(card.category)}
          </span>
          <time dateTime={card.date}>{card.date}</time>
        </div>
        <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-gray-900 transition group-hover:text-orange-600">
          {card.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500">
          {card.summary}
        </p>
      </div>
    </Link>
  );
}
