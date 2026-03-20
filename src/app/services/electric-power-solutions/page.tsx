import type { Metadata } from "next";
import { ElectricPowerHero } from "@/components/services/electric-power/ElectricPowerHero";

export const metadata: Metadata = {
  title: "Electric Power Solutions",
  description:
    "QSTC delivers reliable electric power solutions including HV/LV distribution, transformer installation, generators, and power management systems across Nigeria.",
  keywords: [
    "electric power Nigeria",
    "HV LV distribution",
    "transformer installation Nigeria",
    "power management system",
    "generator installation",
    "QSTC electric power",
  ],
  openGraph: {
    title: "Electric Power Solutions | QSTC Services Limited",
    description:
      "QSTC delivers reliable electric power solutions including HV/LV distribution, transformer installation, generators, and power management systems across Nigeria.",
    url: "/services/electric-power-solutions",
  },
};
import { ElectricPowerOverview } from "@/components/services/electric-power/ElectricPowerOverview";
import { Cta } from "@/components/home/cta";

export default function ElectricPowerPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <ElectricPowerHero />
      <ElectricPowerOverview />
      <Cta />
    </main>
  );
}
