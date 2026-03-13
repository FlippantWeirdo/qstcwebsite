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
                className="mission-card group relative bg-white rounded-2xl p-8 lg:p-10 border border-slate-100 hover:border-blue-200 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white hover:shadow-xl hover:shadow-blue-100/40 hover:-translate-y-1.5 transition-all duration-400"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-50 to-transparent rounded-tr-2xl rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Icon */}
                <div className="relative bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-200/50 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#1E40AF] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="relative text-slate-600 leading-relaxed text-[15px]">
                  {pillar.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-400 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

