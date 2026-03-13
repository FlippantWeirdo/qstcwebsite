import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/content/projects";

const featured = projects.slice(0, 3);

export function Projects() {
  return (
    <section className="bg-slate-950 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-20">
          <div className="max-w-2xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#3B82F6]">
              Past Projects
            </span>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-5xl">
              Showcasing Our
              <br />
              Recent Excellence
            </h2>
          </div>

          <Link
            href="/projects"
            className="group flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-[#3B82F6] hover:text-white hover:bg-[#3B82F6]/10"
          >
            See All Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-4/5 w-full cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 hover:z-10 hover:scale-110 hover:shadow-2xl hover:shadow-[#3B82F6]/20"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              {/* Text content pinned to the bottom */}
              <div className="absolute bottom-0 left-0 flex w-full flex-col justify-end p-8">
                <span className="mb-2 text-xs font-bold tracking-widest text-[#3B82F6] uppercase transition-transform duration-500 group-hover:-translate-y-1">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white transition-transform duration-500 group-hover:-translate-y-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
