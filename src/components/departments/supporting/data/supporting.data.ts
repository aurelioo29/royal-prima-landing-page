import type {
  SupportingAdvantageItem,
  SupportingFacilityItem,
  SupportingGalleryItem,
  SupportingRelatedDepartmentItem,
} from "../types/supporting.types";

export const supportingPageConfig = {
  heroImage: "/images/departments/supporting/supporting-hero.webp",

  posterImage: "/images/departments/supporting/supporting-poster.webp",

  phone: {
    display: "(061) 888 13182",
    href: "tel:+626188813182",
  },

  contactHref: "/contact",

  doctorHref: "/doctors",
} as const;

export const SUPPORTING_FACILITIES = [
  {
    key: "emergency",
    icon: "emergency",
  },

  {
    key: "laboratory",
    icon: "laboratory",
  },

  {
    key: "radiology",
    icon: "radiology",
  },

  {
    key: "criticalCare",
    icon: "critical",
  },

  {
    key: "endoscopy",
    icon: "endoscopy",
  },

  {
    key: "physiotherapy",
    icon: "physiotherapy",
  },
] as const satisfies readonly SupportingFacilityItem[];

export const SUPPORTING_ADVANTAGES = [
  {
    key: "technology",
    icon: "technology",
  },

  {
    key: "accuracy",
    icon: "accuracy",
  },

  {
    key: "experts",
    icon: "doctor",
  },

  {
    key: "education",
    icon: "education",
  },

  {
    key: "integration",
    icon: "integrated",
  },

  {
    key: "insurance",
    icon: "insurance",
  },
] as const satisfies readonly SupportingAdvantageItem[];

export const SUPPORTING_GALLERY = [
  {
    key: "mri",
    image: "/images/departments/supporting/facilities/mri-3t.webp",
    imagePosition: "center center",
  },

  {
    key: "ctScan",
    image: "/images/departments/supporting/facilities/ct-128-slice.webp",
    imagePosition: "center center",
  },

  {
    key: "xray",
    image: "/images/departments/supporting/facilities/xray.webp",
    imagePosition: "center center",
  },

  {
    key: "dialysis",
    image: "/images/departments/supporting/facilities/dialysis.webp",
    imagePosition: "center center",
  },

  {
    key: "endoscopy",
    image: "/images/departments/supporting/facilities/endoscopy.webp",
    imagePosition: "center center",
  },

  {
    key: "laboratory",
    image: "/images/departments/supporting/facilities/laboratory.webp",
    imagePosition: "center center",
  },
] as const satisfies readonly SupportingGalleryItem[];

export const SUPPORTING_RELATED_DEPARTMENTS = [
  {
    key: "emergency",
    href: "/departments/emergency",
  },

  {
    key: "outpatient",
    href: "/departments/outpatient",
  },

  {
    key: "inpatient",
    href: "/departments/inpatient",
  },

  {
    key: "surgery",
    href: "/departments/surgery",
  },
] as const satisfies readonly SupportingRelatedDepartmentItem[];
