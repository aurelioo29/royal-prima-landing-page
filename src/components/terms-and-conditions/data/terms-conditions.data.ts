import type { TermsConditionsSection } from "../types/terms-conditions.types";

export const TERMS_CONDITIONS_SECTIONS = [
  {
    key: "acceptance",
    number: "01",
  },

  {
    key: "websitePurpose",
    number: "02",
  },

  {
    key: "medicalInformation",
    number: "03",
  },

  {
    key: "appointments",
    number: "04",
  },

  {
    key: "userResponsibilities",
    number: "05",
  },

  {
    key: "prohibitedUse",
    number: "06",
  },

  {
    key: "intellectualProperty",
    number: "07",
  },

  {
    key: "thirdPartyLinks",
    number: "08",
  },

  {
    key: "availability",
    number: "09",
  },

  {
    key: "limitation",
    number: "10",
  },

  {
    key: "privacy",
    number: "11",
  },

  {
    key: "changes",
    number: "12",
  },

  {
    key: "governing",
    number: "13",
  },

  {
    key: "contact",
    number: "14",
  },
] as const satisfies readonly TermsConditionsSection[];

export const termsConditionsConfig = {
  email: "contact@royalprima.com",

  emailHref: "mailto:contact@royalprima.com",
} as const;
