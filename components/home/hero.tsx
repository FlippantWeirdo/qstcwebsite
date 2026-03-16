"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { DownloadProfileSheet } from "@/components/DownloadProfileSheet";

const images = [
  "/images/hero/server.webp",
  "/images/hero/security.webp",
  "/images/hero/smarthome.webp",
];

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Tagline
      tl.fromTo(
        ".hero-tag",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );

      // Main heading staggered words
      tl.fromTo(
        ".hero-word",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
        },
        "-=0.4",
      );

      // Subtitle
      tl.fromTo(
        ".hero-subtitle",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      );

      // Buttons
      tl.fromTo(
        ".hero-btn",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.4",
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-black pb-20 pt-32 lg:pt-40"
    >
      {/* Background Images Carousel */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex
              ? "opacity-30 lg:opacity-40"
              : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Hero Background"
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <div className="hero-tag mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-white/80 uppercase backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EF4444]" />
            Next-Gen Systems Integration
          </div>

          <h1 className="mb-6 flex flex-col text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-[5.5rem] lg:leading-[1.1]">
            <div className="overflow-hidden pb-1">
              <span className="hero-word inline-block mr-4 lg:mr-6">
                Secure.
              </span>
              <span className="hero-word inline-block">Smart.</span>
            </div>
            <div className="overflow-hidden pb-2 text-[#3B82F6]">
              <span className="hero-word inline-block">Reliable.</span>
            </div>
          </h1>

          <p className="hero-subtitle mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            From Security Systems Installation Services, Fire Fighting &
            Detection Systems to IT Infrastructures & BMS, we design and deliver
            cutting-edge solutions tailored to protect, connect, save costs and
            empower your business.
          </p>

          <div className="flex flex-wrap items-center gap-4 relative z-20">
            <div className="hero-btn">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-lg bg-[#3B82F6] px-8 py-6 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-xl hover:shadow-blue-500/30"
              >
                <Link href="/services/elvsystems">Explore ELV Services</Link>
              </Button>
            </div>
            <div className="hero-btn">
              <DownloadProfileSheet>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-lg border-white/20 bg-white/5 px-8 py-6 text-base font-semibold text-white shadow-none backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Profile
                </Button>
              </DownloadProfileSheet>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-gray-50 to-transparent dark:from-black" />
    </section>
  );
}
