import type { DoctorIconProps } from "../types/doctors.types";

export default function DoctorIcon({
  name,
  className = "size-5",
}: DoctorIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "doctor":
      return (
        <svg {...commonProps}>
          <circle
            cx="12"
            cy="7"
            r="4"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M4 21a8 8 0 0 1 16 0"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "calendar":
      return (
        <svg {...commonProps}>
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M8 3v4M16 3v4M3 10h18"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "clock":
      return (
        <svg {...commonProps}>
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

    case "grid":
      return (
        <svg {...commonProps}>
          <rect
            x="4"
            y="4"
            width="6"
            height="6"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <rect
            x="14"
            y="4"
            width="6"
            height="6"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <rect
            x="4"
            y="14"
            width="6"
            height="6"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <rect
            x="14"
            y="14"
            width="6"
            height="6"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      );

    case "list":
      return (
        <svg {...commonProps}>
          <path
            d="M9 6h11M9 12h11M9 18h11"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <circle cx="4" cy="6" r="1" fill="currentColor" />

          <circle cx="4" cy="12" r="1" fill="currentColor" />

          <circle cx="4" cy="18" r="1" fill="currentColor" />
        </svg>
      );

    case "arrowLeft":
    case "arrow-left":
      return (
        <svg {...commonProps}>
          <path
            d="M19 12H5m6-6-6 6 6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "arrow":
    case "arrowRight":
    case "arrow-right":
      return (
        <svg {...commonProps}>
          <path
            d="M5 12h14m-6-6 6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "education":
      return (
        <svg {...commonProps}>
          <path
            d="m3 8.5 9-4 9 4-9 4-9-4Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />

          <path
            d="M6 11v4c0 1.2 2.7 2.5 6 2.5s6-1.3 6-2.5v-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "briefcase":
    case "experience":
      return (
        <svg {...commonProps}>
          <path
            d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <rect
            x="3"
            y="7"
            width="18"
            height="13"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path d="M3 12h18" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );

    case "award":
      return (
        <svg {...commonProps}>
          <circle
            cx="12"
            cy="9"
            r="5"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M9 13v7l3-2 3 2v-7"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "facebook":
      return (
        <svg {...commonProps}>
          <path
            d="M14 8h2V4h-2c-2.2 0-4 1.8-4 4v2H8v4h2v6h4v-6h2l.5-4H14V8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...commonProps}>
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M8 10v6M8 7.5v.01M12 16v-3a2 2 0 0 1 4 0v3M12 10v6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "twitter":
      return (
        <svg {...commonProps}>
          <path
            d="M20 6.2c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.5-1.8-.7.4-1.4.7-2.2.8A3.4 3.4 0 0 0 11.5 9c0 .3 0 .5.1.8A9.7 9.7 0 0 1 4.5 6.2a3.4 3.4 0 0 0 1 4.5c-.5 0-1-.2-1.5-.4 0 1.7 1.2 3.1 2.8 3.4-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.4 1.7 2.4 3.2 2.4A6.9 6.9 0 0 1 4.2 17c-.3 0-.6 0-.8-.1A9.7 9.7 0 0 0 8.6 18.4c6.2 0 9.6-5.2 9.6-9.6v-.4c.7-.5 1.3-1.1 1.8-1.8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
}
