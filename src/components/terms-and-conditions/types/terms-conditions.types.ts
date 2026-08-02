export type TermsConditionsSectionKey =
  | "acceptance"
  | "websitePurpose"
  | "medicalInformation"
  | "appointments"
  | "userResponsibilities"
  | "prohibitedUse"
  | "intellectualProperty"
  | "thirdPartyLinks"
  | "availability"
  | "limitation"
  | "privacy"
  | "changes"
  | "governing"
  | "contact";

export type TermsConditionsSection = Readonly<{
  key: TermsConditionsSectionKey;

  number: string;
}>;

export type TermsConditionsResolvedSection = TermsConditionsSection & {
  title: string;

  description?: string;

  paragraphs: readonly string[];

  items: readonly string[];
};

export type TermsConditionsContentProps = {
  sections: readonly TermsConditionsResolvedSection[];

  introduction: string;

  lastUpdatedLabel: string;

  lastUpdatedValue: string;

  contactLabel: string;

  contactEmail: string;

  contactHref: string;
};

export type TermsConditionsIconName = "document" | "check" | "mail" | "arrow";

export type TermsConditionsIconProps = {
  name: TermsConditionsIconName;

  className?: string;
};
