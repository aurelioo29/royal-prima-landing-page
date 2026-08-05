import type { EmergencyIconProps } from "../types/emergency.types";

export default function EmergencyIcon({
  name,
  className = "size-5",
}: EmergencyIconProps) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "emergency":
      return (
        <svg {...props}>
          <path
            d="M12 3v18M3 12h18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          <path
            d="m5.6 5.6 12.8 12.8M18.4 5.6 5.6 18.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "clock":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M12 7v5l3 2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "phone":
      return (
        <svg {...props}>
          <path
            d="M8.3 4H5.7C4.8 4 4 4.8 4.1 5.7c.8 7 6.4 12.6 13.4 13.4.9.1 1.7-.7 1.7-1.6v-2.6l-3.5-1.2-1.1 2c-3-1.3-5.5-3.7-6.8-6.8l2-1.1L8.3 4Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "location":
      return (
        <svg {...props}>
          <path
            d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <circle
            cx="12"
            cy="10"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      );

    case "arrow":
      return (
        <svg {...props}>
          <path
            d="M5 12h14m-6-6 6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "shield":
      return (
        <svg {...props}>
          <path
            d="M12 3 5 6v5c0 4.8 2.8 8.4 7 10 4.2-1.6 7-5.2 7-10V6l-7-3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />

          <path
            d="m9 12 2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "triage":
      return (
        <svg {...props}>
          <path d="M6 4h12v16H6V4Z" stroke="currentColor" strokeWidth="1.7" />

          <path
            d="M9 8h6M9 12h6M9 16h4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "doctor":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="7"
            r="3.5"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M5 21a7 7 0 0 1 14 0"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <path
            d="M17 13v4M15 15h4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "treatment":
      return (
        <svg {...props}>
          <path
            d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "hospital":
      return (
        <svg {...props}>
          <path
            d="M5 21V5h10v16M15 10h4v11M8 8h4M8 12h4M8 16h4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <path
            d="M10 3v4M8 5h4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "breathing":
      return (
        <svg {...props}>
          <path
            d="M11 5v7c-1-3-3-5-5-5-2.5 0-3 3-3 5 0 4 2 7 6 7 1.6 0 3-1.3 3-3V5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M13 5v7c1-3 3-5 5-5 2.5 0 3 3 3 5 0 4-2 7-6 7-1.6 0-3-1.3-3-3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "heart":
      return (
        <svg {...props}>
          <path
            d="M20.8 5.8a5 5 0 0 0-7.1 0L12 7.5l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.1a5 5 0 0 0 0-7.1Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "unconscious":
      return (
        <svg {...props}>
          <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.7" />

          <path
            d="M3 20c.5-4 2.5-7 6-7s5.5 3 6 7M16 6h5M18 3l3 3-3 3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "bleeding":
      return (
        <svg {...props}>
          <path
            d="M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      );

    case "seizure":
      return (
        <svg {...props}>
          <path
            d="M12 3c-4.4 0-8 3.6-8 8 0 3 1.7 5.6 4.2 7H12v3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <path
            d="m14 8-2 3h3l-2 4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "accident":
      return (
        <svg {...props}>
          <path
            d="M5 17h14M7 17l1-6h8l1 6M9 11l1-4h4l1 4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle
            cx="8"
            cy="18"
            r="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          <circle
            cx="16"
            cy="18"
            r="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "stroke":
      return (
        <svg {...props}>
          <path
            d="M12 3a7 7 0 0 0-7 7c0 3 1.7 5.5 4 6.7V21h6v-4.3c2.3-1.2 4-3.7 4-6.7a7 7 0 0 0-7-7Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="m13 7-3 4h3l-2 4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "allergy":
      return (
        <svg {...props}>
          <path
            d="M12 3v18M6.5 5.5l11 13M17.5 5.5l-11 13"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "observation":
      return (
        <svg {...props}>
          <path
            d="M3 15h18M5 15V9h6c2 0 4 1.5 4 4v2M5 19v-4M19 19v-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );

    case "laboratory":
      return (
        <svg {...props}>
          <path
            d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path d="M8 15h8" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );

    case "radiology":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="12"
            r="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          <path
            d="M12 4c2 0 3.5 1.5 4 3.5L14 10M18.9 15c-1 1.7-3 2.3-5 1.8L13 14M5.1 15c-1-1.7-.5-3.8 1-5.2L10 10"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "pharmacy":
      return (
        <svg {...props}>
          <path
            d="M8 3h8M9 3v4l-3 4v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8l-3-4V3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />

          <path
            d="M9 14h6M12 11v6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return null;
  }
}
