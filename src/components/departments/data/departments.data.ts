import type { DepartmentItem } from "../types/departments.types";

export const departmentsPageConfig = {
  heroImage: "/images/departments/departments-hero.webp",

  posterImage: "/images/departments/departments-poster.webp",

  phone: {
    display: "(061) 888 13182",

    href: "tel:+626188813182",
  },
} as const;

export const DEPARTMENTS_PAGE_ITEMS = [
  {
    id: "emergency",

    translationKey: "emergency",

    icon: "emergency",

    href: "tel:+626188813182",

    linkType: "anchor",

    featured: true,
  },

  {
    id: "outpatient",

    translationKey: "outpatient",

    icon: "outpatient",

    href: "/timetable",

    linkType: "internal",
  },

  {
    id: "inpatient",

    translationKey: "inpatient",

    icon: "inpatient",

    href: "/contact",

    linkType: "internal",
  },

  {
    id: "supporting",

    translationKey: "supporting",

    icon: "supporting",

    href: "/contact",

    linkType: "internal",
  },

  {
    id: "central-surgery",

    translationKey: "centralSurgery",

    icon: "centralSurgery",

    href: "/contact",

    linkType: "internal",
  },
] as const satisfies readonly DepartmentItem[];
