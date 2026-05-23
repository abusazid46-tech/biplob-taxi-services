import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, MessageCircle } from "lucide-react";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Taxi services in Assam including airport pickup, one-way taxi, round-trip taxi, outstation cab booking, tour packages and luxury taxi hiring."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Cab booking for airport, outstation, tours and rentals."
        text="Choose Biplob Taxi Services for dependable Assam taxi booking and Northeast taxi service with WhatsApp-first confirmation."
        icon={MessageCircle}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="What we offer" title="Complete taxi services for regional travel" text="Send your pickup, destination and date to receive practical vehicle and fare guidance." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="rounded-md border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-brand-red hover:shadow-lift">
                <BadgeCheck className="text-brand-red" />
                <h2 className="mt-4 text-xl font-black text-brand-dark">{service}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">Available through direct phone and WhatsApp booking for Assam and Northeast India routes.</p>
                <WhatsAppLink className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-red" message={`Hello Biplob Taxi Services, I need ${service} from [Pickup] to [Destination] on [Date].`}>
                  Enquire now <ArrowRight size={16} />
                </WhatsAppLink>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}
