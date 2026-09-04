import { type QuickTopupGame } from "@/lib/data";
import ActivityCard from "@/components/topup/ActivityCard";

// 查詢遊戲 ID 教學：條列步驟
export default function TopupIdGuide({
  help,
}: {
  help: QuickTopupGame["idHelp"];
}) {
  return (
    <ActivityCard id="id-guide" title={help.title}>
      <ol className="space-y-4">
        {help.steps.map((step, i) => (
          <li key={i} className="flex gap-3">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed text-gray-600">{step}</p>
          </li>
        ))}
      </ol>
    </ActivityCard>
  );
}
