import type { TestimonialItem } from "../types/testimonials.types";

/**
 * Data berikut masih berupa contoh untuk kebutuhan UI.
 * Ganti dengan testimoni yang sudah diverifikasi
 * sebelum website dipublikasikan.
 */
export const HOME_TESTIMONIALS = [
  {
    id: "testimonial-outpatient",

    translationKey: "outpatient",

    initials: "RS",

    rating: 5,
  },

  {
    id: "testimonial-emergency",

    translationKey: "emergency",

    initials: "AP",

    rating: 5,
  },

  {
    id: "testimonial-maternity",

    translationKey: "maternity",

    initials: "DS",

    rating: 5,
  },

  {
    id: "testimonial-child-care",

    translationKey: "childCare",

    initials: "NA",

    rating: 5,
  },

  {
    id: "testimonial-medical-checkup",

    translationKey: "medicalCheckup",

    initials: "BT",

    rating: 5,
  },

  {
    id: "testimonial-inpatient",

    translationKey: "inpatient",

    initials: "MS",

    rating: 5,
  },
] as const satisfies readonly TestimonialItem[];
