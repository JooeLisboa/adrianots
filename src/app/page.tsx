import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InfluenceSection } from "@/components/sections/InfluenceSection";
import { RaffleSection } from "@/components/sections/RaffleSection";
import { SocialSection } from "@/components/sections/SocialSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <InfluenceSection />
      <SocialSection />
      <RaffleSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
