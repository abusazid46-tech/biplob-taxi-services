import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Faq } from "@/components/Faq";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { baseLocation, phone } from "@/lib/site-data";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Biplob Taxi Services by phone or WhatsApp for taxi booking in Assam and Northeast India."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call or WhatsApp for quick taxi booking support."
        text="Share pickup, destination and date to receive vehicle availability and fare guidance from Biplob Taxi Services."
        icon={Phone}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
          <div className="rounded-md bg-zinc-950 p-6 text-white sm:p-8">
            <h2 className="text-3xl font-black">Biplob Taxi Services</h2>
            <div className="mt-6 grid gap-4">
              <a href={`tel:+91${phone}`} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 font-bold hover:bg-white/10">
                <Phone className="text-red-300" />
                {phone}
              </a>
              <WhatsAppLink className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 font-bold hover:bg-white/10" message="Hello Biplob Taxi Services, I want to book a taxi from [Pickup] to [Destination] on [Date].">
                <MessageCircle className="text-red-300" />
                Book on WhatsApp
              </WhatsAppLink>
              <p className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 font-bold">
                <MapPin className="text-red-300" />
                {baseLocation}
              </p>
              <p className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 font-bold">
                <Mail className="text-red-300" />
                Direct phone and WhatsApp support
              </p>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-md border border-zinc-200 shadow-sm">
            <iframe
              title="Biplob Taxi Services location map"
              src="https://www.google.com/maps?q=Sonapur%2C%20Lakhimpur%2C%20Assam&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}
