import { type TopupGame } from "@/lib/data";
import ActivityCard from "@/components/topup/ActivityCard";
import FieldLabel from "@/components/topup/FieldLabel";

export default function TopupRegisterGift({
  gift,
}: {
  gift: TopupGame["registerGift"];
}) {
  return (
    <ActivityCard id="register-gift" title={gift.title}>
      <div className="space-y-4">
        <div>
          <FieldLabel>活動時間</FieldLabel>
          <p className="mt-2 text-sm text-gray-600">{gift.period}</p>
        </div>
        <div>
          <FieldLabel>活動內容</FieldLabel>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {gift.content}
          </p>
        </div>
      </div>
    </ActivityCard>
  );
}
