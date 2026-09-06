import NewsCarousel from "@/components/news/NewsCarousel";
import { getRelatedNews, type GameNewsArticle } from "@/lib/data";

export default function RecommendedNews({
  article,
}: {
  article: GameNewsArticle;
}) {
  // member 之後由登入狀態帶入 → 後端個人化；現在走內容比對
  const related = getRelatedNews(article, 8);
  if (related.length === 0) return null;

  return (
    <section className="mt-14 border-t border-gray-200 pt-10">
      <h2 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl">
        推薦新聞
      </h2>
      <NewsCarousel items={related} ariaLabel="推薦新聞輪播" />
    </section>
  );
}
