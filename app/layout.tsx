import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyCtas } from "@/components/StickyCtas";

export const metadata: Metadata = {
  metadataBase: new URL("https://biplobtaxi.example.com"),
  title: {
    default: "Biplob Taxi Services | Taxi Service in Assam and Northeast India",
    template: "%s | Biplob Taxi Services"
  },
  description:
    "Book safe, reliable and affordable taxi service in Assam and Northeast India. WhatsApp Biplob Taxi Services for airport pickup, outstation cabs, tours, rentals and luxury taxi hiring.",
  keywords: [
    "Taxi service in Assam",
    "Cab booking Assam",
    "Northeast taxi service",
    "Guwahati airport taxi",
    "Shillong taxi booking",
    "Biplob Taxi Services",
    "Sonapur Lakhimpur taxi"
  ],
  openGraph: {
    title: "Biplob Taxi Services",
    description:
      "Professional taxi booking across Assam and Northeast India with WhatsApp booking.",
    type: "website",
    locale: "en_IN"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCtas />
      </body>
    </html>
  );
}
