import type { Metadata } from "next";
import { ProjectsHero } from "@/components/projects/ProjectsHero";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore QSTC Services Limited's portfolio of completed projects across fire safety, ELV systems, building automation, and electrical infrastructure in Nigeria.",
  keywords: [
    "QSTC projects",
    "systems integration projects Nigeria",
    "fire safety projects",
    "ELV projects Nigeria",
    "building automation projects",
  ],
  openGraph: {
    title: "Our Projects | QSTC Services Limited",
    description:
      "Explore QSTC Services Limited's portfolio of completed projects across fire safety, ELV systems, building automation, and electrical infrastructure in Nigeria.",
    url: "/projects",
  },
};
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
