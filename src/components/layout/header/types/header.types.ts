export type NavigationTranslationKey =
  | "home"
  | "about"
  | "findDoctor"
  | "services"
  | "departments"
  | "timetable"
  | "appointment"
  | "info"
  | "career"
  | "investorRelations"
  | "blog"
  | "contact"
  | "faq";

export type HeaderNavChild = {
  key: string;
  labelKey: NavigationTranslationKey;
  href: string;
};

export type HeaderNavItem = {
  key: string;
  labelKey: NavigationTranslationKey;
  href?: string;
  children?: readonly HeaderNavChild[];
};

export type HeaderIconName =
  | "search"
  | "menu"
  | "close"
  | "chevronDown"
  | "phone"
  | "email"
  | "location"
  | "arrow"
  | "facebook"
  | "instagram"
  | "tiktok";

export type HeaderContactKey = "phone" | "email" | "address";

export type HeaderContactItem = {
  key: HeaderContactKey;
  icon: HeaderIconName;
  value: string;
  href: string;
  external?: boolean;
};

export type HeaderSocialKey = "tiktok" | "instagram" | "facebook";

export type HeaderSocialItem = {
  key: HeaderSocialKey;
  icon: HeaderIconName;
  href: string;
};

export type HeaderProps = {
  logoSrc: string;
  variant?: string;
};

export type HeaderIconProps = {
  name: HeaderIconName;
  className?: string;
};

export type HeaderSearchProps = {
  open: boolean;
  onClose: () => void;
};

export type HeaderDrawerProps = {
  open: boolean;
  logoSrc: string;
  onClose: () => void;
};

export type HeaderDesktopNavProps = {
  pathname: string;
};
