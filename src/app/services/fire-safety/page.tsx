import { Cta } from "@/components/home/cta";
import { FireDetection } from "@/components/services/fire-safety/FireDetection";
import { FireFighting } from "@/components/services/fire-safety/FireFighting";
import { FireOverview } from "@/components/services/fire-safety/FireOverview";
import { FireSafetyHero } from "@/components/services/fire-safety/FireSafetyHero";

export default function FireSafetyPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <FireSafetyHero />
      <FireOverview />
      <FireDetection />
      <FireFighting />
      <Cta />
    </main>
  );
}
