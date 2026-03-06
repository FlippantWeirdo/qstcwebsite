"use client";

import { useRef } from "react";
import {
  MoveRight,
  Cpu,
  Video,
  Bot,
  Lock,
  Flame,
  Thermometer,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const services = [
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "ELV Systems",
    description:
      "Complete Extra Low Voltage solutions including structured cabling and data networks.",
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "CCTV & Surveillance",
    description:
      "High-definition monitoring and intelligent video analytics for comprehensive security.",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Automation Systems",
    description:
      "Smart building technology designed to optimize efficiency and user comfort.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Access Control",
    description:
      "Secure entry management solutions using biometric and RFID technologies.",
  },
  {
    icon: <Flame className="h-6 w-6" />,
    title: "Fire Safety",
    description:
      "Advanced detection, alarm, and suppression systems to protect life and property.",
  },
  {
    icon: <Thermometer className="h-6 w-6" />,
    title: "Building Management",
    description:
      "Integrated climate control and energy management for sustainable operations.",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // Only animate if cards exist
      if (cardsRef.current.length === 0) return;

      gsap.fromTo(
        cardsRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: {
            amount: 0.5,
            from: "center",
            grid: "auto",
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 45%", // Triggers when top of section hits 75% down viewport
            toggleActions: "play none none reverse", // Plays forward on enter, reverses on exit back up
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-slate-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Integrated technology solutions tailored for commercial, industrial,
            and residential infrastructures.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              // Tailwind group class is used here to target child elements easily on parent hover
              className="group relative flex flex-col items-start justify-between rounded-3xl bg-slate-100 p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-emerald-50 hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer border border-transparent hover:border-emerald-100"
            >
              <div>
                <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-slate-200 p-3 text-slate-700 transition-colors duration-500 group-hover:bg-emerald-100 group-hover:text-emerald-700">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-emerald-950">
                  {service.title}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-emerald-800/80">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto flex items-center font-bold text-[#3B82F6] transition-colors duration-500 group-hover:text-emerald-600">
                <span className="text-sm">Learn More</span>
                <MoveRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
