import type {
  InpatientAdvantageItem,
  InpatientRelatedDepartmentItem,
  InpatientRoomItem,
  InpatientSupportItem,
} from "../types/inpatient.types";

export const inpatientPageConfig = {
  heroImage: "/images/departments/inpatient/inpatient-hero.webp",

  posterImage: "/images/departments/inpatient/inpatient-poster.webp",

  phone: {
    display: "(061) 888 13182",
    href: "tel:+626188813182",
  },

  locationHref: "/contact",
} as const;

export const INPATIENT_ADVANTAGES = [
  {
    key: "roomChoice",
    icon: "rooms",
  },
  {
    key: "modernFacilities",
    icon: "comfort",
  },
  {
    key: "cleanliness",
    icon: "clean",
  },
  {
    key: "professionals",
    icon: "professional",
  },
  {
    key: "integration",
    icon: "integrated",
  },
  {
    key: "payment",
    icon: "payment",
  },
] as const satisfies readonly InpatientAdvantageItem[];

export const INPATIENT_ROOMS = [
  {
    key: "executive",
    image: "/images/departments/inpatient/rooms/executive.webp",
    imagePosition: "center center",
  },
  {
    key: "svip",
    image: "/images/departments/inpatient/rooms/svip.webp",
    imagePosition: "center center",
  },
  {
    key: "vip",
    image: "/images/departments/inpatient/rooms/vip.webp",
    imagePosition: "center center",
  },
  {
    key: "classOne",
    image: "/images/departments/inpatient/rooms/class-1.webp",
    imagePosition: "center center",
  },
  {
    key: "classTwo",
    image: "/images/departments/inpatient/rooms/class-2.webp",
    imagePosition: "center center",
  },
  {
    key: "classThree",
    image: "/images/departments/inpatient/rooms/class-3.webp",
    imagePosition: "center center",
  },
] as const satisfies readonly InpatientRoomItem[];

export const INPATIENT_SUPPORT = [
  {
    key: "specialistDoctors",
    icon: "doctor",
  },
  {
    key: "nursing",
    icon: "nurse",
  },
  {
    key: "emergency",
    icon: "emergency",
  },
  {
    key: "criticalCare",
    icon: "critical",
  },
  {
    key: "maternity",
    icon: "maternity",
  },
  {
    key: "physiotherapy",
    icon: "physiotherapy",
  },
] as const satisfies readonly InpatientSupportItem[];

export const INPATIENT_RELATED_DEPARTMENTS = [
  {
    key: "emergency",
    href: "/departments/emergency",
  },
  {
    key: "outpatient",
    href: "/departments/outpatient",
  },
  {
    key: "supporting",
    href: "/departments/supporting",
  },
  {
    key: "surgery",
    href: "/departments/surgery",
  },
] as const satisfies readonly InpatientRelatedDepartmentItem[];
