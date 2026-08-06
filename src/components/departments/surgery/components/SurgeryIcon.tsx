import type { SurgeryIconProps } from "../types/surgery.types";

export default function SurgeryIcon({
  name,
  className = "size-5",
}: SurgeryIconProps) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "surgery":
      return (
        <svg {...props}>
          <path
            d="M5 19 19 5M7 5l12 12"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <path
            d="M4 20h6M14 4h6"
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
            cy="6.5"
            r="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M6 21v-3a6 6 0 0 1 12 0v3M9 12l3 4 3-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "technology":
      return (
        <svg {...props}>
          <rect
            x="5"
            y="5"
            width="14"
            height="14"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M9 9h6v6H9V9ZM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "sterile":
      return (
        <svg {...props}>
          <path
            d="M12 3s6 6.7 6 11a6 6 0 1 1-12 0c0-4.3 6-11 6-11Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="m9 14 2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
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

    case "planned":
      return (
        <svg {...props}>
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M7 3v4M17 3v4M3 10h18M8 15l2 2 5-5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "emergency":
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

    case "specialist":
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
            d="M5 21a7 7 0 0 1 14 0M17 13v4M15 15h4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "anesthesia":
      return (
        <svg {...props}>
          <path
            d="M7 3h10v6H7V3ZM9 9v12M15 9v12M9 14h6"
            stroke="currentColor"
            strokeWidth="1.7"
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

    case "check":
      return (
        <svg {...props}>
          <path
            d="m5 12 4 4L19 6"
            stroke="currentColor"
            strokeWidth="1.8"
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

    case "hospital":
      return (
        <svg {...props}>
          <path
            d="M5 21V5h10v16M15 10h4v11M8 8h4M8 12h4M8 16h4"
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
