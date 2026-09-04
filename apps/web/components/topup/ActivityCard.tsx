import type { ReactNode } from "react";

// 儲值活動頁共用的白色卡片外框（標題置中 + 底線分隔）
export default function ActivityCard({
  id,
  title,
  children,
}: {
  id?: string;
  title?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7"
    >
      {title ? (
        <h2 className="mb-5 border-b border-gray-200 pb-4 text-center text-lg font-bold text-gray-900 sm:text-xl">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
