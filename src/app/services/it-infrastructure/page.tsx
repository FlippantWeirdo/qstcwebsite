import type { Metadata } from "next";
import { ItInfraHero } from "@/components/services/it-infrastructure/ItInfraHero";

export const metadata: Metadata = {
  title: "IT Infrastructure",
  description:
    "QSTC designs and deploys robust IT infrastructure solutions including data centres, structured cabling, networking, and server rooms for businesses in Nigeria.",
  keywords: [
    "IT infrastructure Nigeria",
    "data centre Nigeria",
    "structured cabling",
    "network installation Nigeria",
    "server room design",
    "QSTC IT infrastructure",
  ],
  openGraph: {
    title: "IT Infrastructure | QSTC Services Limited",
    description:
      "QSTC designs and deploys robust IT infrastructure solutions including data centres, structured cabling, networking, and server rooms for businesses in Nigeria.",
    url: "/services/it-infrastructure",
  },
};
import { ItOverview } from "@/components/services/it-infrastructure/ItOverview";
import { Cta } from "@/components/home/cta";

export default function ItInfrastructurePage() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <ItInfraHero />
      <ItOverview />
      <Cta />
    </main>
  );
}
