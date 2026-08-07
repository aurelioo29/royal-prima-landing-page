import { NextRequest, NextResponse } from "next/server";

import { createHisAppointment } from "@/lib/his/appointments";

type AppointmentRequestBody = {
  displayName?: unknown;

  displayPhone?: unknown;

  locationId?: unknown;

  doctorId?: unknown;

  estimatedVisitAt?: unknown;

  website?: unknown;
};

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as AppointmentRequestBody;

    const displayName = getString(body.displayName);

    const displayPhone = getString(body.displayPhone);

    const locationId = getString(body.locationId);

    const doctorId = getString(body.doctorId);

    const estimatedVisitAt = getString(body.estimatedVisitAt);

    /*
     * Honeypot sederhana untuk bot.
     */
    const website = getString(body.website);

    if (website) {
      return NextResponse.json(
        {
          message: "Invalid request.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      !displayName ||
      !displayPhone ||
      !locationId ||
      !doctorId ||
      !estimatedVisitAt
    ) {
      return NextResponse.json(
        {
          message: "Data appointment belum lengkap.",
        },
        {
          status: 422,
        },
      );
    }

    if (displayName.length < 2 || displayName.length > 100) {
      return NextResponse.json(
        {
          message: "Nama pasien tidak valid.",
        },
        {
          status: 422,
        },
      );
    }

    if (!/^[0-9+\-\s()]{8,20}$/.test(displayPhone)) {
      return NextResponse.json(
        {
          message: "Nomor telepon tidak valid.",
        },
        {
          status: 422,
        },
      );
    }

    /*
     * Format HIS:
     *
     * dd-mm-yyyy hh:mm:ss
     */
    if (!/^\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}$/.test(estimatedVisitAt)) {
      return NextResponse.json(
        {
          message: "Format jadwal appointment tidak valid.",
        },
        {
          status: 422,
        },
      );
    }

    const result = await createHisAppointment({
      estimatedVisitAt,

      locationId,

      doctorId,

      displayName,

      displayPhone,
    });

    return NextResponse.json(
      {
        message: result.message,

        appointment: {
          id: result.appointment.id,

          documentCode: result.appointment.document_code,

          displayName: result.appointment.display_name,

          displayPhone: result.appointment.display_phone,

          estimatedVisitAt: result.appointment.estimated_visit_at,

          status: result.appointment.status_id,

          doctor: {
            id: result.appointment.doctor.id,

            name: result.appointment.doctor.full_name,

            checkInBeforeMinutes:
              result.appointment.doctor.check_in_before_minutes ?? null,
          },

          location: {
            id: result.appointment.location.id,

            name: result.appointment.location.name,

            label: result.appointment.location.label,
          },
        },
      },
      {
        status: 201,

        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (error) {
    console.error("POST /api/public/appointments", error);

    return NextResponse.json(
      {
        message: "Gagal membuat appointment. Silakan coba kembali.",
      },
      {
        status: 500,
      },
    );
  }
}
