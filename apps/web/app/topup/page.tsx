import type { Metadata } from "next";
import Link from "next/link";

import TopupGameCard from "@/components/sections/TopupGameCard";
import TopupFlow from "@/components/topup/TopupFlow";
import TopupIdGuide from "@/components/sections/TopupIdGuide";
import TopupEventTeaser from "@/components/sections/TopupEventTeaser";
import TopupReviews from "@/components/sections/TopupReviews";
import MemberPerks from "@/components/sections/MemberPerks";
import TopupFaq from "@/components/sections/TopupFaq";
import { quickTopupGame } from "@/lib/data";

const game = quickTopupGame;

export const metadata: Metadata = {
  title: `${game.name} 快速儲值 | NovaPlay`,
  description: `為《${game.name}》快速儲值${game.currency}：輸入遊戲 ID、選擇面額與付款方式，付款後最快 1 分鐘到帳。`,
};

export default function TopupPage() {
  return (
    <main className="pb-12">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <nav className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">
            首頁
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <Link href="/topup" className="hover:text-gray-900">
            儲值中心
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-900">{game.name}</span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-20 lg:self-start">
            <TopupGameCard game={game} />
          </div>

          <div className="space-y-6">
            <TopupFlow game={game} />
            <TopupIdGuide help={game.idHelp} />
            <TopupEventTeaser teaser={game.eventTeaser} />
            <TopupReviews
              reviews={game.reviews}
              rating={game.rating}
              ratingCount={game.ratingCount}
            />
            <MemberPerks />
            <TopupFaq faqs={game.faqs} />
          </div>
        </div>
      </div>
    </main>
  );
}
