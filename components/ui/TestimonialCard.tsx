import { Quote } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  detail: string;
};

export function TestimonialCard({ quote, name, detail }: TestimonialCardProps) {
  return (
    <figure className="subtle-border bg-white p-7">
      <Quote aria-hidden="true" className="h-6 w-6 text-gold-500" />
      <blockquote className="mt-8 font-heading text-2xl leading-snug text-navy-950">
        “{quote}”
      </blockquote>
      <figcaption className="mt-8 border-t border-stonewarm-200 pt-5">
        <p className="font-semibold text-navy-950">{name}</p>
        <p className="mt-1 text-sm text-stonewarm-700">{detail}</p>
      </figcaption>
    </figure>
  );
}
