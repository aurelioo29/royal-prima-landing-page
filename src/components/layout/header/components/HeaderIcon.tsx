"use client";

import { Icon } from "@iconify/react";

import type { HeaderIconName, HeaderIconProps } from "../types/header.types";

const iconMap: Record<HeaderIconName, string> = {
  search: "lucide:search",
  menu: "lucide:menu",
  close: "lucide:x",
  chevronDown: "lucide:chevron-down",
  phone: "lucide:phone",
  email: "lucide:mail",
  location: "lucide:map-pin",
  arrow: "lucide:arrow-up-right",

  tiktok: "fa6-brands:tiktok",
  instagram: "fa6-brands:instagram",
  facebook: "fa6-brands:facebook-f",
};

export default function HeaderIcon({
  name,
  className = "size-5",
}: HeaderIconProps) {
  return <Icon icon={iconMap[name]} aria-hidden="true" className={className} />;
}
