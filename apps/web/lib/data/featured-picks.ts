// 熱門推薦（首頁「本日特賣」上方）
// 雙層 tabs：L1 主分類（膠囊）→ L2 子分類（底線）→ 卡片輪播
// image：1:1 方形，之後換成實際圖片路徑；佔位資料，定期變動，之後可改為後端 fetch

export type FeaturedItem = {
  id: string;
  title: string;
  image: string;
  href: string;
};

export type FeaturedSub = {
  id: string;
  label: string;
  items: FeaturedItem[];
};

export type FeaturedCategory = {
  id: string;
  label: string;
  subs: FeaturedSub[];
};

// 由標題陣列產生佔位卡片
function items(prefix: string, titles: string[]): FeaturedItem[] {
  return titles.map((title, i) => ({
    id: `${prefix}-${i + 1}`,
    title,
    image: `https://picsum.photos/seed/featured-${prefix}-${i + 1}/240/240`,
    href: "#",
  }));
}

export const featuredPicks: FeaturedCategory[] = [
  {
    id: "member-event",
    label: "會員活動",
    subs: [
      {
        id: "daily",
        label: "每日任務",
        items: items("me-daily", [
          "每日簽到送回饋金",
          "登入抽點數卡",
          "完成任務換好禮",
          "連續登入獎勵",
          "每日一抽",
          "簽到滿月大獎",
        ]),
      },
      {
        id: "topup",
        label: "儲值活動",
        items: items("me-topup", [
          "儲值滿額抽 iPhone",
          "首儲雙倍點數",
          "週末儲值加碼",
          "指定面額送折價券",
          "儲值任務累積獎勵",
          "大額儲值回饋金",
        ]),
      },
      {
        id: "limited",
        label: "限時活動",
        items: items("me-limited", [
          "週年慶回饋",
          "雙 11 點數特賣",
          "快閃折價券",
          "限時免運",
          "節慶登入禮",
          "限量福袋開賣",
        ]),
      },
    ],
  },
  {
    id: "pre-reg",
    label: "事前登錄",
    subs: [
      {
        id: "mobile",
        label: "手機遊戲",
        items: items("pr-mobile", [
          "《幻域之境》事前登錄",
          "《星軌遠征 2》預約",
          "《香草小鎮物語》預註冊",
          "《暗潮：深海獵人》登錄",
          "《節奏星塵》預約",
          "《王座繼承者》搶名額",
        ]),
      },
      {
        id: "pc",
        label: "PC遊戲",
        items: items("pr-pc", [
          "《鋼鐵前線：破曉》封測",
          "《深空拓荒》願望清單",
          "《機甲風暴》預購",
          "《迷霧偵探》搶先體驗",
          "《熔岩競技場》公測報名",
          "《群島求生》搶鮮包",
        ]),
      },
      {
        id: "console",
        label: "主機遊戲",
        items: items("pr-console", [
          "《劍與魔法》主機版預約",
          "《蒼穹之刃》數位預購",
          "《時光織者》限定同捆",
          "《武士之道》典藏版",
          "《卡牌傳說》主機獨佔",
          "《天空農園》預載開放",
        ]),
      },
    ],
  },
  {
    id: "points",
    label: "點卡商城",
    subs: [
      {
        id: "psn",
        label: "PlayStation",
        items: items("pt-psn", [
          "PSN 點數卡 9 折",
          "PS Plus 12 個月",
          "PSN $500 卡",
          "PSN $1000 卡",
          "PS Store 折價券",
          "PSN 儲值教學",
        ]),
      },
      {
        id: "nintendo",
        label: "Nintendo",
        items: items("pt-nintendo", [
          "eShop 儲值卡",
          "Switch Online 家庭方案",
          "eShop $450 卡",
          "eShop $900 卡",
          "Nintendo 點數回饋",
          "eShop 儲值教學",
        ]),
      },
      {
        id: "steam",
        label: "Steam",
        items: items("pt-steam", [
          "Steam 錢包 $300",
          "Steam 錢包 $600",
          "Steam 禮物卡",
          "夏日特賣點數包",
          "Steam 儲值教學",
          "Steam 點數回饋",
        ]),
      },
    ],
  },
  {
    id: "fan-reward",
    label: "寵粉回饋",
    subs: [
      {
        id: "social",
        label: "社群活動",
        items: items("fr-social", [
          "追蹤 IG 抽點數卡",
          "FB 分享得回饋金",
          "Discord 打卡送折價券",
          "YT 訂閱抽周邊",
          "LINE 好友限定禮",
          "社群任務累積獎勵",
        ]),
      },
      {
        id: "referral",
        label: "好友推薦",
        items: items("fr-referral", [
          "邀請好友各得 100 點",
          "推薦滿 5 人送大獎",
          "好友首購雙方回饋",
          "專屬推薦連結",
          "推薦排行榜獎勵",
          "老帶新回歸禮",
        ]),
      },
      {
        id: "lottery",
        label: "抽獎",
        items: items("fr-lottery", [
          "每月實體周邊抽獎",
          "消費累積抽獎券",
          "幸運轉盤天天抽",
          "集點兌換抽獎",
          "年度大獎抽 PS5",
          "直播抽獎活動",
        ]),
      },
    ],
  },
];
