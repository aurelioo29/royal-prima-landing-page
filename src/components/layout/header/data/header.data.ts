import type {
  HeaderContactItem,
  HeaderNavItem,
  HeaderSocialItem,
} from "../types/header.types";

export const HEADER_NAVIGATION: readonly HeaderNavItem[] = [
  {
    key: "home",
    labelKey: "home",
    href: "/",
  },
  {
    key: "about",
    labelKey: "about",
    href: "/about",
  },
  {
    key: "doctors",
    labelKey: "findDoctor",
    href: "/doctors",
  },
  {
    key: "services",
    labelKey: "services",
    children: [
      {
        key: "departments",
        labelKey: "departments",
        href: "/departments",
      },
      {
        key: "timetable",
        labelKey: "timetable",
        href: "/timetable",
      },
      {
        key: "appointment",
        labelKey: "appointment",
        href: "/appointments",
      },
      {
        key: "faq",
        labelKey: "faq",
        href: "/faq",
      },
    ],
  },

  // Dropdown Info
  {
    key: "info",
    labelKey: "info",
    children: [
      {
        key: "career",
        labelKey: "career",
        href: "/career",
      },
    ],
  },

  // Menu terpisah, bukan bagian dari Info
  {
    key: "investorRelations",
    labelKey: "investorRelations",
    href: "/investor-relations",
  },

  {
    key: "blog",
    labelKey: "blog",
    href: "/blog",
  },
  {
    key: "contact",
    labelKey: "contact",
    href: "/contact",
  },
] as const;

export const HEADER_CONTACTS: readonly HeaderContactItem[] = [
  {
    key: "phone",
    icon: "phone",
    value: "(061) 888 13182",
    href: "tel:+626188813182",
  },
  {
    key: "email",
    icon: "email",
    value: "contact@royalprima.com",
    href: "mailto:contact@royalprima.com",
  },
  {
    key: "address",
    icon: "location",
    value:
      "Jl. Ayahanda No. 68A, Sei Putih Tengah, Medan Petisah, Kota Medan 20118",
    href: "https://www.google.com/maps/search/?api=1&query=RSU+Royal+Prima+Medan",
    external: true,
  },
] as const;

export const HEADER_SOCIALS: readonly HeaderSocialItem[] = [
  {
    key: "tiktok",
    icon: "tiktok",
    href: "https://www.tiktok.com/@rsuroyalprima",
  },
  {
    key: "instagram",
    icon: "instagram",
    href: "https://www.instagram.com/royalprima.mdn/",
  },
  {
    key: "facebook",
    icon: "facebook",
    href: "https://www.facebook.com/RSURoyalPrimaMedanOfficial/?locale=id_ID",
  },
] as const;
