import HeroCarousel from "@/components/sections/HeroCarousel";
import Features from "@/components/sections/Features";
import Rankings from "@/components/sections/Rankings";
import QuickMenu from "@/components/sections/QuickMenu";
import GameShowcase from "@/components/sections/GameShowcase";
import NewArrivals from "@/components/sections/NewArrivals";
import GameNews from "@/components/sections/GameNews";
import GameCategories from "@/components/sections/GameCategories";
import Creators from "@/components/sections/Creators";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="pb-4">
      <HeroCarousel />
      <QuickMenu />
      <GameShowcase />
      <NewArrivals />
      <Rankings />
      <GameCategories />
      <GameNews />
      <Creators />
      <Testimonials />
      <Pricing />
      <Features />
    </main>
  );
}

