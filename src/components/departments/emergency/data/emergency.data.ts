import type {
  EmergencyConditionItem,
  EmergencyFacilityGalleryItem,
  EmergencyFacilityItem,
  EmergencyFlowItem,
  EmergencyRelatedDepartmentItem,
} from "../types/emergency.types";

export const emergencyPageConfig = {
  heroImage: "/images/departments/emergency/emergency-hero.webp",

  posterImage: "/images/departments/emergency/emergency-poster.webp",

  phone: {
    display: "(061) 888 13182",
    href: "tel:+626188813182",
  },

  locationHref: "/contact",
} as const;

export const EMERGENCY_CONDITIONS = [
  {
    key: "breathing",
    icon: "breathing",
  },

  {
    key: "chestPain",
    icon: "heart",
  },

  {
    key: "unconscious",
    icon: "unconscious",
  },

  {
    key: "bleeding",
    icon: "bleeding",
  },

  {
    key: "seizure",
    icon: "seizure",
  },

  {
    key: "accident",
    icon: "accident",
  },

  {
    key: "stroke",
    icon: "stroke",
  },

  {
    key: "allergy",
    icon: "allergy",
  },
] as const satisfies readonly EmergencyConditionItem[];

export const EMERGENCY_FLOW = [
  {
    key: "arrival",
    step: "01",
    icon: "emergency",
  },

  {
    key: "triage",
    step: "02",
    icon: "triage",
  },

  {
    key: "doctor",
    step: "03",
    icon: "doctor",
  },

  {
    key: "treatment",
    step: "04",
    icon: "treatment",
  },

  {
    key: "followUp",
    step: "05",
    icon: "hospital",
  },
] as const satisfies readonly EmergencyFlowItem[];

/**
 * Pastikan fasilitas di bawah diverifikasi kembali
 * dengan kondisi aktual IGD RSU Royal Prima sebelum production.
 */
export const EMERGENCY_FACILITIES = [
  {
    key: "triage",
    icon: "triage",
  },

  {
    key: "resuscitation",
    icon: "treatment",
  },

  {
    key: "observation",
    icon: "observation",
  },

  {
    key: "laboratory",
    icon: "laboratory",
  },

  {
    key: "radiology",
    icon: "radiology",
  },

  {
    key: "pharmacy",
    icon: "pharmacy",
  },
] as const satisfies readonly EmergencyFacilityItem[];

export const EMERGENCY_RELATED_DEPARTMENTS = [
  {
    key: "inpatient",
    href: "/departments/inpatient",
  },

  {
    key: "radiology",
    href: "/departments/supporting",
  },

  {
    key: "laboratory",
    href: "/departments/supporting",
  },

  {
    key: "surgery",
    href: "/departments/surgery",
  },
] as const satisfies readonly EmergencyRelatedDepartmentItem[];

export const EMERGENCY_FACILITY_GALLERY = [
  {
    id: "emergency-facility-01",

    image:
      "/images/departments/emergency/facilities/emergency-facility-01.webp",

    imageAlt: "Area pelayanan Instalasi Gawat Darurat RSU Royal Prima Medan",

    title: "Area Pelayanan IGD",
  },

  {
    id: "emergency-facility-02",

    image:
      "/images/departments/emergency/facilities/emergency-facility-02.webp",

    imageAlt: "Area triase Instalasi Gawat Darurat RSU Royal Prima Medan",

    title: "Area Triase",
  },

  {
    id: "emergency-facility-03",

    image:
      "/images/departments/emergency/facilities/emergency-facility-03.webp",

    imageAlt: "Area observasi Instalasi Gawat Darurat RSU Royal Prima Medan",

    title: "Area Observasi",
  },

  {
    id: "emergency-facility-04",

    image:
      "/images/departments/emergency/facilities/emergency-facility-04.webp",

    imageAlt: "Fasilitas medis Instalasi Gawat Darurat RSU Royal Prima Medan",

    title: "Fasilitas Medis",
  },

  {
    id: "emergency-facility-05",

    image:
      "/images/departments/emergency/facilities/emergency-facility-05.webp",

    imageAlt:
      "Lingkungan pelayanan Instalasi Gawat Darurat RSU Royal Prima Medan",

    title: "Lingkungan Pelayanan",
  },
] as const satisfies readonly EmergencyFacilityGalleryItem[];
