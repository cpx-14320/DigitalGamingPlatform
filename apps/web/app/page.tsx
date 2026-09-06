import HeroCarousel from "@/components/sections/HeroCarousel";
import Features from "@/components/sections/Features";
import Rankings from "@/components/sections/Rankings";
import QuickMenu from "@/components/sections/QuickMenu";
import GameShowcase from "@/components/sections/GameShowcase";
import NewArrivals from "@/components/sections/NewArrivals";
import ScreenshotGallery from "@/components/sections/ScreenshotGallery";
import GameCategories from "@/components/sections/GameCategories";
import Spotlight from "@/components/sections/Spotlight";
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
      <ScreenshotGallery />
      <Spotlight />
      <Testimonials />
      <Pricing />
      <Features />
    </main>
  );
}

