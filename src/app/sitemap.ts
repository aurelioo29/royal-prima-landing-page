import type { MetadataRoute } from "next";

const SITE_URL = process.env.SITE_URL ?? "https://beta.royalprima.com";

const routes = [
  {
    path: "",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/about",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/doctors",
    changeFrequency: "daily" as const,
    priority: 0.9,
  },
  {
    path: "/departments",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/timetable",
    changeFrequency: "daily" as const,
    priority: 0.9,
  },
  {
    path: "/appointments",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: "/faq",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  {
    path: "/career",
    changeFrequency: "weekly" as const,
    priority: 0.7,
  },
  {
    path: "/investor-relations",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/blog",
    changeFrequency: "daily" as const,
    priority: 0.8,
  },
  {
    path: "/contact",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,

    lastModified,

    changeFrequency: route.changeFrequency,

    priority: route.priority,
  }));
}
