"use client";

import { useRef } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function OurJourney() {
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
        ".journey-content > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      );

      tl.fromTo(
        ".journey-image",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.6",
      );

      tl.fromTo(
        ".journey-badge",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.4",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-[#F8F9FA] overflow-hidden">
      <style>{`
        @keyframes float-independent {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-card {
          animation: float-independent 6s ease-in-out infinite;
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="journey-content space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827]">
                Our Journey
              </h2>
            </div>

            <div className="space-y-6 text-[#4B5563] text-lg leading-relaxed">
              <p>
                Established in 2008, QSTC Services Limited has grown into a
                premier systems integration company. We specialize in providing
                cutting-edge solutions across ELV systems, CCTV surveillance,
                and fire detection.
              </p>
              <p>
                With over a decade of experience, we pride ourselves on
                delivering reliable, high-quality engineering services that
                ensure safety and efficiency for our clients. Our expertise
                allows us to bridge the gap between complex hardware and
                intuitive user control, creating seamless environments for
                businesses of all sizes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 pt-6">
              <div className="border-l-[3px] border-[#3B82F6] pl-6 py-1">
                <div className="text-4xl font-extrabold text-[#3B82F6] mb-2">
                  20+
                </div>
                <div className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">
                  Years of Experience
                </div>
              </div>
              <div className="border-l-[3px] border-[#3B82F6] pl-6 py-1">
                <div className="text-4xl font-extrabold text-[#3B82F6] mb-2">
                  500+
                </div>
                <div className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative mt-12 lg:mt-0 pl-4 sm:pl-16">
            <div className="journey-image relative h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/IMG_2057.webp"
                alt="Technician working on server rack"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay Card */}
            <div className="journey-badge absolute bottom-12 left-0 sm:-left-8 lg:-left-12 bg-[#3B82F6] text-white p-7 rounded-xl shadow-xl w-60 animate-float-card">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-[#3B82F6]">
                <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <div className="font-bold text-lg">Certified Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

