import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFaqs, site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Brightwater Family Law in Perth to book a family law consultation or ask about divorce, parenting, property settlement and mediation support."
};

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-stonewarm-200">
        <div className="container-luxe grid gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-28">
          <div>
            <p className="eyebrow mb-7">Contact</p>
            <h1 className="heading-display">Speak with us before the process feels larger than you.</h1>
          </div>
          <p className="body-large max-w-2xl">
            Book a confidential consultation or send an enquiry. We will help you
            understand what information is needed and what the next step should be.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="grid content-start gap-5">
            {[
              { icon: Phone, label: "Call", value: site.phone, href: `tel:${site.phone.replace(/\D/g, "")}` },
              { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
              { icon: Clock, label: "Office hours", value: site.hours },
              { icon: MapPin, label: "Visit", value: site.address }
            ].map((item) => (
              <div key={item.label} className="subtle-border bg-white p-6">
                <item.icon aria-hidden="true" className="h-5 w-5 text-gold-700" />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-stonewarm-700">
                  {item.label}
                </p>
                {item.href ? (
                  <a className="mt-2 block font-heading text-2xl text-navy-950" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 font-heading text-2xl text-navy-950">{item.value}</p>
                )}
              </div>
            ))}
          </aside>

          <div className="grid gap-12">
            <section className="subtle-border bg-stonewarm-50 p-6 sm:p-8">
              <SectionHeading
                eyebrow="Booking form"
                title="Tell us how we can help."
                description="This form is prepared for a future Google Sheets integration through the submitAppointment abstraction."
              />
              <div className="mt-8">
                <AppointmentForm />
              </div>
            </section>

            <section>
              <div className="grid min-h-80 place-items-center border border-stonewarm-300 bg-stonewarm-100 p-8 text-center">
                <div>
                  <MapPin aria-hidden="true" className="mx-auto h-7 w-7 text-gold-700" />
                  <h2 className="mt-5 font-heading text-3xl font-medium text-navy-950">
                    Google Map Placeholder
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-stonewarm-700">
                    Replace this panel with an embedded map once the office listing and
                    privacy preferences are confirmed.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="section-y bg-stonewarm-100">
        <div className="container-luxe grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQs" title="Before you contact us." />
          <Accordion items={homeFaqs} />
        </div>
      </section>
    </main>
  );
}
