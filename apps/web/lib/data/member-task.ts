// 會員活動（只用於遊戲新聞內頁右側欄；定期變動，之後可改為後端 fetch）
// image：正方形縮圖，之後換成 /images/member-task/xxx.webp

export type MemberTaskItem = {
  id: string;
  image: string;
  href: string;
  title: string; // 粗體主行
  text: string; // 副行說明
};

export const memberTask: MemberTaskItem[] = [
  {
    id: "mt-1",
    image: "https://picsum.photos/seed/suneocard-mt-1/200/200",
    href: "#",
    title: "每日簽到 7 天送 300 回饋金",
    text: "連續登入即可累積，滿 7 天自動入帳，可折抵下次消費。",
  },
  {
    id: "mt-2",
    image: "https://picsum.photos/seed/suneocard-mt-2/200/200",
    href: "#",
    title: "9 月儲值任務：累積滿額抽 iPhone",
    text: "當月累積儲值達指定金額，每 500 元一抽，上不封頂。",
  },
  {
    id: "mt-3",
    image: "https://picsum.photos/seed/suneocard-mt-3/200/200",
    href: "#",
    title: "新會員首購 88 折 + 好禮包",
    text: "註冊 30 天內完成首次購買，結帳自動折扣並贈新手點數包。",
  },
  {
    id: "mt-4",
    image: "https://picsum.photos/seed/suneocard-mt-4/200/200",
    href: "#",
    title: "邀請好友註冊，雙方各得 100 點",
    text: "好友以你的專屬連結註冊並完成驗證，隔日發放獎勵。",
  },
  {
    id: "mt-5",
    image: "https://picsum.photos/seed/suneocard-mt-5/200/200",
    href: "#",
    title: "分享指定新聞抽點數卡",
    text: "分享本週精選新聞至社群並回填連結，每週抽 10 名各 500 點。",
  },
  {
    id: "mt-6",
    image: "https://picsum.photos/seed/suneocard-mt-6/200/200",
    href: "#",
    title: "Plus 會員專屬：生日雙倍回饋",
    text: "生日當月所有消費回饋加倍，並可領取限定生日折價券。",
  },
  {
    id: "mt-7",
    image: "https://picsum.photos/seed/suneocard-mt-7/200/200",
    href: "#",
    title: "完成問卷送 50 點",
    text: "填寫本季服務體驗問卷（約 2 分鐘），審核通過後 3 個工作天發放。",
  },
];
