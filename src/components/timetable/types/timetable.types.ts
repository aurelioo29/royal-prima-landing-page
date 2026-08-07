export type TimetableDayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

export type TimetableCategory = "jkn" | "nonjkn";

export type TimetableEntry = {
  id: string;

  day: TimetableDayKey;

  /*
   * Sekarang berisi location_id HIS,
   * bukan hardcoded "pediatrics", dll.
   */
  department: string;

  departmentLabel: string;

  startTime: string;
  endTime: string;

  doctors: readonly string[];

  room?: string | null;
};

export type ResolvedTimetableEntry = TimetableEntry & {
  dayLabel: string;

  timeLabel: string;
};

export type TimetableDayOption = {
  key: TimetableDayKey;

  label: string;

  categoryLabel: string;
};

export type TimetableDepartmentOption = {
  key: string;
  label: string;
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

  activeDepartment: string | null;

  category: TimetableCategory;
};

export type TimetableCategoryFilterProps = {
  activeCategory: TimetableCategory;

  activeDepartment: string | null;

  generalLabel: string;

  jknLabel: string;
};

export type WeeklyTimetableLabels = {
  room: string;

  doctors: string;

  noSchedule: string;

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
