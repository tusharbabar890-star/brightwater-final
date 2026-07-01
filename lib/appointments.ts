import type { AppointmentPayload } from "@/types";

export async function submitAppointment(payload: AppointmentPayload) {
  const response = await fetch("/api/appointment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Unable to submit appointment request.");
  }

  return response.json() as Promise<{ ok: true }>;
}
