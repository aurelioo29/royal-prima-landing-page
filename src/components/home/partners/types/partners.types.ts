import type { StaticImageData } from "next/image";

export type PartnerItem = Readonly<{
  id: string;

  image: string | StaticImageData;

  imageAlt: string;

  href?: string;

  /**
   * Gunakan background gelap untuk logo putih.
   */
  darkBackground?: boolean;
}>;

export type PartnerMarqueeDirection = "left" | "right";

export type PartnerCardProps = {
  partner: PartnerItem;

  /**
   * Item duplikat marquee dibuat non-interaktif
   * agar link tidak muncul dua kali pada keyboard.
   */
  interactive?: boolean;
};

export type PartnerMarqueeRowProps = {
  partners: readonly PartnerItem[];

  direction: PartnerMarqueeDirection;

  duration: number;
};

export type HomePartnersProps = {
  data?: readonly PartnerItem[];

  topRowDuration?: number;

  bottomRowDuration?: number;
};
