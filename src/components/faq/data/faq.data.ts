import type { FaqCategoryItem, FaqItem } from "../types/faq.types";

export const faqPageConfig = {
  heroImage: "/images/faq/faq-hero.webp",

  contactHref: "/contact#contact-form",

  phone: {
    display: "(061) 888 13182",

    href: "tel:+626188813182",
  },
} as const;

export const FAQ_CATEGORIES = [
  {
    key: "general",
    icon: "general",
  },

  {
    key: "appointment",
    icon: "appointment",
  },

  {
    key: "doctor",
    icon: "doctor",
  },

  {
    key: "bpjs",
    icon: "bpjs",
  },

  {
    key: "inpatient",
    icon: "inpatient",
  },

  {
    key: "emergency",
    icon: "emergency",
  },
] as const satisfies readonly FaqCategoryItem[];

export const FAQ_ITEMS = [
  /*
   * GENERAL
   */
  {
    id: "general-01",
    category: "general",
  },

  {
    id: "general-02",
    category: "general",
  },

  {
    id: "general-03",
    category: "general",
  },

  /*
   * APPOINTMENT
   */
  {
    id: "appointment-01",
    category: "appointment",
  },

  {
    id: "appointment-02",
    category: "appointment",
  },

  {
    id: "appointment-03",
    category: "appointment",
  },

  /*
   * DOCTOR
   */
  {
    id: "doctor-01",
    category: "doctor",
  },

  {
    id: "doctor-02",
    category: "doctor",
  },

  {
    id: "doctor-03",
    category: "doctor",
  },

  /*
   * BPJS
   */
  {
    id: "bpjs-01",
    category: "bpjs",
  },

  {
    id: "bpjs-02",
    category: "bpjs",
  },

  {
    id: "bpjs-03",
    category: "bpjs",
  },

  /*
   * INPATIENT
   */
  {
    id: "inpatient-01",
    category: "inpatient",
  },

  {
    id: "inpatient-02",
    category: "inpatient",
  },

  {
    id: "inpatient-03",
    category: "inpatient",
  },

  /*
   * EMERGENCY
   */
  {
    id: "emergency-01",
    category: "emergency",
  },

  {
    id: "emergency-02",
    category: "emergency",
  },

  {
    id: "emergency-03",
    category: "emergency",
  },
] as const satisfies readonly FaqItem[];
