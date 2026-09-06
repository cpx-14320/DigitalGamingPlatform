import Link from "next/link";

import SkeletonImage from "@/components/SkeletonImage";

// pre / member-task 兩種 item 皆符合此形狀
export type CampaignRowItem = {
  image: string;
  href: string;
  title: string;
  text: string;
};

export default function CampaignRow({ item }: { item: CampaignRowItem }) {
  return (
    <Link
      href={item.href}
      className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:border-gray-300 hover:shadow-md"
    >
      <SkeletonImage
        src={item.image}
        alt={item.title}
        ratioClassName="size-16 shrink-0 rounded-lg"
        className="transition duration-500 group-hover:scale-105"
      />
      <div className="min-w-0 self-center">
        <h3 className="truncate text-sm font-semibold text-gray-900 transition group-hover:text-orange-600">
          {item.title}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-gray-500">
          {item.text}
        </p>
      </div>
    </Link>
  );
}
