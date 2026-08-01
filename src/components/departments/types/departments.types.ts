export type DepartmentTranslationKey =
  | "emergency"
  | "outpatient"
  | "inpatient"
  | "supporting"
  | "centralSurgery";

export type DepartmentIconName =
  | "emergency"
  | "outpatient"
  | "inpatient"
  | "supporting"
  | "centralSurgery"
  | "arrow"
  | "calendar"
  | "clock"
  | "check"
  | "phone";

export type DepartmentLinkType = "internal" | "anchor";

export type DepartmentItem = Readonly<{
  id: string;

  translationKey: DepartmentTranslationKey;

  icon: DepartmentIconName;

  href: string;

  linkType: DepartmentLinkType;

  featured?: boolean;
}>;

export type ResolvedDepartmentItem = DepartmentItem & {
  eyebrow: string;

  title: string;

  description: string;

  schedule: string;

  services: readonly string[];

  actionLabel: string;
};

export type DepartmentIconProps = {
  name: DepartmentIconName;

  className?: string;
};

export type DepartmentCardProps = {
  department: ResolvedDepartmentItem;
};

export type DepartmentsPosterProps = {
  image: string;

  imageAlt: string;

  eyebrow: string;

  title: string;

  description: string;

  appointmentLabel: string;

  timetableLabel: string;
};
