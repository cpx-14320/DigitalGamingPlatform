"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#member", label: "會員中心" },
  { href: "/topup", label: "購點儲值" },
  { href: "/topup-event", label: "儲值活動" },
  { href: "#entertainment", label: "娛樂中心" },
  { href: "#login-center", label: "登錄中心" },
];

// TODO: 文字多語系尚未接上，這裡只切換顯示的語言標籤
const locales = [
  { code: "zh-TW", label: "繁體中文" },
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
];

function LanguageMenu({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(locales[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="切換語言"
        className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-2.5 py-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
          <path
            d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 000 18M12 3a14 14 0 010 18"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{current.label}</span>
        <svg
          viewBox="0 0 24 24"
          className={`size-3.5 transition ${open ? "rotate-180" : ""}`}
          fill="none"
          aria-hidden
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="語言"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
        >
          {locales.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === current.code}
                onClick={() => {
                  setCurrent(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm transition hover:bg-gray-50 ${
                  l.code === current.code
                    ? "font-semibold text-orange-600"
                    : "text-gray-700"
                }`}
              >
                {l.label}
                {l.code === current.code && (
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SearchBar({ className = "" }: { className?: string }) {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className={`flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 focus-within:border-orange-400 focus-within:bg-white ${className}`}
    >
      <svg viewBox="0 0 24 24" className="size-4 text-gray-400" fill="none" aria-hidden>
        <path
          d="M21 21l-4.3-4.3M11 19a8 8 0 100-16 8 8 0 000 16z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <input
        type="search"
        placeholder="搜尋遊戲、DLC、點數卡…"
        className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
      />
    </form>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-bold text-gray-900">
          <span className="grid size-8 place-items-center rounded-lg bg-orange-500 text-sm font-black text-white">
            N
          </span>
          <span className="text-lg tracking-tight">NovaPlay</span>
        </a>

        <SearchBar className="hidden flex-1 md:flex" />

        <ul className="hidden items-center gap-6 text-sm font-medium text-gray-600 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-gray-900">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <LanguageMenu />
          <a
            href="#"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            登入
          </a>
          <a
            href="#deals"
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            註冊拿折價券
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="開啟選單"
          aria-expanded={open}
          className="ml-auto grid size-10 place-items-center rounded-lg border border-gray-200 text-gray-700 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <SearchBar />
            <ul className="mt-2 flex flex-col text-gray-700">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm transition hover:text-gray-900"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="py-3">
                <LanguageMenu />
              </li>
              <li className="flex gap-3 py-3">
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-lg border border-gray-200 py-2 text-center text-sm font-medium text-gray-700"
                >
                  登入
                </a>
                <a
                  href="#deals"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-lg bg-orange-500 py-2 text-center text-sm font-semibold text-white"
                >
                  註冊拿折價券
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
