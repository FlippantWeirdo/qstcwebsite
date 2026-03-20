import type { Metadata } from "next";
import { MechanicalHero } from "@/components/services/mechanical-plumbing/MechanicalHero";

export const metadata: Metadata = {
  title: "Mechanical & Plumbing",
  description:
    "QSTC provides full mechanical and plumbing engineering services including HVAC, water supply systems, drainage, and sanitary installations for projects across Nigeria.",
  keywords: [
    "mechanical plumbing Nigeria",
    "HVAC installation Nigeria",
    "water supply system",
    "drainage system Nigeria",
    "sanitary installation",
    "QSTC mechanical plumbing",
  ],
  openGraph: {
    title: "Mechanical & Plumbing | QSTC Services Limited",
    description:
      "QSTC provides full mechanical and plumbing engineering services including HVAC, water supply systems, drainage, and sanitary installations for projects across Nigeria.",
    url: "/services/mechanical-plumbing",
  },
};
import { MechanicalOverview } from "@/components/services/mechanical-plumbing/MechanicalOverview";
import { Cta } from "@/components/home/cta";

export default function MechanicalPlumbingPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans bg-slate-50">
      <MechanicalHero />
      <div className="bg-white">
        <MechanicalOverview />
      </div>
      <Cta />
    </main>
  );
}
