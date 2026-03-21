"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, Phone, ArrowRight, ChevronDown } from "lucide-react";
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
  {
    href: "/services",
    label: "Services",
    subItems: [
      {
        href: "/services/elvsystems",
        label: "ELV Systems",
      },
      {
        href: "/services/it-infrastructure",
        label: "IT Infrastructure",
      },
      {
        href: "/services/fire-safety",
        label: "Fire Detection & Firefighting",
      },
      {
        href: "/services/electric-power-solutions",
        label: "Power & Electrical",
      },
      {
        href: "/services/bms",
        label: "Building Management System",
      },
      {
        href: "/services/mechanical-plumbing",
        label: "Mechanical & Plumbing",
      },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Determine if the current page has a light background at the top (no dark hero image)
  const hasDarkHero =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/services/fire-safety" ||
    pathname === "/services/elvsystems" ||
    pathname === "/services/it-infrastructure" ||
    pathname === "/services/electric-power-solutions" ||
    pathname === "/services/bms" ||
    pathname === "/services/mechanical-plumbing" ||
    pathname === "/projects" ||
    pathname === "/contact" ||
    pathname === "/blog" ||
    pathname === "/solutions";

  const isLightTop = !scrolled && !hasDarkHero;

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
          ? "bg-white/80 shadow-sm backdrop-blur-lg dark:bg-gray-950/80"
          : "bg-transparent",
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between lg:px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center pt-2 rounded-lg pr-1 sm:pr-1.5 transition-all"
        >
          <Image
            src={
              scrolled || isLightTop
                ? "/logov2.png"
                : "/qstc-logo-white-text.png"
            }
            alt="QSTC Services Logo"
            width={220}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.subItems && pathname.startsWith(link.href));

            return (
              <li key={link.href} className="relative group/nav">
                <Link
                  href={link.subItems ? "#" : link.href}
                  onClick={(e) => link.subItems && e.preventDefault()}
                  className={cn(
                    "group/link relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-[#3B82F6]"
                      : scrolled || isLightTop
                        ? "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        : "text-gray-200 hover:text-white",
                  )}
                >
                  <span className="relative">
                    {link.label}
                    {/* Animated underline */}
                    <span
                      className={cn(
                        "absolute -bottom-2 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#3B82F6] transition-all duration-300 ease-out",
                        isActive
                          ? "w-5 opacity-100"
                          : "w-0 opacity-0 group-hover/link:w-5 group-hover/link:opacity-100",
                      )}
                    />
                  </span>
                  {link.subItems && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover/nav:rotate-180" />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {link.subItems && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 invisible translate-y-2 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-300 ease-out">
                    <div className="w-[320px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-4 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white dark:before:border-b-gray-900">
                      <div className="flex flex-col gap-1">
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={cn(
                              "block px-4 py-3 rounded-xl text-[14px] transition-colors leading-snug",
                              pathname === sub.href
                                ? "bg-blue-50 text-[#3B82F6] font-medium dark:bg-blue-500/10"
                                : "text-gray-700 hover:bg-blue-50 hover:text-[#3B82F6] dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-[#3B82F6]",
                            )}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
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
                scrolled || isLightTop
                  ? "text-gray-700 dark:text-gray-300"
                  : "text-white"
              }
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[85vw] max-w-sm overflow-y-auto bg-white p-0 dark:bg-gray-950"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            {/* Mobile Logo */}
            <div className="flex items-center gap-2.5 border-b border-gray-100 px-6 py-5 dark:border-white/10">
              <Image src="/logov2.png" alt="Logo" width={100} height={100} />
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.subItems && pathname.startsWith(link.href));

                return (
                  <div key={link.href} className="flex flex-col">
                    <Link
                      href={link.subItems ? "#" : link.href}
                      onClick={(e) => {
                        if (link.subItems) e.preventDefault();
                        else setMobileOpen(false);
                      }}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium transition-colors",
                        isActive
                          ? "bg-blue-50 text-[#3B82F6] dark:bg-blue-500/10"
                          : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/5",
                      )}
                    >
                      {link.label}
                      {isActive && !link.subItems && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                      )}
                    </Link>

                    {/* Mobile SubItems */}
                    {link.subItems && (
                      <div className="flex flex-col pl-8 pr-4 py-2 space-y-1">
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "block py-2 text-sm transition-colors",
                              pathname === sub.href
                                ? "text-[#3B82F6] font-medium"
                                : "text-gray-500 hover:text-[#3B82F6] dark:text-gray-400 dark:hover:text-[#3B82F6]",
                            )}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
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
