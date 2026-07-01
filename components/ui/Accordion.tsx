"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/types";
import { cn } from "@/lib/utils";

export function Accordion({ items }: { items: FAQ[] }) {
  const [openItem, setOpenItem] = useState(0);

  return (
    <div className="divide-y divide-stonewarm-200 border-y border-stonewarm-200">
      {items.map((item, index) => {
        const isOpen = openItem === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenItem(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-heading text-2xl font-medium text-navy-950">
                {item.question}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "h-5 w-5 shrink-0 text-gold-700 transition duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-all duration-300 ease-calm",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 leading-8 text-stonewarm-700">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
