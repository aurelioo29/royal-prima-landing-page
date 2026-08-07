import { NextRequest, NextResponse } from "next/server";

import { getHisDoctorSchedules } from "@/lib/his/doctor-schedules";

export async function GET(request: NextRequest) {
  try {
    const locationId = request.nextUrl.searchParams.get("location_id");

    const category = request.nextUrl.searchParams.get("category");

    if (!locationId) {
      return NextResponse.json(
        {
          message: "location_id wajib diisi.",
        },
        {
          status: 400,
        },
      );
    }

    if (category !== "jkn" && category !== "nonjkn") {
      return NextResponse.json(
        {
          message: "category tidak valid.",
        },
        {
          status: 400,
        },
      );
    }

    const result = await getHisDoctorSchedules({
      locationId,

      category,
    });

    return NextResponse.json(
      {
        data: result.data.map((doctor) => ({
          id: doctor.id,

          full_name: doctor.full_name,

          photo_url: doctor.photo_url ?? null,

          schedules: doctor.schedules,
        })),
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (error) {
    console.error("GET /api/public/doctor-schedules", error);

    return NextResponse.json(
      {
        message: "Gagal mengambil jadwal dokter.",
      },
      {
        status: 500,
      },
    );
  }
}
