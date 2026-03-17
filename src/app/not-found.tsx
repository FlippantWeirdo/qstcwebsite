"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // General fade in
      gsap.fromTo(
        ".error-content > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power3.out" },
      );

      // CCTV Lens Animation (subtle looking around)
      const lookAround = () => {
        gsap.to(".cctv-lens", {
          x: gsap.utils.random(-8, 8),
          y: gsap.utils.random(-4, 4),
          duration: gsap.utils.random(1, 2.5),
          ease: "power2.inOut",
          onComplete: () => {
            // Pause briefly before next movement
            gsap.delayedCall(gsap.utils.random(0.5, 2), lookAround);
          },
        });
      };

      lookAround();
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="flex min-h-[80vh] flex-col items-center justify-center bg-transparent px-6 py-24 text-center"
    >
      <div className="error-content flex max-w-2xl flex-col items-center relative">
        {/* Subtle glowing effect behind the camera */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 bg-blue-500/10 blur-3xl rounded-full -z-10" />

        {/* CCTV SVG */}
        <div className="mb-8 relative">
          <svg
            viewBox="0 0 120 120"
            className="h-40 w-40 sm:h-48 sm:w-48 text-[#2563EB]"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Base mount */}
            <path d="M20 30 h80 v10 c0 10 -8 15 -15 15 h-50 c-7 0 -15 -5 -15 -15 z" />
            <line x1="60" y1="30" x2="60" y2="55" />

            {/* Outer dome */}
            <path d="M32 55 v15 a28 28 0 0 0 56 0 v-15" />

            {/* Inner rotating housing */}
            <path d="M42 88 v-8 a18 18 0 0 1 36 0 v8" />

            {/* Moveable Lens */}
            <circle cx="60" cy="74" r="7" className="cctv-lens" />
          </svg>
        </div>

        <h1 className="mb-4 text-7xl font-black tracking-tighter text-gray-900 md:text-9xl">
          404
        </h1>

        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-800 md:text-3xl">
          Page Not Found
        </h2>

        <p className="mb-10 text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
          Looks like this area is off the grid. The page you are looking for
          doesn't exist or has been moved.
        </p>

        <Button
          asChild
          size="lg"
          className="group rounded-xl bg-[#3B82F6] px-8 py-6 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#2563EB] hover:shadow-xl"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Return to Base
          </Link>
        </Button>
      </div>
    </main>
  );
}
