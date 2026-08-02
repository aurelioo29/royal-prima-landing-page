export { default as DoctorCard } from "./components/DoctorCard";

export { default as DoctorControls } from "./components/DoctorControls";

export { default as DoctorDetailContent } from "./components/DoctorDetailContent";

export { default as DoctorIcon } from "./components/DoctorIcon";

export { default as DoctorPagination } from "./components/DoctorPagination";

export { default as DoctorsPoster } from "./components/DoctorsPoster";

export {
  DOCTOR_CLINIC_KEYS,
  DOCTORS,
  doctorsPageConfig,
  getDoctorBySlug,
} from "./data/doctors.data";

export type {
  DoctorCardProps,
  DoctorClinicFilterKey,
  DoctorClinicKey,
  DoctorClinicOption,
  DoctorControlsProps,
  DoctorDetailContentProps,
  DoctorDetailLabels,
  DoctorEducationItem,
  DoctorIconName,
  DoctorIconProps,
  DoctorItem,
  DoctorPaginationProps,
  DoctorScheduleItem,
  DoctorSocialLinks,
  DoctorsPosterProps,
  DoctorViewMode,
  ResolvedDoctorItem,
} from "./types/doctors.types";
