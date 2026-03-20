"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FireDetection() {
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
        ".detection-text > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
      );

      tl.fromTo(
        ".detection-images > *",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="detection-text space-y-6 max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold pb-4 inline-block">
            Fire; Poisonous Gas Detection & Alarm
          </h2>

          <div className="space-y-4 text-gray-300 text-lg text-justify hyphens-auto leading-relaxed">
            <p>
              We understand that nothing is more precious than the lives of your
              family, employees, customers and other members of the public who
              rely upon you to keep them safe from the dangers of fire.
            </p>
            <p>
              Whether you are constructing a new facility or it is an existing
              facility, the success of your fire & gas protection project
              depends upon a fire security partner who understands fire safety
              system design and installation. We are one of the few available in
              West Africa.
            </p>
          </div>
        </div>

        <div className="detection-images grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-800">
            <Image
              src="/images/projects/gas-controller.webp"
              alt="Fire Alarm Control Panel"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-800">
            <Image
              src="/images/Gas-Detection-Control-Panel.jpg"
              alt="Fire Alarm Control Board"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
