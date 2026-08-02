export type DoctorClinicKey =
  | "pediatrics"
  | "pediatricHematologyOncology"
  | "internalMedicine"
  | "endocrineMetabolicDiabetes"
  | "kidneyHypertension"
  | "gastroenterohepatology"
  | "rheumatology"
  | "medicalHematologyOncology"
  | "obstetricsGynecology"
  | "gynecologicOncology";

export type DoctorClinicFilterKey = "all" | DoctorClinicKey;

export type DoctorViewMode = "card" | "list";

export type DoctorScheduleItem = Readonly<{
  label: string;
  days: string;
  hours: string;
}>;

export type DoctorEducationItem = Readonly<{
  title: string;
  subtitle?: string;
}>;

export type DoctorSocialLinks = Readonly<{
  facebook?: string;
  linkedin?: string;
  twitter?: string;
}>;

export type DoctorItem = Readonly<{
  id: string;

  slug: string;

  name: string;

  specialty: string;

  clinicKey: DoctorClinicKey;

  clinicLabel: string;

  description: string;

  image: string;

  imageAlt: string;

  appointmentHref?: string;

  schedules: readonly DoctorScheduleItem[];

  education: readonly DoctorEducationItem[];

  experiences: readonly string[];

  awards: readonly string[];

  socialLinks?: DoctorSocialLinks;
}>;

export type ResolvedDoctorItem = DoctorItem & {
  clinicLabel: string;
};

export type DoctorClinicOption = Readonly<{
  key: DoctorClinicFilterKey;

  label: string;

  count: number;
}>;

export type DoctorCardProps = {
  doctor: ResolvedDoctorItem;

  view: DoctorViewMode;

  profileLabel: string;
};

export type DoctorControlsProps = {
  clinics: readonly DoctorClinicOption[];

  activeClinic: DoctorClinicFilterKey;

  view: DoctorViewMode;

  resultLabel: string;

  labels: {
    clinic: string;

    card: string;

    list: string;
  };
};

export type DoctorPaginationProps = {
  currentPage: number;

  totalPages: number;

  activeClinic: DoctorClinicFilterKey;

  view: DoctorViewMode;

  previousLabel: string;

  nextLabel: string;
};

export type DoctorsPosterProps = {
  image: string;

  imageAlt: string;

  eyebrow: string;

  title: string;

  description: string;

  appointmentLabel: string;

  timetableLabel: string;
};

export type DoctorDetailLabels = {
  home: string;

  doctors: string;

  appointment: string;

  backToDoctors: string;

  schedules: string;

  education: string;

  experiences: string;

  awards: string;
};

export type DoctorDetailContentProps = {
  doctor: DoctorItem;

  labels: DoctorDetailLabels;
};

export type DoctorIconName =
  | "doctor"
  | "calendar"
  | "clock"
  | "grid"
  | "list"
  | "arrow"
  | "arrowLeft"
  | "arrowRight"
  | "arrow-left"
  | "arrow-right"
  | "education"
  | "briefcase"
  | "experience"
  | "award"
  | "facebook"
  | "linkedin"
  | "twitter";

export type DoctorIconProps = {
  name: DoctorIconName;

  className?: string;
};
