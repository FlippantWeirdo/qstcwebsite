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

export function ItOverview() {
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
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      );

      tl.fromTo(
        ".offering-item",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
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
              The Engine of Modern Business
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Basically, IT infrastructure is the combined set of hardware,
                software, network resources, and services required for the
                operation, management, and support of an organization&apos;s
                functional environment.
              </p>
              <p>
                Essentially, IT infrastructure is the bedrock upon which modern
                organizations sit. Without a robust IT infrastructure,
                businesses would struggle to maintain productivity, secure their
                data, and compete in a technology-driven marketplace.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                We have a vast knowledge in the provision of IT solutions. We
                comfortably deliver on:
              </h3>
              <ul className="space-y-4">
                {[
                  "Hardware components: Server, Storage, Cabling, etc",
                  "Software components",
                  "Networking: wired or wireless",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="offering-item flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-blue-100"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overview-image relative h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/services/it_cables.png"
              alt="Network Infrastructures and Server Hardware"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
