export type SurgeryAdvantageKey =
  | "medicalTeam"
  | "modernEquipment"
  | "sterilization"
  | "emergency";

export type SurgeryServiceKey =
  | "planned"
  | "emergency"
  | "specialist"
  | "anesthesia";

export type SurgeryGalleryKey =
  | "operatingRoom"
  | "surgicalTeam"
  | "equipment"
  | "sterilization";

export type SurgeryRelatedDepartmentKey =
  | "emergency"
  | "inpatient"
  | "supporting"
  | "outpatient";

export type SurgeryIconName =
  | "surgery"
  | "doctor"
  | "technology"
  | "sterile"
  | "clock"
  | "planned"
  | "emergency"
  | "specialist"
  | "anesthesia"
  | "shield"
  | "check"
  | "phone"
  | "location"
  | "arrow"
  | "hospital";

export type SurgeryIconProps = {
  name: SurgeryIconName;
  className?: string;
};

export type SurgeryAdvantageItem = Readonly<{
  key: SurgeryAdvantageKey;
  icon: SurgeryIconName;
}>;

export type SurgeryResolvedAdvantageItem = SurgeryAdvantageItem & {
  title: string;
  description: string;
};

export type SurgeryServiceItem = Readonly<{
  key: SurgeryServiceKey;
  icon: SurgeryIconName;
}>;

export type SurgeryResolvedServiceItem = SurgeryServiceItem & {
  title: string;
  description: string;
};

export type SurgeryGalleryItem = Readonly<{
  key: SurgeryGalleryKey;
  image: string;
  imagePosition?: string;
}>;

export type SurgeryResolvedGalleryItem = SurgeryGalleryItem & {
  title: string;
  imageAlt: string;
};

export type SurgeryRelatedDepartmentItem = Readonly<{
  key: SurgeryRelatedDepartmentKey;
  href: string;
}>;

export type SurgeryResolvedRelatedDepartmentItem =
  SurgeryRelatedDepartmentItem & {
    title: string;
    description: string;
  };

export type SurgeryOverviewProps = {
  eyebrow: string;
  title: string;
  description: string;

  stats: readonly {
    value: string;
    label: string;
  }[];
};

export type SurgeryAdvantagesProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly SurgeryResolvedAdvantageItem[];
};

export type SurgeryServicesProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly SurgeryResolvedServiceItem[];
};

export type SurgeryGalleryProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly SurgeryResolvedGalleryItem[];
};

export type SurgerySafetyProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly string[];
};

export type SurgeryInfoProps = {
  eyebrow: string;
  title: string;
  description: string;

  servicesLabel: string;
  servicesValue: string;

  emergencyLabel: string;
  emergencyValue: string;

  teamLabel: string;
  teamValue: string;

  phoneLabel: string;
  phoneValue: string;
  phoneHref: string;

  actionLabel: string;
};

export type SurgeryPosterProps = {
  image: string;
  imageAlt: string;

  eyebrow: string;
  title: string;
  description: string;

  contactLabel: string;
  contactHref: string;

  locationLabel: string;
  locationHref: string;
};

export type SurgeryRelatedDepartmentsProps = {
  eyebrow: string;
  title: string;
  description: string;
  viewLabel: string;
  items: readonly SurgeryResolvedRelatedDepartmentItem[];
};
