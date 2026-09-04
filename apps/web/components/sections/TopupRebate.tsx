import { type TopupGame } from "@/lib/data";
import ActivityCard from "@/components/topup/ActivityCard";
import FieldLabel from "@/components/topup/FieldLabel";
import InfoBox from "@/components/topup/InfoBox";

export default function TopupRebate({
  rebate,
}: {
  rebate: TopupGame["rebate"];
}) {
  return (
    <ActivityCard id="rebate" title={rebate.title}>
      <div className="space-y-5">
        <div>
          <FieldLabel>活動時間</FieldLabel>
          <p className="mt-2 text-sm text-gray-600">{rebate.period}</p>
        </div>

        <div>
          <FieldLabel>活動內容</FieldLabel>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {rebate.content}
          </p>
        </div>

        <InfoBox label="貼心提醒">{rebate.notice}</InfoBox>

        <div>
          <FieldLabel>回饋內容</FieldLabel>
          <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] text-center text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-600">
                    <th className="px-3 py-2.5 font-semibold">指定面額</th>
                    <th className="px-3 py-2.5 font-semibold">回饋內容</th>
                    <th className="px-3 py-2.5 font-semibold">數量</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {rebate.rows.map((row) => (
                    <tr key={row.amount} className="even:bg-gray-50">
                      <td className="px-3 py-2.5 text-gray-800">
                        {row.amount.toLocaleString()}
                      </td>
                      <td className="px-3 py-2.5 text-gray-800">{row.reward}</td>
                      <td className="px-3 py-2.5 text-gray-800">{row.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <InfoBox label="虛寶兌換方式">
          <ul className="list-disc space-y-1 pl-4">
            {rebate.exchange.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </InfoBox>
      </div>
    </ActivityCard>
  );
}
