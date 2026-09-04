import type { ReactNode } from "react";

// 小標題：前方橘色短豎條（▍活動時間 / ▍活動內容 …）
export default function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900">
      <span className="h-4 w-1 shrink-0 rounded-full bg-orange-500" />
      {children}
    </h3>
  );
}
