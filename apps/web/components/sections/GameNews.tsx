import Link from "next/link";

import NewsCarousel from "@/components/news/NewsCarousel";
import { gameNewsCards } from "@/lib/data";

export default function GameNews() {
  return (
    <section id="news" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">遊戲新聞</h2>
        <Link
          href="/news"
          className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
        >
          view all →
        </Link>
      </div>

      <NewsCarousel
        items={gameNewsCards}
        ariaLabel="遊戲新聞輪播"
        autoPlayMs={4500}
      />
    </section>
  );
}
