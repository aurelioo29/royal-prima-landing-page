import type { SupportingIconProps } from "../types/supporting.types";

export default function SupportingIcon({
  name,
  className = "size-5",
}: SupportingIconProps) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "supporting":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M12 8v8M8 12h8"
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
    case "xray":
      return (
        <svg {...props}>
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M12 9V6M12 18v-3M9 12H6M18 12h-3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
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
        </svg>
      );

    case "endoscopy":
      return (
        <svg {...props}>
          <path
            d="M6 4v6c0 4 2 7 6 7s6-3 6-7V4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <circle
            cx="18"
            cy="4"
            r="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          <path
            d="M12 17v4"
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

    case "accuracy":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="m14 10 6-6"
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

    case "education":
      return (
        <svg {...props}>
          <path
            d="m3 9 9-5 9 5-9 5-9-5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />

          <path
            d="M7 12v4c3 2 7 2 10 0v-4M21 9v6"
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

    case "insurance":
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

    case "mri":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M3 12h5M16 12h5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "ct":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M7 12h10M12 7v10"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "dialysis":
      return (
        <svg {...props}>
          <path
            d="M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M9 15c1 1 2 1.5 3 1.5S14 16 15 15"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
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

    default:
      return null;
  }
}
