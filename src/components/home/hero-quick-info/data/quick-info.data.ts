import type { QuickInfoItem } from "../types/quick-info.types";

export const HOME_QUICK_INFO = [
  {
    key: "hotline",

    icon: "phone",

    href: "tel:+626188813182",
  },

  {
    key: "emergency",

    icon: "emergency",

    href: "/contact",
  },

  {
    key: "location",

    icon: "location",

    href: "https://www.google.com/maps/search/?api=1&query=RSU+Royal+Prima+Medan",

    external: true,
  },
] as const satisfies readonly QuickInfoItem[];
