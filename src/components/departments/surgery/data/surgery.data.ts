import type {
  SurgeryAdvantageItem,
  SurgeryGalleryItem,
  SurgeryRelatedDepartmentItem,
  SurgeryServiceItem,
} from "../types/surgery.types";

export const surgeryPageConfig = {
  heroImage: "/images/departments/surgery/surgery-hero.webp",

  posterImage: "/images/departments/surgery/surgery-poster.webp",

  phone: {
    display: "(061) 888 13182",
    href: "tel:+626188813182",
  },

  contactHref: "/contact",

  locationHref: "/contact",
} as const;

export const SURGERY_ADVANTAGES = [
  {
    key: "medicalTeam",
    icon: "doctor",
  },

  {
    key: "modernEquipment",
    icon: "technology",
  },

  {
    key: "sterilization",
    icon: "sterile",
  },

  {
    key: "emergency",
    icon: "clock",
  },
] as const satisfies readonly SurgeryAdvantageItem[];

export const SURGERY_SERVICES = [
  {
    key: "planned",
    icon: "planned",
  },

  {
    key: "emergency",
    icon: "emergency",
  },

  {
    key: "specialist",
    icon: "specialist",
  },

  {
    key: "anesthesia",
    icon: "anesthesia",
  },
] as const satisfies readonly SurgeryServiceItem[];

export const SURGERY_GALLERY = [
  {
    key: "operatingRoom",
    image: "/images/departments/surgery/facilities/operating-room.webp",
    imagePosition: "center center",
  },

  {
    key: "surgicalTeam",
    image: "/images/departments/surgery/facilities/surgical-team.webp",
    imagePosition: "center center",
  },

  {
    key: "equipment",
    image: "/images/departments/surgery/facilities/surgery-equipment.webp",
    imagePosition: "center center",
  },

  {
    key: "sterilization",
    image: "/images/departments/surgery/facilities/sterilization.webp",
    imagePosition: "center center",
  },
] as const satisfies readonly SurgeryGalleryItem[];

export const SURGERY_RELATED_DEPARTMENTS = [
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
    key: "outpatient",
    href: "/departments/outpatient",
  },
] as const satisfies readonly SurgeryRelatedDepartmentItem[];
