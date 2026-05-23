import type { AnchorHTMLAttributes, ReactNode } from "react";
import { whatsappUrl } from "@/lib/site-data";

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  message: string;
};

export function WhatsAppLink({ children, message, ...props }: WhatsAppLinkProps) {
  return (
    <a href={whatsappUrl(message)} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}
