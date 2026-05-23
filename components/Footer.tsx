import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { baseLocation, navItems, phone, services } from "@/lib/site-data";
import { BrandLogo } from "./BrandLogo";
import { WhatsAppLink } from "./WhatsAppLink";

export function Footer() {
  return (
    <footer className="bg-zinc-950 pb-24 pt-14 text-white sm:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.1fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo className="h-12 w-12 shrink-0" />
            <div>
              <p className="font-black">Biplob Taxi Services</p>
              <p className="text-sm text-white/60">Taxi service in Assam and Northeast India</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/66">
            Professional, trustworthy and affordable cab booking for airport pickup, outstation trips, Northeast tours, daily rental taxi and luxury taxi hiring.
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
            <a href={`tel:+91${phone}`} className="flex items-center gap-2 hover:text-white"><Phone size={16} /> {phone}</a>
            <WhatsAppLink className="flex items-center gap-2 hover:text-white" message="Hello Biplob Taxi Services, I want to book a taxi from [Pickup] to [Destination] on [Date]."><MessageCircle size={16} /> WhatsApp booking</WhatsAppLink>
            <p className="flex items-center gap-2"><MapPin size={16} /> {baseLocation}</p>
          </div>
        </div>
        <div>
          <h3 className="font-black">Pages</h3>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/68 hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black">Services</h3>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 6).map((item) => (
              <span key={item} className="text-sm text-white/68">{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm text-white/50 sm:px-6 lg:px-8">
        &copy; 2026 Biplob Taxi Services. Phase 1 lead-generation website.
      </div>
    </footer>
  );
}
