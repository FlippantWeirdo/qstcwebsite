"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutCta() {
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
        ".cta-bg",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
      );

      tl.fromTo(
        ".cta-content > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power3.out" },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="bg-white py-24 px-6 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="cta-bg relative overflow-hidden rounded-3xl bg-linear-to-br from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] px-8 py-16 shadow-2xl md:px-16 md:py-20 text-center">
          {/* Decorative background blur elements */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="cta-content relative z-10 flex flex-col items-center">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
              Ready to secure your business with the best?
            </h2>

            <p className="mb-10 max-w-2xl text-lg text-blue-100/90 leading-relaxed md:text-xl">
              Contact us today for a comprehensive consultation on your systems
              integration needs.
            </p>

            <div className="flex flex-col w-full max-w-md gap-4 sm:max-w-none sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-[#2563EB] shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl hover:shadow-black/10"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
