"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  MoveRight,
  Cpu,
  Video,
  Lock,
  Lightbulb,
  Flame,
  Thermometer,
  Wrench,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Cpu,
    title: "ELV Systems",
    description:
      "Complete Extra Low Voltage solutions including structured cabling and data networks.",
    href: "/services/elvsystems",
  },
  {
    icon: Flame,
    title: "Fire Safety",
    description:
      "Advanced detection, alarm, and suppression systems to protect life and property.",
    href: "/services/fire-safety",
  },
  {
    icon: Thermometer,
    title: "Building Management Systems",
    description:
      "Integrated climate control and energy management for sustainable operations.",
    href: "/services/bms",
  },
  {
    icon: Wrench,
    title: "Mechanical & Plumbing",
    description: "Comprehensive HVAC, water supply, and drainage solutions.",
    href: "/services/mechanical-plumbing",
  },
  {
    icon: Lightbulb,
    title: "Electrical Power Solutions",
    description:
      "Reliable power distribution and backup systems including UPS and generators.",
    href: "/services/electric-power-solutions",
  },
];

export function Services() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        ".services-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      );

      tl.fromTo(
        ".services-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.6",
      );

      tl.fromTo(
        ".service-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "back.out(1.5)",
        },
        "-=0.4",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="bg-slate-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="services-heading inline-block text-sm font-semibold tracking-widest uppercase text-[#3B82F6] mb-3">
            What We Do
          </span>
          <h2 className="services-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Our Services
          </h2>
          <p className="services-subtitle mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Integrated technology solutions tailored for commercial, industrial,
            and residential infrastructures.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className="service-card group relative bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm hover:border-blue-200 hover:bg-linear-to-br hover:from-blue-50/50 hover:to-white hover:shadow-xl hover:shadow-blue-100/40 hover:-translate-y-1.5 transition-all duration-400 no-underline"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-blue-50 to-transparent rounded-tr-2xl rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Icon */}
                <div className="relative bg-linear-to-br from-[#3B82F6] to-[#1D4ED8] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-200/50 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#1E40AF] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative text-slate-600 leading-relaxed text-[15px] mb-8">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="relative mt-auto flex items-center font-bold text-[#3B82F6]">
                  <span className="text-sm">Learn More</span>
                  <MoveRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-linear-to-r from-transparent via-[#3B82F6] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-400 rounded-full" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
