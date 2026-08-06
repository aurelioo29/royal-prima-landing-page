import type { InpatientIconProps } from "../types/inpatient.types";

export default function InpatientIcon({
  name,
  className = "size-5",
}: InpatientIconProps) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "bed":
      return (
        <svg {...props}>
          <path
            d="M3 18v-8M21 18v-5a3 3 0 0 0-3-3H9v8M3 15h18M6 10V7h4a3 3 0 0 1 3 3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M3 18v3M21 18v3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "rooms":
      return (
        <svg {...props}>
          <path d="M4 4h16v16H4V4Z" stroke="currentColor" strokeWidth="1.7" />

          <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.7" />

          <circle cx="9" cy="9" r="0.8" fill="currentColor" />

          <circle cx="15" cy="15" r="0.8" fill="currentColor" />
        </svg>
      );

    case "comfort":
      return (
        <svg {...props}>
          <path
            d="M5 14v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3M4 14h16v5H4v-5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />

          <path
            d="M7 19v2M17 19v2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "clean":
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

    case "professional":
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

    case "integrated":
      return (
        <svg {...props}>
          <circle
            cx="6"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <circle
            cx="18"
            cy="6"
            r="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <circle
            cx="18"
            cy="18"
            r="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="m8.5 10.5 7-3M8.5 13.5l7 3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "payment":
      return (
        <svg {...props}>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M3 9h18M7 15h4"
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

    case "nurse":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="8"
            r="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M6 21v-3a6 6 0 0 1 12 0v3M9 4h6M12 2v4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
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

    case "critical":
      return (
        <svg {...props}>
          <path
            d="M3 13h4l2-6 4 11 2-5h6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M20.8 5.8a5 5 0 0 0-7.1 0L12 7.5l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.1"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "maternity":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="5"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M8 21v-7a4 4 0 0 1 8 0v7M8 16h8M12 10v6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "physiotherapy":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="5"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="m12 8-3 5 3 2-2 6M12 10l4 3 3-2M12 15l4 6"
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

    case "check":
      return (
        <svg {...props}>
          <path
            d="m5 12 4 4L19 6"
            stroke="currentColor"
            strokeWidth="1.9"
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

          <path
            d="M10 3v4M8 5h4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
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

    default:
      return null;
  }
}
