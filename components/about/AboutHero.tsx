"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function AboutHero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Badge
      tl.fromTo(
        ".hero-badge",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      );

      // Main heading
      tl.fromTo(
        ".hero-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.4",
      );

      // Subtitle
      tl.fromTo(
        ".hero-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.5",
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative flex h-[70vh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30 lg:opacity-40">
        <Image
          src="/images/about/hero.webp"
          alt="About QSTC Office"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <div className="hero-badge mb-6 inline-flex items-center rounded-full bg-[#3B82F6] px-5 py-2 text-xs font-bold tracking-[0.2em] text-white uppercase">
            Since 2008
          </div>

          <h1 className="hero-heading mb-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            About QSTC Services Limited
          </h1>

          <p className="hero-subtitle max-w-2xl text-lg font-medium leading-relaxed text-gray-300 md:text-xl">
            Leading Systems Integration Specialists delivering excellence in
            safety and security technology.
          </p>
        </div>
      </div>

      {/* Bottom Gradient Overlay (optional, for smoother transition to next section) */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-gray-50 to-transparent dark:from-black" />
    </section>
  );
}
