import type { QuickInfoIconProps } from "../types/quick-info.types";

export default function QuickInfoIcon({
  name,
  className = "size-6",
}: QuickInfoIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",

    fill: "none",

    "aria-hidden": true,

    className,
  };

  switch (name) {
    case "phone":
      return (
        <svg {...commonProps}>
          <path
            d="M8.3 3.6 10 7.75a1.5 1.5 0 0 1-.4 1.7L8.35 10.5a14.2 14.2 0 0 0 5.15 5.15l1.05-1.25a1.5 1.5 0 0 1 1.7-.4l4.15 1.7a1.5 1.5 0 0 1 .9 1.4v2.15A1.75 1.75 0 0 1 19.55 21C10.4 21 3 13.6 3 4.45A1.75 1.75 0 0 1 4.75 2.7H6.9a1.5 1.5 0 0 1 1.4.9Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "emergency":
      return (
        <svg {...commonProps}>
          <path
            d="M8 3h8v4h4v10h-4v4H8v-4H4V7h4V3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />

          <path
            d="M12 8v8M8 12h8"
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
            d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 1 1 16 0Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
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
        <svg {...commonProps}>
          <path
            d="M5 12h14M14 7l5 5-5 5"
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
