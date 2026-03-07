import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <ContactHero />
      <ContactForm />
    </main>
  );
}
