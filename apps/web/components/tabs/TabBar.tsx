"use client";

export type Tab = { id: string; label: string };

type Props = {
  tabs: Tab[];
  activeId: string;
  onSelect: (id: string) => void;
  /** segmented：膠囊（主分類）；underline：底線（子分類） */
  variant: "segmented" | "underline";
  ariaLabel: string;
  /** 產生 tab / panel 的 id：`${idPrefix}-tab-${id}` 對應 `${idPrefix}-panel` */
  idPrefix: string;
  className?: string;
};

export default function TabBar({
  tabs,
  activeId,
  onSelect,
  variant,
  ariaLabel,
  idPrefix,
  className = "",
}: Props) {
  const listClass =
    variant === "segmented"
      ? "inline-flex max-w-full gap-1 overflow-x-auto scrollbar-hide rounded-lg bg-gray-100 p-1"
      : "flex gap-1 overflow-x-auto scrollbar-hide border-b border-gray-200";

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={`${listClass} ${className}`}
    >
      {tabs.map((t) => {
        const selected = t.id === activeId;
        const btnClass =
          variant === "segmented"
            ? `shrink-0 rounded-md px-3.5 py-1.5 text-sm font-medium transition ${
                selected
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`
            : `shrink-0 px-3.5 py-2.5 text-sm font-medium transition ${
                selected
                  ? "text-orange-600 shadow-[inset_0_-2px_0_0_var(--color-orange-500)]"
                  : "text-gray-500 hover:text-gray-800"
              }`;

        return (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${t.id}`}
            aria-selected={selected}
            aria-controls={`${idPrefix}-panel`}
            onClick={() => onSelect(t.id)}
            className={btnClass}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
