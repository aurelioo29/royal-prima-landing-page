import "server-only";

import { hisFetch } from "./client";

import type { HisCreateAppointmentResponse } from "./types";

export type CreateHisAppointmentInput = {
  estimatedVisitAt: string;

  locationId: string;

  doctorId: string;

  displayName: string;

  displayPhone: string;
};

export async function createHisAppointment({
  estimatedVisitAt,
  locationId,
  doctorId,
  displayName,
  displayPhone,
}: CreateHisAppointmentInput) {
  return hisFetch<HisCreateAppointmentResponse>("/api/general/appointments", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      appointment: {
        estimated_visit_at: estimatedVisitAt,

        location_id: locationId,

        doctor_id: doctorId,

        display_name: displayName,

        display_phone: displayPhone,
      },
    }),
  });
}
