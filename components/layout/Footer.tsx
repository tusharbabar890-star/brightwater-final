import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { serviceLinks, site } from "@/constants/site";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" }
];

export function Footer() {
  return (
    <footer className="border-t border-stonewarm-200 bg-stonewarm-100">
      <div className="container-luxe grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label={`${site.name} home`}>
            <span className="block font-heading text-3xl font-semibold text-navy-950">
              Brightwater
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.24em] text-stonewarm-700">
              Family Law
            </span>
          </Link>
          <p className="mt-6 max-w-sm leading-8 text-stonewarm-700">
            Boutique family law advice for people who want clarity, dignity and a
            practical path through separation.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-950">
            Services
          </h2>
          <ul className="mt-5 grid gap-3">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link className="text-sm text-stonewarm-700 hover:text-navy-950" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-950">
            Contact
          </h2>
          <ul className="mt-5 grid gap-4 text-sm leading-6 text-stonewarm-700">
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 text-gold-700" />
              <a href={`tel:${site.phone.replace(/\D/g, "")}`}>{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 text-gold-700" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 text-gold-700" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-950">
            Firm
          </h2>
          <ul className="mt-5 grid gap-3">
            <li>
              <Link className="text-sm text-stonewarm-700 hover:text-navy-950" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-sm text-stonewarm-700 hover:text-navy-950" href="/contact">
                Contact
              </Link>
            </li>
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link className="text-sm text-stonewarm-700 hover:text-navy-950" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-stonewarm-200">
        <div className="container-luxe flex flex-col gap-3 py-6 text-xs text-stonewarm-700 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Brightwater Family Law. All rights reserved.</p>
          <p>Legal information on this website is general in nature.</p>
        </div>
      </div>
    </footer>
  );
}
