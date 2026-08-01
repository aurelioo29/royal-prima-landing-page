import type { CareerVacancy } from "../types/career.types";

export const careerConfig = {
  heroImage: "/images/career/career-hero.webp",

  recruitmentEmail: "sdm@royalprima.com",
} as const;

export const careerVacancies = [
  {
    id: "radiografer-2026",
    slug: "radiografer",

    title: "Radiografer",
    department: "Radiologi",
    employmentType: "Penuh Waktu",
    location: "Medan",

    status: "open",

    posterImage: "/images/career/posters/radiografer.webp",

    benefits: ["Jenjang karir", "Fasilitas kesehatan", "Beasiswa pendidikan"],

    requirements: [
      "Pendidikan minimal D-3 Radiologi",
      "Memiliki STR aktif",
      "Menguasai Microsoft Office, khususnya Word dan Excel",
      "Terbuka untuk fresh graduate",
      "Jujur, bekerja keras, dan bertanggung jawab",
    ],

    application: {
      email: "sdm@royalprima.com",

      emailSubject: "LAMARAN RADIOGRAFER_[NAMA LENGKAP]",

      formUrl: "https://bit.ly/RekrutmentRSURoyalPrima2",
    },
  },
] satisfies readonly CareerVacancy[];
