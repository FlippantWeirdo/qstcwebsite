"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Siren } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function FireOverview() {
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
        ".overview-text > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      );

      tl.fromTo(
        ".overview-image",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="overview-text space-y-6">
            {/* <div className="bg-blue-50 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
              <Siren className="w-8 h-8 text-blue-600" />
            </div> */}

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 pb-4 inline-block">
              The Fire Detection Alarm & Firefighting Solutions
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Fire is, most likely, the single most catastrophic event that
                any property will face. It endangers not only the structures but
                also the life of the users.
              </p>
              <p>
                In other words, fire is extremely destructive, disruptive, and
                costly to people and property. Its protection necessitates both
                risk awareness and the implementation of an effective protection
                systems.
              </p>
              <p>
                The use of a fire detection and alarm system in conjunction with
                rightly engineered automatic/manual fire fighting solutions are
                few of the excellent ways to accomplish this.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                We design, install and provide after sales service for:
              </h3>
              <ul className="space-y-3">
                {[
                  "Addressable Fire Detection & Alarm",
                  "Conventional Fire Detection & Alarm",
                  "Air Aspirating Detection (VESDA / FAAST)",
                  "Automatic Fire Fighting: Novec, FM200, CO2, Aerosol, Water-mist, etc",
                  "Manual Fire Fighting: Various types of Handheld Extinguishers",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overview-image relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/IMG_8935.jpg"
              alt="VESDA Panel Technician"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 to-transparent"></div>
            {/* <div className="absolute bottom-6 right-8 bg-blue-600 text-white py-2 px-6 rounded-lg font-bold text-2xl shadow-lg">
              04
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
