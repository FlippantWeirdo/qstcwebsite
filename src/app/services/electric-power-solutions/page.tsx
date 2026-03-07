import { ElectricPowerHero } from "@/components/services/electric-power/ElectricPowerHero";
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
