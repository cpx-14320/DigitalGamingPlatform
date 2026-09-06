// 遊戲新聞
// - 文章（GameNewsArticle）是唯一資料來源
// - 卡片欄位（封面、摘要）由文章推導，summary?/cover? 可手動覆寫
// - 之後接後端：把 gameNews 換成 fetch，推導搬到 API，頁面元件不動

export const NEWS_CATEGORIES = [
  { key: "latest", label: "最新遊戲" },
  { key: "mobile", label: "手機遊戲" },
  { key: "pc", label: "PC遊戲" },
  { key: "esports", label: "電競賽事" },
  { key: "live", label: "實況直播" },
] as const;

export type NewsCategoryKey = (typeof NEWS_CATEGORIES)[number]["key"];

export function newsCategoryLabel(key: NewsCategoryKey): string {
  return NEWS_CATEGORIES.find((c) => c.key === key)?.label ?? key;
}

// 內頁正文：圖文穿插，用 block 陣列
export type NewsBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; caption?: string };

export type GameNewsArticle = {
  slug: string; // = 文章編號，例 "280781"
  date: string; // YYYY-MM-DD
  title: string;
  category: NewsCategoryKey;
  games?: string[]; // 相關遊戲標籤（現階段用名稱字串，之後換成 game id）
  cover?: string; // 沒填 → body 第一個 image block 的 src
  summary?: string; // 沒填 → body 前 SUMMARY_LEN 字自動擷取
  body: NewsBlock[];
};

export type GameNewsCard = {
  slug: string;
  date: string;
  title: string;
  category: NewsCategoryKey;
  cover: string;
  summary: string;
};

export const NEWS_PER_PAGE = 18; // 6 列 × 3 欄
const SUMMARY_LEN = 100;
const FALLBACK_COVER = "https://picsum.photos/seed/suneocard-news/1200/675";

// ---- 佔位內文（之後由實際新聞內容替換）----
function placeholderBody(
  summary: string,
  cover: string,
  title: string,
): NewsBlock[] {
  return [
    { type: "paragraph", text: summary },
    { type: "image", src: cover, caption: title },
    {
      type: "paragraph",
      text: "（此為佔位內文，實際新聞內容將於後端新聞系統上架後帶入，屆時本頁會呈現圖文穿插的完整報導。）",
    },
    {
      type: "paragraph",
      text: "更多活動細節與時程，請以官方最新公告為準。",
    },
  ];
}

type SeedArticle = Omit<GameNewsArticle, "body"> & {
  summary: string;
  body?: NewsBlock[]; // 沒填 → 用佔位內文
};

const seed: SeedArticle[] = [
  {
    slug: "280781",
    date: "2026-09-02",
    title:
      "《SD鋼彈 G世代 永恆》推出9月2日「古夫之日」特別關卡！UR「全裝甲百式改（EX）」等新陣容於精選機體補給登場",
    category: "mobile",
    games: ["SD鋼彈 G世代 永恆", "機動戰士鋼彈"],
    cover: "/images/gameNews/2609/02/280781/00.webp",
    summary:
      "Bandai Namco Entertainment Inc. 發行的《SD鋼彈 G世代 永恆》現正限期推出慶祝9月2日「古夫之日」的特別關卡，並同步開放 UR「全裝甲百式改（EX）」、UR「D鋼彈3號機（EX）」等陣容的精選機體補給，以及最多可獲得總計 3,000 顆鑽石的「上線500日紀念特別活動」。",
    body: [
      {
        type: "paragraph",
        text: "Bandai Namco Entertainment Inc. 所發行之 App Store、Google Play 及 DMM GAMES 專用應用程式《SD鋼彈 G世代 永恆》現正限期推出慶祝9月2日「古夫之日」的特別關卡，還有 UR「全裝甲百式改（EX）」、UR「D鋼彈3號機（EX）」、UR「Z鋼彈（EX）」等陣容的精選機體補給，以及最多可獲得總計 3,000 顆鑽石的「上線500日紀念特別活動」同步登場。",
      },
      {
        type: "paragraph",
        text: "《SD鋼彈 G世代 永恆》現於 App Store、Google Play、DMM GAMES 提供",
      },
      {
        type: "heading",
        text: "慶祝9月2日「古夫之日」！特別關卡現正登場！",
      },
      {
        type: "image",
        src: "/images/gameNews/2609/02/280781/02.webp",
        caption: "「古夫之日」特別關卡",
      },
      {
        type: "paragraph",
        text: "9月2日是古夫（92）之日！（※兩者日文發音相近。）慶祝此特殊日子的特別關卡現正登場。完成關卡即可獲得「古夫」標籤專用 SP 化晶片 100 個和鑽石 100 個，敬請踴躍挑戰！",
      },
      {
        type: "paragraph",
        text: "▼預計登場期間▼\n‧現正登場 ～ 9/10 10:59（GMT+8）為止\n\n▼注意事項▼\n‧登場期間及內容有可能不經預告逕行變更。\n※活動詳情請見遊戲內公告。",
      },
      {
        type: "heading",
        text: "UR「全裝甲百式改（EX）」、UR「D鋼彈3號機（EX）」等陣容正於精選機體補給中登場！",
      },
      {
        type: "image",
        src: "/images/gameNews/2609/02/280781/03.webp",
        caption: "精選機體補給",
      },
      {
        type: "paragraph",
        text: "限期 UR 單位「全裝甲百式改（EX）」／UR「克瓦特羅‧巴吉納」於精選機體補給中新登場！除了新亮相的 UR「D鋼彈3號機（EX）」／UR「達力‧尼耶爾‧岡茲」、UR 支援人員「布萊特‧諾亞＆格里普斯Ⅱ」，限期 UR 單位「Z鋼彈（EX）」／UR「卡密兒‧維丹」也會再度登場。",
      },
      {
        type: "image",
        src: "/images/gameNews/2609/02/280781/04.webp",
        caption: "UR「全裝甲百式改（EX）」",
      },
      {
        type: "image",
        src: "/images/gameNews/2609/02/280781/05.webp",
        caption: "UR「D鋼彈3號機（EX）」",
      },
      {
        type: "paragraph",
        text: "▼機體補給詳情▼\n‧預計登場期間：現正登場 ～ 9/23 10:59（GMT+8）為止\n※登場期間及內容有可能不經預告逕行變更。\n※詳情請至遊戲內查看。",
      },
      {
        type: "image",
        src: "/images/gameNews/2609/02/280781/06.webp",
      },
      {
        type: "image",
        src: "/images/gameNews/2609/02/280781/07.webp",
      },
      {
        type: "image",
        src: "/images/gameNews/2609/02/280781/08.webp",
      },
      {
        type: "image",
        src: "/images/gameNews/2609/02/280781/09.webp",
      },
      {
        type: "image",
        src: "/images/gameNews/2609/02/280781/10.webp",
      },
      {
        type: "image",
        src: "/images/gameNews/2609/02/280781/11.webp",
      },
      {
        type: "heading",
        text: "歡慶《SD鋼彈 G世代 永恆》正式上線500日！現正推出登入獎勵！",
      },
      {
        type: "image",
        src: "/images/gameNews/2609/02/280781/12.webp",
        caption: "上線500日紀念特別活動",
      },
      {
        type: "paragraph",
        text: "為慶祝《SD鋼彈 G世代 永恆》於8月28日正式上線滿 500 天，「上線500日紀念特別活動」現正實施中！於活動期間內登入，最多可獲得總計 3,000 個鑽石。",
      },
      {
        type: "paragraph",
        text: "■報酬內容\n第1天：鑽石 ×500\n第2天：鑽石 ×500\n第3天：鑽石 ×500\n第4天：鑽石 ×1,500",
      },
      {
        type: "paragraph",
        text: "▼活動詳情▼\n‧活動預計登場期間：現正登場 ～ 10/1 10:59（GMT+8）為止\n※登場期間及內容有可能不經預告逕行變更。\n※詳情請至遊戲內查看。",
      },
    ],
  },
  {
    slug: "280783",
    date: "2026-09-02",
    title: "《VAMPIR：血之繼承者》推出「紅月慶典」全新活動副本「殘夢的盡頭」",
    category: "mobile",
    games: ["VAMPIR：血之繼承者"],
    cover: "/images/gameNews/2609/02/280783/00.webp",
    summary:
      "身為知名高品質遊戲開發與發行商的網石集團(Netmarble Corporation)宣布，旗下大規模吸血鬼風格MMORPG《VAMPIR：血之繼承者》推出全新更新，加入全新活動副本「殘夢的盡頭」、擴展「古代工坊」，並限時開放職業變更活動。",
  },
  {
    slug: "280758",
    date: "2026-09-02",
    title: "暴雪娛樂年度盛會資訊一次掌握",
    category: "latest",
    games: ["魔獸世界", "暗黑破壞神", "鬥陣特攻"],
    cover: "/images/gameNews/2609/02/280758/00.webp",
    summary:
      "暴雪娛樂於今（2）日公布BlizzCon 2026「行前須知」指南，提供現場參與玩家和線上觀眾活動重要資訊，邀請所有暴雪社群玩家做好萬全準備，盛大迎接將於太平洋時間 9 月 12（六）至 9月13日（日）回歸安那漢會議中心的年度慶典！本屆BlizzCon迎來全面升級，在首度公開的2026展示場平面圖及活動時程表中，將有部分內容於開幕典禮上正式揭曉。",
  },
  {
    slug: "280710",
    date: "2026-09-01",
    title: "《黑神話：悟空》全球音樂會臺北場現正售票中！",
    category: "pc",
    games: ["黑神話：悟空"],
    cover: "/images/gameNews/2609/02/280710/00.webp",
    summary:
      "《黑神話：悟空》首次全球巡演音樂會北美場圓滿落幕，下一站臺北繼續帶來無與倫比的震撼音樂體驗。",
  },
  {
    slug: "280708",
    date: "2026-09-01",
    title: "《締造者》搶先角色名稱提前額滿 9/2第4輪名額追加！",
    category: "mobile",
    games: ["締造者：放逐之境"],
    cover: "/images/gameNews/2609/02/280708/00.webp",
    summary:
      "韓國遊戲公司DRIMAGE(代表鄭宇容)負責營運、由AQUATREE開發的超大型MMORPG《締造者：放逐之境》(以下簡稱《締造者》)，前3輪伺服器＆角色名稱搶先選定已提前額滿，為滿足廣大玩家的需求，DRIMAGE將於9/2 20:30緊急追加進行第4輪搶先選定名額。",
  },
  {
    slug: "280242",
    date: "2026-08-26",
    title:
      "《天堂2M》「SANCTUARY治癒戰場的奇蹟」改版， 重啟的魔珠職業正式登場！",
    category: "mobile",
    games: ["天堂2M"],
    cover: "/images/gameNews/2609/02/280242/00.webp",
    summary:
      "魔珠是《天堂2 M》第一個專屬職業，也是最佳的輔助代表職業，本次重啟是為了讓它重新確立純輔助職業的定位。配合魔珠重啟也準備了魔珠免費職業轉換，今(26)日維護後~9/9維護前，所有世界都可以進行免費的魔珠職業轉換。",
  },
];

export const gameNews: GameNewsArticle[] = seed.map(({ body, ...a }) => ({
  ...a,
  body: body ?? placeholderBody(a.summary, a.cover ?? FALLBACK_COVER, a.title),
}));

// ---- 衍生與工具 ----

/** 取正文文字（heading/paragraph）前 len 字，超過補「…」 */
export function newsExcerpt(body: NewsBlock[], len = SUMMARY_LEN): string {
  const text = body
    .filter(
      (b): b is Extract<NewsBlock, { type: "heading" | "paragraph" }> =>
        b.type === "heading" || b.type === "paragraph",
    )
    .map((b) => b.text.trim())
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  const chars = Array.from(text);
  return chars.length > len ? chars.slice(0, len).join("") + "…" : text;
}

/** 封面：cover 覆寫 → body 第一張圖 → 佔位圖 */
export function newsCover(a: GameNewsArticle): string {
  if (a.cover) return a.cover;
  const firstImg = a.body.find((b) => b.type === "image");
  return firstImg && firstImg.type === "image" ? firstImg.src : FALLBACK_COVER;
}

export function toNewsCard(a: GameNewsArticle): GameNewsCard {
  return {
    slug: a.slug,
    date: a.date,
    title: a.title,
    category: a.category,
    cover: newsCover(a),
    summary: a.summary ?? newsExcerpt(a.body),
  };
}

export const gameNewsCards: GameNewsCard[] = gameNews.map(toNewsCard);

export function getArticle(slug: string): GameNewsArticle | undefined {
  return gameNews.find((a) => a.slug === slug);
}

export function filterNewsCards(
  cards: GameNewsCard[],
  opts: { cat?: NewsCategoryKey; q?: string } = {},
): GameNewsCard[] {
  const q = opts.q?.trim().toLowerCase();
  return cards.filter((c) => {
    if (opts.cat && c.category !== opts.cat) return false;
    if (q && !`${c.title} ${c.summary}`.toLowerCase().includes(q)) return false;
    return true;
  });
}

export function paginate<T>(
  items: T[],
  page: number,
  perPage = NEWS_PER_PAGE,
): { items: T[]; page: number; pageCount: number; total: number } {
  const total = items.length;
  const pageCount = Math.max(1, Math.ceil(total / perPage));
  const current = Math.min(Math.max(1, Math.floor(page) || 1), pageCount);
  const start = (current - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    page: current,
    pageCount,
    total,
  };
}

/**
 * 相關 / 推薦新聞（現階段：相同遊戲 → 相同分類 → 最新）。
 * 之後有會員登入時，這個函式會多收一個 member 參數，
 * 或整個改由後端 /api/news/recommend 依會員的分類 / 遊戲偏好評分回傳。
 */
export function getRelatedNews(
  article: GameNewsArticle,
  n = 8,
): GameNewsCard[] {
  const pool = gameNews.filter((a) => a.slug !== article.slug);
  const games = new Set(article.games ?? []);

  const score = (a: GameNewsArticle) => {
    let s = 0;
    if (a.games?.some((g) => games.has(g))) s += 2;
    if (a.category === article.category) s += 1;
    return s;
  };

  return pool
    .map((a) => ({ a, s: score(a) }))
    .sort((x, y) => y.s - x.s || (x.a.date < y.a.date ? 1 : -1))
    .slice(0, n)
    .map(({ a }) => toNewsCard(a));
}
