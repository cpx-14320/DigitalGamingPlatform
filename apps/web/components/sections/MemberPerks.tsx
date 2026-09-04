import { memberPerks } from "@/lib/data";
import ActivityCard from "@/components/topup/ActivityCard";

// 會員優惠：多頁共用區塊，內容一律來自 lib/data 的 memberPerks
export default function MemberPerks() {
  return (
    <ActivityCard id="member-perks" title="會員優惠">
      <p className="mb-4 text-center text-sm text-gray-500">
        NovaPlay 會員在所有遊戲儲值都適用的通用優惠。
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {memberPerks.map((perk) => (
          <li
            key={perk.id}
            className="rounded-lg border border-gray-200 bg-gray-50 p-4"
          >
            <h3 className="text-sm font-semibold text-gray-900">{perk.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              {perk.desc}
            </p>
          </li>
        ))}
      </ul>
    </ActivityCard>
  );
}
