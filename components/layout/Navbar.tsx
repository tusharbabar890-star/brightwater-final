"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { navigation, serviceLinks, site } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const allLinks = [...navigation, ...serviceLinks];

  return (
    <header className="sticky top-0 z-50 border-b border-stonewarm-200 bg-stonewarm-50/95 backdrop-blur">
      <div className="container-luxe flex min-h-16 items-center justify-between gap-4 sm:min-h-20 sm:gap-6">
        <Link href="/" aria-label={`${site.name} home`} className="group">
          <span className="block font-heading text-xl font-semibold leading-none text-navy-950 sm:text-2xl">
            Brightwater
          </span>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-stonewarm-700 sm:text-[11px]">
            Family Law
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold text-stonewarm-800 transition hover:text-navy-950",
                pathname === item.href && "text-navy-950"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phone.replace(/\D/g, "")}`}
            className="text-sm font-semibold text-stonewarm-800 hover:text-navy-950"
          >
            {site.phone}
          </a>
          <ButtonLink href="/book-consultation" showArrow={false}>
            Book Consultation
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center border border-stonewarm-300 text-navy-950 sm:h-11 sm:w-11 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-stonewarm-200 bg-stonewarm-50 lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="container-luxe grid gap-1 py-3 sm:py-5"
          >
            {allLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-stonewarm-200 py-3 text-sm font-semibold text-navy-950 sm:py-4 sm:text-base"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href="/book-consultation"
              className="mt-3 w-full sm:mt-5"
              onClick={() => setOpen(false)}
              showArrow={false}
            >
              Book Consultation
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
