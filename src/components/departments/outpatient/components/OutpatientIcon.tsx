import type { OutpatientIconProps } from "../types/outpatient.types";

export default function OutpatientIcon({
  name,
  className = "size-5",
}: OutpatientIconProps) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "outpatient":
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

    case "queue":
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

          <path
            d="M8 9h8M8 13h5M8 17h3"
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

    case "medical":
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

    case "calendar":
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
            d="M7 3v4M17 3v4M3 10h18"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "insurance":
      return (
        <svg {...props}>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
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

    case "control":
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

    case "internal":
      return (
        <svg {...props}>
          <path
            d="M8 5c-2 3-3 6-2 9 1 4 4 6 6 6s5-2 6-6c1-3 0-6-2-9"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <path
            d="M12 4v12"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "child":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="7"
            r="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M6 21v-3a6 6 0 0 1 12 0v3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "obgyn":
      return (
        <svg {...props}>
          <circle
            cx="12"
            cy="9"
            r="6"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="M12 15v6M9 18h6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "brain":
      return (
        <svg {...props}>
          <path
            d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3 3 3 0 0 0 2 3v1a3 3 0 0 0 3 3M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3 3 3 0 0 1-2 3v1a3 3 0 0 1-3 3M12 3v18"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
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

    case "bone":
      return (
        <svg {...props}>
          <path
            d="M8.5 8.5 15.5 15.5M6.5 10.5a2.8 2.8 0 1 1-3.8-3.8A2.8 2.8 0 1 1 6.5 3l14.5 14.5a2.8 2.8 0 1 1-3.8 3.8 2.8 2.8 0 1 1-3.8-3.8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "user":
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
          />
        </svg>
      );

    case "company":
      return (
        <svg {...props}>
          <path
            d="M4 21V7h10v14M14 11h6v10M7 10h4M7 14h4M7 18h4M17 14h1M17 18h1"
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
