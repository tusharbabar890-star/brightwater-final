import type { Metadata } from "next";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, site } from "@/constants/site";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a confidential consultation with Brightwater Family Law for divorce, parenting, property settlement, child custody, mediation or family law advice."
};

export default function BookConsultationPage() {
  return (
    <main>
      <section className="border-b border-stonewarm-200">
        <div className="container-luxe grid gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-28">
          <div>
            <p className="eyebrow mb-7">Book consultation</p>
            <h1 className="heading-display">Start with a confidential conversation.</h1>
          </div>
          <p className="body-large max-w-2xl">
            Share a few details and our team will respond with the next available
            consultation options. For urgent safety concerns, call emergency services
            first.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-luxe grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <ImageFrame
              src={images.mediation}
              alt="A private family law consultation room prepared for a meeting"
              className="aspect-[4/5] lg:sticky lg:top-28"
            />
          </div>
          <div className="subtle-border bg-stonewarm-50 p-6 sm:p-8">
            <SectionHeading
              eyebrow={site.name}
              title="Appointment request"
              description="The form is intentionally front-end only for now. The submitAppointment function in lib/appointments.ts is the integration point for Google Sheets."
            />
            <div className="mt-8">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
