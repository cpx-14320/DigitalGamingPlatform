// 遊戲事前登錄（只用於遊戲新聞內頁右側欄；定期變動，之後可改為後端 fetch）
// image：正方形縮圖，之後換成 /images/pre/xxx.webp

export type PreItem = {
  id: string;
  image: string;
  href: string;
  title: string; // 粗體主行
  text: string; // 副行說明
};

export const pre: PreItem[] = [
  {
    id: "pre-1",
    image: "https://picsum.photos/seed/suneocard-pre-1/200/200",
    href: "#",
    title: "《幻域之境》雙平台事前登錄開跑",
    text: "登錄人數突破 50 萬，上市首日直接領 SSR 英雄選擇箱。",
  },
  {
    id: "pre-2",
    image: "https://picsum.photos/seed/suneocard-pre-2/200/200",
    href: "#",
    title: "《星軌遠征 2》預約送限定坐騎",
    text: "完成官網與 App 雙重預約，開服 7 日內可兌換專屬飛行坐騎。",
  },
  {
    id: "pre-3",
    image: "https://picsum.photos/seed/suneocard-pre-3/200/200",
    href: "#",
    title: "《鋼鐵前線：破曉》封測報名中",
    text: "8/30 前報名即有機會參加不刪檔封測，回饋玩家送內測限定稱號。",
  },
  {
    id: "pre-4",
    image: "https://picsum.photos/seed/suneocard-pre-4/200/200",
    href: "#",
    title: "《香草小鎮物語》預註冊里程碑達標",
    text: "全球預約破百萬，追加發放金幣 10,000 與家具設計圖 ×3。",
  },
  {
    id: "pre-5",
    image: "https://picsum.photos/seed/suneocard-pre-5/200/200",
    href: "#",
    title: "《暗潮：深海獵人》事前登錄第二彈",
    text: "新增角色情報公開，登錄再享開服首儲雙倍加碼。",
  },
  {
    id: "pre-6",
    image: "https://picsum.photos/seed/suneocard-pre-6/200/200",
    href: "#",
    title: "《節奏星塵》預約音樂包免費解鎖",
    text: "預約人數每達一階段，開服後全體玩家解鎖對應曲目與譜面。",
  },
  {
    id: "pre-7",
    image: "https://picsum.photos/seed/suneocard-pre-7/200/200",
    href: "#",
    title: "《王座繼承者》官網預約搶名額",
    text: "伺服器與角色名稱搶先選定第 4 輪加開，額滿為止。",
  },
];
