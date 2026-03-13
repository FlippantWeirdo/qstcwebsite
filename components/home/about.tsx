import Image from "next/image";
import { BadgeCheck, Headset } from "lucide-react";

export function About() {
  return (
    <section className="relative w-full bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Image & Floating Badge */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-3xl lg:aspect-4/5 lg:mr-auto">
              {/* Fallback gray bg while image loads */}
              <div className="absolute inset-0 bg-gray-100" />
              <Image
                src="/images/IMG_9008.webp"
                alt="Modern corporate office interior"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Floating Stats Badge */}
            <div
              className="absolute -bottom-6 right-4 lg:-right-10 lg:-bottom-10 z-10"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              <style>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-20px); }
                }
              `}</style>
              <div className="flex aspect-square w-32 flex-col items-center justify-center rounded-2xl bg-[#3B82F6] p-4 text-center text-white shadow-xl shadow-blue-500/30 sm:w-40 sm:p-6 lg:w-48 lg:p-8">
                <span className="mb-1 text-3xl font-bold leading-none tracking-tight sm:text-4xl lg:text-5xl">
                  15+
                </span>
                <span className="text-[10px] font-semibold uppercase leading-tight tracking-wider sm:text-xs">
                  Years of
                  <br />
                  Technical
                  <br />
                  Innovation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center pt-10 lg:pt-0">
            <span className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#3B82F6]">
              About QSTC
            </span>

            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Expertise in Integrated Smart Technology
            </h2>

            <p className="mb-6 text-base leading-relaxed text-slate-600 md:text-lg">
              QSTC Services Limited is a leading provider of electrical services
              and an expert in electronic security and safety system
              integration. Our mission is to deliver personalized, technical,
              and professional solutions that enhance the value of our clients’
              businesses. Since our establishment in 2008, we have grown from a
              modest yet technically robust foundation into a trusted
              organization offering tailored solutions to individuals and
              businesses across Nigeria. Over the years, we have forged
              partnerships with some of the world’s leading system
              manufacturers. Our services include detailed analyses, equipment
              class comparisons, and comprehensive project cost assessments,
              enabling our clients to make informed decisions and select the
              best solutions at optimal costs
            </p>

            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-6 w-6 shrink-0 text-[#3B82F6]" />
                <span className="font-semibold text-slate-900">
                  Certified Engineering
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Headset className="h-6 w-6 shrink-0 text-[#3B82F6]" />
                <span className="font-semibold text-slate-900">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

