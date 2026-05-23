import type { LucideIcon } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { WhatsAppLink } from "./WhatsAppLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  ctaLabel?: string;
  ctaMessage?: string;
  icon?: LucideIcon;
};

export function PageHero({ eyebrow, title, text, ctaLabel = "Book on WhatsApp", ctaMessage = "Hello Biplob Taxi Service, I want to book a taxi from [Pickup] to [Destination] on [Date].", icon: Icon = MessageCircle }: PageHeroProps) {
  return (
    <section className="bg-zinc-950 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_0.55fr] lg:px-8">
        <AnimatedSection>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{text}</p>
        </AnimatedSection>
        <AnimatedSection className="rounded-md border border-white/10 bg-white/[0.04] p-6">
          <Icon className="text-red-300" size={34} />
          <p className="mt-4 text-lg font-black">Direct booking support</p>
          <p className="mt-2 text-sm leading-6 text-white/64">Call or WhatsApp 9954092119 for quick fare and vehicle availability.</p>
          <WhatsAppLink className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-3 font-bold text-white hover:bg-red-700 focus-ring" message={ctaMessage}>
            <MessageCircle size={18} />
            {ctaLabel}
          </WhatsAppLink>
        </AnimatedSection>
      </div>
    </section>
  );
}
