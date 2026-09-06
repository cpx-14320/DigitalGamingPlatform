"use client";

import Carousel from "@/components/Carousel";
import NewsCard from "@/components/news/NewsCard";
import type { GameNewsCard } from "@/lib/data";

type Props = {
  items: GameNewsCard[];
  ariaLabel: string;
  autoPlayMs?: number;
};

export default function NewsCarousel({
  items,
  ariaLabel,
  autoPlayMs = 0,
}: Props) {
  if (items.length === 0) return null;

  return (
    <Carousel
      /* lg：扣掉 2 個 gap-4（2rem）再除以 3，完整呈現 3 欄 */
      slideClassName="basis-[82%] sm:basis-[55%] lg:basis-[calc((100%_-_2rem)/3)]"
      gapClassName="gap-4"
      autoPlayMs={autoPlayMs}
      ariaLabel={ariaLabel}
    >
      {items.map((card) => (
        <NewsCard key={card.slug} card={card} />
      ))}
    </Carousel>
  );
}
