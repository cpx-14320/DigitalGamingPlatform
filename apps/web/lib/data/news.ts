// 遊戲新聞：每則自帶圖片、日期與內文文案（卡片顯示圖片 + 日期 + summary）
// image：16:9，之後換成實際新聞圖路徑（例如 /images/gameNews/xxx.webp）

export type GameNewsItem = {
  id: string;
  image: string;
  date: string; // YYYY-MM-DD
  title: string;
  summary: string;
};

export const gameNews: GameNewsItem[] = [
  {
    id: "news-1",
    image: "https://picsum.photos/seed/suneocard-news-1/1200/675",
    date: "2026-09-03",
    title: "《Ronin Cyber》資料片「霓虹之影」公布上市日",
    summary:
      "官方釋出最新宣傳影片，公開全新武士刀流派與約八小時的主線劇情，並宣布支援雲端 120fps 遊玩，預購玩家可額外獲得限定時裝組與強化材料包。",
  },
  {
    id: "news-2",
    image: "https://picsum.photos/seed/suneocard-news-2/1200/675",
    date: "2026-09-01",
    title: "《Nova Frontier》大型改版：生存模式重製、深空探勘上線",
    summary:
      "本次更新重做氧氣與飢餓曲線，新增可組隊的深空探勘任務與模組化基地系統，舊存檔會自動轉換並發放補償道具，維護時間預計六小時。",
  },
  {
    id: "news-3",
    image: "https://picsum.photos/seed/suneocard-news-3/1200/675",
    date: "2026-08-29",
    title: "《Aether Drift》季前賽開跑，兩條新賽道同步登場",
    summary:
      "季前定位賽即日起開放，完成十場即可獲得專屬車漆；雨戰物理同步更新，重新調校二十條賽道的積水與打滑表現。",
  },
  {
    id: "news-4",
    image: "https://picsum.photos/seed/suneocard-news-4/1200/675",
    date: "2026-08-27",
    title: "《Pixel Kingdoms》建造大賽作品開放玩家投票",
    summary:
      "超過三千份城鎮設計進入複選，投票期間每日可投五票，優勝作品將收錄進官方範本庫，並於下一次改版隨新地圖釋出。",
  },
  {
    id: "news-5",
    image: "https://picsum.photos/seed/suneocard-news-5/1200/675",
    date: "2026-08-25",
    title: "PSN、Nintendo 秋季特賣首波片單搶先看",
    summary:
      "首波特賣涵蓋逾兩百款作品，多款年度完整版下殺三折，會員可再疊加專屬折價券，活動將分三波輪替上架至月底。",
  },
  {
    id: "news-6",
    image: "https://picsum.photos/seed/suneocard-news-6/1200/675",
    date: "2026-08-22",
    title: "《Mythos Online》新團本世界首殺競賽開放報名",
    summary:
      "新團本「星海裂隙」開放八人與二十四人難度，首個擊殺的公會將永久留名於登入畫面，報名將於改版當日午夜截止。",
  },
  {
    id: "news-7",
    image: "https://picsum.photos/seed/suneocard-news-7/1200/675",
    date: "2026-08-20",
    title: "Switch 版本更新：新增效能模式與雲端存檔",
    summary:
      "系統更新後可於設定切換畫質與效能模式，並支援跨裝置雲端存檔，部分早期機種的載入時間也有明顯縮短。",
  },
];
