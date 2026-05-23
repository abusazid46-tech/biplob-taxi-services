"use client";

import { Menu, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, phone } from "@/lib/site-data";
import { BrandLogo } from "./BrandLogo";
import { WhatsAppLink } from "./WhatsAppLink";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-zinc-950/92 text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 focus-ring">
          <BrandLogo className="h-12 w-12 shrink-0" />
          <span>
            <span className="block text-base font-black leading-none">Biplob Taxi</span>
            <span className="mt-1 block text-xs font-semibold text-white/60">Assam & Northeast India</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition hover:bg-white/10 ${pathname === item.href ? "bg-white/10 text-white" : "text-white/72"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:+91${phone}`} className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-bold hover:bg-white/10 focus-ring">
            <Phone size={16} />
            {phone}
          </a>
          <WhatsAppLink
            className="inline-flex items-center gap-2 rounded-md bg-brand-red px-4 py-2 text-sm font-bold hover:bg-red-700 focus-ring"
            message="Hello Biplob Taxi Services, I want to book a taxi from [Pickup] to [Destination] on [Date]."
          >
            <MessageCircle size={16} />
            Book
          </WhatsAppLink>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          className="grid h-11 w-11 place-items-center rounded-md border border-white/15 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-zinc-950 px-4 pb-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-bold text-white/80 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
            <a href={`tel:+91${phone}`} className="rounded-md border border-white/15 px-4 py-3 text-center text-sm font-bold">
              Call Now
            </a>
            <WhatsAppLink className="rounded-md bg-brand-red px-4 py-3 text-center text-sm font-bold" message="Hello Biplob Taxi Services, I want to book a taxi from [Pickup] to [Destination] on [Date].">
              WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      )}
    </header>
  );
}
