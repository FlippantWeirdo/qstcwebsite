"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Expand, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

gsap.registerPlugin(ScrollTrigger);

export function FieldReport() {
  const container = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        ".report-text > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
      );

      tl.fromTo(
        ".report-preview",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <section
      id="field-report"
      ref={container}
      className="py-24 bg-slate-50 scroll-mt-24"
    >
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="report-text space-y-6">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#3B82F6]">
            Field Commissioning Report
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Some assets can&apos;t be reinsured
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A look at a real Novec&trade; 1230 clean agent suppression
            installation - from detection and precision actuation to clean
            agent discharge - engineered to stop fire in data centers, genset
            rooms and archives before it starts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#1E3A8A] px-6 py-3.5 font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20"
            >
              <Expand className="h-5 w-5" />
              View Full Report
            </button>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3.5 font-bold text-gray-700 transition-all hover:-translate-y-1 hover:border-gray-300"
            >
              Request a Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="report-preview group relative w-full max-w-sm mx-auto lg:max-w-none aspect-4/5 rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in"
          aria-label="View full field commissioning report"
        >
          <Image
            src="/images/qstc-info-flyer.jpeg"
            alt="QSTC field commissioning report: Novec 1230 clean agent fire suppression"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-bold text-gray-900 text-sm">
              <Expand className="h-4 w-4" />
              View Full Report
            </span>
          </div>
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton
          className="max-w-2xl w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto p-0 bg-slate-900"
        >
          <DialogTitle className="sr-only">
            QSTC Field Commissioning Report
          </DialogTitle>
          <DialogDescription className="sr-only">
            Novec 1230 clean agent fire suppression field commissioning
            report
          </DialogDescription>
          <div className="relative w-full aspect-4/5">
            <Image
              src="/images/qstc-info-flyer.jpeg"
              alt="QSTC field commissioning report: Novec 1230 clean agent fire suppression"
              fill
              className="object-contain"
              sizes="(max-width: 672px) 100vw, 672px"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
