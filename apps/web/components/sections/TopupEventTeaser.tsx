import { type QuickTopupGame } from "@/lib/data";

// 導流到儲值活動介紹頁（/topup-event）的橫幅
export default function TopupEventTeaser({
  teaser,
}: {
  teaser: QuickTopupGame["eventTeaser"];
}) {
  return (
    <section className="scroll-mt-20 overflow-hidden rounded-2xl border border-orange-200 bg-orange-50 shadow-sm">
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex gap-3">
          <span
            className="grid size-9 shrink-0 place-items-center rounded-lg bg-orange-500 text-white"
            aria-hidden
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path
                d="M12 3l2.5 5 5.5.8-4 3.9 1 5.5L12 16l-5 2.6 1-5.5-4-3.9L9.5 8 12 3z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <h2 className="text-base font-bold text-gray-900">{teaser.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              {teaser.desc}
            </p>
          </div>
        </div>
        <a
          href={teaser.href}
          className="shrink-0 self-start rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 sm:self-auto"
        >
          {teaser.cta} →
        </a>
      </div>
    </section>
  );
}
