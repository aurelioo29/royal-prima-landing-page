export type SupportingFacilityKey =
  | "emergency"
  | "laboratory"
  | "radiology"
  | "criticalCare"
  | "endoscopy"
  | "physiotherapy";

export type SupportingAdvantageKey =
  | "technology"
  | "accuracy"
  | "experts"
  | "education"
  | "integration"
  | "insurance";

export type SupportingGalleryKey =
  | "mri"
  | "ctScan"
  | "xray"
  | "dialysis"
  | "endoscopy"
  | "laboratory";

export type SupportingRelatedDepartmentKey =
  | "emergency"
  | "outpatient"
  | "inpatient"
  | "surgery";

export type SupportingIconName =
  | "supporting"
  | "emergency"
  | "laboratory"
  | "radiology"
  | "critical"
  | "endoscopy"
  | "physiotherapy"
  | "technology"
  | "accuracy"
  | "doctor"
  | "education"
  | "integrated"
  | "insurance"
  | "mri"
  | "ct"
  | "xray"
  | "dialysis"
  | "phone"
  | "location"
  | "arrow"
  | "clock"
  | "check";

export type SupportingIconProps = {
  name: SupportingIconName;
  className?: string;
};

export type SupportingFacilityItem = Readonly<{
  key: SupportingFacilityKey;
  icon: SupportingIconName;
}>;

export type SupportingResolvedFacilityItem = SupportingFacilityItem & {
  title: string;
  description: string;
};

export type SupportingAdvantageItem = Readonly<{
  key: SupportingAdvantageKey;
  icon: SupportingIconName;
}>;

export type SupportingResolvedAdvantageItem = SupportingAdvantageItem & {
  title: string;
  description: string;
};

export type SupportingGalleryItem = Readonly<{
  key: SupportingGalleryKey;
  image: string;
  imagePosition?: string;
}>;

export type SupportingResolvedGalleryItem = SupportingGalleryItem & {
  title: string;
  description: string;
  imageAlt: string;
};

export type SupportingRelatedDepartmentItem = Readonly<{
  key: SupportingRelatedDepartmentKey;
  href: string;
}>;

export type SupportingResolvedRelatedDepartmentItem =
  SupportingRelatedDepartmentItem & {
    title: string;
    description: string;
  };

export type SupportingOverviewProps = {
  eyebrow: string;
  title: string;
  description: string;

  stats: readonly {
    value: string;
    label: string;
  }[];
};

export type SupportingFacilitiesProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly SupportingResolvedFacilityItem[];
};

export type SupportingAdvantagesProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly SupportingResolvedAdvantageItem[];
};

export type SupportingGalleryProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly SupportingResolvedGalleryItem[];
};

export type SupportingInfoProps = {
  eyebrow: string;
  title: string;
  description: string;

  serviceLabel: string;
  serviceValue: string;

  integrationLabel: string;
  integrationValue: string;

  guaranteeLabel: string;
  guaranteeValue: string;

  phoneLabel: string;
  phoneValue: string;
  phoneHref: string;
  contactLabel: string;
};

export type SupportingPosterProps = {
  image: string;
  imageAlt: string;

  eyebrow: string;
  title: string;
  description: string;

  contactLabel: string;
  contactHref: string;

  doctorLabel: string;
  doctorHref: string;
};

export type SupportingRelatedDepartmentsProps = {
  eyebrow: string;
  title: string;
  description: string;
  viewLabel: string;
  items: readonly SupportingResolvedRelatedDepartmentItem[];
};
