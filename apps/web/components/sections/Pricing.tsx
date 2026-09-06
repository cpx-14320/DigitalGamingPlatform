const plans = [
  {
    name: "一般會員",
    price: "免費",
    period: "",
    desc: "註冊即可購買",
    features: [
      "消費回饋金 1%",
      "特賣通知",
      "願望清單降價提醒",
      "標準客服",
    ],
    cta: "免費註冊",
    highlight: false,
  },
  {
    name: "Plus 會員",
    price: "NT$149",
    period: "/ 年",
    desc: "常買玩家最划算",
    features: [
      "消費回饋金 3%",
      "每月專屬折價券",
      "特賣提前 6 小時開賣",
      "生日雙倍回饋",
      "優先客服",
    ],
    cta: "加入 Plus",
    highlight: true,
  },
  {
    name: "商家帳號",
    price: "洽詢",
    period: "",
    desc: "團購 / 企業採購",
    features: [
      "大量序號批次下單",
      "統一發票與月結",
      "專屬窗口對接",
      "API 自動出貨串接",
    ],
    cta: "聯絡我們",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6"
    >
      <div className="mb-6 max-w-2xl">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">會員方案</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-xl border bg-white p-6 ${
              plan.highlight
                ? "border-orange-500 ring-1 ring-orange-500"
                : "border-gray-200"
            }`}
          >
            {plan.highlight && (
              <span className="mb-3 w-fit rounded bg-orange-500 px-2 py-0.5 text-xs font-semibold text-white">
                推薦
              </span>
            )}
            <h3 className="text-base font-semibold text-gray-900">{plan.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{plan.desc}</p>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-2xl font-bold text-gray-900">
                {plan.price}
              </span>
              <span className="pb-1 text-sm text-gray-400">{plan.period}</span>
            </div>

            <ul className="mt-5 flex-1 space-y-2.5 text-sm text-gray-600">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <svg
                    viewBox="0 0 20 20"
                    className="mt-0.5 size-4 shrink-0 fill-orange-500"
                    aria-hidden
                  >
                    <path d="M7.6 13.6l-3.2-3.2 1.4-1.4 1.8 1.8 4.8-4.8 1.4 1.4z" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={`mt-6 rounded-lg px-5 py-2.5 text-center text-sm font-semibold transition ${
                plan.highlight
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "border border-gray-300 text-gray-800 hover:bg-gray-50"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
