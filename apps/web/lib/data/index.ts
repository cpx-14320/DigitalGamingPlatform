// 假資料：實務上改成打 API / CMS。圖片用 picsum.photos 佔位圖。
//
// 各區塊資料逐步拆成 lib/data/<區塊>.ts，並由這裡 re-export，
// 元件維持 import { ... } from "@/lib/data" 不變。
export * from "./creators";
export * from "./member-task";
export * from "./news";
export * from "./pre";

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  image: string;
};

export type Game = {
  id: string;
  title: string;
  genre: string;
  platform: string; // PC / PS5 / Switch...
  rating: number;
  price: number; // 售價（TWD）
  discount?: number; // 折扣百分比，例如 40 表示 -40%
  image: string;
};

/** 由售價與折扣回推原價 */
export function listPrice(price: number, discount?: number): number {
  if (!discount) return price;
  return Math.round(price / (1 - discount / 100) / 10) * 10;
}

export type Feature = {
  title: string;
  desc: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "midseason",
    eyebrow: "季中特賣進行中",
    title: "精選 3A 大作最低 3 折",
    desc: "數千款正版序號限時下殺，結帳再享會員回饋金，售完為止。",
    image: "https://picsum.photos/seed/novaplay-hero-midseason/1600/900",
  },
  {
    id: "preorder",
    eyebrow: "新作預購",
    title: "本月話題新作開放預購",
    desc: "預購享 9 折與限定特典，發售日自動配送序號，不用排隊。",
    image: "https://picsum.photos/seed/novaplay-hero-preorder/1600/900",
  },
  {
    id: "points",
    eyebrow: "點數卡專區",
    title: "各平台點數卡即買即用",
    desc: "PSN、Nintendo、Steam 錢包點數卡面額齊全，付款後立即發碼。",
    image: "https://picsum.photos/seed/novaplay-hero-points/1600/900",
  },
  {
    id: "bundle",
    eyebrow: "組合包優惠",
    title: "系列作組合包一次收齊",
    desc: "本傳＋資料片＋DLC 綁售再折 15%，補完進度更划算。",
    image: "https://picsum.photos/seed/novaplay-hero-bundle/1600/900",
  },
];

export const games: Game[] = [
  {
    id: "aether-drift",
    title: "Aether Drift",
    genre: "開放世界競速",
    platform: "PC",
    rating: 4.8,
    price: 890,
    discount: 40,
    image: "https://picsum.photos/seed/game-aether-drift/600/800",
  },
  {
    id: "nova-frontier",
    title: "Nova Frontier",
    genre: "太空生存",
    platform: "PC / PS5",
    rating: 4.6,
    price: 1290,
    discount: 25,
    image: "https://picsum.photos/seed/game-nova-frontier/600/800",
  },
  {
    id: "ronin-cyber",
    title: "Ronin Cyber",
    genre: "動作 RPG",
    platform: "PS5",
    rating: 4.9,
    price: 1690,
    image: "https://picsum.photos/seed/game-ronin-cyber/600/800",
  },
  {
    id: "pixel-kingdoms",
    title: "Pixel Kingdoms",
    genre: "策略經營",
    platform: "PC / Switch",
    rating: 4.5,
    price: 520,
    discount: 30,
    image: "https://picsum.photos/seed/game-pixel-kingdoms/600/800",
  },
  {
    id: "deep-hollow",
    title: "Deep Hollow",
    genre: "恐怖解謎",
    platform: "PC",
    rating: 4.7,
    price: 390,
    discount: 55,
    image: "https://picsum.photos/seed/game-deep-hollow/600/800",
  },
  {
    id: "arcadia-cup",
    title: "Arcadia Cup",
    genre: "派對競技",
    platform: "Switch",
    rating: 4.4,
    price: 990,
    image: "https://picsum.photos/seed/game-arcadia-cup/600/800",
  },
  {
    id: "skyforge-tactics",
    title: "Skyforge Tactics",
    genre: "回合戰棋",
    platform: "PC",
    rating: 4.6,
    price: 640,
    discount: 20,
    image: "https://picsum.photos/seed/game-skyforge-tactics/600/800",
  },
  {
    id: "mythos-online",
    title: "Mythos Online",
    genre: "MMORPG",
    platform: "PC",
    rating: 4.3,
    price: 300,
    discount: 15,
    image: "https://picsum.photos/seed/game-mythos-online/600/800",
  },
];

export const features: Feature[] = [
  {
    title: "100% 正版授權",
    desc: "所有序號皆由原廠或官方代理供貨，可綁定官方帳號永久持有。",
  },
  {
    title: "付款後即時發碼",
    desc: "多數商品自動出貨，結帳完成即在訂單頁顯示序號與啟用教學。",
  },
  {
    title: "價格透明",
    desc: "標示原價與折扣後金額，無隱藏手續費，特賣時間與庫存公開。",
  },
  {
    title: "七日鑑賞期",
    desc: "未使用序號可於七日內申請退款，流程線上完成、不需來回信件。",
  },
  {
    title: "多元支付",
    desc: "支援信用卡、行動支付、超商代碼與電子錢包，結帳一頁完成。",
  },
  {
    title: "會員回饋金",
    desc: "每筆消費回饋 1–3%，回饋金可直接折抵下次購買，無使用期限。",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "阿哲",
    role: "PC 玩家",
    quote:
      "季中特賣買了三款 3A，付款完訂單頁馬上就有序號，比官方商店還便宜一截。",
    avatar: "https://picsum.photos/seed/avatar-jhe/120/120",
  },
  {
    name: "Nina",
    role: "實況主",
    quote: "新作預購直接在這下，發售當天自動配送，開台前不用手忙腳亂找 key。",
    avatar: "https://picsum.photos/seed/avatar-nina/120/120",
  },
  {
    name: "老王",
    role: "雙寶爸",
    quote: "點數卡買了立刻發碼，小孩吵著要儲值也能馬上處理，回饋金累積得也快。",
    avatar: "https://picsum.photos/seed/avatar-wang/120/120",
  },
  {
    name: "Kevin",
    role: "Switch 玩家",
    quote: "有次序號綁定出問題，線上客服 20 分鐘就換一組新的，售後算是安心。",
    avatar: "https://picsum.photos/seed/avatar-kevin/120/120",
  },
  {
    name: "小蓁",
    role: "學生",
    quote: "常來撿特價的獨立遊戲，一款一兩百塊就入手，回饋金折一折又更省。",
    avatar: "https://picsum.photos/seed/avatar-jhen/120/120",
  },
];

// ---- 商品分類（Tabs + 方形 icon 輪播）----

export type GameIcon = {
  id: string;
  title: string;
  genre: string;
  price: number; // 售價（TWD）
  image: string; // 1:1 方形，之後換成實際遊戲 icon
};

export type GameCategory = {
  id: string;
  label: string;
  games: GameIcon[];
};

export const gameCategories: GameCategory[] = [
  {
    id: "latest",
    label: "最新遊戲",
    games: [
      {
        id: "latest-1",
        title: "霓虹狂潮",
        genre: "電子競技",
        price: 90,
        image: "https://picsum.photos/seed/latest-icon-1/240/240",
      },
      {
        id: "latest-2",
        title: "時光織者",
        genre: "敘事冒險",
        price: 150,
        image: "https://picsum.photos/seed/latest-icon-2/240/240",
      },
      {
        id: "latest-3",
        title: "深淵獵人",
        genre: "類魂動作",
        price: 250,
        image: "https://picsum.photos/seed/latest-icon-3/240/240",
      },
      {
        id: "latest-4",
        title: "天空農園",
        genre: "悠閒模擬",
        price: 320,
        image: "https://picsum.photos/seed/latest-icon-4/240/240",
      },
      {
        id: "latest-5",
        title: "機甲風暴",
        genre: "機器人動作",
        price: 450,
        image: "https://picsum.photos/seed/latest-icon-5/240/240",
      },
      {
        id: "latest-6",
        title: "卡牌傳說",
        genre: "數位卡牌",
        price: 590,
        image: "https://picsum.photos/seed/latest-icon-6/240/240",
      },
      {
        id: "latest-7",
        title: "迷霧偵探",
        genre: "推理解謎",
        price: 690,
        image: "https://picsum.photos/seed/latest-icon-7/240/240",
      },
      {
        id: "latest-8",
        title: "熔岩競技場",
        genre: "派對競技",
        price: 890,
        image: "https://picsum.photos/seed/latest-icon-8/240/240",
      },
      {
        id: "latest-9",
        title: "群島求生",
        genre: "開放世界生存",
        price: 990,
        image: "https://picsum.photos/seed/latest-icon-9/240/240",
      },
      {
        id: "latest-10",
        title: "節拍宇宙",
        genre: "音樂節奏",
        price: 1290,
        image: "https://picsum.photos/seed/latest-icon-10/240/240",
      },
    ],
  },
  {
    id: "rpg",
    label: "角色扮演",
    games: [
      {
        id: "rpg-1",
        title: "劍與魔法",
        genre: "MMORPG",
        price: 90,
        image: "https://picsum.photos/seed/rpg-icon-1/240/240",
      },
      {
        id: "rpg-2",
        title: "王國紀元",
        genre: "角色扮演",
        price: 150,
        image: "https://picsum.photos/seed/rpg-icon-2/240/240",
      },
      {
        id: "rpg-3",
        title: "Ronin Cyber",
        genre: "動作 RPG",
        price: 250,
        image: "https://picsum.photos/seed/rpg-icon-3/240/240",
      },
      {
        id: "rpg-4",
        title: "Mythos Online",
        genre: "MMORPG",
        price: 320,
        image: "https://picsum.photos/seed/rpg-icon-4/240/240",
      },
      {
        id: "rpg-5",
        title: "武士之道",
        genre: "砍殺動作",
        price: 450,
        image: "https://picsum.photos/seed/rpg-icon-5/240/240",
      },
      {
        id: "rpg-6",
        title: "星軌旅人",
        genre: "放置養成",
        price: 590,
        image: "https://picsum.photos/seed/rpg-icon-6/240/240",
      },
      {
        id: "rpg-7",
        title: "Skyforge Tactics",
        genre: "回合戰棋",
        price: 690,
        image: "https://picsum.photos/seed/rpg-icon-7/240/240",
      },
      {
        id: "rpg-8",
        title: "蒼穹之刃",
        genre: "動作冒險",
        price: 890,
        image: "https://picsum.photos/seed/rpg-icon-8/240/240",
      },
      {
        id: "rpg-9",
        title: "時光織者",
        genre: "敘事冒險",
        price: 990,
        image: "https://picsum.photos/seed/rpg-icon-9/240/240",
      },
      {
        id: "rpg-10",
        title: "末日方舟",
        genre: "生存",
        price: 1290,
        image: "https://picsum.photos/seed/rpg-icon-10/240/240",
      },
    ],
  },
  {
    id: "adventure",
    label: "冒險",
    games: [
      {
        id: "adventure-1",
        title: "Nova Frontier",
        genre: "太空生存",
        price: 90,
        image: "https://picsum.photos/seed/adventure-icon-1/240/240",
      },
      {
        id: "adventure-2",
        title: "群島求生",
        genre: "開放世界生存",
        price: 150,
        image: "https://picsum.photos/seed/adventure-icon-2/240/240",
      },
      {
        id: "adventure-3",
        title: "Deep Hollow",
        genre: "恐怖解謎",
        price: 250,
        image: "https://picsum.photos/seed/adventure-icon-3/240/240",
      },
      {
        id: "adventure-4",
        title: "迷霧偵探",
        genre: "推理解謎",
        price: 320,
        image: "https://picsum.photos/seed/adventure-icon-4/240/240",
      },
      {
        id: "adventure-5",
        title: "謎屋逃脫",
        genre: "解謎",
        price: 450,
        image: "https://picsum.photos/seed/adventure-icon-5/240/240",
      },
      {
        id: "adventure-6",
        title: "Neon Circuit",
        genre: "平台動作",
        price: 590,
        image: "https://picsum.photos/seed/adventure-icon-6/240/240",
      },
      {
        id: "adventure-7",
        title: "星際傭兵",
        genre: "第三人稱射擊",
        price: 690,
        image: "https://picsum.photos/seed/adventure-icon-7/240/240",
      },
      {
        id: "adventure-8",
        title: "槍火前線",
        genre: "射擊",
        price: 890,
        image: "https://picsum.photos/seed/adventure-icon-8/240/240",
      },
      {
        id: "adventure-9",
        title: "深淵獵人",
        genre: "類魂動作",
        price: 990,
        image: "https://picsum.photos/seed/adventure-icon-9/240/240",
      },
      {
        id: "adventure-10",
        title: "天空農園",
        genre: "悠閒模擬",
        price: 1290,
        image: "https://picsum.photos/seed/adventure-icon-10/240/240",
      },
    ],
  },
  {
    id: "strategy",
    label: "策略",
    games: [
      {
        id: "strategy-1",
        title: "三國無疆",
        genre: "策略",
        price: 90,
        image: "https://picsum.photos/seed/strategy-icon-1/240/240",
      },
      {
        id: "strategy-2",
        title: "Pixel Kingdoms",
        genre: "策略經營",
        price: 150,
        image: "https://picsum.photos/seed/strategy-icon-2/240/240",
      },
      {
        id: "strategy-3",
        title: "Iron Vanguard",
        genre: "即時戰略",
        price: 250,
        image: "https://picsum.photos/seed/strategy-icon-3/240/240",
      },
      {
        id: "strategy-4",
        title: "銀河艦隊",
        genre: "太空戰略",
        price: 320,
        image: "https://picsum.photos/seed/strategy-icon-4/240/240",
      },
      {
        id: "strategy-5",
        title: "無盡塔防",
        genre: "塔防",
        price: 450,
        image: "https://picsum.photos/seed/strategy-icon-5/240/240",
      },
      {
        id: "strategy-6",
        title: "餐廳大亨",
        genre: "模擬經營",
        price: 590,
        image: "https://picsum.photos/seed/strategy-icon-6/240/240",
      },
      {
        id: "strategy-7",
        title: "Harvest Vale",
        genre: "農場模擬",
        price: 690,
        image: "https://picsum.photos/seed/strategy-icon-7/240/240",
      },
      {
        id: "strategy-8",
        title: "對決之巔",
        genre: "MOBA",
        price: 890,
        image: "https://picsum.photos/seed/strategy-icon-8/240/240",
      },
      {
        id: "strategy-9",
        title: "英雄戰場",
        genre: "MOBA",
        price: 990,
        image: "https://picsum.photos/seed/strategy-icon-9/240/240",
      },
      {
        id: "strategy-10",
        title: "方塊工坊",
        genre: "沙盒建造",
        price: 1290,
        image: "https://picsum.photos/seed/strategy-icon-10/240/240",
      },
    ],
  },
  {
    id: "sports",
    label: "運動",
    games: [
      {
        id: "sports-1",
        title: "足球世界盃",
        genre: "運動",
        price: 90,
        image: "https://picsum.photos/seed/sports-icon-1/240/240",
      },
      {
        id: "sports-2",
        title: "賽車狂飆",
        genre: "競速",
        price: 150,
        image: "https://picsum.photos/seed/sports-icon-2/240/240",
      },
      {
        id: "sports-3",
        title: "極速甩尾",
        genre: "競速",
        price: 250,
        image: "https://picsum.photos/seed/sports-icon-3/240/240",
      },
      {
        id: "sports-4",
        title: "Aether Drift",
        genre: "開放世界競速",
        price: 320,
        image: "https://picsum.photos/seed/sports-icon-4/240/240",
      },
      {
        id: "sports-5",
        title: "跑酷少年",
        genre: "無盡跑酷",
        price: 450,
        image: "https://picsum.photos/seed/sports-icon-5/240/240",
      },
      {
        id: "sports-6",
        title: "釣魚人生",
        genre: "休閒模擬",
        price: 590,
        image: "https://picsum.photos/seed/sports-icon-6/240/240",
      },
      {
        id: "sports-7",
        title: "拳皇再臨",
        genre: "格鬥",
        price: 690,
        image: "https://picsum.photos/seed/sports-icon-7/240/240",
      },
      {
        id: "sports-8",
        title: "快打旋風",
        genre: "格鬥",
        price: 890,
        image: "https://picsum.photos/seed/sports-icon-8/240/240",
      },
      {
        id: "sports-9",
        title: "節奏光劍",
        genre: "音樂",
        price: 990,
        image: "https://picsum.photos/seed/sports-icon-9/240/240",
      },
      {
        id: "sports-10",
        title: "彈射英雄",
        genre: "動作",
        price: 1290,
        image: "https://picsum.photos/seed/sports-icon-10/240/240",
      },
    ],
  },
  {
    id: "card",
    label: "卡牌",
    games: [
      {
        id: "card-1",
        title: "卡牌傳說",
        genre: "數位卡牌",
        price: 90,
        image: "https://picsum.photos/seed/card-icon-1/240/240",
      },
      {
        id: "card-2",
        title: "寶石傳奇",
        genre: "三消益智",
        price: 150,
        image: "https://picsum.photos/seed/card-icon-2/240/240",
      },
      {
        id: "card-3",
        title: "棋牌館",
        genre: "桌遊",
        price: 250,
        image: "https://picsum.photos/seed/card-icon-3/240/240",
      },
      {
        id: "card-4",
        title: "對決之巔",
        genre: "MOBA",
        price: 320,
        image: "https://picsum.photos/seed/card-icon-4/240/240",
      },
      {
        id: "card-5",
        title: "英雄戰場",
        genre: "MOBA",
        price: 450,
        image: "https://picsum.photos/seed/card-icon-5/240/240",
      },
      {
        id: "card-6",
        title: "方塊消消樂",
        genre: "益智",
        price: 590,
        image: "https://picsum.photos/seed/card-icon-6/240/240",
      },
      {
        id: "card-7",
        title: "幻境彈珠",
        genre: "休閒",
        price: 690,
        image: "https://picsum.photos/seed/card-icon-7/240/240",
      },
      {
        id: "card-8",
        title: "寵物小鎮",
        genre: "模擬",
        price: 890,
        image: "https://picsum.photos/seed/card-icon-8/240/240",
      },
      {
        id: "card-9",
        title: "節拍宇宙",
        genre: "音樂節奏",
        price: 990,
        image: "https://picsum.photos/seed/card-icon-9/240/240",
      },
      {
        id: "card-10",
        title: "時光織者",
        genre: "敘事冒險",
        price: 1290,
        image: "https://picsum.photos/seed/card-icon-10/240/240",
      },
    ],
  },
  {
    id: "casual",
    label: "休閒",
    games: [
      {
        id: "casual-1",
        title: "幻境彈珠",
        genre: "休閒",
        price: 90,
        image: "https://picsum.photos/seed/casual-icon-1/240/240",
      },
      {
        id: "casual-2",
        title: "釣魚人生",
        genre: "休閒模擬",
        price: 150,
        image: "https://picsum.photos/seed/casual-icon-2/240/240",
      },
      {
        id: "casual-3",
        title: "天空農園",
        genre: "悠閒模擬",
        price: 250,
        image: "https://picsum.photos/seed/casual-icon-3/240/240",
      },
      {
        id: "casual-4",
        title: "寵物小鎮",
        genre: "模擬",
        price: 320,
        image: "https://picsum.photos/seed/casual-icon-4/240/240",
      },
      {
        id: "casual-5",
        title: "餐廳大亨",
        genre: "模擬經營",
        price: 450,
        image: "https://picsum.photos/seed/casual-icon-5/240/240",
      },
      {
        id: "casual-6",
        title: "方塊消消樂",
        genre: "益智",
        price: 590,
        image: "https://picsum.photos/seed/casual-icon-6/240/240",
      },
      {
        id: "casual-7",
        title: "寶石傳奇",
        genre: "三消益智",
        price: 690,
        image: "https://picsum.photos/seed/casual-icon-7/240/240",
      },
      {
        id: "casual-8",
        title: "跑酷少年",
        genre: "無盡跑酷",
        price: 890,
        image: "https://picsum.photos/seed/casual-icon-8/240/240",
      },
      {
        id: "casual-9",
        title: "星軌旅人",
        genre: "放置養成",
        price: 990,
        image: "https://picsum.photos/seed/casual-icon-9/240/240",
      },
      {
        id: "casual-10",
        title: "節奏光劍",
        genre: "音樂",
        price: 1290,
        image: "https://picsum.photos/seed/casual-icon-10/240/240",
      },
    ],
  },
  {
    id: "board-puzzle",
    label: "棋牌益智",
    games: [
      {
        id: "board-puzzle-1",
        title: "棋牌館",
        genre: "桌遊",
        price: 90,
        image: "https://picsum.photos/seed/board-puzzle-icon-1/240/240",
      },
      {
        id: "board-puzzle-2",
        title: "方塊消消樂",
        genre: "益智",
        price: 150,
        image: "https://picsum.photos/seed/board-puzzle-icon-2/240/240",
      },
      {
        id: "board-puzzle-3",
        title: "寶石傳奇",
        genre: "三消益智",
        price: 250,
        image: "https://picsum.photos/seed/board-puzzle-icon-3/240/240",
      },
      {
        id: "board-puzzle-4",
        title: "謎屋逃脫",
        genre: "解謎",
        price: 320,
        image: "https://picsum.photos/seed/board-puzzle-icon-4/240/240",
      },
      {
        id: "board-puzzle-5",
        title: "迷霧偵探",
        genre: "推理解謎",
        price: 450,
        image: "https://picsum.photos/seed/board-puzzle-icon-5/240/240",
      },
      {
        id: "board-puzzle-6",
        title: "Deep Hollow",
        genre: "恐怖解謎",
        price: 590,
        image: "https://picsum.photos/seed/board-puzzle-icon-6/240/240",
      },
      {
        id: "board-puzzle-7",
        title: "方塊工坊",
        genre: "沙盒建造",
        price: 690,
        image: "https://picsum.photos/seed/board-puzzle-icon-7/240/240",
      },
      {
        id: "board-puzzle-8",
        title: "幻境彈珠",
        genre: "休閒",
        price: 890,
        image: "https://picsum.photos/seed/board-puzzle-icon-8/240/240",
      },
      {
        id: "board-puzzle-9",
        title: "無盡塔防",
        genre: "塔防",
        price: 990,
        image: "https://picsum.photos/seed/board-puzzle-icon-9/240/240",
      },
      {
        id: "board-puzzle-10",
        title: "Skyforge Tactics",
        genre: "回合戰棋",
        price: 1290,
        image: "https://picsum.photos/seed/board-puzzle-icon-10/240/240",
      },
    ],
  },
];

// ---- 新品上架（一列 6 欄、兩列一頁，載入更多）----

export type ArrivalItem = {
  id: string;
  title: string;
  tag: string;
  price: number;
  image: string; // 1:1 方形
};

export const newArrivals: ArrivalItem[] = [
  {
    id: "arrival-1",
    title: "暗影迴廊：失落王都 年度完整版",
    tag: "動作",
    price: 120,
    image: "https://picsum.photos/seed/novaplay-arrival-1/240/240",
  },
  {
    id: "arrival-2",
    title: "極光航線",
    tag: "冒險",
    price: 199,
    image: "https://picsum.photos/seed/novaplay-arrival-2/240/240",
  },
  {
    id: "arrival-3",
    title: "鐵翼中隊 豪華數位典藏版",
    tag: "策略",
    price: 290,
    image: "https://picsum.photos/seed/novaplay-arrival-3/240/240",
  },
  {
    id: "arrival-4",
    title: "琉璃之境",
    tag: "競速",
    price: 350,
    image: "https://picsum.photos/seed/novaplay-arrival-4/240/240",
  },
  {
    id: "arrival-5",
    title: "荒野驛站：邊境開拓者 資料片同捆包",
    tag: "模擬",
    price: 450,
    image: "https://picsum.photos/seed/novaplay-arrival-5/240/240",
  },
  {
    id: "arrival-6",
    title: "霓虹街頭",
    tag: "解謎",
    price: 520,
    image: "https://picsum.photos/seed/novaplay-arrival-6/240/240",
  },
  {
    id: "arrival-7",
    title: "深海回聲",
    tag: "RPG",
    price: 690,
    image: "https://picsum.photos/seed/novaplay-arrival-7/240/240",
  },
  {
    id: "arrival-8",
    title: "風暴戰旗 終極版（含全部season pass）",
    tag: "運動",
    price: 790,
    image: "https://picsum.photos/seed/novaplay-arrival-8/240/240",
  },
  {
    id: "arrival-9",
    title: "像素工匠",
    tag: "格鬥",
    price: 890,
    image: "https://picsum.photos/seed/novaplay-arrival-9/240/240",
  },
  {
    id: "arrival-10",
    title: "星塵獵人",
    tag: "恐怖",
    price: 990,
    image: "https://picsum.photos/seed/novaplay-arrival-10/240/240",
  },
  {
    id: "arrival-11",
    title: "古樹守望：靜謐森林的漫長冬季",
    tag: "動作",
    price: 1190,
    image: "https://picsum.photos/seed/novaplay-arrival-11/240/240",
  },
  {
    id: "arrival-12",
    title: "熔心競技",
    tag: "冒險",
    price: 1390,
    image: "https://picsum.photos/seed/novaplay-arrival-12/240/240",
  },
  {
    id: "arrival-13",
    title: "迷航日記",
    tag: "策略",
    price: 120,
    image: "https://picsum.photos/seed/novaplay-arrival-13/240/240",
  },
  {
    id: "arrival-14",
    title: "雪國郵差 節慶特別版",
    tag: "競速",
    price: 199,
    image: "https://picsum.photos/seed/novaplay-arrival-14/240/240",
  },
  {
    id: "arrival-15",
    title: "群峰之上",
    tag: "模擬",
    price: 290,
    image: "https://picsum.photos/seed/novaplay-arrival-15/240/240",
  },
  {
    id: "arrival-16",
    title: "夜行列車",
    tag: "解謎",
    price: 350,
    image: "https://picsum.photos/seed/novaplay-arrival-16/240/240",
  },
  {
    id: "arrival-17",
    title: "沙丘領主：權力與沙 完全版",
    tag: "RPG",
    price: 450,
    image: "https://picsum.photos/seed/novaplay-arrival-17/240/240",
  },
  {
    id: "arrival-18",
    title: "花火大會",
    tag: "運動",
    price: 520,
    image: "https://picsum.photos/seed/novaplay-arrival-18/240/240",
  },
  {
    id: "arrival-19",
    title: "機械之心",
    tag: "格鬥",
    price: 690,
    image: "https://picsum.photos/seed/novaplay-arrival-19/240/240",
  },
  {
    id: "arrival-20",
    title: "潮汐王國 導演剪輯版",
    tag: "恐怖",
    price: 790,
    image: "https://picsum.photos/seed/novaplay-arrival-20/240/240",
  },
  {
    id: "arrival-21",
    title: "書頁旅人",
    tag: "動作",
    price: 890,
    image: "https://picsum.photos/seed/novaplay-arrival-21/240/240",
  },
  {
    id: "arrival-22",
    title: "獵光者",
    tag: "冒險",
    price: 990,
    image: "https://picsum.photos/seed/novaplay-arrival-22/240/240",
  },
  {
    id: "arrival-23",
    title: "碎星協奏：交響前奏 數位豪華組合",
    tag: "策略",
    price: 1190,
    image: "https://picsum.photos/seed/novaplay-arrival-23/240/240",
  },
  {
    id: "arrival-24",
    title: "無聲海岸",
    tag: "競速",
    price: 1390,
    image: "https://picsum.photos/seed/novaplay-arrival-24/240/240",
  },
  {
    id: "arrival-25",
    title: "節慶製造機",
    tag: "模擬",
    price: 120,
    image: "https://picsum.photos/seed/novaplay-arrival-25/240/240",
  },
  {
    id: "arrival-26",
    title: "苔原孤旅",
    tag: "解謎",
    price: 199,
    image: "https://picsum.photos/seed/novaplay-arrival-26/240/240",
  },
  {
    id: "arrival-27",
    title: "赤紅拍檔 週年紀念同捆",
    tag: "RPG",
    price: 290,
    image: "https://picsum.photos/seed/novaplay-arrival-27/240/240",
  },
  {
    id: "arrival-28",
    title: "雲上莊園",
    tag: "運動",
    price: 350,
    image: "https://picsum.photos/seed/novaplay-arrival-28/240/240",
  },
];

// ---- 排行榜（左右兩個區塊，各 2 列 × 4 欄，不使用輪播）----

export type RankItem = {
  id: string;
  title: string;
  image: string; // 1:1 方形
};

export type RankBlock = {
  id: string;
  label: string;
  items: RankItem[];
};

export const rankBlocks: RankBlock[] = [
  {
    id: "bestseller",
    label: "本週熱銷",
    items: [
      {
        id: "rank-best-1",
        title: "暗影迴廊：失落王都 年度完整版",
        image: "https://picsum.photos/seed/novaplay-rank-best-1/240/240",
      },
      {
        id: "rank-best-2",
        title: "極光航線",
        image: "https://picsum.photos/seed/novaplay-rank-best-2/240/240",
      },
      {
        id: "rank-best-3",
        title: "鐵翼中隊 豪華數位典藏版",
        image: "https://picsum.photos/seed/novaplay-rank-best-3/240/240",
      },
      {
        id: "rank-best-4",
        title: "琉璃之境",
        image: "https://picsum.photos/seed/novaplay-rank-best-4/240/240",
      },
      {
        id: "rank-best-5",
        title: "荒野驛站：邊境開拓者資料片同捆",
        image: "https://picsum.photos/seed/novaplay-rank-best-5/240/240",
      },
      {
        id: "rank-best-6",
        title: "霓虹街頭",
        image: "https://picsum.photos/seed/novaplay-rank-best-6/240/240",
      },
      {
        id: "rank-best-7",
        title: "風暴戰旗 終極版",
        image: "https://picsum.photos/seed/novaplay-rank-best-7/240/240",
      },
      {
        id: "rank-best-8",
        title: "像素工匠",
        image: "https://picsum.photos/seed/novaplay-rank-best-8/240/240",
      },
    ],
  },
  {
    id: "wishlist",
    label: "玩家願望清單",
    items: [
      {
        id: "rank-wish-1",
        title: "星塵獵人",
        image: "https://picsum.photos/seed/novaplay-rank-wish-1/240/240",
      },
      {
        id: "rank-wish-2",
        title: "古樹守望：靜謐森林的漫長冬季",
        image: "https://picsum.photos/seed/novaplay-rank-wish-2/240/240",
      },
      {
        id: "rank-wish-3",
        title: "熔心競技",
        image: "https://picsum.photos/seed/novaplay-rank-wish-3/240/240",
      },
      {
        id: "rank-wish-4",
        title: "迷航日記",
        image: "https://picsum.photos/seed/novaplay-rank-wish-4/240/240",
      },
      {
        id: "rank-wish-5",
        title: "雪國郵差 節慶特別版",
        image: "https://picsum.photos/seed/novaplay-rank-wish-5/240/240",
      },
      {
        id: "rank-wish-6",
        title: "群峰之上",
        image: "https://picsum.photos/seed/novaplay-rank-wish-6/240/240",
      },
      {
        id: "rank-wish-7",
        title: "沙丘領主：權力與沙 完全版",
        image: "https://picsum.photos/seed/novaplay-rank-wish-7/240/240",
      },
      {
        id: "rank-wish-8",
        title: "花火大會",
        image: "https://picsum.photos/seed/novaplay-rank-wish-8/240/240",
      },
    ],
  },
];

// ---- 快速選單（本日特賣上方，扁平 icon + 文字連結，一列 8 欄，超過即輪播）----

export type QuickLink = {
  id: string;
  label: string;
  href: string;
  icon: string; // 對應 QuickMenu 內的 icon 名稱
};

export const quickLinks: QuickLink[] = [
  { id: "checkin", label: "每日簽到", href: "#", icon: "calendar" },
  { id: "topup", label: "儲值中心", href: "/topup", icon: "wallet" },
  { id: "redeem", label: "序號兌換", href: "#", icon: "key" },
  { id: "coupon", label: "優惠券", href: "#", icon: "tag" },
  { id: "member", label: "會員專區", href: "#member", icon: "user" },
  { id: "ranking", label: "排行榜", href: "#rankings", icon: "trophy" },
  { id: "support", label: "客服中心", href: "#support", icon: "chat" },
  { id: "events", label: "活動總覽", href: "/topup-event", icon: "gift" },
  { id: "wishlist", label: "願望清單", href: "#", icon: "heart" },
  { id: "cart", label: "購物車", href: "#", icon: "cart" },
  { id: "preorder", label: "新品預購", href: "#arrivals", icon: "box" },
  { id: "giftcard", label: "點數卡", href: "#", icon: "card" },
];

// ---- 會員優惠（多頁共用：/topup、/topup-event 及各遊戲儲值頁都套用同一份）----

export type MemberPerk = {
  id: string;
  title: string;
  desc: string;
};

export const memberPerks: MemberPerk[] = [
  {
    id: "cashback",
    title: "消費回饋 1–3%",
    desc: "每筆儲值累積回饋金，可直接折抵下次消費，無使用期限。",
  },
  {
    id: "coupon",
    title: "每月專屬折價券",
    desc: "會員每月發放儲值折價券，Plus 會員金額再加碼。",
  },
  {
    id: "early",
    title: "活動提前開跑",
    desc: "限時儲值活動提前 6 小時對會員開放，熱門獎勵不撲空。",
  },
  {
    id: "birthday",
    title: "生日雙倍回饋",
    desc: "生日當月所有儲值的回饋金加倍計算。",
  },
  {
    id: "support",
    title: "優先客服",
    desc: "儲值相關問題會員優先處理，由專人跟進到結案。",
  },
  {
    id: "points",
    title: "點數永久保存",
    desc: "透過會員帳號儲值取得的點數不設使用效期。",
  },
];

// ---- 儲值活動頁（/topup-event）：資料以遊戲代號為 key，之後每多一款遊戲加一筆即可 ----

export type TopupRebateRow = {
  amount: number; // 指定面額
  reward: string; // 回饋內容
  qty: number; // 數量
};

export type TopupPrize = {
  id: string;
  name: string;
  image: string;
};

export type TopupDrawTab = {
  id: string;
  label: string; // tab 標題
  period: string; // 活動時間
  content: string; // 活動內容
  prizes: TopupPrize[]; // 活動獎項（輪播）
  ctas: { label: string; href: string; primary?: boolean }[];
};

export type TopupGame = {
  slug: string;
  name: string;
  hero: {
    title: string;
    image: string; // 主視覺 banner（遊戲主圖）
    disclaimer?: string; // banner 下方免責小字
  };
  // 會員扣點儲值回饋
  rebate: {
    title: string;
    period: string;
    content: string;
    notice: string; // 貼心提醒
    rows: TopupRebateRow[];
    exchange: string[]; // 虛寶兌換方式
  };
  // 多活動 tab 切換卡
  drawCardTitleFallback?: string;
  drawTabs: TopupDrawTab[];
  registerGift: { title: string; period: string; content: string };
  notes: string[]; // 注意事項
};

export const topupGames: Record<string, TopupGame> = {
  "nova-saga": {
    slug: "nova-saga",
    name: "星軌旅人",
    hero: {
      title: "星軌旅人 會員扣點享獨家虛寶",
      image: "https://picsum.photos/seed/topup-nova-hero/1600/560",
      disclaimer:
        "本活動與遊戲內容為練習用範例，非真實服務，儲值前請確認官方公告。",
    },
    rebate: {
      title: "會員扣點儲值回饋",
      period: "2026/09/01 (00:00) ~ 2026/09/30 (23:59)",
      content:
        "活動期間，使用「SuneoCard 會員扣點」單筆儲值以下指定面額至「星軌旅人」遊戲帳號中，即可獲得以下對應回饋。",
      notice:
        "若您的 SuneoCard 會員帳號點數不足，仍可直接選擇會員扣點付款，系統會引導您進行差額儲值，也可以先至官網或 APP 儲值。",
      rows: [
        { amount: 1000, reward: "星軌福袋（銀）", qty: 10 },
        { amount: 2000, reward: "星軌福袋（金）", qty: 6 },
        { amount: 3000, reward: "星軌福袋（金）", qty: 12 },
        { amount: 5000, reward: "星軌福袋（金）", qty: 25 },
        { amount: 10000, reward: "星軌福袋（金）", qty: 60 },
        { amount: 20000, reward: "星軌福袋（鑽）", qty: 80 },
      ],
      exchange: ["獎勵將於儲值成功後，以遊戲內郵件方式直接發送。"],
    },
    drawTabs: [
      {
        id: "draw-points",
        label: "扣點抽 50000 點",
        period: "2026/09/01 (00:00) ~ 2026/09/30 (23:59)",
        content:
          "活動期間，使用「SuneoCard 會員扣點」單筆消費任意面額，即可參加抽獎，最高可連抽 15 次，豐富大獎等你帶回家！",
        prizes: [
          {
            id: "p1",
            name: "SuneoCard 會員點數 最高 50000 點",
            image: "https://picsum.photos/seed/topup-prize-1/320/320",
          },
          {
            id: "p2",
            name: "iPhone 17 Pro Max",
            image: "https://picsum.photos/seed/topup-prize-2/320/320",
          },
          {
            id: "p3",
            name: "造型金塊（2 錢）",
            image: "https://picsum.photos/seed/topup-prize-3/320/320",
          },
          {
            id: "p4",
            name: "Dyson 隨行吹風機",
            image: "https://picsum.photos/seed/topup-prize-4/320/320",
          },
          {
            id: "p5",
            name: "Galaxy Z Flip8",
            image: "https://picsum.photos/seed/topup-prize-5/320/320",
          },
          {
            id: "p6",
            name: "Osmo Pocket 4 全能套裝",
            image: "https://picsum.photos/seed/topup-prize-6/320/320",
          },
          {
            id: "p7",
            name: "PlayStation VR2",
            image: "https://picsum.photos/seed/topup-prize-7/320/320",
          },
          {
            id: "p8",
            name: "Google Pixel Watch 5",
            image: "https://picsum.photos/seed/topup-prize-8/320/320",
          },
          {
            id: "p9",
            name: "SuneoCard 會員點數 30000 點",
            image: "https://picsum.photos/seed/topup-prize-9/320/320",
          },
          {
            id: "p10",
            name: "SuneoCard 會員點數 10000 點",
            image: "https://picsum.photos/seed/topup-prize-10/320/320",
          },
        ],
        ctas: [
          { label: "立即參加", href: "#", primary: true },
          { label: "綁卡抽大獎", href: "#" },
        ],
      },
      {
        id: "draw-every",
        label: "儲值筆筆抽",
        period: "2026/09/01 (00:00) ~ 2026/09/30 (23:59)",
        content:
          "活動期間每完成一筆儲值即獲得一次抽獎機會，不限面額、不限次數，越儲越有機會。",
        prizes: [
          {
            id: "e1",
            name: "限定坐騎「流光角鷹」",
            image: "https://picsum.photos/seed/topup-prize-e1/320/320",
          },
          {
            id: "e2",
            name: "季票 30 天",
            image: "https://picsum.photos/seed/topup-prize-e2/320/320",
          },
          {
            id: "e3",
            name: "SuneoCard 現金抵用券 NT$300",
            image: "https://picsum.photos/seed/topup-prize-e3/320/320",
          },
          {
            id: "e4",
            name: "限定時裝組",
            image: "https://picsum.photos/seed/topup-prize-e4/320/320",
          },
          {
            id: "e5",
            name: "強化石 ×50",
            image: "https://picsum.photos/seed/topup-prize-e5/320/320",
          },
          {
            id: "e6",
            name: "會員點數 500 點",
            image: "https://picsum.photos/seed/topup-prize-e6/320/320",
          },
        ],
        ctas: [
          { label: "立即參加", href: "#", primary: true },
          { label: "查看中獎名單", href: "#" },
        ],
      },
    ],
    registerGift: {
      title: "新會員註冊禮",
      period: "2026/09/01 (00:00) ~ 2026/09/30 (23:59)",
      content:
        "活動期間註冊成為 SuneoCard 會員並完成 e-mail、手機驗證，即可獲得會員點數最高 5000 點與現金抵用券，再加碼抽 iPhone 17 Pro Max。",
    },
    notes: [
      "購買之遊戲點數或受贈之虛寶序號如已兌換或使用，則不得取消該筆交易。",
      "活動開始後，所有參加之玩家視同同意公告內容；活動內容、會員點數、獎項、抵用券與折價券之發送方式，主辦單位保留修改、取消、暫停或終止之權利。",
      "獎項不得要求折換現金或轉讓，中獎者需配合提供收件資訊，逾期未回覆視同放棄。",
      "除上述說明外，請詳閱「其他注意事項」內之規範。",
    ],
  },
};

// 目前 /topup-event 顯示的預設遊戲；未來要做選擇器或動態路由時改讀 topupGames
export const defaultTopupGame = topupGames["nova-saga"];

// ---- 快速儲值頁（/topup）：選面額 → 填遊戲 ID → 選付款 → 結帳 ----
// 參考 Codashop / UniPin 的單頁儲值流程，資料同樣以遊戲代號為 key。

export type TopupDenom = {
  id: string;
  base: number; // 基礎點數（0 代表非點數商品，用 name 顯示）
  bonus: number; // 加碼贈送點數
  price: number; // 售價（TWD）
  name?: string; // 非點數商品的名稱（月卡、通行證…）
  tag?: string; // 角標：熱門 / 超值 / 首購 +50% …
};

export type TopupPaymentMethod = {
  id: string;
  name: string;
  note?: string;
};

export type TopupPaymentGroup = {
  id: string;
  label: string;
  icon: "wallet" | "card" | "store" | "carrier" | "points";
  methods: TopupPaymentMethod[];
};

export type TopupPromoCode = {
  code: string;
  label: string;
  type: "amount" | "percent";
  value: number;
};

export type QuickTopupFaq = { q: string; a: string };

export type QuickTopupReview = {
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
};

export type QuickTopupGame = {
  slug: string;
  name: string;
  publisher: string;
  cover: string; // 直式封面
  banner: string; // 橫式主視覺
  rating: number;
  ratingCount: number;
  currency: string; // 遊戲代幣名稱，例如「星鑽」
  blurb: string;
  highlights: string[]; // 封面卡下方的信任小標
  servers: string[];
  denoms: TopupDenom[];
  payments: TopupPaymentGroup[];
  promoCodes: TopupPromoCode[];
  idHelp: { title: string; steps: string[] };
  faqs: QuickTopupFaq[];
  reviews: QuickTopupReview[];
  eventTeaser: { title: string; desc: string; href: string; cta: string };
  disclaimer: string;
};

export const quickTopupGames: Record<string, QuickTopupGame> = {
  "nova-saga": {
    slug: "nova-saga",
    name: "星軌旅人",
    publisher: "SuneoCard Studios",
    cover: "https://picsum.photos/seed/nova-saga-cover/600/800",
    banner: "https://picsum.photos/seed/topup-nova-hero/1600/560",
    rating: 4.8,
    ratingCount: 2841,
    currency: "星鑽",
    blurb:
      "跨平台星軌 RPG。輸入遊戲 ID 直接儲值，付款後星鑽即時發送到你的角色，支援台港澳等多伺服器。",
    highlights: ["官方授權直儲", "付款後最快 1 分鐘到帳", "SSL 加密・交易安全"],
    servers: ["台港澳", "亞洲", "美洲", "歐洲"],
    denoms: [
      { id: "d60", base: 60, bonus: 0, price: 30 },
      { id: "d300", base: 300, bonus: 30, price: 150, tag: "熱門" },
      { id: "d680", base: 680, bonus: 80, price: 330 },
      { id: "d1280", base: 1280, bonus: 160, price: 630 },
      { id: "d3280", base: 3280, bonus: 500, price: 1590, tag: "超值" },
      { id: "d6480", base: 6480, bonus: 1600, price: 3090, tag: "首購 +50%" },
      {
        id: "pass",
        base: 0,
        bonus: 0,
        price: 330,
        name: "星軌月卡・30 天",
        tag: "每日登入領鑽",
      },
    ],
    payments: [
      {
        id: "ewallet",
        label: "電子錢包",
        icon: "wallet",
        methods: [
          { id: "linepay", name: "LINE Pay" },
          { id: "jkopay", name: "街口支付" },
          { id: "easywallet", name: "悠遊付" },
          { id: "applepay", name: "Apple Pay / Google Pay" },
        ],
      },
      {
        id: "credit",
        label: "信用卡 / 金融卡",
        icon: "card",
        methods: [
          { id: "visa", name: "Visa / Mastercard / JCB", note: "滿 NT$1,000 可分 3 期" },
        ],
      },
      {
        id: "cvs",
        label: "超商代碼繳費",
        icon: "store",
        methods: [
          { id: "ibon", name: "7-11 ibon", note: "取得代碼後 3 日內繳費，繳費完成即發點" },
          { id: "famiport", name: "全家 FamiPort" },
        ],
      },
      {
        id: "carrier",
        label: "電信小額付費",
        icon: "carrier",
        methods: [
          {
            id: "carrier-all",
            name: "中華電信 / 台灣大哥大 / 遠傳",
            note: "費用併入電信帳單，單筆上限 NT$3,000",
          },
        ],
      },
      {
        id: "points",
        label: "SuneoCard 會員扣點",
        icon: "points",
        methods: [
          {
            id: "wallet-points",
            name: "會員錢包餘額",
            note: "目前餘額 NT$1,280・本筆回饋 2% 點數",
          },
        ],
      },
    ],
    promoCodes: [
      { code: "NOVA50", label: "折抵 NT$50", type: "amount", value: 50 },
      { code: "WELCOME10", label: "首購 9 折", type: "percent", value: 10 },
    ],
    idHelp: {
      title: "如何查詢我的遊戲 ID？",
      steps: [
        "開啟《星軌旅人》，點擊左上角的角色頭像進入個人資料。",
        "個人資料頁下方「UID：」後方的 9 位數字，即為你的遊戲 ID。",
        "伺服器名稱顯示在角色名稱右側（例如「台港澳」），請與下方選單一致。",
        "輸入後系統會回顯對應的角色名稱，請務必核對無誤再付款。",
      ],
    },
    faqs: [
      {
        q: "儲值後多久會到帳？",
        a: "完成付款後，星鑽會即時發送到你輸入的遊戲 ID，通常 1 分鐘內入帳。超商代碼與 ATM 付款則以實際完成繳費的時間為準。",
      },
      {
        q: "輸入的遊戲 ID 顯示錯誤的角色名稱怎麼辦？",
        a: "請先確認伺服器是否選擇正確，不同伺服器可能有相同 UID。若回顯的角色名稱與你的帳號不符，請不要付款，並聯繫客服協助確認。",
      },
      {
        q: "可以開立發票嗎？",
        a: "每筆訂單皆會開立電子發票並寄送至你的會員信箱，也可於「訂單紀錄」中查詢與下載。",
      },
      {
        q: "儲值失敗但已經被扣款？",
        a: "系統會在 3 個工作天內自動退回原付款管道。若逾期未收到，請至客服中心提供訂單編號，我們會盡快協助處理。",
      },
      {
        q: "有金額限制嗎？",
        a: "單筆最低為 NT$30。使用電信小額付費時，單筆與當月累積會受電信業者額度限制，上限為 NT$3,000。",
      },
    ],
    reviews: [
      {
        name: "凱文",
        avatar: "https://picsum.photos/seed/topup-review-kevin/120/120",
        rating: 5,
        date: "2026/08/28",
        text: "輸入 UID 後會跳出角色名稱讓我確認，這點很安心，之前在別的地方儲錯過一次。",
      },
      {
        name: "小美",
        avatar: "https://picsum.photos/seed/topup-review-mei/120/120",
        rating: 5,
        date: "2026/08/25",
        text: "用 LINE Pay 付完不到十秒就收到星鑽，比開遊戲內商城還快。",
      },
      {
        name: "阿宏",
        avatar: "https://picsum.photos/seed/topup-review-hong/120/120",
        rating: 4,
        date: "2026/08/21",
        text: "面額選擇很清楚，價格和贈送量一次看得到。希望超商繳費的步驟說明能再多一點。",
      },
      {
        name: "Ruby",
        avatar: "https://picsum.photos/seed/topup-review-ruby/120/120",
        rating: 5,
        date: "2026/08/18",
        text: "會員扣點還有 2% 回饋，累積起來又能折下一筆，長期儲值蠻划算的。",
      },
    ],
    eventTeaser: {
      title: "本月《星軌旅人》儲值活動進行中",
      desc: "會員扣點單筆指定面額享獨家星軌福袋，再抽 iPhone 17 Pro Max 與 50000 會員點數。",
      href: "/topup-event",
      cta: "查看活動詳情",
    },
    disclaimer:
      "本頁為 Tailwind 練習用範例，非真實服務；面額、金流與到帳時間皆為模擬資料。",
  },
};

// 目前 /topup 顯示的預設遊戲
export const quickTopupGame = quickTopupGames["nova-saga"];
