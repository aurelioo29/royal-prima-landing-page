export type InpatientAdvantageKey =
  | "roomChoice"
  | "modernFacilities"
  | "cleanliness"
  | "professionals"
  | "integration"
  | "payment";

export type InpatientRoomKey =
  | "executive"
  | "svip"
  | "vip"
  | "classOne"
  | "classTwo"
  | "classThree";

export type InpatientSupportKey =
  | "specialistDoctors"
  | "nursing"
  | "emergency"
  | "criticalCare"
  | "maternity"
  | "physiotherapy";

export type InpatientRelatedDepartmentKey =
  | "emergency"
  | "outpatient"
  | "supporting"
  | "surgery";

export type InpatientIconName =
  | "bed"
  | "rooms"
  | "comfort"
  | "clean"
  | "professional"
  | "integrated"
  | "payment"
  | "doctor"
  | "nurse"
  | "emergency"
  | "critical"
  | "maternity"
  | "physiotherapy"
  | "phone"
  | "location"
  | "arrow"
  | "check"
  | "hospital"
  | "shield";

export type InpatientIconProps = {
  name: InpatientIconName;
  className?: string;
};

export type InpatientAdvantageItem = Readonly<{
  key: InpatientAdvantageKey;
  icon: InpatientIconName;
}>;

export type InpatientResolvedAdvantageItem = InpatientAdvantageItem & {
  title: string;
  description: string;
};

export type InpatientRoomItem = Readonly<{
  key: InpatientRoomKey;
  image: string;
  imagePosition?: string;
}>;

export type InpatientResolvedRoomItem = InpatientRoomItem & {
  title: string;
  description: string;
  facilities: readonly string[];
  imageAlt: string;
};

export type InpatientSupportItem = Readonly<{
  key: InpatientSupportKey;
  icon: InpatientIconName;
}>;

export type InpatientResolvedSupportItem = InpatientSupportItem & {
  title: string;
  description: string;
};

export type InpatientRelatedDepartmentItem = Readonly<{
  key: InpatientRelatedDepartmentKey;
  href: string;
}>;

export type InpatientResolvedRelatedDepartmentItem =
  InpatientRelatedDepartmentItem & {
    title: string;
    description: string;
  };

export type InpatientOverviewProps = {
  eyebrow: string;
  title: string;
  description: string;

  stats: readonly {
    value: string;
    label: string;
  }[];
};

export type InpatientAdvantagesProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly InpatientResolvedAdvantageItem[];
};

export type InpatientRoomsProps = {
  eyebrow: string;
  title: string;
  description: string;
  facilityLabel: string;
  disclaimer: string;
  items: readonly InpatientResolvedRoomItem[];
};

export type InpatientSupportProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly InpatientResolvedSupportItem[];
};

export type InpatientInfoProps = {
  eyebrow: string;
  title: string;
  description: string;

  roomLabel: string;
  roomValue: string;

  patientLabel: string;
  patientValue: string;

  availabilityLabel: string;
  availabilityValue: string;

  phoneLabel: string;
  phoneValue: string;
  phoneHref: string;

  contactLabel: string;
};

export type InpatientPosterProps = {
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

export type InpatientRelatedDepartmentsProps = {
  eyebrow: string;
  title: string;
  description: string;
  viewLabel: string;
  items: readonly InpatientResolvedRelatedDepartmentItem[];
};
