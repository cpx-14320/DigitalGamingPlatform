"use client";

import Carousel from "@/components/Carousel";

import CampaignRow, { type CampaignRowItem } from "./CampaignRow";

type Item = CampaignRowItem & { id: string };

type Props = {
  heading: string;
  items: Item[];
  className?: string;
};

// 每頁固定 3 列（桌機側欄、手機／平板皆同），超過即以輪播分頁
const PER_PAGE = 3;

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function CampaignSection({
  heading,
  items,
  className = "",
}: Props) {
  if (items.length === 0) return null;

  return (
    <section className={className}>
      <h2 className="mb-3 text-sm font-bold text-gray-900">{heading}</h2>

      <Carousel
        ariaLabel={`${heading}輪播`}
        slideClassName="basis-full"
        gapClassName="gap-4"
        showArrows={false}
      >
        {chunk(items, PER_PAGE).map((group, i) => (
          <ul key={i} className="grid grid-cols-1 gap-3">
            {group.map((it) => (
              <li key={it.id} className="min-w-0">
                <CampaignRow item={it} />
              </li>
            ))}
          </ul>
        ))}
      </Carousel>
    </section>
  );
}
