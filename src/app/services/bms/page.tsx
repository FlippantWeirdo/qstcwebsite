import type { Metadata } from "next";
import { BmsHero } from "@/components/services/bms/BmsHero";

export const metadata: Metadata = {
  title: "Building Management Systems (BMS)",
  description:
    "QSTC delivers intelligent Building Management System (BMS) solutions that automate and optimize HVAC, lighting, security, and energy use for commercial buildings in Nigeria.",
  keywords: [
    "BMS Nigeria",
    "building management system",
    "building automation system",
    "HVAC automation",
    "smart building Nigeria",
    "QSTC BMS",
  ],
  openGraph: {
    title: "Building Management Systems (BMS) | QSTC Services Limited",
    description:
      "QSTC delivers intelligent Building Management System (BMS) solutions that automate and optimize HVAC, lighting, security, and energy use for commercial buildings in Nigeria.",
    url: "/services/bms",
  },
};
import { BmsSection } from "@/components/services/bms/BmsSection";
import { Cta } from "@/components/home/cta";

export default function BmsPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans bg-slate-950">
      <BmsHero />
      <BmsSection />
      <Cta />
    </main>
  );
}
