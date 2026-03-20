import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "QSTC Services Limited | ELV, Automation & System Integration",
    template: "%s | QSTC Services Limited",
  },
  description:
    "QSTC Services Limited delivers expert solutions in Extra Low Voltage (ELV) systems, Building Automation, Fire Safety and System Integration across Nigeria.",
  keywords: [
    "QSTC",
    "ELV",
    "Automation",
    "System Integration",
    "Fire Safety",
    "Building Automation",
    "Mechanical & Plumbing",
    "Electric Power Solutions",
    "IT Infrastructure",
    "Access Control",
    "QSTC Services Limited",
    "Nigeria",
  ],
  openGraph: {
    title: "QSTC Services Limited | ELV, Automation & System Integration",
    description:
      "QSTC Services Limited delivers expert solutions in Extra Low Voltage (ELV) systems, Building Automation, Fire Safety and System Integration across Nigeria.",
    type: "website",
    locale: "en_NG",
    siteName: "QSTC Services Limited",
    images: [
      {
        url: "/qstc-logo.png",
        width: 1200,
        height: 630,
        alt: "QSTC Services Limited",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
