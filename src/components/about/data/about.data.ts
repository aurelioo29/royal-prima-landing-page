import type {
  AboutAwardItem,
  AboutCharterItem,
  AboutGalleryItem,
} from "../types/about.types";

export const aboutPageConfig = {
  heroImage: "/images/about/about-hero.webp",

  profileImage: "/images/about/royal-prima-building.webp",

  posterImage: "/images/about/about-poster.webp",
} as const;

export const ABOUT_AWARDS = [
  {
    key: "paripurna",

    image: "/images/about/awards/paripurna-bintang-5.webp",
  },

  {
    key: "bpjsTrustMark",

    image: "/images/about/awards/bpjs-trust-mark.webp",
  },
] as const satisfies readonly AboutAwardItem[];

export const ABOUT_CHARTERS = [
  {
    key: "boardCommissioners",

    file: "/documents/about/piagam-dewan-komisaris.pdf",
  },

  {
    key: "boardDirectors",

    file: "/documents/about/piagam-direksi.pdf",
  },

  {
    key: "nominationRemuneration",

    file: "/documents/about/piagam-komite-nominasi-dan-remunerasi.pdf",
  },

  {
    key: "auditCommittee",

    file: "/documents/about/piagam-komite-audit.pdf",
  },
] as const satisfies readonly AboutCharterItem[];

export const ABOUT_GALLERY = [
  {
    id: "facility-01",

    image: "/images/about/gallery/facility-01.webp",

    imageAltKey: "facility01",
  },

  {
    id: "facility-02",

    image: "/images/about/gallery/facility-02.webp",

    imageAltKey: "facility02",
  },

  {
    id: "facility-03",

    image: "/images/about/gallery/facility-03.webp",

    imageAltKey: "facility03",
  },

  {
    id: "facility-04",

    image: "/images/about/gallery/facility-04.webp",

    imageAltKey: "facility04",
  },
] as const satisfies readonly AboutGalleryItem[];
