import { AnimatedSection } from "./AnimatedSection";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionIntro({ eyebrow, title, text }: SectionIntroProps) {
  return (
    <AnimatedSection className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-black text-brand-dark sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-zinc-600">{text}</p> : null}
    </AnimatedSection>
  );
}
