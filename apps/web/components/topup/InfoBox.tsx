import type { ReactNode } from "react";

// 灰底提示框（貼心提醒 / 虛寶兌換方式 …）
export default function InfoBox({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-gray-600">
      {label ? (
        <p className="mb-1.5 flex items-center gap-1.5 font-semibold text-gray-800">
          <svg
            viewBox="0 0 24 24"
            className="size-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5M12 7.5h.01" strokeLinecap="round" />
          </svg>
          {label}
        </p>
      ) : null}
      {children}
    </div>
  );
}
