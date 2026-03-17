"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function BmsHero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-content > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power3.out" },
        0.2,
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/bms_system.webp"
          alt="Building Management Systems"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <div className="hero-content max-w-4xl mx-auto space-y-6">
          <div className="inline-block bg-blue-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
            Efficiency & Control
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Building Management Systems
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Intelligent solutions to optimize operations, minimize plant
            failures, and ensure the utmost comfort for building occupants.
          </p>
        </div>
      </div>
    </section>
  );
}
