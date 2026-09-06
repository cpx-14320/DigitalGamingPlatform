// ---- 駐站創作者（左圖輪播 + 右側條列輪播，一則 4 列）----

export type CreatorImage = {
  id: string;
  image: string; // 左側大圖
  caption: string;
};

export type CreatorRow = {
  id: string;
  image: string; // 1:1 方形，之後換成實際圖片路徑
  title: string;
  text: string; // 內文
};

export const creatorImages: CreatorImage[] = [
  {
    id: "sp-1",
    image:
      "https://image.mycard520.com/globalmycard/member/webdesign/CAD260807133494377/1600x900_v1.webp?v=ME0901QFA",
    caption: "本月主打：開放世界大作限時免費體驗",
  },
  {
    id: "sp-2",
    image:
      "https://image.mycard520.com/globalmycard/marketing/DC02/2025/passkey_1600x900.webp?v=PQ0902VW9",
    caption: "雲端獨佔：4K/120fps 串流實測影片",
  },
  {
    id: "sp-3",
    image:
      "https://image.mycard520.com/globalmycard/member/gamexpress/vol90/90-1600x900.webp?v=PK0806VNE",
    caption: "官方賽事：週末線上錦標賽開放報名",
  },
];

export const creatorRows: CreatorRow[] = [
  {
    id: "row-1",
    image: "/images/creators/haini.webp",
    title: "海霓",
    text: "嗨嗨！我是來自四季途的夏天代表 海霓，是一名遊戲勢Vtuber♡",
  },
  {
    id: "row-2",
    image: "/images/creators/meaa.webp",
    title: "小碗泡咪",
    text: "你好 我是泡咪！一位很努力的小主播，幾乎每天都會開台，不論是唱歌 聊天或玩遊戲，我什麼都會做ෆ˙ᵕ˙ෆ ",
  },
  {
    id: "row-3",
    image: "/images/creators/homete.webp",
    title: "轉蛋姬",
    text: "轉蛋姬(aka紅美婷)是從全宇宙中第一顆轉蛋中誕生的轉蛋之神，因為總是偷懶沒在工作而漸漸被人們遺忘的她",
  },
  {
    id: "row-4",
    image: "/images/creators/ruri.webp",
    title: "澄音琉璃",
    text: "社團白拓Project所屬神明Vtuber澄音琉璃，能保證給你帶來快樂的ㄎㄧㄤ神，最近常常肚子餓可能是要老年長高(今年3001歲)",
  },
  {
    id: "row-5",
    image: "/images/creators/yuu.webp",
    title: "墨染遊羽",
    text: "社團白拓Project所屬鴿子Vtuber墨染遊羽！可以叫我遊羽就好～主要在YT活動！喜歡聊天、唱歌，也喜歡玩遊戲",
  },
  {
    id: "row-6",
    image: "/images/creators/dasa.webp",
    title: "Dasa",
    text: "我是Dasa，打Apex就是要搞耍，玩遊戲就是要好玩，興趣是講幹話跟玩狙擊，不是讓敵人躁起來就是讓隊友躁起來！",
  },
  {
    id: "row-7",
    image: "/images/creators/aoiheart.webp",
    title: "蒼心．翟普瑞薩",
    text: "大家安安，我是蒼心‧翟(ㄉ一ˊ)普瑞薩。在台股暴賠成為韭菜的我，目前正在北海岸慘澹經營海之家🌊",
  },
  {
    id: "row-8",
    image: "/images/creators/tanjam.webp",
    title: "炭醬",
    text: "安安我是炭醬！喜歡畫畫玩遊戲的天使兔，希望能夠成為你日常生活中的碳水化合物",
  },
  {
    id: "row-9",
    image: "/images/creators/yumie.webp",
    title: "雨咩うさぎ",
    text: "來自宇宙間的神祕兔子星人，偶然間來到這顆美麗的藍色星球，甚麼事情都想嘗試看看的小兔子!",
  },
  {
    id: "row-10",
    image: "/images/creators/aquarius.webp",
    title: "水瓶罐子",
    text: "我是水瓶罐子 Aquariusgirl。一隻會唱歌、會聊天、還會研究 AI 的小狐狸 VTuber！",
  },
  {
    id: "row-11",
    image: "/images/creators/aleela.webp",
    title: "阿栗",
    text: "嗨！我是一隻喜歡畫圖的花栗鼠！平日早上會開台畫圖聊天，陪伴大家上班，歡迎來找我玩",
  },
  {
    id: "row-12",
    image: "/images/creators/xiku.webp",
    title: "阿塔",
    text: "哈囉我叫阿塔，主要活動於Twitch，歡迎來我的直播和我互動聊天，無論是棒球、穿搭、貓咪、廚藝等什麼話題都聊、什麼遊戲都玩(*¯︶¯*)",
  },
];
