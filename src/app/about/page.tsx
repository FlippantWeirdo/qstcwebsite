import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about QSTC Services Limited — our journey, mission, values, and the expertise that makes us a trusted partner for systems integration across Nigeria.",
  keywords: [
    "about QSTC",
    "QSTC history",
    "QSTC mission",
    "systems integration company Nigeria",
    "QSTC values",
  ],
  openGraph: {
    title: "About Us | QSTC Services Limited",
    description:
      "Learn about QSTC Services Limited — our journey, mission, values, and the expertise that makes us a trusted partner for systems integration across Nigeria.",
    url: "/about",
  },
};
import { OurJourney } from "@/components/about/OurJourney";
import { OurBusinessPhilosophy } from "@/components/about/OurBusinessPhilosophy";
import { MissionVision } from "@/components/about/MissionVision";
import { WhyTrustUs } from "@/components/about/WhyTrustUs";
import { QuoteStats } from "@/components/about/QuoteStats";
import { PartnersMarquee } from "@/components/about/PartnersMarquee";
import { ClientMarquee } from "@/components/about/ClientMarquee";
import { AboutCta } from "@/components/about/AboutCta";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <AboutHero />
      <OurJourney />
      <OurBusinessPhilosophy />
      <MissionVision />
      <WhyTrustUs />
      <PartnersMarquee />
      <QuoteStats />
      <ClientMarquee />
      <AboutCta />
    </main>
  );
}
