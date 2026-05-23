import { MessageCircle, Phone } from "lucide-react";
import { phone } from "@/lib/site-data";
import { WhatsAppLink } from "./WhatsAppLink";

export function StickyCtas() {
  const message = "Hello Biplob Taxi Service, I want to book a taxi from [Pickup] to [Destination] on [Date].";

  return (
    <>
      <WhatsAppLink
        aria-label="Book on WhatsApp"
        className="fixed bottom-24 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 sm:bottom-6"
        message={message}
      >
        <MessageCircle size={26} />
      </WhatsAppLink>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-zinc-200 bg-white p-3 shadow-lift sm:hidden">
        <a href={`tel:+91${phone}`} className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-200 px-4 py-3 text-sm font-black text-brand-dark">
          <Phone size={18} />
          Call
        </a>
        <WhatsAppLink className="ml-3 inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-4 py-3 text-sm font-black text-white" message={message}>
          <MessageCircle size={18} />
          Book
        </WhatsAppLink>
      </div>
    </>
  );
}
