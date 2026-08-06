import type {
  OutpatientAccessItem,
  OutpatientAdvantageItem,
  OutpatientClinicItem,
  OutpatientRelatedDepartmentItem,
} from "../types/outpatient.types";

export const outpatientPageConfig = {
  heroImage: "/images/departments/outpatient/outpatient-hero.webp",

  posterImage: "/images/departments/outpatient/outpatient-poster.webp",

  phone: {
    display: "(061) 888 13182",
    href: "tel:+626188813182",
  },

  scheduleHref: "/timetable",

  contactHref: "/contact",
} as const;

export const OUTPATIENT_ADVANTAGES = [
  {
    key: "onlineQueue",
    icon: "queue",
  },

  {
    key: "specialists",
    icon: "doctor",
  },

  {
    key: "medicalSupport",
    icon: "medical",
  },

  {
    key: "flexibleSchedule",
    icon: "calendar",
  },

  {
    key: "insurance",
    icon: "insurance",
  },

  {
    key: "organizedControl",
    icon: "control",
  },
] as const satisfies readonly OutpatientAdvantageItem[];

export const OUTPATIENT_CLINICS = [
  {
    key: "internalMedicine",
    icon: "internal",
  },

  {
    key: "pediatrics",
    icon: "child",
  },

  {
    key: "obgyn",
    icon: "obgyn",
  },

  {
    key: "neurology",
    icon: "brain",
  },

  {
    key: "cardiology",
    icon: "heart",
  },

  {
    key: "orthopedics",
    icon: "bone",
  },
] as const satisfies readonly OutpatientClinicItem[];

export const OUTPATIENT_ACCESS = [
  {
    key: "general",
    icon: "user",
  },

  {
    key: "insurance",
    icon: "insurance",
  },

  {
    key: "corporate",
    icon: "company",
  },

  {
    key: "bpjs",
    icon: "shield",
  },
] as const satisfies readonly OutpatientAccessItem[];

export const OUTPATIENT_RELATED_DEPARTMENTS = [
  {
    key: "emergency",
    href: "/departments/emergency",
  },

  {
    key: "inpatient",
    href: "/departments/inpatient",
  },

  {
    key: "supporting",
    href: "/departments/supporting",
  },

  {
    key: "surgery",
    href: "/departments/surgery",
  },
] as const satisfies readonly OutpatientRelatedDepartmentItem[];
