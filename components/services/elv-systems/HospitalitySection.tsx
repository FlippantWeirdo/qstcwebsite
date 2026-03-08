"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HospitalitySection() {
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
        ".hosp-content > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      );

      tl.fromTo(
        ".hosp-image",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-24 bg-slate-950 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hosp-content space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Hospitality Solutions
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                We add value to any hotel by providing secure and a reliable
                wire or wire-free environment 24/7, covering access management
                of the entire property with our Electronics locking system. Ours
                is more than Guest room hotel locks; we also help to give them
                better experience within your facilities.
              </p>

              <div className="pt-4 border-t border-gray-800">
                <p className="font-semibold text-gray-100 mb-4 flex items-center gap-2">
                  Aside from the locks, we also offer the hospitality industry:
                </p>

                <ul className="grid grid-cols-1 gap-3 pl-10 list-disc text-gray-300">
                  <li>IP & Analogue TV Distribution</li>
                  <li>
                    Digital Signage that helps hotels to harness the power of
                    video to engage, inform and entertain
                  </li>
                  <li>Motorized doors and gates</li>
                  <li>Telephone Intercom and lastly</li>
                  <li>Data networks</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hosp-image relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
            <Image
              src="/images/services/hotel_lock.png"
              alt="Electronic Hotel Lock and Modern Hospitality Solutions"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
