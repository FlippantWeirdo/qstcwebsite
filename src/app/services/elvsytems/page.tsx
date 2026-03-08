import { ElvHero } from "@/components/services/elv-systems/ElvHero";
import { ElvOverview } from "@/components/services/elv-systems/ElvOverview";

import { HomeAutomationSection } from "@/components/services/elv-systems/HomeAutomationSection";
import { SoundMaskingSection } from "@/components/services/elv-systems/SoundMaskingSection";
import { HospitalitySection } from "@/components/services/elv-systems/HospitalitySection";
import { Cta } from "@/components/home/cta";

export default function ElvSystemsPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <ElvHero />
      <ElvOverview />

      <HomeAutomationSection />
      <SoundMaskingSection />
      <HospitalitySection />
      <Cta />
    </main>
  );
}
