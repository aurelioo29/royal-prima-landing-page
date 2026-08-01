import type {
  TimetableDayKey,
  TimetableDepartmentKey,
  TimetableEntry,
} from "../types/timetable.types";

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

export const TIMETABLE_DEPARTMENT_KEYS = [
  "pediatrics",
  "obstetricsGynecology",
  "cardiology",
  "pulmonology",
  "psychiatry",
  "neurology",
] as const satisfies readonly TimetableDepartmentKey[];

export const timetableEntries = [
  // MONDAY
  {
    id: "monday-pediatrics",
    day: "monday",
    department: "pediatrics",
    startTime: "09:00",
    endTime: "12:00",
    doctors: ["dr. Sarah Patel, Sp.A", "dr. David Nguyen, Sp.A"],
    room: "Poliklinik 101",
  },

  {
    id: "monday-cardiology",
    day: "monday",
    department: "cardiology",
    startTime: "12:00",
    endTime: "14:00",
    doctors: ["dr. James Lee, Sp.JP", "dr. Michelle Kim, Sp.JP"],
    room: "Poliklinik 202",
  },

  {
    id: "monday-psychiatry",
    day: "monday",
    department: "psychiatry",
    startTime: "14:00",
    endTime: "17:00",
    doctors: ["dr. Rachel Jones, Sp.KJ", "dr. David Park, Sp.KJ"],
    room: "Poliklinik 301",
  },

  // TUESDAY
  {
    id: "tuesday-obstetrics",
    day: "tuesday",
    department: "obstetricsGynecology",
    startTime: "09:00",
    endTime: "11:00",
    doctors: ["dr. Karen Lee, Sp.OG"],
    room: "Poliklinik 401",
  },

  {
    id: "tuesday-pulmonology",
    day: "tuesday",
    department: "pulmonology",
    startTime: "11:00",
    endTime: "14:00",
    doctors: ["dr. John Smith, Sp.P"],
    room: "Poliklinik 502",
  },

  {
    id: "tuesday-neurology",
    day: "tuesday",
    department: "neurology",
    startTime: "15:00",
    endTime: "17:00",
    doctors: ["dr. Maria Rodriguez, Sp.N"],
    room: "Poliklinik 603",
  },

  // WEDNESDAY
  {
    id: "wednesday-pediatrics",
    day: "wednesday",
    department: "pediatrics",
    startTime: "08:00",
    endTime: "12:00",
    doctors: ["dr. Sarah Patel, Sp.A", "dr. David Nguyen, Sp.A"],
    room: "Poliklinik 101",
  },

  {
    id: "wednesday-cardiology",
    day: "wednesday",
    department: "cardiology",
    startTime: "13:00",
    endTime: "16:00",
    doctors: ["dr. James Lee, Sp.JP", "dr. Michelle Kim, Sp.JP"],
    room: "Poliklinik 202",
  },

  // THURSDAY
  {
    id: "thursday-obstetrics",
    day: "thursday",
    department: "obstetricsGynecology",
    startTime: "09:00",
    endTime: "11:00",
    doctors: ["dr. Karen Lee, Sp.OG"],
    room: "Poliklinik 401",
  },

  {
    id: "thursday-pulmonology",
    day: "thursday",
    department: "pulmonology",
    startTime: "11:00",
    endTime: "14:00",
    doctors: ["dr. John Smith, Sp.P"],
    room: "Poliklinik 502",
  },

  {
    id: "thursday-neurology",
    day: "thursday",
    department: "neurology",
    startTime: "14:00",
    endTime: "17:00",
    doctors: ["dr. Maria Rodriguez, Sp.N"],
    room: "Poliklinik 603",
  },

  // FRIDAY
  {
    id: "friday-pediatrics",
    day: "friday",
    department: "pediatrics",
    startTime: "08:00",
    endTime: "12:00",
    doctors: ["dr. Sarah Patel, Sp.A", "dr. David Nguyen, Sp.A"],
    room: "Poliklinik 101",
  },

  {
    id: "friday-cardiology",
    day: "friday",
    department: "cardiology",
    startTime: "12:00",
    endTime: "15:00",
    doctors: ["dr. James Lee, Sp.JP", "dr. Michelle Kim, Sp.JP"],
    room: "Poliklinik 202",
  },

  {
    id: "friday-psychiatry",
    day: "friday",
    department: "psychiatry",
    startTime: "15:00",
    endTime: "17:00",
    doctors: ["dr. Rachel Jones, Sp.KJ", "dr. David Park, Sp.KJ"],
    room: "Poliklinik 301",
  },

  // SATURDAY
  {
    id: "saturday-obstetrics",
    day: "saturday",
    department: "obstetricsGynecology",
    startTime: "09:00",
    endTime: "12:00",
    doctors: ["dr. Karen Lee, Sp.OG"],
    room: "Poliklinik 401",
  },

  {
    id: "saturday-pulmonology",
    day: "saturday",
    department: "pulmonology",
    startTime: "12:00",
    endTime: "14:00",
    doctors: ["dr. John Smith, Sp.P"],
    room: "Poliklinik 502",
  },

  {
    id: "saturday-neurology",
    day: "saturday",
    department: "neurology",
    startTime: "15:00",
    endTime: "17:00",
    doctors: ["dr. Maria Rodriguez, Sp.N"],
    room: "Poliklinik 603",
  },
] satisfies readonly TimetableEntry[];
