export type TimetableDayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

export type TimetableDepartmentKey =
  | "pediatrics"
  | "obstetricsGynecology"
  | "cardiology"
  | "pulmonology"
  | "psychiatry"
  | "neurology";

export type TimetableDepartmentFilterKey = "all" | TimetableDepartmentKey;

export type TimetableEntry = {
  id: string;

  day: TimetableDayKey;
  department: TimetableDepartmentKey;

  startTime: string;
  endTime: string;

  doctors: readonly string[];
  room: string;
};

export type ResolvedTimetableEntry = TimetableEntry & {
  dayLabel: string;
  departmentLabel: string;
  timeLabel: string;
};

export type TimetableDayOption = {
  key: TimetableDayKey;
  label: string;
};

export type TimetableDepartmentOption = {
  key: TimetableDepartmentFilterKey;
  label: string;
  count: number;
};

export type TimetableIconName =
  | "arrow"
  | "calendar"
  | "clock"
  | "doctor"
  | "location"
  | "phone"
  | "info";

export type TimetableIconProps = {
  name: TimetableIconName;
  className?: string;
};

export type TimetableDepartmentFilterProps = {
  departments: readonly TimetableDepartmentOption[];

  activeDepartment: TimetableDepartmentFilterKey;
};

export type WeeklyTimetableLabels = {
  room: string;
  doctors: string;
  emptyTitle: string;
  emptyDescription: string;
};

export type WeeklyTimetableProps = {
  days: readonly TimetableDayOption[];
  entries: readonly ResolvedTimetableEntry[];

  labels: WeeklyTimetableLabels;
};

export type TimetablePosterSectionProps = {
  image: string;
  imageAlt: string;

  eyebrow: string;
  title: string;
  description: string;

  appointmentLabel: string;
  phoneLabel: string;
  phoneDisplay: string;
  phoneHref: string;
};
