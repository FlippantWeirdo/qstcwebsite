import Link from "next/link";
import Image from "next/image";
import { Download, Mail, Share2, Rss } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-16 text-slate-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col space-y-6">
            <Link
              href="/"
              className="inline-flex w-fit items-center rounded-lg bg-white/95 p-2.5 transition-transform hover:scale-105"
            >
              <Image
                src="/logov2.png"
                alt="QSTC Services Logo"
                width={180}
                height={45}
                className="object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Redefining systems integration through engineering excellence and
              unwavering commitment to client success.
            </p>
            <div className="flex gap-4">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 transition-colors hover:bg-slate-800 hover:text-white">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 transition-colors hover:bg-slate-800 hover:text-white">
                <Rss className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4 lg:pl-8">
            <h4 className="font-bold text-[#3B82F6]">Quick Links</h4>
            <nav className="flex flex-col space-y-3 text-sm text-slate-400">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <Link
                href="/solutions"
                className="transition-colors hover:text-white"
              >
                Solutions
              </Link>
              <Link
                href="/projects"
                className="transition-colors hover:text-white"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Column 3: Core Services */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-[#3B82F6]">Core Services</h4>
            <nav className="flex flex-col space-y-3 text-sm text-slate-400">
              <Link href="#" className="transition-colors hover:text-white">
                ELV Engineering
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                Security Design
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                Smart Automation
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                BMS Optimization
              </Link>
            </nav>
          </div>

          {/* Column 4: Resources */}
          <div className="flex flex-col space-y-4 lg:pl-8">
            <h4 className="font-bold text-[#3B82F6]">Resources</h4>
            <div className="flex flex-col space-y-6 mt-2">
              <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:border-slate-700">
                <Download className="h-4 w-4" />
                Company Profile PDF
              </button>
              <a
                href="mailto:contact@qstc.services"
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5 text-[#3B82F6]" />
                contact@qstc.services
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-xs text-slate-500 md:flex-row">
          <p>© 2026 QSTC SERVICES LIMITED. ALL RIGHTS RESERVED.</p>
          <div className="mr-4 mt-4 flex gap-6 md:mr-0 md:mt-0 uppercase tracking-widest font-semibold">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
