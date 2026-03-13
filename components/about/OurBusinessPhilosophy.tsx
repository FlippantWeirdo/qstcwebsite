"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function OurBusinessPhilosophy() {
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
        ".philosophy-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );

      tl.fromTo(
        ".philosophy-text p",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.4",
      );

      tl.fromTo(
        ".philosophy-accordion",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.2",
      );

      tl.fromTo(
        ".philosophy-image",
        { scale: 0.95, opacity: 0, x: 20 },
        { scale: 1, opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text & Accordion Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="philosophy-heading text-3xl md:text-4xl font-extrabold text-[#111827]">
                Our Business Philosophy
              </h2>
              <div className="philosophy-text space-y-5 text-[#4B5563] text-lg leading-relaxed">
                <p>
                  We put our clients first and strive to secure their trust
                  through high quality and timely service and innovative
                  solution.
                </p>
                <p>
                  We value our employees and invest in them to achieve their
                  full potential through continuous training and development,
                  and employee satisfaction.
                </p>
                <p>
                  We embrace Best Working Practices and seek Excellence in
                  everything we do, exceeding expectations while creating
                  genuine added value for our client.
                </p>
              </div>
            </div>

            {/* Accordion */}
            <div className="philosophy-accordion pt-4">
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                className="w-full"
              >
                <AccordionItem
                  value="item-1"
                  className="border-b border-gray-200 py-2"
                >
                  <AccordionTrigger className="text-xl font-bold text-[#111827] hover:no-underline hover:text-[#3B82F6] transition-colors">
                    We Design
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4B5563] text-base leading-relaxed pt-2">
                    We DESIGN, INSTALL, and provide SUPPORT. We work with you,
                    listen to every details of your security need and design
                    solution that is tailored for you, quality and within your
                    budget. We install systems and train users on the use and
                    operations. Our customer services are unparalleled. We are
                    staffed with fulltime electronic technicians that have been
                    certified by most system manufacturers, and our in-house
                    service repair center is an authorized warranty repair
                    facility for many of the systems we offer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="border-b border-gray-200 py-2"
                >
                  <AccordionTrigger className="text-xl font-bold text-[#111827] hover:no-underline hover:text-[#3B82F6] transition-colors">
                    We Implement
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4B5563] text-base leading-relaxed pt-2">
                    We have individuals with more than 20 years experience in
                    the service delivery industry. It is one of our strengths
                    and it has always assists us in delivering our projects
                    timely and on budget.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="border-b border-gray-200 py-2"
                >
                  <AccordionTrigger className="text-xl font-bold text-[#111827] hover:no-underline hover:text-[#3B82F6] transition-colors">
                    We Train & Support
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4B5563] text-base leading-relaxed pt-2">
                    We offer hands-on training, seminar, and certificate-based
                    training on fire detection and alarm system, and
                    instrumentations to he-would-be system integrators,
                    corporate employees, M&E consultants/contractors, and
                    building engineers. Over the years, we have had the
                    opportunity to work with different types of establishments
                    and private individuals. At every encounter, we strive to
                    adapt quickly and effectively to their requirements.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative mt-8 lg:mt-0 pt-12 lg:pt-0">
            <div className="philosophy-image relative h-[650px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/20250220_093416.webp"
                alt="Engineers discussing project in a modern office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

