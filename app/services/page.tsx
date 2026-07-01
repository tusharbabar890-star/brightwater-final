import type { Metadata } from "next";
import { CTA } from "@/components/ui/CTA";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { images, services, site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Family Law Services",
  description:
    "Explore Brightwater Family Law services across divorce, parenting arrangements, property settlement, child custody, mediation and general family law."
};

export default function ServicesPage() {
  return (
    <main>
      <section className="border-b border-stonewarm-200">
        <div className="container-luxe grid gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-28">
          <div>
            <p className="eyebrow mb-7">Services</p>
            <h1 className="heading-display">Family law advice for decisive, dignified resolution.</h1>
          </div>
          <p className="body-large max-w-2xl">
            {site.name} assists with the legal and practical questions that arise
            after separation, from first advice through to formal agreements and
            representation where needed.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <ImageFrame
            src={images.consultation}
            alt="A family law consultation at a bright meeting table"
            className="aspect-[4/5] lg:sticky lg:top-28"
          />
          <div>
            <SectionHeading
              eyebrow="Practice areas"
              title="Choose the support that matches where you are now."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
