export type CareerVacancyStatus = "open" | "closed";

export type CareerVacancy = {
  id: string;
  slug: string;

  title: string;
  department: string;
  employmentType: string;
  location: string;

  status: CareerVacancyStatus;

  posterImage: string;

  benefits: readonly string[];
  requirements: readonly string[];

  application: {
    email: string;
    emailSubject: string;
    formUrl: string;
  };
};

export type CareerIconName =
  | "briefcase"
  | "location"
  | "email"
  | "document"
  | "arrow"
  | "check"
  | "external";

export type CareerIconProps = {
  name: CareerIconName;
  className?: string;
};

export type CareerVacancyCardLabels = {
  openStatus: string;
  closedStatus: string;

  requirements: string;
  benefits: string;

  emailLabel: string;
  formLabel: string;
  posterLabel: string;

  emailSubjectLabel: string;
};

export type CareerVacancyCardProps = {
  vacancy: CareerVacancy;
  labels: CareerVacancyCardLabels;
};
