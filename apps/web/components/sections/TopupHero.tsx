import { type TopupGame } from "@/lib/data";

export default function TopupHero({ game }: { game: TopupGame }) {
  return (
    <section>
      <h1 className="mb-4 text-center text-xl font-bold text-gray-900 sm:text-2xl">
        {game.hero.title}
      </h1>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <img
          src={game.hero.image}
          alt={`${game.name} 活動主視覺`}
          className="aspect-[16/6] w-full object-cover"
        />
      </div>
      {game.hero.disclaimer ? (
        <p className="mt-2 text-center text-xs text-gray-400">
          {game.hero.disclaimer}
        </p>
      ) : null}
    </section>
  );
}
