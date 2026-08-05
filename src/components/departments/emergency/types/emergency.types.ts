export type EmergencyConditionKey =
  | "breathing"
  | "chestPain"
  | "unconscious"
  | "bleeding"
  | "seizure"
  | "accident"
  | "stroke"
  | "allergy";

export type EmergencyFlowKey =
  | "arrival"
  | "triage"
  | "doctor"
  | "treatment"
  | "followUp";

export type EmergencyFacilityKey =
  | "triage"
  | "resuscitation"
  | "observation"
  | "laboratory"
  | "radiology"
  | "pharmacy";

export type EmergencyRelatedDepartmentKey =
  | "inpatient"
  | "radiology"
  | "laboratory"
  | "surgery";

export type EmergencyIconName =
  | "emergency"
  | "clock"
  | "phone"
  | "location"
  | "arrow"
  | "shield"
  | "triage"
  | "doctor"
  | "treatment"
  | "hospital"
  | "breathing"
  | "heart"
  | "unconscious"
  | "bleeding"
  | "seizure"
  | "accident"
  | "stroke"
  | "allergy"
  | "observation"
  | "laboratory"
  | "radiology"
  | "pharmacy";

export type EmergencyIconProps = {
  name: EmergencyIconName;
  className?: string;
};

export type EmergencyConditionItem = Readonly<{
  key: EmergencyConditionKey;
  icon: EmergencyIconName;
}>;

export type EmergencyResolvedConditionItem = EmergencyConditionItem & {
  title: string;
  description: string;
};

export type EmergencyFlowItem = Readonly<{
  key: EmergencyFlowKey;
  step: string;
  icon: EmergencyIconName;
}>;

export type EmergencyResolvedFlowItem = EmergencyFlowItem & {
  title: string;
  description: string;
};

export type EmergencyFacilityItem = Readonly<{
  key: EmergencyFacilityKey;
  icon: EmergencyIconName;
}>;

export type EmergencyResolvedFacilityItem = EmergencyFacilityItem & {
  title: string;
  description: string;
};

export type EmergencyRelatedDepartmentItem = Readonly<{
  key: EmergencyRelatedDepartmentKey;
  href: string;
}>;

export type EmergencyResolvedRelatedDepartmentItem =
  EmergencyRelatedDepartmentItem & {
    title: string;
    description: string;
  };

export type EmergencyOverviewProps = {
  eyebrow: string;
  title: string;
  description: string;

  stats: readonly {
    value: string;
    label: string;
  }[];
};

export type EmergencyConditionsProps = {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  items: readonly EmergencyResolvedConditionItem[];
};

export type EmergencyFlowProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly EmergencyResolvedFlowItem[];
};

export type EmergencyFacilitiesProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly EmergencyResolvedFacilityItem[];
  disclaimer: string;
};

export type EmergencyTriageProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: readonly string[];
};

export type EmergencyInfoProps = {
  eyebrow: string;
  title: string;
  description: string;

  openingLabel: string;
  openingValue: string;

  locationLabel: string;
  locationValue: string;

  phoneLabel: string;
  phoneValue: string;
  phoneHref: string;

  contactLabel: string;
};

export type EmergencyPosterProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  phoneLabel: string;
  phoneHref: string;
  locationLabel: string;
  locationHref: string;
};

export type EmergencyRelatedDepartmentsProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly EmergencyResolvedRelatedDepartmentItem[];
  viewLabel: string;
};

export type EmergencyFacilityGalleryItem = Readonly<{
  id: string;

  image: string;

  imageAlt: string;

  title?: string;
}>;

export type EmergencyFacilityGalleryProps = {
  eyebrow: string;

  title: string;

  description: string;

  items: readonly EmergencyFacilityGalleryItem[];
};
