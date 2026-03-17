"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HomeAutomationSection() {
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
        ".ha-content > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power3.out" },
      );

      tl.fromTo(
        ".ha-image",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="ha-content space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Home Automation
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                With QSTC &apos;connected home&apos; solution offerings,
                connecting to your home appliances/systems and ensuring the
                safety of your loved ones even while you are away cannot be
                easier.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="font-medium text-gray-800 italic">
                  &quot;Are you interested in being certain that a certain
                  entrance or exit door is locked? Do you desire to have
                  multi-room sound system? Do you want to use voice assistant –
                  like Apple Siri to control appliances or lighting in your
                  home? Are you interested in saving energy usage in your house
                  or office?&quot;
                </p>
              </div>

              <p className="font-semibold text-blue-600">
                If your answer to any of the above is yes, we sure can help.
              </p>
            </div>
          </div>

          <div className="ha-image relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/home_automation.webp"
              alt="Smart Home Automation via Smartphone"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
