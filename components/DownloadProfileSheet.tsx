"use client";

import React, { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface DownloadProfileSheetProps {
  children: React.ReactNode;
}

export function DownloadProfileSheet({ children }: DownloadProfileSheetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      company: formData.get("company"),
      email: formData.get("email"),
      source: "Company Profile Download",
    };

    try {
      // Using Formspree like in ContactForm
      const response = await fetch(" ", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      // https://formspree.io/f/xgonnqpp

      if (response.ok) {
        setStatus("success");
        // Trigger download
        const link = document.createElement("a");
        link.href = "/document/QSTC-Corporate-Profile.pdf";
        link.download = "QSTC-Corporate-Profile.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Close sheet after a short delay
        setTimeout(() => {
          // setIsOpen(false);
          setStatus("idle");
        }, 100000);
      } else {
        setStatus("idle");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:max-w-lg border-l border-white/20 bg-white/95 backdrop-blur-xl p-0"
      >
        <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 to-transparent pointer-events-none" />

        <div className="relative h-full flex flex-col p-8 sm:p-10">
          <SheetHeader className="text-left space-y-4 pb-10">
            <div className="relative bg-linear-to-br from-[#3B82F6] to-[#1D4ED8] w-14 h-14 rounded-xl flex items-center justify-center mb-2 shadow-md shadow-blue-200/50">
              <Download className="w-7 h-7 text-white" strokeWidth={1.8} />
            </div>
            <div className="space-y-2">
              <SheetTitle className="text-3xl font-extrabold tracking-tight text-[#3B82F6]">
                Download Company Profile
              </SheetTitle>
              <SheetDescription className="text-base text-gray-500 leading-relaxed">
                Fill in your details below to get instant access to our latest
                corporate profile and service catalog.
              </SheetDescription>
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto pr-2 -mr-2">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-400/20 blur-2xl rounded-full scale-150" />
                  <div className="relative w-24 h-24 bg-linear-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center">
                    <Download className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Download Started...
                  </h3>
                  <p className="text-gray-500 max-w-[280px]">
                    The document should start downloading now. If it doesn't
                    start automatically, use the button below.
                  </p>
                </div>

                <a
                  href="/document/QSTC-Corporate-Profile.pdf"
                  download
                  className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-[#3B82F6] px-10 py-5 font-bold text-white"
                >
                  <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                  Download Manually
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 pb-10">
                {/* <div className="space-y-3.5 group">
                  <label
                    htmlFor="company"
                    className="text-xs font-bold text-[#3B82F6] ml-1 tracking-widest uppercase opacity-80"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="e.g. Acme Corporation"
                    className="w-full h-14 px-5 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600/50 focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                  />
                </div> */}

                <div className="space-y-3.5 group">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-[#3B82F6] ml-1 tracking-widest uppercase opacity-80"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full h-14 px-5 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600/50 focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full group relative h-15 flex items-center justify-center gap-3 rounded-xl bg-[#3B82F6] px-8 py-4 font-bold text-white disabled:opacity-70 disabled:grayscale disabled:cursor-not-allowed overflow-hidden"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Downloading...</span>
                      </>
                    ) : (
                      <>
                        <Download className="h-5 w-5" />
                        <span>Download Profile</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
