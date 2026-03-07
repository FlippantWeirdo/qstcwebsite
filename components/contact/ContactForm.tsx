"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Phone, Mail, MapPin, Clock, PenTool } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
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
        ".form-element",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      );

      tl.fromTo(
        ".contact-info-block",
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Side: Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="form-element inline-flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-md uppercase tracking-wider text-sm font-semibold">
              <PenTool className="w-4 h-4" />
              Get In Touch
            </div>

            <form
              action="https://formspree.io/f/mwvrpolp"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="form-element w-full h-[54px] px-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="form-element w-full h-[54px] px-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-colors"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                  className="form-element w-full h-[54px] px-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="form-element w-full h-[54px] px-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company's name"
                  className="form-element w-full h-[54px] px-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-colors"
                />
                <Select name="interest" required>
                  <SelectTrigger className="form-element w-full !h-[54px] px-4 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-colors text-gray-500 text-base shadow-none">
                    <SelectValue placeholder="What's your Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="elv-systems">ELV Systems</SelectItem>
                    <SelectItem value="it-infrastructure">
                      IT Infrastructure
                    </SelectItem>
                    <SelectItem value="fire-safety">
                      Fire Detection & Firefighting
                    </SelectItem>
                    <SelectItem value="electric-power">
                      Electric Power Solutions
                    </SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <textarea
                name="message"
                placeholder="Type your message here..."
                rows={6}
                required
                className="form-element w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-colors resize-none"
              ></textarea>

              <button
                type="submit"
                className="form-element mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="lg:col-span-1 space-y-8 pt-8 lg:pt-0">
            {/* Phone Block */}
            <div className="contact-info-block flex gap-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-blue-600 bg-blue-50 text-blue-600 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#1E3A8A] text-lg mb-1">
                  Phone Number
                </h4>
                <p className="text-gray-600">+234 (0) 807 743 7933</p>
                {/* Dotted border below */}
                <div className="w-full border-b border-dashed border-blue-200/60 mt-6 box-border"></div>
              </div>
            </div>

            {/* Email Block */}
            <div className="contact-info-block flex gap-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-blue-600 bg-blue-50 text-blue-600 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#1E3A8A] text-lg mb-1">
                  Email Address
                </h4>
                <p className="text-gray-600">info@qstcng.com</p>
                <p className="text-gray-600">qstcng@gmail.com</p>
                <div className="w-full border-b border-dashed border-blue-200/60 mt-6 box-border"></div>
              </div>
            </div>

            {/* Office Block */}
            <div className="contact-info-block flex gap-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-blue-600 bg-blue-50 text-blue-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#1E3A8A] text-lg mb-1">
                  Office Address
                </h4>
                <p className="text-gray-600">
                  28, Adegbola Street, By Railway crossing, Ikeja , Lagos
                </p>
                <div className="w-full border-b border-dashed border-blue-200/60 mt-6 box-border"></div>
              </div>
            </div>

            {/* Hours Block */}
            <div className="contact-info-block flex gap-5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-blue-600 bg-blue-50 text-blue-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#1E3A8A] text-lg mb-1">
                  Opening Hours
                </h4>
                <p className="text-gray-600">
                  Monday - Friday: 8:00am - 5:00pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
