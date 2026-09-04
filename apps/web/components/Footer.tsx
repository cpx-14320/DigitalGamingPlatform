const groups = [
  {
    title: "購物",
    links: ["本日特賣", "新品預購", "點數卡專區", "組合包", "退貨與退款"],
  },
  {
    title: "客戶服務",
    links: ["訂單查詢", "序號啟用教學", "常見問題", "線上客服"],
  },
  {
    title: "關於",
    links: ["關於 NovaPlay", "合作提案", "人才招募", "新聞中心"],
  },
];

const payments = ["VISA", "Master", "JCB", "LINE Pay", "超商代碼"];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2 font-bold text-gray-900">
              <span className="grid size-8 place-items-center rounded-lg bg-orange-500 text-sm font-black text-white">
                N
              </span>
              <span className="text-lg">NovaPlay</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-gray-500">
              專業的遊戲數位商品商城，正版授權、付款即發碼、價格透明。
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {payments.map((p) => (
                <span
                  key={p}
                  className="rounded border border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-500"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-gray-900">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-gray-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>© {new Date().getFullYear()} NovaPlay. 本頁為 Tailwind 練習用範例，非真實服務。</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-gray-600">
              服務條款
            </a>
            <a href="#" className="transition hover:text-gray-600">
              隱私權政策
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
