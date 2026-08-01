import type { DepartmentItem } from "../types/departments.types";

export const HOME_DEPARTMENTS: readonly DepartmentItem[] = [
  {
    id: "emergency",

    translationKey: "emergency",

    icon: "emergency",

    href: "/departments/emergency",

    accent: "cyan",

    featured: true,
  },

  {
    id: "outpatient",

    translationKey: "outpatient",

    icon: "outpatient",

    href: "/departments/outpatient",

    accent: "blue",
  },

  {
    id: "inpatient",

    translationKey: "inpatient",

    icon: "inpatient",

    href: "/departments/inpatient",

    accent: "teal",
  },

  {
    id: "supporting",

    translationKey: "supporting",

    icon: "supporting",

    href: "/departments/supporting",

    accent: "purple",
  },

  {
    id: "surgery",

    translationKey: "surgery",

    icon: "surgery",

    href: "/departments/surgery",

    accent: "gold",
  },
];
