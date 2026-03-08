import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { Cta } from "@/components/home/cta";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <ProjectsHero />
      <ProjectsGrid />
      <Cta />
    </main>
  );
}
