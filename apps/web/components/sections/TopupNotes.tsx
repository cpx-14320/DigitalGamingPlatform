"use client";

import { useState } from "react";

export default function TopupNotes({ notes }: { notes: string[] }) {
  const [open, setOpen] = useState(true);

  return (
    <section
      id="notes"
      className="scroll-mt-20 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="relative flex w-full items-center justify-center px-12 py-4"
      >
        <span className="text-lg font-bold text-gray-900 sm:text-xl">
          注意事項
        </span>
        <svg
          viewBox="0 0 24 24"
          className={`absolute right-5 size-5 text-gray-400 transition ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open ? (
        <ul className="space-y-2 border-t border-gray-200 px-5 py-4 text-sm leading-relaxed text-gray-600 sm:px-7">
          {notes.map((note, i) => (
            <li key={i} className="flex gap-2">
              <span className="shrink-0 text-gray-400">•</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
