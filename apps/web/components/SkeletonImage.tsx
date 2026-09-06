"use client";

import { useCallback, useState } from "react";

type SkeletonImageProps = {
  src: string;
  alt: string;
  /** 額外加在 <img> 上的 class（例如 hover 放大） */
  className?: string;
  /** 外框尺寸／比例／形狀，預設 1:1（例如 aspect-video、size-9 rounded-full）；natural 模式下只當形狀（rounded/border） */
  ratioClassName?: string;
  /** 外框改用 absolute inset-0 撐滿父層（父層需自行提供 relative + 尺寸），例如首頁大圖輪播 */
  fill?: boolean;
  /** 依原始比例、寬度 100% 顯示（不裁切、不套 skeleton），用於文章內文圖片 */
  natural?: boolean;
  /** 是否優先載入（LCP 圖片用），預設 lazy */
  loading?: "eager" | "lazy";
};

/**
 * 圖片載入前顯示灰色 skeleton（animate-pulse），
 * 載入完成後淡入實際圖片，外框尺寸先佔位以避免版面跳動（CLS）。
 */
export default function SkeletonImage({
  src,
  alt,
  className = "",
  ratioClassName = "aspect-square",
  fill = false,
  natural = false,
  loading = "lazy",
}: SkeletonImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [prevSrc, setPrevSrc] = useState(src);

  // src 變更 → 重置為未載入（於 render 期間調整，不用 effect）
  if (src !== prevSrc) {
    setPrevSrc(src);
    setLoaded(false);
  }

  // 圖片可能在 hydration 前就下載完成（本地小圖／快取／SSR），
  // 那次 load 事件沒人接、onLoad 之後也不會再觸發；
  // callback ref 於掛載時補一次 complete 檢查。
  const attachImg = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete && node.naturalWidth > 0) setLoaded(true);
  }, []);

  if (natural) {
    // 依原始比例、寬度 100% 顯示，不裁切、不套 skeleton（用於文章內文圖片）
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`block h-auto w-full bg-gray-100 ${ratioClassName} ${className}`}
      />
    );
  }

  return (
    <div
      className={`${fill ? "" : "relative "}overflow-hidden bg-gray-100 ${ratioClassName}`}
    >
      <div
        aria-hidden
        className={`absolute inset-0 animate-pulse bg-gray-200 transition-opacity duration-300 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        ref={attachImg}
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        // 用 transition（非 transition-opacity）：淡入與 hover 縮放（transform）都會補間；
        // 呼叫端傳入的 duration 會覆寫下面的預設
        className={`absolute inset-0 size-full object-cover transition duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
}
