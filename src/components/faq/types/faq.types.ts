export type FaqCategoryKey =
  | "general"
  | "appointment"
  | "doctor"
  | "bpjs"
  | "inpatient"
  | "emergency";

export type FaqIconName =
  | "question"
  | "search"
  | "general"
  | "appointment"
  | "doctor"
  | "bpjs"
  | "inpatient"
  | "emergency"
  | "phone"
  | "message"
  | "arrow"
  | "chevron";

export type FaqIconProps = {
  name: FaqIconName;
  className?: string;
};

export type FaqCategoryItem = Readonly<{
  key: FaqCategoryKey;
  icon: FaqIconName;
}>;

export type FaqResolvedCategoryItem = FaqCategoryItem & {
  label: string;
};

export type FaqItem = Readonly<{
  id: string;
  category: FaqCategoryKey;
}>;

export type FaqResolvedItem = FaqItem & {
  question: string;
  answer: string;
};

export type FaqDirectoryProps = {
  eyebrow: string;
  title: string;
  description: string;

  searchPlaceholder: string;
  allLabel: string;
  emptyTitle: string;
  emptyDescription: string;

  categories: readonly FaqResolvedCategoryItem[];
  items: readonly FaqResolvedItem[];
};

export type FaqContactProps = {
  eyebrow: string;
  title: string;
  description: string;

  primaryLabel: string;
  primaryHref: string;

  secondaryLabel: string;
  secondaryHref: string;
};
