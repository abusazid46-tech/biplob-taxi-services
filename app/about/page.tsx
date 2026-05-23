import type { Metadata } from "next";
import { Car, MapPinned, ShieldCheck, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { baseLocation } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Biplob Taxi Service, a reliable taxi service based in Sonapur, Lakhimpur, Assam serving Assam and Northeast India."
};

const values = [
  { icon: ShieldCheck, title: "Safety first", text: "Every journey is planned with route care, comfort and practical travel support." },
  { icon: Users, title: "Family friendly", text: "Suitable vehicle options for family tours, airport transfers and long-distance travel." },
  { icon: MapPinned, title: "Local knowledge", text: "Assam and Northeast routes handled by a team that understands regional travel needs." },
  { icon: Car, title: "Flexible fleet", text: "Sedans, SUVs, Innova, Ertiga and Tempo Traveller options for different group sizes." }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A trusted local taxi service for Assam and Northeast India."
        text={`Biplob Taxi Service is based in ${baseLocation}, providing professional cab booking for safe, reliable and affordable travel.`}
        icon={MapPinned}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionIntro
            eyebrow="Our approach"
            title="Direct communication, clean vehicles and dependable trip planning."
            text="Phase 1 of this website is focused on helping customers reach the business quickly by WhatsApp or phone. No login, dashboard, payment gateway or backend booking system is included."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <AnimatedSection key={value.title} className="rounded-md border border-zinc-200 bg-white p-6 shadow-sm">
                <value.icon className="text-brand-red" />
                <h2 className="mt-4 text-xl font-black text-brand-dark">{value.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{value.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
