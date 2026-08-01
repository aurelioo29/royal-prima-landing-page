export type QuickInfoIconName = "phone" | "emergency" | "location" | "arrow";

export type QuickInfoTranslationKey = "hotline" | "emergency" | "location";

export type QuickInfoItem = {
  key: QuickInfoTranslationKey;

  icon: QuickInfoIconName;

  href: string;

  external?: boolean;
};

export type QuickInfoIconProps = {
  name: QuickInfoIconName;

  className?: string;
};
