"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const systems = [
  {
    title: "HVAC Systems",
    description:
      "Complete heating, ventilation, and air conditioning solutions for Nigeria's tropical climate. Our systems prioritize energy efficiency while maintaining optimal indoor comfort.",
    points: [
      "Central air conditioning systems",
      "Variable refrigerant flow (VRF) systems",
      "Chilled water systems",
      "Ventilation and air quality control",
      "Energy-efficient heat recovery systems",
    ],
    image: "/images/IMG_8008.jpg",
  },
  {
    title: "Water Supply Systems",
    description:
      "Reliable water supply and distribution systems to meet the demands of modern buildings while ensuring water quality and pressure consistency.",
    points: [
      "Potable water distribution systems",
      "Water treatment and filtration",
      "Booster pump systems",
      "Water storage tanks and reservoirs",
      "Hot water circulation systems",
    ],
    image: "/images/IMG_8008.jpg",
  },
  {
    title: "Drainage & Sewerage Systems",
    description:
      "Efficient drainage and sewerage systems to handle wastewater and stormwater with proper treatment and disposal methods.",
    points: [
      "Sanitary drainage systems",
      "Stormwater management",
      "Sewage treatment plants",
      "Grease trap systems",
      "Sump pump installations",
    ],
    image: "/images/IMG_8981.jpg",
  },
];

export function MechanicalOverview() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>(".system-section");

      sections.forEach((section) => {
        gsap.fromTo(
          section.querySelectorAll(".system-content > *"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          },
        );

        gsap.fromTo(
          section.querySelector(".system-image"),
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          },
        );
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="overflow-hidden">
      {systems.map((system, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={index}
            className={`system-section py-24 ${
              isEven ? "bg-white" : "bg-slate-50"
            }`}
          >
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content Area */}
                <div
                  className={`system-content space-y-6 ${
                    isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                  }`}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {system.title}
                  </h2>

                  <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                    <p>{system.description}</p>

                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {system.points.map((point, ptIndex) => (
                        <li key={ptIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Area */}
                <div
                  className={`system-image relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl ${
                    isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                  }`}
                >
                  <Image
                    src={system.image}
                    alt={system.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
