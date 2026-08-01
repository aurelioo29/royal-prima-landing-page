export type FooterIconName =
  | "location"
  | "phone"
  | "email"
  | "facebook"
  | "instagram"
  | "tiktok";

export type FooterContactKey = "address" | "phone" | "email";

export type FooterMenuGroupKey = "hospital" | "information";

export type FooterMenuItemKey =
  | "about"
  | "departments"
  | "doctors"
  | "timetable"
  | "appointment"
  | "testimonials"
  | "blog"
  | "career"
  | "investorRelations"
  | "contact"
  | "faq"
  | "privacy"
  | "terms";

export type FooterSocialKey = "tiktok" | "instagram" | "facebook";

export type FooterContactItem = {
  key: FooterContactKey;
  icon: FooterIconName;
  href: string;
  external?: boolean;
};

export type FooterMenuItem = {
  key: FooterMenuItemKey;
  href: string;
};

export type FooterMenuGroup = {
  key: FooterMenuGroupKey;
  items: readonly FooterMenuItem[];
};

export type FooterSocialItem = {
  key: FooterSocialKey;
  icon: FooterIconName;
  href: string;
};

export type ResolvedFooterContactItem = FooterContactItem & {
  label: string;
};

export type ResolvedFooterMenuItem = FooterMenuItem & {
  label: string;
};

export type ResolvedFooterMenuGroup = {
  key: FooterMenuGroupKey;
  title: string;
  items: ResolvedFooterMenuItem[];
};

export type ResolvedFooterSocialItem = FooterSocialItem & {
  label: string;
};

export type FooterIconProps = {
  name: FooterIconName;
  className?: string;
};

export type FooterContactProps = {
  items: readonly ResolvedFooterContactItem[];
};

export type FooterMenuProps = {
  group: ResolvedFooterMenuGroup;
};

export type FooterSocialProps = {
  items: readonly ResolvedFooterSocialItem[];
  ariaLabel: string;
};

export type FooterNewsletterProps = {
  title: string;
  description: string;
  emailLabel: string;
  placeholder: string;
  buttonLabel: string;
  successMessage: string;
};

export type FooterBackToTopProps = {
  label: string;
};
