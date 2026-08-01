export type TestimonialTranslationKey =
  | "outpatient"
  | "emergency"
  | "maternity"
  | "childCare"
  | "medicalCheckup"
  | "inpatient";

export type TestimonialItem = Readonly<{
  id: string;

  translationKey: TestimonialTranslationKey;

  initials: string;

  rating: number;
}>;

export type ResolvedTestimonialItem = TestimonialItem & {
  quote: string;

  name: string;

  role: string;

  service: string;
};

export type TestimonialSliderLabels = {
  previousSlide: string;

  nextSlide: string;

  firstSlide: string;

  lastSlide: string;

  slideLabel: string;
};

export type TestimonialSliderProps = {
  items: readonly ResolvedTestimonialItem[];

  labels: TestimonialSliderLabels;
};

export type TestimonialCardProps = {
  testimonial: ResolvedTestimonialItem;
};

export type TestimonialIconName = "quote" | "star" | "heart";

export type TestimonialIconProps = {
  name: TestimonialIconName;

  className?: string;
};
