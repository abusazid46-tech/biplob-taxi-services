import { ArrowRight, BadgeCheck, Car, Clock, MapPinned, MessageCircle, PlaneLanding, Route, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { fleet, galleryImages, popularRoutes, testimonials, tourPackages } from "@/lib/site-data";

const features = [
  { icon: ShieldCheck, title: "Safe professional travel", text: "Experienced local drivers, careful route planning and reliable support before every trip." },
  { icon: Clock, title: "On-time pickup", text: "Airport, station, hotel and home pickups coordinated clearly over phone or WhatsApp." },
  { icon: Route, title: "Assam and Northeast coverage", text: "Inter-district rides, hill routes, tour circuits and outstation cab booking." },
  { icon: BadgeCheck, title: "Clear trip guidance", text: "Vehicle suggestions, route options and practical travel planning before confirmation." }
];

const serviceCards = [
  { icon: Car, title: "One-way and round-trip taxi", text: "Flexible cab booking for city-to-city, district and interstate travel." },
  { icon: PlaneLanding, title: "Airport pickup/drop", text: "Guwahati airport taxi coordination for families, guests and business travelers." },
  { icon: Sparkles, title: "Luxury taxi hiring", text: "Comfort-focused vehicles for premium travel, events and special trips." }
];

export default function Home() {
  return (
    <>
      <section className="assam-hero min-h-[92vh] pt-24 text-white">
        <div className="mx-auto grid min-h-[calc(92vh-6rem)] w-full max-w-7xl items-center gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <MapPinned size={16} />
              Based in Sonapur, Lakhimpur, Assam
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              Biplob Taxi Services
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
              Premium taxi service across Assam and Northeast India for airport pickup, outstation trips, tour packages and daily rentals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppLink
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-4 text-base font-bold text-white shadow-lift transition hover:bg-red-700 focus-ring"
                message="Hello Biplob Taxi Services, I want to book a taxi from [Pickup] to [Destination] on [Date]."
              >
                <MessageCircle size={20} />
                Book on WhatsApp
              </WhatsAppLink>
              <a
                href="tel:+919954092119"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white px-6 py-4 text-base font-bold text-brand-dark transition hover:bg-white/90 focus-ring"
              >
                Call 9954092119
              </a>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
              {["Airport", "Outstation", "Tours"].map((item) => (
                <div key={item} className="rounded-md border border-white/15 bg-white/10 p-3 text-sm font-semibold backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <InquiryForm />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">Popular routes</p>
              <h2 className="mt-2 text-3xl font-black text-brand-dark sm:text-4xl">Ready routes across the region</h2>
            </div>
            <WhatsAppLink className="inline-flex items-center gap-2 font-bold text-brand-red" message="Hello Biplob Taxi Services, please share taxi fare and availability for a popular Assam/Northeast route.">
              Ask fare now <ArrowRight size={18} />
            </WhatsAppLink>
          </AnimatedSection>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {popularRoutes.map((route) => (
              <AnimatedSection key={route} className="rounded-md border border-zinc-200 bg-zinc-50 p-5 transition hover:border-brand-red hover:bg-white hover:shadow-lift">
                <p className="text-lg font-extrabold text-brand-dark">{route}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">Book one-way, return or custom tour taxi.</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <AnimatedSection>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">Why choose us</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">A local taxi partner built for long-distance Northeast travel.</h2>
              <p className="mt-4 text-white/70">Biplob Taxi Services focuses on trustworthy communication, clean vehicles and practical route support for families, tourists and business travelers.</p>
            </AnimatedSection>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <AnimatedSection key={feature.title} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
                  <feature.icon className="text-red-300" />
                  <h3 className="mt-4 text-lg font-extrabold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">{feature.text}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">Fleet showcase</p>
            <h2 className="mt-2 text-3xl font-black text-brand-dark sm:text-4xl">Vehicles for every trip size</h2>
          </AnimatedSection>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fleet.map((vehicle) => (
              <AnimatedSection key={vehicle.name} className="rounded-md border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-lift">
                <div className="flex h-44 items-end rounded-md bg-zinc-950 p-5 text-white mountain-panel">
                  <h3 className="text-2xl font-black">{vehicle.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-600">{vehicle.description}</p>
                <WhatsAppLink className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-red" message={`Hello Biplob Taxi Services, I want to book a ${vehicle.name} taxi from [Pickup] to [Destination] on [Date].`}>
                  Check availability <ArrowRight size={16} />
                </WhatsAppLink>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="tea-banner py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-200">Northeast travel</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Plan Assam, Meghalaya, Arunachal and beyond with one trusted taxi team.</h2>
            <p className="mt-4 max-w-2xl text-white/78">From Kaziranga and Majuli to Shillong routes and Arunachal travel, get reliable route support and vehicle options before you begin.</p>
          </AnimatedSection>
          <AnimatedSection className="rounded-md border border-white/15 bg-white/10 p-6 backdrop-blur">
            <h3 className="text-xl font-black">Tour package highlights</h3>
            <div className="mt-5 space-y-3">
              {tourPackages.slice(0, 4).map((tour) => (
                <div key={tour.title} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <span className="font-semibold">{tour.title}</span>
                  <span className="text-sm text-white/70">{tour.duration}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">Services</p>
            <h2 className="mt-2 text-3xl font-black text-brand-dark sm:text-4xl">Simple booking for everyday and special travel</h2>
          </AnimatedSection>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {serviceCards.map((service) => (
              <AnimatedSection key={service.title} className="rounded-md bg-brand-soft p-6">
                <service.icon className="text-brand-red" />
                <h3 className="mt-4 text-xl font-black text-brand-dark">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{service.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">Gallery</p>
            <h2 className="mt-2 text-3xl font-black text-brand-dark sm:text-4xl">Assam and Northeast journeys</h2>
          </AnimatedSection>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <AnimatedSection key={image.title} className="group h-64 overflow-hidden rounded-md bg-zinc-900">
                <div className="h-full bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.55)), url(${image.url})` }}>
                  <div className="flex h-full items-end p-4">
                    <p className="font-bold text-white">{image.title}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">Testimonials</p>
            <h2 className="mt-2 text-3xl font-black text-brand-dark sm:text-4xl">Trusted for safe, reliable rides</h2>
          </AnimatedSection>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <AnimatedSection key={item.name} className="rounded-md border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="flex gap-1 text-brand-red">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-600">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 font-black text-brand-dark">{item.name}</p>
                <p className="text-sm text-zinc-500">{item.trip}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <PageHero
        eyebrow="Book directly"
        title="Send your pickup, destination and date on WhatsApp."
        text="Get a fast response for vehicle availability, route guidance and taxi fare details."
        ctaLabel="Book on WhatsApp"
        ctaMessage="Hello Biplob Taxi Services, I want to book a taxi from [Pickup] to [Destination] on [Date]."
        icon={Users}
      />
    </>
  );
}
