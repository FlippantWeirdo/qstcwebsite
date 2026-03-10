import { MechanicalHero } from "@/components/services/mechanical-plumbing/MechanicalHero";
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
