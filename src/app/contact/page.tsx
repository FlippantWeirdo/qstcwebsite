import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with QSTC Services Limited for inquiries about MEP, ELV systems, Building Automation, Fire Safety, and System Integration projects in Nigeria.",
  keywords: [
    "contact QSTC",
    "QSTC phone",
    "QSTC email",
    "MEP, ELV systems, Building Automation, Fire Safety, and System Integration projects in Nigeria contact",
  ],
  openGraph: {
    title: "Contact Us | QSTC Services Limited",
    description:
      "Get in touch with QSTC Services Limited for inquiries about MEP, ELV systems, Building Automation, Fire Safety, and System Integration projects in Nigeria.",
    url: "/contact",
  },
};
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <ContactHero />
      <ContactForm />
    </main>
  );
}
