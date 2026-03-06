import Image from "next/image";
import { Handshake } from "lucide-react";

export function Legacy() {
  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden">
      {/* Inline styles for local float animation to avoid Tailwind v4 config complexity */}
      <style>{`
        @keyframes float-independent {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-card {
          animation: float-independent 6s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center max-w-xl">
            <span className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#3B82F6]">
              Our Legacy
            </span>

            <h2 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Strong in <span className="text-slate-800">EXPERIENCE,</span>
              <br />
              Stronger in <span className="text-slate-800">PARTNERSHIP!</span>
            </h2>

            <p className="mb-12 text-base leading-relaxed text-slate-600 md:text-lg">
              With decades of combined expertise, QSTC Services Limited stands
              at the forefront of technical innovation. We don&apos;t just
              provide services; we build long-term relationships based on trust,
              precision, and a shared vision for excellence.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="block mb-1 text-3xl font-extrabold text-[#3B82F6] md:text-4xl">
                  150+
                </span>
                <span className="text-sm font-medium text-slate-500">
                  Projects Completed
                </span>
              </div>
              <div>
                <span className="block mb-1 text-3xl font-extrabold text-[#3B82F6] md:text-4xl">
                  20+
                </span>
                <span className="text-sm font-medium text-slate-500">
                  Industry Awards
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Overlapping Cards */}
          <div className="relative h-[600px] w-full lg:h-[700px] flex items-center justify-center">
            {/* 1. Left Middle Image (Laptop) */}
            <div
              className="absolute left-0 top-1/4 z-20 w-[55%] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl animate-float-card"
              style={{ animationDelay: "0s" }}
            >
              <div className="absolute inset-0 bg-slate-200" />
              <Image
                src="/images/legacy/laptop.png"
                alt="Professional desk setup"
                fill
                className="object-cover"
              />
            </div>

            {/* 2. Top Right Image (Blueprints) */}
            <div
              className="absolute right-0 top-0 z-10 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-xl animate-float-card"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="absolute inset-0 bg-slate-200" />
              <Image
                src="/images/legacy/blueprints.png"
                alt="Architectural blueprints"
                fill
                className="object-cover"
              />
            </div>

            {/* 3. Bottom Right Color Card */}
            <div
              className="absolute right-[5%] bottom-[10%] z-30 w-[50%] aspect-square rounded-2xl bg-[#3B82F6] p-6 text-white shadow-2xl shadow-blue-500/20 flex flex-col justify-end animate-float-card"
              style={{ animationDelay: "3s" }}
            >
              <Handshake className="h-10 w-10 mb-4 opacity-90" />
              <p className="text-lg font-bold leading-tight md:text-xl">
                Committed to your long-term success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
