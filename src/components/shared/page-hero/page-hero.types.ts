import type { ReactNode } from "react";

export type PageHeroAction = {
  label: string;
  href: string;
  icon?: ReactNode;
  ariaLabel?: string;
  external?: boolean;
};

export type PageHeroBadge = {
  eyebrow: string;
  value: string;
  icon?: ReactNode;
};

export type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;

  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;

  primaryAction?: PageHeroAction;
  secondaryAction?: PageHeroAction;

  badge?: PageHeroBadge;

  priority?: boolean;
};
