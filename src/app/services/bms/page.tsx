import { BmsHero } from "@/components/services/bms/BmsHero";
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
