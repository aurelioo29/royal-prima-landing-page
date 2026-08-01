import type {
  FooterContactItem,
  FooterMenuGroup,
  FooterSocialItem,
} from "../types/footer.types";

export const footerConfig = {
  logo: {
    src: "/images/footer/logo.webp",
    alt: "RSU Royal Prima Medan",
    href: "/",
  },

  background: {
    wave: "/images/footer/bg.svg",
  },
} as const;

export const footerContacts = [
  {
    key: "address",
    icon: "location",
    href: "https://www.google.com/maps/search/?api=1&query=RSU+Royal+Prima+Medan",
    external: true,
  },
  {
    key: "phone",
    icon: "phone",
    href: "tel:+626188813182",
  },
  {
    key: "email",
    icon: "email",
    href: "mailto:contact@royalprima.com",
  },
] satisfies readonly FooterContactItem[];

export const footerMenus = [
  {
    key: "hospital",
    items: [
      {
        key: "about",
        href: "/about",
      },
      {
        key: "departments",
        href: "/departments",
      },
      {
        key: "doctors",
        href: "/doctors",
      },
      {
        key: "timetable",
        href: "/timetable",
      },
      {
        key: "appointment",
        href: "/appointments",
      },
      {
        key: "testimonials",
        href: "/testimonials",
      },
    ],
  },
  {
    key: "information",
    items: [
      {
        key: "blog",
        href: "/blog",
      },
      {
        key: "career",
        href: "/career",
      },
      {
        key: "investorRelations",
        href: "/investor-relations",
      },
      {
        key: "contact",
        href: "/contact",
      },
      {
        key: "faq",
        href: "/faq",
      },
      {
        key: "privacy",
        href: "/privacy-policy",
      },
      {
        key: "terms",
        href: "/terms-and-conditions",
      },
    ],
  },
] satisfies readonly FooterMenuGroup[];

export const footerSocials = [
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
] satisfies readonly FooterSocialItem[];
