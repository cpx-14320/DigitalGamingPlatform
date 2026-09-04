import { features } from "@/lib/data";

const icons = [
  "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", // 打勾（正版）
  "M13 2L3 14h7l-1 8 10-12h-7l1-8z", // 閃電（即時發碼）
  "M12 1v22M5 6h11a3 3 0 010 6H8a3 3 0 000 6h11", // 金額（價格透明）
  "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6m-6 0v-5a1 1 0 011-1h4a1 1 0 011 1v5", // 房子（七日鑑賞）
  "M3 10h18M7 15h4M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z", // 卡片（多元支付）
  "M20 12a8 8 0 11-16 0 8 8 0 0116 0zM12 8v4l3 2", // 時鐘/回饋
];

export default function Features() {
  return (
    <section
      id="features"
      className="border-y border-gray-200 bg-white py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            在 NovaPlay 購買的保障
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            正版、透明、可退款 —— 買數位商品也該有實體通路的安心。
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-orange-50 text-orange-600">
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d={icons[i % icons.length]}
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
