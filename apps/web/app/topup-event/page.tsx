import type { Metadata } from "next";

import TopupHero from "@/components/sections/TopupHero";
import TopupRebate from "@/components/sections/TopupRebate";
import TopupDrawCard from "@/components/sections/TopupDrawCard";
import TopupRegisterGift from "@/components/sections/TopupRegisterGift";
import MemberPerks from "@/components/sections/MemberPerks";
import TopupNotes from "@/components/sections/TopupNotes";
import { defaultTopupGame } from "@/lib/data";

const game = defaultTopupGame;

export const metadata: Metadata = {
  title: `${game.name} 儲值活動 | NovaPlay`,
  description: game.rebate.content,
};

export default function TopupEventPage() {
  return (
    <main className="pb-12">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8 sm:px-6">
        <p className="text-sm text-gray-500">
          <a href="/topup" className="font-medium text-orange-600 hover:underline">
            ← 前往快速儲值
          </a>
          <span className="mx-2 text-gray-300">/</span>
          儲值活動介紹
        </p>
        <TopupHero game={game} />
        <TopupRebate rebate={game.rebate} />
        <TopupDrawCard tabs={game.drawTabs} />
        <TopupRegisterGift gift={game.registerGift} />
        <MemberPerks />
        <TopupNotes notes={game.notes} />
      </div>
    </main>
  );
}
