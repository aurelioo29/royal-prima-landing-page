"use client";

import { Icon } from "@iconify/react";

import type { FooterIconName, FooterIconProps } from "../types/footer.types";

const iconMap: Record<FooterIconName, string> = {
  location: "ep:location",
  phone: "fluent:call-24-regular",
  email: "bi:envelope",

  tiktok: "fa6-brands:tiktok",
  instagram: "fa6-brands:instagram",
  facebook: "fa6-brands:facebook-f",
};

export default function FooterIcon({
  name,
  className = "size-4",
}: FooterIconProps) {
  return <Icon icon={iconMap[name]} aria-hidden="true" className={className} />;
}
