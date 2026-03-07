"use client";

import { useRef } from "react";
import { Target, Eye, Shield } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide innovative and integrated security and safety solutions through technical excellence, ensuring our clients operate in secure and optimized environments.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted partner in ELV and fire detection systems across the region, recognized for our commitment to quality and technological leadership.",
  },
  {
    icon: Shield,
    title: "Core Values",
    description:
      "Integrity, Innovation, Quality, and Customer-Centricity are at the heart of everything we do. We believe in building long-term relationships through transparency.",
  },
];

export function MissionVision() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        ".mission-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );

      tl.fromTo(
        ".mission-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      );

      tl.fromTo(
        ".mission-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.5)",
        },
        "-=0.4",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="mission-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-4">
            Mission, Vision & Values
          </h2>
          <p className="mission-subtitle text-lg text-slate-500 max-w-2xl mx-auto">
            The pillars that drive our excellence in systems integration and
            client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="mission-card bg-white rounded-2xl p-8 lg:p-10 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <Icon className="w-8 h-8 text-[#3B82F6]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
