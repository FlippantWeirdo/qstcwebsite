"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { src: "/images/about/Mamuda-Group-Logo.webp", alt: "Mamuda Group" },
  { src: "/images/about/limage-3328-406-photo.webp", alt: "Partner Logo" },
  { src: "/images/about/mainone-logo.webp", alt: "MainOne" },
  { src: "/images/about/mantrac-logo.webp", alt: "Mantrac" },
  { src: "/images/about/medallion-logo.webp", alt: "Medallion" },
  { src: "/images/about/nestav-logo.png", alt: "Nestav" },
  { src: "/images/about/ng-jberge-logo.webp", alt: "Julius Berger" },
];

export function ClientMarquee() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      });

      tl.fromTo(
        ".client-marquee-heading",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      );

      tl.fromTo(
        ".client-marquee-wrapper",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.4",
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-20 bg-white overflow-hidden border-t border-gray-100"
    >
      <style>{`
        .client-marquee {
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: 6rem;
        }

        .client-marquee-content {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
          min-width: 100%;
          gap: 6rem;
          animation: client-slide 30s linear infinite;
        }

        @keyframes client-slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - 6rem));
          }
        }

        .client-marquee:hover .client-marquee-content {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-6 mb-12 text-center">
        <h3 className="client-marquee-heading text-xl font-bold text-gray-400 uppercase tracking-[0.15em]">
          Few of our clients
        </h3>
      </div>

      {/* Marquee Container */}
      <div className="client-marquee-wrapper w-full bg-white py-4 relative">
        {/* Soft gradient fades on edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-white to-transparent z-10"></div>

        <div className="client-marquee flex whitespace-nowrap">
          <div className="client-marquee-content">
            {clients.map((client, index) => (
              <div
                key={`c1-${index}`}
                className="relative h-28 w-56 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="client-marquee-content" aria-hidden="true">
            {clients.map((client, index) => (
              <div
                key={`c2-${index}`}
                className="relative h-28 w-56 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
