"use client";

import {
  Children,
  type DragEvent as ReactDragEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type CarouselProps = {
  children: ReactNode;
  /** 控制每個 breakpoint 顯示幾張的寬度 class，例如 "basis-full sm:basis-1/2 lg:basis-1/3" */
  slideClassName?: string;
  /** slide 之間的間距（Tailwind gap-* class） */
  gapClassName?: string;
  /** 自動輪播間隔（ms），0 表示關閉 */
  autoPlayMs?: number;
  showArrows?: boolean;
  showDots?: boolean;
  ariaLabel?: string;
  className?: string;
  /** 讓輪播撐滿外層給定的高度：slide 依軌道高度自動拉伸（需外層有明確高度）*/
  fillHeight?: boolean;
  /** 按一次上一張／下一張（含自動輪播）前進的停靠點數，預設 1 */
  step?: number;
};

// 拖曳超過這個距離（px）才視為「滑動」，用來抑制放開後誤觸的點擊
const DRAG_THRESHOLD = 6;

/**
 * 以每一張 slide 實際能「靠左對齊」的捲動位置作為停靠點（stop）。
 * - 直接讀 DOM 位置，所以 slide 之間的 gap 也會被正確算進去
 * - 尾端幾張因為捲不過去、會落在同一個終點的，合併成一個停靠點
 * - 最後一個停靠點強制對齊到可捲動終點
 * 圓點數＝停靠點數，會隨可視張數（RWD）與內容多寡自動調整。
 */
function getStops(el: HTMLElement): number[] {
  const kids = Array.from(el.children) as HTMLElement[];
  const max = Math.max(0, el.scrollWidth - el.clientWidth);
  const stops: number[] = [];
  for (const k of kids) {
    const left = Math.min(Math.max(0, k.offsetLeft - el.offsetLeft), max);
    if (stops.length === 0 || left - stops[stops.length - 1] > 8) stops.push(left);
  }
  if (stops.length === 0) return [0];
  if (max - stops[stops.length - 1] > 8) stops.push(max);
  else stops[stops.length - 1] = max;
  return stops;
}

function nearestIndex(stops: number[], value: number): number {
  let idx = 0;
  let min = Infinity;
  stops.forEach((s, i) => {
    const d = Math.abs(s - value);
    if (d < min) {
      min = d;
      idx = i;
    }
  });
  return idx;
}

export default function Carousel({
  children,
  slideClassName = "basis-full",
  gapClassName = "gap-4",
  autoPlayMs = 0,
  showArrows = true,
  showDots = true,
  ariaLabel = "圖片輪播",
  className = "",
  fillHeight = false,
  step = 1,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slides = Children.toArray(children);

  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [dragging, setDragging] = useState(false);
  const stopsRef = useRef<number[]>([0]);

  // 自動輪播的暫停原因（任一為 true 就暫停）
  const pauseRef = useRef({ hover: false, focus: false, drag: false });
  const isPaused = () => {
    const p = pauseRef.current;
    return p.hover || p.focus || p.drag;
  };

  // 滑鼠拖曳狀態
  const dragRef = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
    pointerId: -1,
  });
  const suppressClickRef = useRef(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft < scrollWidth - clientWidth - 4);
    const stops = getStops(el);
    stopsRef.current = stops;
    setPageCount(stops.length);
    setPage(nearestIndex(stops, scrollLeft));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  // 捲動到第 p 個停靠點（clamp 在範圍內）
  const goToPage = useCallback((p: number) => {
    const el = trackRef.current;
    if (!el) return;
    const stops = getStops(el);
    stopsRef.current = stops;
    const i = Math.max(0, Math.min(stops.length - 1, p));
    el.scrollTo({ left: stops[i], behavior: "smooth" });
  }, []);

  const stride = Math.max(1, Math.round(step));

  const next = useCallback(() => {
    const last = stopsRef.current.length - 1;
    goToPage(page >= last ? 0 : page + stride);
  }, [page, goToPage, stride]);

  const prev = useCallback(() => goToPage(page - stride), [page, goToPage, stride]);

  useEffect(() => {
    if (!autoPlayMs) return;
    const id = window.setInterval(() => {
      if (!isPaused()) next();
    }, autoPlayMs);
    return () => window.clearInterval(id);
  }, [autoPlayMs, next]);

  // ---- 自動輪播暫停控制 ----
  const setPause = (key: "hover" | "focus" | "drag", value: boolean) => {
    pauseRef.current[key] = value;
  };

  // ---- 滑鼠拖曳捲動（觸控維持瀏覽器原生行為）----
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = trackRef.current;
    if (!el) return;
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
      pointerId: e.pointerId,
    };
    el.setPointerCapture(e.pointerId);
    // 拖曳期間關掉 snap 與平滑捲動，讓畫面即時跟手、且能停在任意位置
    el.style.scrollSnapType = "none";
    el.style.scrollBehavior = "auto";
    setPause("drag", true);
    setDragging(true);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active) return;
    const el = trackRef.current;
    if (!el) return;
    const dx = e.clientX - drag.startX;
    if (Math.abs(dx) > DRAG_THRESHOLD) drag.moved = true;
    el.scrollLeft = drag.startScroll - dx;
  };

  // 阻止圖片 / 連結的原生拖曳（會產生殘影並吃掉 pointermove，導致無法拖曳捲動）
  const onDragStart = (e: ReactDragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const endDrag = () => {
    const drag = dragRef.current;
    if (!drag.active) return;
    const el = trackRef.current;
    drag.active = false;
    if (el) {
      if (el.hasPointerCapture(drag.pointerId)) {
        el.releasePointerCapture(drag.pointerId);
      }
      // 還原 snap／平滑捲動；停在哪就吸附最接近的停靠點，不硬拉回
      el.style.scrollBehavior = "";
      el.style.scrollSnapType = "";
      const stops = getStops(el);
      stopsRef.current = stops;
      el.scrollTo({
        left: stops[nearestIndex(stops, el.scrollLeft)],
        behavior: "smooth",
      });
    }
    if (drag.moved) suppressClickRef.current = true;
    drag.moved = false;
    setDragging(false);
    // 若滑鼠仍停在輪播上，維持暫停；離開時 onMouseLeave 會解除
    setPause("drag", false);
  };

  // 拖曳結束後，攔掉緊接著觸發的那次點擊（避免拖過連結被誤點）
  const onClickCapture = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (suppressClickRef.current) {
      e.preventDefault();
      e.stopPropagation();
      suppressClickRef.current = false;
    }
  };

  return (
    <div
      className={`relative ${fillHeight ? "flex h-full flex-col" : ""} ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPause("hover", true)}
      onMouseLeave={() => setPause("hover", false)}
      onFocusCapture={() => setPause("focus", true)}
      onBlurCapture={() => setPause("focus", false)}
    >
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDragStart={onDragStart}
        onClickCapture={onClickCapture}
        className={`flex ${gapClassName} ${
          fillHeight ? "min-h-0 flex-1" : ""
        } snap-x snap-proximity overflow-x-auto scroll-smooth scrollbar-hide select-none [&_a]:select-none [&_img]:pointer-events-none ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`shrink-0 grow-0 snap-start ${slideClassName}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${slides.length}`}
          >
            {slide}
          </div>
        ))}
      </div>

      {showArrows && pageCount > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            disabled={!canPrev}
            aria-label="上一張"
            className="absolute left-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-0 sm:left-3"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={!canNext}
            aria-label="下一張"
            className="absolute right-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-0 sm:right-3"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {showDots && pageCount > 1 && (
        <div className="mt-5 flex shrink-0 justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToPage(i)}
              aria-label={`前往第 ${i + 1} 頁，共 ${pageCount} 頁`}
              aria-current={i === page}
              className={`h-2 rounded-full transition-all ${
                i === page
                  ? "w-6 bg-orange-500"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
