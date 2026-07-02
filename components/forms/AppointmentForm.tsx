"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/forms/Input";
import { Textarea } from "@/components/forms/Textarea";
import { serviceLinks } from "@/constants/site";
import { submitAppointment } from "@/lib/appointments";
import type { AppointmentPayload } from "@/types";

export function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload: AppointmentPayload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      preferredDate: String(formData.get("preferredDate") || ""),
      preferredTime: String(formData.get("preferredTime") || ""),
      serviceRequired: String(formData.get("serviceRequired") || ""),
      message: String(formData.get("message") || ""),
      consent: formData.get("consent") === "on"
    };

    setStatus("submitting");
    await submitAppointment(payload);
    setStatus("success");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid min-w-0 gap-5" aria-label="Book consultation form">
      <div className="grid min-w-0 gap-5 md:grid-cols-2">
        <Input label="Name" name="name" autoComplete="name" required />
        <Input label="Email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="grid min-w-0 gap-5 md:grid-cols-2">
        <Input label="Phone" name="phone" type="tel" autoComplete="tel" required />
        <Input label="Preferred Date" name="preferredDate" type="date" required />
      </div>
      <div className="grid min-w-0 gap-5 md:grid-cols-2">
        <Input label="Preferred Time" name="preferredTime" type="time" required />
        <label
          className="grid min-w-0 gap-2 text-sm font-semibold text-navy-950"
          htmlFor="serviceRequired"
        >
          Service Required
          <select
            id="serviceRequired"
            name="serviceRequired"
            required
            defaultValue=""
            className="min-h-12 w-full min-w-0 border border-stonewarm-300 bg-white px-4 text-base font-normal text-navy-950"
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceLinks.map((service) => (
              <option key={service.href} value={service.label}>
                {service.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Textarea
        label="Message"
        name="message"
        placeholder="Briefly tell us what you would like help with."
      />
      <label className="flex min-w-0 gap-3 text-sm leading-6 text-stonewarm-700">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 border-stonewarm-300 text-navy-950"
        />
        <span className="min-w-0">
          I consent to Brightwater Family Law contacting me about my enquiry and understand
          that submitting this form does not create a lawyer-client relationship.
        </span>
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
        </Button>
        {status === "success" ? (
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-sage-700">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
            Thank you. Your enquiry has been recorded.
          </p>
        ) : null}
      </div>
    </form>
  );
}
