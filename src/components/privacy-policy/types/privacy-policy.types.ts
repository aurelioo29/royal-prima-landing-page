export type PrivacyPolicySectionKey =
  | "introduction"
  | "dataCollected"
  | "dataUsage"
  | "cookies"
  | "dataSharing"
  | "dataSecurity"
  | "dataRetention"
  | "userRights"
  | "externalLinks"
  | "children"
  | "policyChanges"
  | "contact";

export type PrivacyPolicySection = Readonly<{
  key: PrivacyPolicySectionKey;

  number: string;
}>;

export type PrivacyPolicyResolvedSection = PrivacyPolicySection & {
  title: string;

  description?: string;

  paragraphs: readonly string[];

  items: readonly string[];
};

export type PrivacyPolicyContentProps = {
  sections: readonly PrivacyPolicyResolvedSection[];

  introduction: string;

  lastUpdatedLabel: string;

  lastUpdatedValue: string;

  contactLabel: string;

  contactHref: string;
};

export type PrivacyPolicyIconName = "shield" | "document" | "arrow" | "mail";

export type PrivacyPolicyIconProps = {
  name: PrivacyPolicyIconName;

  className?: string;
};
