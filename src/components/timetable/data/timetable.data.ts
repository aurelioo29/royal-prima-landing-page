import type { TimetableDayKey } from "../types/timetable.types";

export const timetableConfig = {
  heroImage: "/images/timetable/timetable-hero.webp",

  posterImage: "/images/timetable/timetable-poster.webp",

  phone: {
    display: "(061) 888 13182",

    href: "tel:+626188813182",
  },
} as const;

export const TIMETABLE_DAY_KEYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const satisfies readonly TimetableDayKey[];
