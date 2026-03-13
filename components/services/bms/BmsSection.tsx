"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function BmsSection() {
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
        ".bms-content > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      );

      tl.fromTo(
        ".bms-image",
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
      className="py-24 bg-white text-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bms-image order-2 lg:order-1 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/bmsillustration.webp"
              alt="Building Energy Management System Controller"
              fill
              className="object-cover"
            />
          </div>

          <div className="bms-content order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Building & Energy Management Solutions
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Few of the challenges facing Building owners and Facility
                Managers in this era are:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Keeping & maintaining cost of operation as low as possible
                </li>
                <li>Managing and minimizing plants failures</li>
                <li>Making building occupants comfortable</li>
              </ul>

              <p>
                Selecting and using the right technology and equipment will help
                in overcoming the above challenges.
              </p>

              <p>
                We have the right skills from design to implementation and we
                are backed by re-known BMS manufacturers in the industry to
                ensure your desired solution is delivered and all expectations
                met.
              </p>

              <p className="font-medium text-blue-600">
                We don&apos;t make the mistake of locking-in our clients to a
                system where they have no control. We make sure &quot;when they
                buy the car, they get all the keys too.&quot; Our system put the
                control back in your hands - i.e. no running cost on updates,
                security patches et al.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

