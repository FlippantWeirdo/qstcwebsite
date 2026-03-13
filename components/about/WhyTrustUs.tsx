"use client";

import { useRef } from "react";
import {
  MapPin,
  SlidersHorizontal,
  Zap,
  Award,
  Cpu,
  HeadphonesIcon,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trustPoints = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "We are 100% indigenous with a nimble team that understands the Nigerian factor and is able to design and tailor solutions that can weather the storm.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customizable Solutions",
    description:
      "We listen to our customers and come up with fit-for-purpose solutions that meet their needs and budget as opposed to off-the-shelf offers given by others — especially foreign based contractors.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description:
      "The fact that we are local & nimble has made our response to issues arising from the use of our systems faster, ensuring minimal downtime for our clients.",
  },
  {
    icon: Award,
    title: "Experience",
    description:
      "Our journey started in 2008 as a company with a very humble but technically strong beginning. We have in our team individuals with over 25 years of experience in the building services industry.",
  },
  {
    icon: Cpu,
    title: "Reliable Technology",
    description:
      "We partner with top-tier equipment manufacturers like no other and boast of a sizeable number of factory-trained engineers so that the state-of-the-art technologies we bring can be backed by a sound support team.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Customer Service",
    description:
      "Aside from providing our customer service team with comprehensive training, we have also implemented a Customer Relationship Management system (CRM) to track interactions, complaints and preferences.",
  },
];

export function WhyTrustUs() {
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
        ".trust-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );

      tl.fromTo(
        ".trust-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      );

      tl.fromTo(
        ".trust-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.5)",
        },
        "-=0.4",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="trust-heading inline-block text-sm font-semibold tracking-widest uppercase text-[#3B82F6] mb-3">
            Why Choose Us
          </span>
          <h2 className="trust-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-4">
            Why Trust Us?
          </h2>
          <p className="trust-subtitle text-lg text-slate-500 max-w-2xl mx-auto">
            QSTC Services Limited is an electrical services solution provider
            and electronic security and safety system integrator with a mission
            to provide personalized, technical, professional services and budget
            friendly innovative solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="trust-card group relative bg-[#F8FAFC] rounded-2xl p-8 lg:p-10 border border-slate-100 hover:border-blue-200 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white hover:shadow-xl hover:shadow-blue-100/40 hover:-translate-y-1.5 transition-all duration-400"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-50 to-transparent rounded-tr-2xl rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Icon */}
                <div className="relative bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-200/50 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#1E40AF] transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="relative text-slate-600 leading-relaxed text-[15px]">
                  {point.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-400 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

