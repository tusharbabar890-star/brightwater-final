import { NextRequest, NextResponse } from "next/server";
import { appendAppointmentRow } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    await appendAppointmentRow([
      new Date().toISOString(),
      payload.name,
      payload.email,
      payload.phone,
      payload.preferredDate,
      payload.message,
      // match order to your AppointmentPayload fields
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Sheet append failed:", err);
    return NextResponse.json(
      { success: false, error: "Failed to save appointment." },
      { status: 500 }
    );
  }
}