import type { Metadata } from "next";
import { ElvHero } from "@/components/services/elv-systems/ElvHero";

export const metadata: Metadata = {
  title: "ELV Systems",
  description:
    "QSTC specializes in Extra Low Voltage (ELV) systems including CCTV, access control, home automation, structured cabling, and hospitality solutions across Nigeria.",
  keywords: [
    "ELV systems Nigeria",
    "CCTV installation Nigeria",
    "access control system",
    "home automation Nigeria",
    "structured cabling",
    "extra low voltage",
    "QSTC ELV",
  ],
  openGraph: {
    title: "ELV Systems | QSTC Services Limited",
    description:
      "QSTC specializes in Extra Low Voltage (ELV) systems including CCTV, access control, home automation, structured cabling, and hospitality solutions across Nigeria.",
    url: "/services/elvsystems",
  },
};
import { ElvOverview } from "@/components/services/elv-systems/ElvOverview";

import { HomeAutomationSection } from "@/components/services/elv-systems/HomeAutomationSection";
import { HospitalitySection } from "@/components/services/elv-systems/HospitalitySection";
import { Cta } from "@/components/home/cta";

export default function ElvSystemsPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <ElvHero />
      <ElvOverview />
      <HomeAutomationSection />
      <HospitalitySection />
      <Cta />
    </main>
  );
}
