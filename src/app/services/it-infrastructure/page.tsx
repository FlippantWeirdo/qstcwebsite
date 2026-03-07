import { ItInfraHero } from "@/components/services/it-infrastructure/ItInfraHero";
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
