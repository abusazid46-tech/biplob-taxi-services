import type { Metadata } from "next";
import { Compass, MapPinned } from "lucide-react";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { tourPackages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Tour Packages",
  description: "Tour taxi packages for Kaziranga, Shillong, Cherrapunji, Majuli, Arunachal Pradesh and Assam tea garden travel."
};

export default function TourPackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tour packages"
        title="Taxi tour planning for Assam and Northeast India."
        text="Plan scenic routes, family holidays and outstation travel with vehicle options and direct WhatsApp support."
        icon={Compass}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Popular tours" title="Start with a route, then customize your taxi plan" text="Packages are inquiry-based so the team can align vehicle, duration and pickup point with your exact travel needs." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tourPackages.map((tour) => (
              <article key={tour.title} className="rounded-md border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-brand-red hover:shadow-lift">
                <MapPinned className="text-brand-red" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">{tour.duration}</p>
                <h2 className="mt-2 text-2xl font-black text-brand-dark">{tour.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{tour.text}</p>
                <WhatsAppLink className="mt-5 inline-flex rounded-md bg-brand-red px-4 py-3 text-sm font-bold text-white" message={`Hello Biplob Taxi Services, I want to enquire about the ${tour.title} taxi package for [Date].`}>
                  Enquire on WhatsApp
                </WhatsAppLink>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}
