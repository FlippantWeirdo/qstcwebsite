"use client";

import { useRef } from "react";
import { Handshake, Users, Briefcase } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Handshake, val: "200+", label: "PROJECT HIRE" },
  { icon: Users, val: "45+", label: "TOTAL CLIENTS" },
  { icon: Briefcase, val: "163+", label: "PROJECT DONE" },
];

export function QuoteStats() {
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
        ".quote-mark",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(2)" },
      );

      tl.fromTo(
        ".quote-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4",
      );

      tl.fromTo(
        ".quote-author",
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4",
      );

      tl.fromTo(
        ".stat-card",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.2",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="quote-mark text-6xl text-[#3B82F6] font-serif leading-none mb-6">
            "
          </div>
          <h2 className="quote-text text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            "Few things generate more goodwill and repeat businesses than being
            effortless to deal with"
          </h2>
          <p className="quote-author text-[#3B82F6] font-bold tracking-[0.2em] text-sm uppercase">
            - Matt Watkinson
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="stat-card bg-[#1E293B] rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-colors hover:bg-slate-800"
              >
                <Icon
                  className="w-10 h-10 text-[#3B82F6] mb-6"
                  strokeWidth={2.5}
                />
                <div className="text-4xl font-extrabold text-white mb-2">
                  {stat.val}
                </div>
                <div className="text-[#94A3B8] font-bold tracking-widest text-xs uppercase">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

