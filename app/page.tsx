import { Award, Handshake, Landmark, Scale, ShieldCheck } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { CTA } from "@/components/ui/CTA";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StatCard } from "@/components/ui/StatCard";
import { TeamCard } from "@/components/ui/TeamCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Timeline } from "@/components/ui/Timeline";
import { homeFaqs, images, services, site, team, testimonials } from "@/constants/site";


const process = [
  {
    title: "Consultation",
    description: "We listen carefully, identify the legal issues and clarify what needs attention first."
  },
  {
    title: "Strategy",
    description: "You receive a practical plan for negotiation, mediation, documents or court steps."
  },
  {
    title: "Representation",
    description: "We communicate clearly, prepare thoroughly and keep the matter moving with purpose."
  },
  {
    title: "Resolution",
    description: "Agreements are documented properly so you can move forward with confidence."
  }
];

const reasons = [
  {
    title: "Experienced",
    text: "Senior family law guidance across parenting, property, mediation and divorce matters.",
    icon: Award
  },
  {
    title: "Compassionate",
    text: "A calm process that recognises the emotional weight behind every legal decision.",
    icon: Handshake
  },
  {
    title: "Transparent",
    text: "Clear advice about costs, timing, documents and the choices available to you.",
    icon: ShieldCheck
  },
  {
    title: "Outcome Focused",
    text: "Practical resolution is prioritised while preserving strength where firmer steps are needed.",
    icon: Scale
  }
];

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 25, 1 Spring Street",
      addressLocality: "Perth",
      addressRegion: "WA",
      postalCode: "6000",
      addressCountry: "AU"
    },
    areaServed: "Western Australia",
    legalName: site.name
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <section className="overflow-hidden border-b border-stonewarm-200">
          <div className="container-luxe grid min-h-[calc(100vh-5rem)] gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
            <div className="max-w-3xl">
              <p className="eyebrow mb-7">Boutique family lawyers in Perth</p>
              <h1 className="heading-display">
                Clear guidance for the next chapter of family life.
              </h1>
              <p className="body-large mt-8 max-w-2xl">
                Brightwater Family Law helps people resolve separation, parenting,
                property and mediation matters with calm advice, careful strategy and
                genuine respect for the people involved.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/book-consultation">Book Consultation</ButtonLink>
                <ButtonLink href="/services" tone="secondary">
                  Explore Services
                </ButtonLink>
              </div>
              <div className="mt-14 grid gap-6 sm:grid-cols-3">
                <StatCard value="Fixed" label="Fee options where scope is clear" />
                <StatCard value="Calm" label="Negotiation-first family law advice" />
                <StatCard value="Perth" label="Local guidance with modern delivery" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-10 hidden h-24 w-24 border border-gold-300 lg:block" />
              <ImageFrame
                src={images.hero}
                alt="A calm legal consultation in a bright professional office"
                className="aspect-[4/5] lg:ml-12"
                priority
              />
              <div className="absolute bottom-8 left-0 max-w-xs bg-stonewarm-50 p-6 shadow-quiet">
                <Landmark aria-hidden="true" className="h-5 w-5 text-gold-700" />
                <p className="mt-4 text-sm leading-7 text-stonewarm-700">
                  Court is not always the first answer. We help you understand every
                  constructive pathway before conflict sets the pace.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-luxe">
            <SectionHeading
              eyebrow="Why choose Brightwater"
              title="Law that feels measured, human and practical."
              description="Family law decisions carry consequence. Our role is to make the legal process clearer, reduce avoidable conflict and help you make informed choices at the right pace."
            />
            <div className="mt-14 grid gap-px bg-stonewarm-200 md:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason) => (
                <article key={reason.title} className="bg-stonewarm-50 p-7">
                  <reason.icon aria-hidden="true" className="h-6 w-6 text-gold-700" />
                  <h3 className="mt-10 font-heading text-3xl font-medium text-navy-950">
                    {reason.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stonewarm-700">{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-stonewarm-100">
          <div className="container-luxe">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <SectionHeading
                eyebrow="Practice areas"
                title="Support for the legal issues that follow separation."
              />
              <p className="max-w-2xl leading-8 text-stonewarm-700 lg:justify-self-end">
                From first advice to formal agreements, each service is designed to
                restore clarity and help families move through change without losing
                sight of what matters.
              </p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-luxe grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Meet the team"
              title="Senior guidance with a steady first point of contact."
              description="Clients are supported by people who understand both the legal process and the emotional reality of family change."
            />
            <div className="grid gap-10 md:grid-cols-2">
              {team.map((person) => (
                <TeamCard key={person.name} {...person} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-white">
          <div className="container-luxe">
            <SectionHeading
              eyebrow="Our process"
              title="A clear path from uncertainty to resolution."
              description="Every matter is different, but the experience should still feel organised. We keep the work structured so you always know what is happening next."
            />
            <div className="mt-14">
              <Timeline items={process} />
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-luxe">
            <SectionHeading
              eyebrow="Client reflections"
              title="Professional advice, delivered with composure."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.quote} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-stonewarm-100">
          <div className="container-luxe grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Common questions"
              title="The first answers people usually need."
            />
            <Accordion items={homeFaqs} />
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}
