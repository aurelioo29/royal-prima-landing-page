import type { PrivacyPolicySection } from "../types/privacy-policy.types";

export const PRIVACY_POLICY_SECTIONS = [
  {
    key: "introduction",
    number: "01",
  },

  {
    key: "dataCollected",
    number: "02",
  },

  {
    key: "dataUsage",
    number: "03",
  },

  {
    key: "cookies",
    number: "04",
  },

  {
    key: "dataSharing",
    number: "05",
  },

  {
    key: "dataSecurity",
    number: "06",
  },

  {
    key: "dataRetention",
    number: "07",
  },

  {
    key: "userRights",
    number: "08",
  },

  {
    key: "externalLinks",
    number: "09",
  },

  {
    key: "children",
    number: "10",
  },

  {
    key: "policyChanges",
    number: "11",
  },

  {
    key: "contact",
    number: "12",
  },
] as const satisfies readonly PrivacyPolicySection[];

export const privacyPolicyConfig = {
  email: "contact@royalprima.com",

  emailHref: "mailto:contact@royalprima.com",
} as const;
