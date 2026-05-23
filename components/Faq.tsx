import { faqs } from "@/lib/site-data";
import { AnimatedSection } from "./AnimatedSection";
import { SectionIntro } from "./SectionIntro";

export function Faq() {
  return (
    <section className="bg-zinc-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="FAQ" title="Common booking questions" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <AnimatedSection key={faq.question} className="rounded-md border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-black text-brand-dark">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{faq.answer}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
