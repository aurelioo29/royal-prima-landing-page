import "server-only";

import { hisFetch } from "./client";

import type { HisDoctorSchedulesResponse } from "./types";

export type HisScheduleCategory = "jkn" | "nonjkn";

type GetHisDoctorSchedulesParams = {
  locationId: string;
  category?: HisScheduleCategory;
};

export async function getHisDoctorSchedules({
  locationId,
  category = "nonjkn",
}: GetHisDoctorSchedulesParams) {
  const params = new URLSearchParams({
    location_id: locationId,

    category,
  });

  return hisFetch<HisDoctorSchedulesResponse>(
    `/api/general/doctor_schedules?${params.toString()}`,
  );
}
