import type { FaqIconProps } from "../types/faq.types";

export default function FaqIcon({ name, className = "size-5" }: FaqIconProps) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "question":
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
            d="M9.8 9a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1.3.9-1.3 1.7"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <circle cx="12" cy="17" r="1" fill="currentColor" />
        </svg>
      );

    case "search":
      return (
        <svg {...props}>
          <circle
            cx="11"
            cy="11"
            r="6.5"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="m16 16 4 4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "general":
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
            d="M8 8h8M8 12h8M8 16h5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "appointment":
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

          <path
            d="m9 15 2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
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

    case "bpjs":
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

    case "inpatient":
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

    case "message":
      return (
        <svg {...props}>
          <path
            d="M4 5h16v12H8l-4 4V5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />

          <path
            d="M8 9h8M8 13h5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
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

    case "chevron":
      return (
        <svg {...props}>
          <path
            d="m6 9 6 6 6-6"
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
