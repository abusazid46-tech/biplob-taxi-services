"use client";

import { CalendarDays, MapPin, Navigation, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/lib/site-data";

export function InquiryForm() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `Hello Biplob Taxi Services, I want to book a taxi from ${pickup || "[Pickup]"} to ${destination || "[Destination]"} on ${date || "[Date]"}.`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submitInquiry} className="rounded-md border border-white/15 bg-white p-5 text-brand-dark shadow-lift sm:p-6">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-red">Quick inquiry</p>
      <h2 className="mt-2 text-2xl font-black">Book by WhatsApp</h2>
      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-bold">
          Pickup location
          <span className="relative">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input value={pickup} onChange={(event) => setPickup(event.target.value)} placeholder="Guwahati, Lakhimpur..." className="focus-ring w-full rounded-md border border-zinc-200 py-3 pl-10 pr-3 font-medium" />
          </span>
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Destination
          <span className="relative">
            <Navigation className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input value={destination} onChange={(event) => setDestination(event.target.value)} placeholder="Shillong, Kaziranga..." className="focus-ring w-full rounded-md border border-zinc-200 py-3 pl-10 pr-3 font-medium" />
          </span>
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Travel date
          <span className="relative">
            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="focus-ring w-full rounded-md border border-zinc-200 py-3 pl-10 pr-3 font-medium" />
          </span>
        </label>
      </div>
      <button type="submit" className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-red px-5 py-4 font-black text-white transition hover:bg-red-700">
        <Send size={18} />
        Generate WhatsApp Booking
      </button>
      <p className="mt-4 text-center text-xs leading-5 text-zinc-500">No login, no payment gateway. Direct business inquiry only.</p>
    </form>
  );
}
