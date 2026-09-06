import HeroCarousel from "@/components/sections/HeroCarousel";
import Rankings from "@/components/sections/Rankings";
import QuickMenu from "@/components/sections/QuickMenu";
import FeaturedPicks from "@/components/sections/FeaturedPicks";
import GameShowcase from "@/components/sections/GameShowcase";
import NewArrivals from "@/components/sections/NewArrivals";
import GameNews from "@/components/sections/GameNews";
import GameCategories from "@/components/sections/GameCategories";
import Creators from "@/components/sections/Creators";

export default function Home() {
  return (
    <main className="pb-4">
      <HeroCarousel />
      <QuickMenu />
      <FeaturedPicks />
      <GameShowcase />
      <NewArrivals />
      <Rankings />
      <GameCategories />
      <GameNews />
      <Creators />
    </main>
  );
}
