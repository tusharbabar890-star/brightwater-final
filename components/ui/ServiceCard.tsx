import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group grid min-h-[280px] content-between subtle-border bg-stonewarm-50 p-7 transition duration-300 ease-calm hover:-translate-y-1 hover:bg-white hover:shadow-quiet"
    >
      <div>
        <div className="mb-8 flex items-center justify-between gap-6">
          <p className="eyebrow">Practice area</p>
          <ArrowUpRight
            aria-hidden="true"
            className="h-5 w-5 text-gold-700 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
        <h3 className="font-heading text-3xl font-medium leading-tight text-navy-950">
          {service.title}
        </h3>
      </div>
      <p className="mt-10 text-sm leading-7 text-stonewarm-700">{service.intro}</p>
    </Link>
  );
}
