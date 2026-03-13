"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FireFighting() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        ".fighting-text > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      );

      tl.fromTo(
        ".fighting-images > *",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="fighting-text space-y-6 max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 pb-4 inline-block">
            Fire Fighting Solutions
          </h2>

          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              In our country fire accident is a very common phenomenon. Many
              lives and properties have been lost due to fire outbreak. As a
              developing country we have no modern technology to solve this
              problem. Our fire brigade service is rather non-existent and where
              such service is available, there are limitations to their
              effectiveness.
            </p>
            <p>
              We help design & install effective solutions using different types
              of extinguishing agents - FM200, CO2, Novec, Water etc based on
              your needs.
            </p>
          </div>
        </div>

        <div className="fighting-images grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/20250910_150440.webp"
              alt="Outdoor Fire Extinguishing Pipes"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/1000225750.webp"
              alt="Outdoor Fire Valves Details"
              fill
              className="object-cover"
              style={{ objectPosition: "75% 50%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

