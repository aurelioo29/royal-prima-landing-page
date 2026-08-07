import { NextResponse } from "next/server";

import { getHisClinicLocations } from "@/lib/his/locations";

export async function GET() {
  try {
    const locations = await getHisClinicLocations();

    return NextResponse.json(
      {
        data: locations.map((location) => ({
          id: location.id,

          bpjs_code: location.bpjs_code,

          label: location.label || location.name,

          name: location.name,
        })),
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (error) {
    console.error("GET /api/public/locations", error);

    return NextResponse.json(
      {
        message: "Gagal mengambil daftar klinik.",
      },
      {
        status: 500,
      },
    );
  }
}
