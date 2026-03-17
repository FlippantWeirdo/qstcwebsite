"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SoundMaskingSection() {
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
        ".sm-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      );

      tl.fromTo(
        ".sm-text",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" },
        "-=0.4",
      );

      tl.fromTo(
        ".sm-list-item",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.4",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="sm-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Sound Masking Systems
          </h2>

          <div className="space-y-8">
            <p className="sm-text text-lg text-gray-600 leading-relaxed">
              We offer quite a number of sound system solutions but the unique
              one for those that desire...
            </p>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Calmness",
                  "To improve staff concentration",
                  "To improve speech privacy",
                  "Increase productivity in their offices",
                ].map((item, i) => (
                  <li key={i} className="sm-list-item flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              {/* <p className="sm-text text-xl font-semibold text-blue-900 mt-6 text-center">
                ...is the sound masking system.
              </p> */}
            </div>

            <p className="sm-text text-lg text-gray-600 leading-relaxed">
              Open plan offices is a common trend in organizations nowadays and
              it comes packed with its own disadvantages especially with regards
              to speech privacy and noise control. This is where sound masking
              solution comes in, and we are available 24/7 to help with limiting
              the effect of these issues on your organization&apos;s
              productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
