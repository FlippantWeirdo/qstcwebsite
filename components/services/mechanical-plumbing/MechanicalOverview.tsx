"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function MechanicalOverview() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".system-section",
          start: "top 75%",
        },
      });

      tl.fromTo(
        ".system-content > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "power3.out",
        },
      );

      tl.fromTo(
        ".system-image",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.4",
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className="overflow-hidden">
      <section className="system-section py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Area */}
            <div className="system-content space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
                  {/* <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div> */}
                  Mechanical & Plumbing Solutions
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At QSTC Services Limited, we understand that a building is
                  only as efficient as its core systems. By integrating
                  sophisticated HVAC, high-precision piping, and sustainable
                  water management with our legacy in Power and IT, we ensure
                  that every &apos;vital organ&apos; of your facility operates
                  in perfect synergy. We don&apos;t just install systems; we
                  engineer environments that breathe, flow, and endure.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Our core M&amp;P capabilities include:
                </h3>
                <ul className="space-y-6">
                  {[
                    {
                      label: "HVAC & Climate Control",
                      desc: "Precision cooling for data centers and comfort cooling for commercial spaces.",
                    },
                    {
                      label: "Water Engineering",
                      desc: "Industrial plumbing, treatment plants (ETP & WTP), and smart distribution systems.",
                    },
                    {
                      label: "Energy Recovery",
                      desc: "Mechanical solutions designed to lower your building&apos;s carbon footprint.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      {/* <div className="shrink-0 w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center mt-1">
                        <svg
                          className="w-3 h-3 text-blue-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div> */}
                      <div>
                        <span className="font-bold text-gray-900 block">
                          {item.label}:
                        </span>
                        <span className="text-gray-600">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Area */}
            <div className="system-image relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="/images/piping-2.png"
                alt="Mechanical & Plumbing Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
