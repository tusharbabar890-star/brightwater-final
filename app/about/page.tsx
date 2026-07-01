import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CTA } from "@/components/ui/CTA";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamCard } from "@/components/ui/TeamCard";
import { Timeline } from "@/components/ui/Timeline";
import { images, team, values } from "@/constants/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Brightwater Family Law, a boutique Perth family law firm focused on calm advice, practical strategy and dignified resolution."
};

const timeline = [
  {
    title: "Founded with purpose",
    description:
      "Brightwater was shaped around a simple belief: separation should not automatically become a prolonged fight."
  },
  {
    title: "Built around clarity",
    description:
      "The firm developed a process-led approach so clients understand timing, documents, costs and decisions."
  },
  {
    title: "Focused on resolution",
    description:
      "Negotiation and mediation remain central, supported by firm representation when stronger action is required."
  },
  {
    title: "Designed for families",
    description:
      "Every matter is handled with attention to the children, relationships, finances and future behind the legal file."
  }
];

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-stonewarm-200">
        <div className="container-luxe grid gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-28">
          <div>
            <p className="eyebrow mb-7">About the firm</p>
            <h1 className="heading-display">A boutique family law practice built for calmer resolution.</h1>
          </div>
          <p className="body-large max-w-2xl">
            Brightwater Family Law exists for people who want clear advice,
            respectful strategy and a practical way through one of life&apos;s most
            consequential transitions.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-luxe grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ImageFrame
            src={images.office}
            alt="A calm professional law office with warm natural light"
            className="aspect-[5/4]"
          />
          <div>
            <SectionHeading
              eyebrow="Firm story"
              title="Legal advice should reduce confusion, not add to it."
              description="The family law process can feel procedural, expensive and emotionally exhausting. Our practice is intentionally smaller and more personal, allowing us to give clients the attention, clarity and continuity they need."
            />
            <p className="mt-8 leading-8 text-stonewarm-700">
              We favour practical resolution, careful preparation and plain language.
              When matters can be resolved through negotiation or mediation, we help
              clients do that well. When court becomes necessary, we prepare with the
              same composure and precision.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            eyebrow="Mission and values"
            title="A legal process with fewer surprises and more dignity."
          />
          <div className="grid gap-px bg-stonewarm-200 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="flex gap-4 bg-white p-6">
                <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-gold-700" />
                <p className="leading-7 text-stonewarm-800">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-luxe">
          <SectionHeading eyebrow="Team" title="The people guiding your matter." />
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {team.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-stonewarm-100">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Why clients trust us"
            title="We keep the work grounded, organised and human."
          />
          <div className="mt-14">
            <Timeline items={timeline} />
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
