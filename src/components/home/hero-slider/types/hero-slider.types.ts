import type { StaticImageData } from "next/image";

export type HeroSlideTranslationKey = "healthPackage" | "healthService";

export type HeroSlideItem = {
  id: string;

  translationKey: HeroSlideTranslationKey;

  /**
   * Banner untuk tablet dan desktop.
   */
  image: StaticImageData;

  /**
   * Banner khusus mobile.
   * Jika tidak tersedia, gambar desktop akan dipakai
   * dengan object-contain agar tidak terpotong parah.
   */
  mobileImage?: StaticImageData;

  /**
   * Seluruh area banner dapat diklik.
   */
  href?: string;

  desktopObjectPosition?: string;
  mobileObjectPosition?: string;

  autoplayDelay?: number;
};
