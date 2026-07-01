import { ButtonLink } from "@/components/ui/Button";

type CTAProps = {
  title?: string;
  description?: string;
};

export function CTA({
  title = "Begin with a calm, confidential conversation.",
  description = "Book a consultation with Brightwater Family Law and leave with a clearer view of your options, timing and next steps."
}: CTAProps) {
  return (
    <section className="bg-navy-950 text-stonewarm-50">
      <div className="container-luxe grid gap-8 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold-300">Book consultation</p>
          <h2 className="mt-5 font-heading text-4xl font-medium leading-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-stonewarm-200">{description}</p>
        </div>
        <ButtonLink
          href="/book-consultation"
          className="border-gold-300 bg-gold-300 text-navy-950 hover:bg-stonewarm-50"
        >
          Book Consultation
        </ButtonLink>
      </div>
    </section>
  );
}
