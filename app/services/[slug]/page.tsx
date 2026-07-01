import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { CTA } from "@/components/ui/CTA";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { services, site } from "@/constants/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} Lawyers`,
    description: `${service.intro} ${service.description}`,
    openGraph: {
      title: `${service.title} Lawyers | ${site.name}`,
      description: service.intro
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <section className="border-b border-stonewarm-200">
        <div className="container-luxe grid gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-28">
          <div>
            <p className="eyebrow mb-7">Family law service</p>
            <h1 className="heading-display">{service.title}</h1>
          </div>
          <p className="body-large max-w-2xl">{service.intro}</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-luxe grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <ImageFrame
            src={service.image}
            alt={service.imageAlt}
            className="aspect-[4/5] lg:sticky lg:top-28"
          />
          <div>
            <SectionHeading
              eyebrow="Overview"
              title={`How we approach ${service.shortTitle.toLowerCase()}.`}
              description={service.description}
            />

            <div className="mt-16 grid gap-12">
              <section>
                <h2 className="font-heading text-4xl font-medium text-navy-950">
                  Common issues
                </h2>
                <div className="mt-8 grid gap-px bg-stonewarm-200 sm:grid-cols-2">
                  {service.commonIssues.map((issue) => (
                    <div key={issue} className="bg-stonewarm-50 p-6">
                      <p className="leading-7 text-stonewarm-800">{issue}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-heading text-4xl font-medium text-navy-950">
                  How we help
                </h2>
                <ul className="mt-8 grid gap-5">
                  {service.howWeHelp.map((item) => (
                    <li key={item} className="border-l border-gold-300 pl-5 leading-8 text-stonewarm-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Process"
            title="The work is structured so the next step is never vague."
          />
          <div className="mt-14">
            <Timeline items={service.process} />
          </div>
        </div>
      </section>

      <section className="section-y bg-stonewarm-100">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQs" title={`Questions about ${service.shortTitle.toLowerCase()}.`} />
          <Accordion items={service.faqs} />
        </div>
      </section>

      <section className="section-y">
        <div className="container-luxe grid gap-8 border-y border-stonewarm-200 py-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 className="mt-5 font-heading text-4xl font-medium text-navy-950">
              Speak with a family lawyer before decisions harden.
            </h2>
          </div>
          <ButtonLink href="/book-consultation">Book Consultation</ButtonLink>
        </div>
      </section>

      <CTA />
    </main>
  );
}
