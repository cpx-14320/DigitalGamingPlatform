"use client";

import { useMemo, useState } from "react";

import { type QuickTopupGame, type TopupPaymentGroup } from "@/lib/data";
import FieldLabel from "@/components/topup/FieldLabel";

const NICKNAMES = [
  "星語者・Lyra",
  "夜航者・Cael",
  "拾光人・Mira",
  "遠星・Doran",
  "微光・Sora",
  "銀河信使・Vega",
];

function PayIcon({ name }: { name: TopupPaymentGroup["icon"] }) {
  const paths: Record<TopupPaymentGroup["icon"], string> = {
    wallet: "M3 8h18v10a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 0l2.5-4H18l3 4M16 13h.01",
    card: "M3 7h18v10H3V7zm0 4h18M7 15h4",
    store: "M4 9h16l-1-4H5L4 9zm0 0v9h16V9M9 18v-4h6v4",
    carrier: "M8 3h8v18H8V3zm3 15h2",
    points: "M12 3l2.5 5 5.5.8-4 3.9 1 5.5L12 16l-5 2.6 1-5.5-4-3.9L9.5 8 12 3z",
  };
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5 text-gray-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d={paths[name]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepDot({
  n,
  label,
  done,
  active,
}: {
  n: number;
  label: string;
  done: boolean;
  active: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`grid size-6 place-items-center rounded-full text-xs font-bold transition ${
          done
            ? "bg-orange-500 text-white"
            : active
              ? "bg-white text-orange-600 ring-2 ring-orange-500"
              : "bg-gray-100 text-gray-400"
        }`}
      >
        {done ? "✓" : n}
      </span>
      <span
        className={`text-xs font-medium ${
          done || active ? "text-gray-900" : "text-gray-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function TopupFlow({ game }: { game: QuickTopupGame }) {
  const [denomId, setDenomId] = useState<string | null>(null);
  const [playerId, setPlayerId] = useState("");
  const [server, setServer] = useState(game.servers[0]);
  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<
    QuickTopupGame["promoCodes"][number] | null
  >(null);
  const [promoError, setPromoError] = useState("");
  const [submitted, setSubmitted] = useState<{ orderNo: string } | null>(null);

  const denom = game.denoms.find((d) => d.id === denomId) ?? null;
  const idLooksValid = /^\d{6,}$/.test(playerId);

  const nickname = useMemo(() => {
    if (!idLooksValid) return null;
    const sum = playerId
      .split("")
      .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    return NICKNAMES[sum % NICKNAMES.length];
  }, [playerId, idLooksValid]);

  const subtotal = denom?.price ?? 0;
  const discount = !appliedPromo
    ? 0
    : appliedPromo.type === "amount"
      ? Math.min(appliedPromo.value, subtotal)
      : Math.round((subtotal * appliedPromo.value) / 100);
  const total = Math.max(subtotal - discount, 0);

  const step1Done = !!denom;
  const step2Done = idLooksValid;
  const step3Done = !!paymentId;
  const canSubmit = step1Done && step2Done && step3Done;

  const methodName = useMemo(() => {
    const map = new Map<string, string>();
    game.payments.forEach((g) =>
      g.methods.forEach((m) => map.set(m.id, m.name)),
    );
    return (id: string) => map.get(id) ?? id;
  }, [game.payments]);

  function applyPromo() {
    const code = promoInput.trim().toUpperCase();
    if (!code) return;
    const found = game.promoCodes.find((p) => p.code === code);
    if (!found) {
      setAppliedPromo(null);
      setPromoError("查無此優惠碼，請確認後再試一次。");
      return;
    }
    setAppliedPromo(found);
    setPromoError("");
  }

  function submit() {
    if (!canSubmit) return;
    const orderNo =
      "NP" +
      Date.now().toString(36).toUpperCase() +
      Math.random().toString(36).slice(2, 5).toUpperCase();
    setSubmitted({ orderNo });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function reset() {
    setSubmitted(null);
  }

  const denomLabel = denom
    ? denom.name ?? `${denom.base.toLocaleString()} ${game.currency}`
    : "—";

  if (submitted) {
    return (
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex flex-col items-center text-center">
          <span className="grid size-14 place-items-center rounded-full bg-green-100 text-green-600">
            <svg
              viewBox="0 0 24 24"
              className="size-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden
            >
              <path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h2 className="mt-3 text-lg font-bold text-gray-900">
            訂單已成立（示範）
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            點數已發送至你的遊戲帳號，電子發票將寄送至會員信箱。
          </p>
        </div>

        <dl className="mx-auto mt-6 max-w-md divide-y divide-gray-200 rounded-lg border border-gray-200 text-sm">
          {[
            ["訂單編號", submitted.orderNo],
            ["遊戲", `${game.name}（${server}）`],
            ["角色名稱", nickname ?? "—"],
            ["遊戲 ID", playerId],
            ["儲值內容", denomLabel + (denom && denom.bonus > 0 ? ` +${denom.bonus} 加碼` : "")],
            ["付款方式", paymentId ? methodName(paymentId) : "—"],
            ["實付金額", `NT$ ${total.toLocaleString()}`],
            ["到帳狀態", "已發送"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 px-4 py-2.5">
              <dt className="text-gray-500">{k}</dt>
              <dd className="text-right font-medium text-gray-900">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            再儲一次
          </button>
          <a
            href="#"
            className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            查看訂單紀錄
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
        {/* 步驟指示 */}
        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-gray-200 pb-4">
          <StepDot n={1} label="選擇面額" done={step1Done} active={!step1Done} />
          <span className="hidden text-gray-300 sm:inline">›</span>
          <StepDot
            n={2}
            label="遊戲帳號"
            done={step2Done}
            active={step1Done && !step2Done}
          />
          <span className="hidden text-gray-300 sm:inline">›</span>
          <StepDot
            n={3}
            label="付款方式"
            done={step3Done}
            active={step1Done && step2Done && !step3Done}
          />
        </div>

        <div className="space-y-7">
          {/* 1. 面額 */}
          <div>
            <FieldLabel>選擇儲值面額</FieldLabel>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {game.denoms.map((d) => {
                const selected = d.id === denomId;
                return (
                  <button
                    key={d.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setDenomId(d.id)}
                    className={`relative flex flex-col items-center justify-center gap-1 rounded-lg border px-3 py-4 text-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                      selected
                        ? "border-orange-500 bg-orange-50 ring-2 ring-orange-500/20"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    {d.tag ? (
                      <span className="absolute -top-2 right-2 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white">
                        {d.tag}
                      </span>
                    ) : null}
                    <span className="text-sm font-bold text-gray-900">
                      {d.name ?? `${d.base.toLocaleString()} ${game.currency}`}
                    </span>
                    {d.bonus > 0 ? (
                      <span className="text-xs font-medium text-orange-600">
                        +{d.bonus.toLocaleString()} 加碼
                      </span>
                    ) : null}
                    <span className="mt-1 text-sm text-gray-500">
                      NT$ {d.price.toLocaleString()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. 遊戲帳號 */}
          <div>
            <FieldLabel>輸入遊戲帳號</FieldLabel>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="topup-player-id"
                  className="mb-1 block text-xs font-medium text-gray-500"
                >
                  遊戲 ID（UID）
                </label>
                <input
                  id="topup-player-id"
                  inputMode="numeric"
                  value={playerId}
                  onChange={(e) =>
                    setPlayerId(e.target.value.replace(/[^\d]/g, "").slice(0, 12))
                  }
                  placeholder="例：100238471"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
                />
              </div>
              <div>
                <label
                  htmlFor="topup-server"
                  className="mb-1 block text-xs font-medium text-gray-500"
                >
                  伺服器
                </label>
                <select
                  id="topup-server"
                  value={server}
                  onChange={(e) => setServer(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
                >
                  {game.servers.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {playerId && !idLooksValid ? (
              <p className="mt-2 text-xs text-gray-500">
                請輸入至少 6 位數字的遊戲 UID。
              </p>
            ) : null}

            {nickname ? (
              <div className="mt-3 flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2.5 text-sm text-green-800">
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  角色名稱：<b>{nickname}</b>（{server}）— 請確認無誤再付款
                </span>
              </div>
            ) : null}

            <p className="mt-2 text-xs text-gray-400">
              不知道遊戲 ID？
              <a
                href="#id-guide"
                className="font-medium text-orange-600 hover:underline"
              >
                查看查詢教學
              </a>
            </p>
          </div>

          {/* 3. 付款方式 */}
          <div>
            <FieldLabel>選擇付款方式</FieldLabel>
            <div className="mt-3 space-y-4">
              {game.payments.map((group) => (
                <fieldset key={group.id}>
                  <legend className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    <PayIcon name={group.icon} />
                    {group.label}
                  </legend>
                  <div className="space-y-2">
                    {group.methods.map((m) => {
                      const selected = paymentId === m.id;
                      return (
                        <label
                          key={m.id}
                          className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition focus-within:ring-2 focus-within:ring-orange-400 ${
                            selected
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 hover:border-orange-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="topup-payment"
                            className="sr-only"
                            checked={selected}
                            onChange={() => setPaymentId(m.id)}
                          />
                          <span
                            className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border-2 ${
                              selected ? "border-orange-500" : "border-gray-300"
                            }`}
                          >
                            {selected ? (
                              <span className="size-2 rounded-full bg-orange-500" />
                            ) : null}
                          </span>
                          <span className="flex-1">
                            <span className="block text-sm font-medium text-gray-900">
                              {m.name}
                            </span>
                            {m.note ? (
                              <span className="mt-0.5 block text-xs text-gray-500">
                                {m.note}
                              </span>
                            ) : null}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              ))}
            </div>
          </div>

          {/* 4. 優惠碼 */}
          <div>
            <FieldLabel>優惠碼</FieldLabel>
            <div className="mt-3 flex gap-2">
              <input
                aria-label="優惠碼"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                placeholder="輸入優惠碼（試試 NOVA50）"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
              />
              <button
                type="button"
                onClick={applyPromo}
                className="shrink-0 rounded-lg border border-orange-500 px-5 py-2.5 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
              >
                套用
              </button>
            </div>
            {promoError ? (
              <p className="mt-2 text-xs text-red-500">{promoError}</p>
            ) : null}
            {appliedPromo ? (
              <p className="mt-2 flex items-center gap-2 text-xs text-green-700">
                已套用「{appliedPromo.code}」— {appliedPromo.label}
                <button
                  type="button"
                  onClick={() => {
                    setAppliedPromo(null);
                    setPromoInput("");
                  }}
                  className="text-gray-400 underline hover:text-gray-600"
                >
                  移除
                </button>
              </p>
            ) : null}
          </div>

          {/* 訂單摘要 */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">面額</dt>
                <dd className="font-medium text-gray-900">{denomLabel}</dd>
              </div>
              {denom && denom.bonus > 0 ? (
                <div className="flex justify-between">
                  <dt className="text-gray-500">加碼贈送</dt>
                  <dd className="font-medium text-orange-600">
                    +{denom.bonus.toLocaleString()} {game.currency}
                  </dd>
                </div>
              ) : null}
              <div className="flex justify-between">
                <dt className="text-gray-500">小計</dt>
                <dd className="text-gray-900">NT$ {subtotal.toLocaleString()}</dd>
              </div>
              {discount > 0 ? (
                <div className="flex justify-between">
                  <dt className="text-gray-500">優惠折抵</dt>
                  <dd className="font-medium text-orange-600">
                    -NT$ {discount.toLocaleString()}
                  </dd>
                </div>
              ) : null}
              <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-bold">
                <dt className="text-gray-900">應付金額</dt>
                <dd className="text-orange-600">
                  NT$ {total.toLocaleString()}
                </dd>
              </div>
            </dl>
            <p className="mt-2 text-xs text-gray-400">
              預計到帳：付款完成後即時發送（超商 / ATM 以繳費完成時間為準）
            </p>

            <button
              type="button"
              onClick={submit}
              disabled={!canSubmit}
              className="mt-4 hidden w-full rounded-lg bg-orange-500 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-300 lg:block"
            >
              {canSubmit ? "立即購買" : "請完成上方選擇"}
            </button>
          </div>

          <p className="text-xs leading-relaxed text-gray-400">
            {game.disclaimer}
          </p>
        </div>
      </section>

      {/* 手機版：底部固定結帳列 */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <div>
            <p className="text-[11px] text-gray-500">應付金額</p>
            <p className="text-lg font-bold text-orange-600">
              NT$ {total.toLocaleString()}
            </p>
          </div>
          <button
            type="button"
            onClick={submit}
            disabled={!canSubmit}
            className="flex-1 rounded-lg bg-orange-500 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {canSubmit ? "立即購買" : "請完成選擇"}
          </button>
        </div>
      </div>
      <div className="h-16 lg:hidden" aria-hidden />
    </>
  );
}
