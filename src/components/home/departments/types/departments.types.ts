export type DepartmentTranslationKey =
  | "emergency"
  | "outpatient"
  | "inpatient"
  | "supporting"
  | "surgery";

export type DepartmentIconName =
  | "emergency"
  | "outpatient"
  | "inpatient"
  | "supporting"
  | "surgery"
  | "arrow";

export type DepartmentAccent = "cyan" | "blue" | "teal" | "purple" | "gold";

export type DepartmentItem = Readonly<{
  id: string;

  translationKey: DepartmentTranslationKey;

  icon: DepartmentIconName;

  href: string;

  accent: DepartmentAccent;

  featured?: boolean;
}>;

export type ResolvedDepartmentItem = DepartmentItem & {
  title: string;

  description: string;

  schedule?: string;

  actionLabel: string;
};

export type DepartmentIconProps = {
  name: DepartmentIconName;

  className?: string;
};

export type DepartmentCardProps = {
  department: ResolvedDepartmentItem;
};
