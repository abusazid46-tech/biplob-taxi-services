import type { Metadata } from "next";
import { CarFront, Users } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { fleet } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Fleet and Vehicles",
  description: "Explore taxi fleet options including Innova, Ertiga, Dzire, SUV, Sedan and Tempo Traveller for Assam and Northeast India travel."
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet"
        title="Vehicle options for solo, family and group travel."
        text="Book sedans, SUVs, Innova, Ertiga, Dzire and Tempo Traveller options for Assam and Northeast routes."
        icon={CarFront}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow="Vehicles" title="Choose the right cab for your route" text="Vehicle assignment depends on availability, route, passenger count and luggage needs." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fleet.map((vehicle) => (
              <article key={vehicle.name} className="overflow-hidden rounded-md border border-zinc-200 bg-white shadow-sm">
                <div className="relative h-56 bg-white">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} taxi available for Assam and Northeast travel`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-4"
                    priority={vehicle.name === "Innova"}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl font-black text-brand-dark">{vehicle.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{vehicle.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-zinc-500"><Users size={16} /> Ask seating</span>
                    <WhatsAppLink className="rounded-md bg-brand-red px-4 py-2 text-sm font-bold text-white" message={`Hello Biplob Taxi Services, is ${vehicle.name} available for [Pickup] to [Destination] on [Date]?`}>
                      Book
                    </WhatsAppLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
