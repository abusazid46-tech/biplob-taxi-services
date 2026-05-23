export const phone = "9954092119";
export const whatsappNumber = "919954092119";
export const baseLocation = "Sonapur, Lakhimpur, Assam";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Tours", href: "/tour-packages" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  "Inter-district taxi service",
  "Assam to Northeast travel",
  "Airport pickup/drop",
  "One-way taxi",
  "Round-trip taxi",
  "Tour packages",
  "Outstation cab booking",
  "Daily rental taxi",
  "Luxury taxi hiring"
];

export const popularRoutes = [
  "Guwahati ↔ Shillong",
  "Guwahati ↔ Kaziranga",
  "Jorhat ↔ Dibrugarh",
  "Guwahati ↔ Arunachal Pradesh",
  "Assam ↔ Northeast India"
];

export const fleet = [
  { name: "Innova", image: "/fleet/innova.avif", description: "Comfortable premium family taxi for long-distance Assam and Northeast trips." },
  { name: "Ertiga", image: "/fleet/ertiga.avif", description: "Practical multi-seat cab for family travel, airport pickup and round trips." },
  { name: "Dzire", image: "/fleet/dzire.avif", description: "Efficient sedan for inter-district rides, one-way taxi and daily travel." },
  { name: "SUV", image: "/fleet/suv.webp", description: "Confident option for hilly routes, luggage-heavy trips and long outstation routes." },
  { name: "Sedan", image: "/fleet/sedan.jpg", description: "Clean, comfortable city and highway taxi for business and personal travel." },
  { name: "Tempo Traveller", image: "/fleet/tempo-traveller.png", description: "Group travel vehicle for tours, weddings, events and Northeast packages." }
];

export const tourPackages = [
  { title: "Kaziranga Wildlife Trip", duration: "1-2 days", text: "Taxi package support for Kaziranga National Park routes and nearby stays." },
  { title: "Shillong and Cherrapunji", duration: "2-4 days", text: "Scenic Meghalaya route planning from Assam with local taxi coordination." },
  { title: "Majuli Island Route", duration: "1-2 days", text: "Assam cultural route support with ferry-aware pickup and drop planning." },
  { title: "Arunachal Pradesh Travel", duration: "Custom", text: "Outstation taxi support for Northeast hill routes and permit-aware planning." },
  { title: "Guwahati Airport Connect", duration: "Same day", text: "Airport pickup/drop for families, guests, corporate travel and onward tours." },
  { title: "Assam Tea Garden Tour", duration: "Custom", text: "Comfortable cab plans for tea estates, towns and scenic Assam travel." }
];

export const testimonials = [
  { name: "Ankit Sharma", trip: "Guwahati to Shillong", quote: "Clean vehicle, polite driver and clear communication before pickup. The WhatsApp booking was simple." },
  { name: "Priyanka Dutta", trip: "Kaziranga family trip", quote: "Reliable service for our family tour. Timing and route guidance were handled very professionally." },
  { name: "Rohit Gogoi", trip: "Airport pickup", quote: "Booked for Guwahati airport pickup and the driver arrived on time. Good experience overall." }
];

export const galleryImages = [
  {
    title: "Tea garden routes",
    url: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Northeast hills",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Long-distance taxi travel",
    url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Airport and city pickup",
    url: "https://images.unsplash.com/photo-1564419434663-c4996736381b?auto=format&fit=crop&w=900&q=80"
  }
];

export const faqs = [
  {
    question: "How do I book a taxi with Biplob Taxi Services?",
    answer: "Tap Book on WhatsApp, share your pickup, destination and date, and the team will confirm availability and trip details."
  },
  {
    question: "Do you provide taxi service outside Assam?",
    answer: "Yes. Biplob Taxi Services operates across Assam and Northeast India, including Meghalaya and Arunachal routes."
  },
  {
    question: "Can I book airport pickup or drop?",
    answer: "Yes. Guwahati airport taxi pickup/drop can be booked directly by phone or WhatsApp."
  },
  {
    question: "Are one-way and round-trip taxis available?",
    answer: "Yes. One-way, round-trip, outstation cab booking and daily rental taxi options are available."
  }
];

export function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
