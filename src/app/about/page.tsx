import { AboutHero } from "@/components/about/AboutHero";
import { OurJourney } from "@/components/about/OurJourney";
import { OurBusinessPhilosophy } from "@/components/about/OurBusinessPhilosophy";
import { MissionVision } from "@/components/about/MissionVision";
import { QuoteStats } from "@/components/about/QuoteStats";
import { PartnersMarquee } from "@/components/about/PartnersMarquee";
import { AboutCta } from "@/components/about/AboutCta";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <AboutHero />
      <OurJourney />
      <OurBusinessPhilosophy />
      <MissionVision />
      <QuoteStats />
      <PartnersMarquee />
      <AboutCta />
    </main>
  );
}
