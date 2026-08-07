import type { TimetableDayKey, TimetableEntry } from "@/components/timetable";

import type { HisDoctorSchedule, HisLocation } from "./types";

const HIS_DAY_MAP: Record<string, TimetableDayKey> = {
  Senin: "monday",
  Selasa: "tuesday",
  Rabu: "wednesday",
  Kamis: "thursday",
  Jumat: "friday",
  Sabtu: "saturday",
};

const DAY_ORDER: Record<TimetableDayKey, number> = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

type ParsedSchedule = {
  day: TimetableDayKey;
  startTime: string;
  endTime: string;
};

function normalizeTime(time: string) {
  const [hour, minute] = time.split(":");

  return `${String(Number(hour)).padStart(
    2,
    "0",
  )}:${String(Number(minute)).padStart(2, "0")}`;
}

function parseDoctorSchedules(schedules: string): ParsedSchedule[] {
  /*
   * Support actual newline maupun literal \n.
   */
  const normalizedSchedules = schedules.replace(/\\n/g, "\n");

  const lines = normalizedSchedules
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const result: ParsedSchedule[] = [];

  for (const line of lines) {
    const match = line.match(
      /^(Senin|Selasa|Rabu|Kamis|Jumat|Sabtu)\s+(\d{1,2}:\d{2})\s*[-–—]\s*(\d{1,2}:\d{2})$/i,
    );

    if (!match) {
      console.warn("Format jadwal HIS tidak dikenali:", line);

      continue;
    }

    const rawDay = match[1];

    const normalizedDay =
      rawDay.charAt(0).toUpperCase() + rawDay.slice(1).toLowerCase();

    const day = HIS_DAY_MAP[normalizedDay];

    if (!day) {
      continue;
    }

    result.push({
      day,

      startTime: normalizeTime(match[2]),

      endTime: normalizeTime(match[3]),
    });
  }

  return result;
}

type CreateHisTimetableEntriesParams = {
  location: HisLocation;
  doctors: HisDoctorSchedule[];
};

export function createHisTimetableEntries({
  location,
  doctors,
}: CreateHisTimetableEntriesParams): TimetableEntry[] {
  const groups = new Map<
    string,
    {
      id: string;

      day: TimetableDayKey;

      department: string;
      departmentLabel: string;

      startTime: string;
      endTime: string;

      doctors: string[];

      room: null;
    }
  >();

  doctors.forEach((doctor) => {
    const schedules = parseDoctorSchedules(doctor.schedules);

    schedules.forEach((schedule) => {
      const key = [
        location.id,
        schedule.day,
        schedule.startTime,
        schedule.endTime,
      ].join(":");

      const existing = groups.get(key);

      if (existing) {
        if (!existing.doctors.includes(doctor.full_name)) {
          existing.doctors.push(doctor.full_name);
        }

        return;
      }

      groups.set(key, {
        id: key,

        day: schedule.day,

        department: location.id,

        departmentLabel: location.label || location.name,

        startTime: schedule.startTime,

        endTime: schedule.endTime,

        doctors: [doctor.full_name],

        /*
         * Endpoint doctor schedule saat ini
         * tidak memberikan room.
         */
        room: null,
      });
    });
  });

  return Array.from(groups.values()).sort((a, b) => {
    const dayCompare = DAY_ORDER[a.day] - DAY_ORDER[b.day];

    if (dayCompare !== 0) {
      return dayCompare;
    }

    return a.startTime.localeCompare(b.startTime);
  });
}
