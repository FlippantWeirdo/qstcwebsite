"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const solutionOfferings = [
  "Integrated Access Control",
  "IP & Analogue Closed Circuit TV",
  "IP & Analogue Public Address & Sound",
  "Intruder Detection Alarm & Mass Notification & PID",
  "IP, Analogue and Hybrid (IP ready) Telephony",
  "Building Management System (BMS)",
  "Automatic & Manual Security Barriers & Barricades",
  "Hotel Lock & Automation",
  "Xray Baggage & Mail Scanning",
  "Walkthrough Metal Detection",
  "Visitors Management",
  "Home Automation",
  "Explosive & Poisonous Gas Detection",
  "Under-vehicle scanning",
  "Sound Masking",
  "Central TV Reception & Distribution",
];

export function ElvOverview() {
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
        ".overview-text > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      );

      tl.fromTo(
        ".offering-item",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out" },
        "-=0.4",
      );

      tl.fromTo(
        ".overview-image",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="overview-text space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              The Low Voltage Security, Safety & Communication Solution
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We offer solutions ranging from standalone to integrated
              electronics and automated security, safety and communication
              systems for small, medium and large scale applications in hotels,
              commercial buildings, schools, airports, hospitals, private
              residential and government establishments.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Our solution offerings are wide and include:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {solutionOfferings.map((item, i) => (
                  <li key={i} className="offering-item flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overview-image relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/services/cctv_server.png"
              alt="CCTV and Server Infrastructure"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
