import type { TimetableIconProps } from "../types/timetable.types";

export default function TimetableIcon({
  name,
  className = "size-5",
}: TimetableIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "calendar":
      return (
        <svg {...commonProps}>
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
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
            d="M4 21a8 8 0 0 1 16 0M18 12v5M15.5 14.5h5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "location":
      return (
        <svg {...commonProps}>
          <path
            d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <circle
            cx="12"
            cy="10"
            r="2.4"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      );

    case "phone":
      return (
        <svg {...commonProps}>
          <path
            d="M6.6 3.5 9 8l-2.1 1.8a15.4 15.4 0 0 0 7.3 7.3L16 15l4.5 2.4v2.3c0 .8-.6 1.5-1.4 1.6C10 22.4 1.6 14 2.7 4.9c.1-.8.8-1.4 1.6-1.4h2.3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "info":
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
            d="M12 11v6M12 7.5v.5"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      );

    case "arrow":
      return (
        <svg {...commonProps}>
          <path
            d="M7 17 17 7M8 7h9v9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
}
