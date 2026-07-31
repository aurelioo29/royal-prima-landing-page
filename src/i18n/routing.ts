import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["id"],

  defaultLocale: "id",

  // Bahasa utama tidak memakai prefix.
  // Indonesia: /
  // Inggris nanti: /en
  localePrefix: "as-needed",

  // Root URL selalu menggunakan bahasa Indonesia.
  localeDetection: false,
});
