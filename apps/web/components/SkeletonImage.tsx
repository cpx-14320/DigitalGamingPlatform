"use client";

import { useState } from "react";

type SkeletonImageProps = {
  src: string;
  alt: string;
  /** 額外加在 <img> 上的 class（例如 hover 放大） */
  className?: string;
  /** 外框尺寸／比例／形狀，預設 1:1（例如 aspect-video、size-9 rounded-full） */
  ratioClassName?: string;
  /** 外框改用 absolute inset-0 撐滿父層（父層需自行提供 relative + 尺寸），例如首頁大圖輪播 */
  fill?: boolean;
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
  loading = "lazy",
}: SkeletonImageProps) {
  const [loaded, setLoaded] = useState(false);

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
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`absolute inset-0 size-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
}
