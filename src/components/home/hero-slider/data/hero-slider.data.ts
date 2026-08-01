import bannerOne from "../../../../../public/images/home/banner_1.webp";
import bannerTwo from "../../../../../public/images/home/banner_2.webp";

import bannerOneMobile from "../../../../../public/images/home/banner_1_mobile.webp";
import bannerTwoMobile from "../../../../../public/images/home/banner_2_mobile.webp";

import type { HeroSlideItem } from "../types/hero-slider.types";

export const HERO_SLIDES = [
  {
    id: "health-package",

    translationKey: "healthPackage",

    image: bannerOne,

    mobileImage: bannerOneMobile,

    href: "/appointments",

    desktopObjectPosition: "center center",

    mobileObjectPosition: "center center",

    autoplayDelay: 6000,
  },

  {
    id: "health-service",

    translationKey: "healthService",

    image: bannerTwo,

    mobileImage: bannerTwoMobile,

    href: "/doctors",

    desktopObjectPosition: "center center",

    mobileObjectPosition: "center center",

    autoplayDelay: 6000,
  },
] as const satisfies readonly HeroSlideItem[];
