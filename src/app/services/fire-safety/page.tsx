import type { Metadata } from "next";
import { Cta } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Fire Safety Systems",
  description:
    "QSTC provides comprehensive fire safety solutions including fire detection, alarm systems, and firefighting installations for commercial and industrial facilities in Nigeria.",
  keywords: [
    "fire safety Nigeria",
    "fire detection system",
    "fire suppression Nigeria",
    "fire alarm installation",
    "firefighting system",
    "QSTC fire safety",
  ],
  openGraph: {
    title: "Fire Safety Systems | QSTC Services Limited",
    description:
      "QSTC provides comprehensive fire safety solutions including fire detection, alarm systems, and firefighting installations for commercial and industrial facilities in Nigeria.",
    url: "/services/fire-safety",
  },
};
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
