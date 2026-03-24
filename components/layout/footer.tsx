import Link from "next/link";
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { DownloadProfileSheet } from "@/components/DownloadProfileSheet";

export function Footer() {
  return (
    <footer className="bg-black py-16 text-slate-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="transition-transform hover:scale-110">
              <Image
                src="/qstc-logo-white.webp"
                alt="QSTC Services Logo"
                width={400}
                height={100}
                className="object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Redefining systems integration through engineering excellence and
              unwavering commitment to client success.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/p/QSTC-Services-Ltd-61559447984816/"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://ng.linkedin.com/company/qstc-services-limited"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/qstc_services?igsh=c2t4Z3JrcThraDJ4"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
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
                href="/about"
                className="transition-colors hover:text-white"
              >
                About Us
              </Link>
              <Link
                href="/projects"
                className="transition-colors hover:text-white"
              >
                Projects
              </Link>
              <Link href="/blog" className="transition-colors hover:text-white">
                Blog
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-[#3B82F6]">Services</h4>
            <nav className="flex flex-col space-y-3 text-sm text-slate-400">
              <Link
                href="/services/elvsystems"
                className="transition-colors hover:text-white"
              >
                ELV Systems
              </Link>
              <Link
                href="/services/fire-safety"
                className="transition-colors hover:text-white"
              >
                Fire Detection &amp; Firefighting
              </Link>
              <Link
                href="/services/it-infrastructure"
                className="transition-colors hover:text-white"
              >
                IT Infrastructure
              </Link>
              <Link
                href="/services/bms"
                className="transition-colors hover:text-white"
              >
                Building Management System
              </Link>
              <Link
                href="/services/electric-power-solutions"
                className="transition-colors hover:text-white"
              >
                Power and Electrical
              </Link>
              <Link
                href="/services/mechanical-plumbing"
                className="transition-colors hover:text-white"
              >
                Mechanical &amp; Plumbing
              </Link>
            </nav>
          </div>

          {/* Column 4: Resources */}
          <div className="flex flex-col space-y-4 lg:pl-8">
            <h4 className="font-bold text-[#3B82F6]">Resources</h4>
            <div className="flex flex-col space-y-6 mt-2">
              <DownloadProfileSheet>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:border-slate-700">
                  <Download className="h-4 w-4" />
                  Company Profile PDF
                </button>
              </DownloadProfileSheet>
              <a
                href="mailto:info@qstcng.com"
                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5 text-[#3B82F6]" />
                info@qstcng.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex items-center justify-center border-t border-slate-800 pt-8 text-xs text-slate-500">
          <p>© 2026 QSTC SERVICES LIMITED. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
