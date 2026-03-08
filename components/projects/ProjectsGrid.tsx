"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, categories } from "@/content/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProjectsGrid() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate each category group independently
      const groups =
        container.current?.querySelectorAll(".category-group") ?? [];
      groups.forEach((group) => {
        gsap.fromTo(
          group.querySelectorAll(".project-card"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
            },
          },
        );

        gsap.fromTo(
          group.querySelector(".category-heading"),
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
            },
          },
        );
      });
    },
    { scope: container },
  );

  // Get unique categories (excluding "All")
  const serviceCategories = categories.filter((c) => c !== "All");

  return (
    <section ref={container} className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl space-y-20">
        {serviceCategories.map((category) => {
          const categoryProjects = projects.filter(
            (p) => p.category === category,
          );
          if (categoryProjects.length === 0) return null;

          return (
            <div key={category} className="category-group">
              {/* Category Header */}
              <div className="category-heading mb-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] whitespace-nowrap">
                  {category}
                </h2>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProjects.map((project, index) => (
                  <div
                    key={index}
                    className="project-card group relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent transition-opacity duration-500 group-hover:from-slate-950/95" />

                    {/* Text content pinned to the bottom */}
                    <div className="absolute bottom-0 left-0 flex w-full flex-col justify-end p-7">
                      <span className="mb-2 text-xs font-bold tracking-widest text-[#3B82F6] uppercase transition-transform duration-500 group-hover:-translate-y-1">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold leading-snug text-white transition-transform duration-500 group-hover:-translate-y-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
