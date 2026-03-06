import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Services } from "@/components/home/services";
import { Legacy } from "@/components/home/legacy";
import { Projects } from "@/components/home/projects";
import { Cta } from "@/components/home/cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <Hero />
      <About />
      <Services />
      <Legacy />
      <Projects />
      <Cta />
    </main>
  );
}
