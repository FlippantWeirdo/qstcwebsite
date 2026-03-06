"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 shadow-sm backdrop-blur-xl dark:bg-gray-950/80"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "flex items-center rounded-lg p-1.5 transition-all",
            !scrolled && "bg-white/95 shadow-sm",
          )}
        >
          <Image
            src="/logo.png"
            alt="QSTC Services Logo"
            width={180}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group/link relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-[#3B82F6]"
                      : scrolled
                        ? "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        : "text-gray-200 hover:text-white",
                  )}
                >
                  {link.label}
                  {/* Animated underline: always present for active, slides in on hover for others */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#3B82F6] transition-all duration-300 ease-out",
                      isActive
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0 group-hover/link:w-5 group-hover/link:opacity-100",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* <a
            href="tel:+2348000000000"
            className={cn(
              "group/phone flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-[#3B82F6]",
              scrolled
                ? "text-gray-600 dark:text-gray-300 dark:hover:text-[#3B82F6]"
                : "text-gray-200"
            )}
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover/phone:rotate-12 group-hover/phone:scale-110" />
            <span className="hidden xl:inline">Get in Touch</span>
          </a> */}
          <Button
            asChild
            className={cn(
              "group relative overflow-hidden rounded-lg bg-[#3B82F6] px-5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-xl hover:shadow-blue-500/30",
              scrolled ? "shadow-blue-500/20" : "shadow-black/20",
            )}
          >
            <Link href="/contact">
              <span className="relative z-10 flex items-center">
                Request a Consultation
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={
                scrolled ? "text-gray-700 dark:text-gray-300" : "text-white"
              }
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-80 bg-white p-0 dark:bg-gray-950"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            {/* Mobile Logo */}
            <div className="flex items-center gap-2.5 border-b border-gray-100 px-6 py-5 dark:border-white/10">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col px-4 py-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center rounded-lg px-4 py-3 text-[15px] font-medium transition-colors",
                      isActive
                        ? "bg-blue-50 text-[#3B82F6] dark:bg-blue-500/10"
                        : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5",
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="mt-auto border-t border-gray-100 px-6 py-6 dark:border-white/10">
              <Button
                asChild
                className="w-full rounded-lg bg-[#3B82F6] py-5 text-sm font-semibold text-white hover:bg-[#2563EB]"
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Request a Consultation
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
