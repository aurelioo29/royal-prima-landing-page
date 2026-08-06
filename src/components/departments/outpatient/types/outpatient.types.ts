export type OutpatientAdvantageKey =
  | "onlineQueue"
  | "specialists"
  | "medicalSupport"
  | "flexibleSchedule"
  | "insurance"
  | "organizedControl";

export type OutpatientClinicKey =
  | "internalMedicine"
  | "pediatrics"
  | "obgyn"
  | "neurology"
  | "cardiology"
  | "orthopedics";

export type OutpatientAccessKey =
  | "general"
  | "insurance"
  | "corporate"
  | "bpjs";

export type OutpatientRelatedDepartmentKey =
  | "emergency"
  | "inpatient"
  | "supporting"
  | "surgery";

export type OutpatientIconName =
  | "outpatient"
  | "queue"
  | "doctor"
  | "medical"
  | "calendar"
  | "insurance"
  | "control"
  | "internal"
  | "child"
  | "obgyn"
  | "brain"
  | "heart"
  | "bone"
  | "user"
  | "company"
  | "shield"
  | "phone"
  | "location"
  | "arrow"
  | "clock"
  | "hospital"
  | "check";

export type OutpatientIconProps = {
  name: OutpatientIconName;
  className?: string;
};

export type OutpatientAdvantageItem = Readonly<{
  key: OutpatientAdvantageKey;
  icon: OutpatientIconName;
}>;

export type OutpatientResolvedAdvantageItem = OutpatientAdvantageItem & {
  title: string;
  description: string;
};

export type OutpatientClinicItem = Readonly<{
  key: OutpatientClinicKey;
  icon: OutpatientIconName;
}>;

export type OutpatientResolvedClinicItem = OutpatientClinicItem & {
  title: string;
  description: string;
};

export type OutpatientAccessItem = Readonly<{
  key: OutpatientAccessKey;
  icon: OutpatientIconName;
}>;

export type OutpatientResolvedAccessItem = OutpatientAccessItem & {
  title: string;
  description: string;
};

export type OutpatientRelatedDepartmentItem = Readonly<{
  key: OutpatientRelatedDepartmentKey;
  href: string;
}>;

export type OutpatientResolvedRelatedDepartmentItem =
  OutpatientRelatedDepartmentItem & {
    title: string;
    description: string;
  };

export type OutpatientOverviewProps = {
  eyebrow: string;
  title: string;
  description: string;

  stats: readonly {
    value: string;
    label: string;
  }[];
};

export type OutpatientAdvantagesProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly OutpatientResolvedAdvantageItem[];
};

export type OutpatientClinicsProps = {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  items: readonly OutpatientResolvedClinicItem[];
};

export type OutpatientScheduleProps = {
  eyebrow: string;
  title: string;
  description: string;

  weekdayLabel: string;
  weekdayValue: string;
  saturdayLabel: string;
  saturdayValue: string;
  sundayLabel: string;
  sundayValue: string;

  note: string;
  buttonLabel: string;
  buttonHref: string;
};

export type OutpatientAccessProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly OutpatientResolvedAccessItem[];
  loungeTitle: string;
  loungeDescription: string;
};

export type OutpatientInfoProps = {
  eyebrow: string;
  title: string;
  description: string;

  scheduleLabel: string;
  scheduleValue: string;

  registrationLabel: string;
  registrationValue: string;

  patientLabel: string;
  patientValue: string;

  phoneLabel: string;
  phoneValue: string;
  phoneHref: string;
  contactLabel: string;
};

export type OutpatientPosterProps = {
  image: string;
  imageAlt: string;

  eyebrow: string;
  title: string;
  description: string;

  scheduleLabel: string;
  scheduleHref: string;

  contactLabel: string;
  contactHref: string;
};

export type OutpatientRelatedDepartmentsProps = {
  eyebrow: string;
  title: string;
  description: string;
  viewLabel: string;
  items: readonly OutpatientResolvedRelatedDepartmentItem[];
};
