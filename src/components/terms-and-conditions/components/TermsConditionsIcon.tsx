import type { TermsConditionsIconProps } from "../types/terms-conditions.types";

export default function TermsConditionsIcon({
  name,
  className = "size-5",
}: TermsConditionsIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "document":
      return (
        <svg {...commonProps}>
          <path
            d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />

          <path
            d="M14 3v5h5M9 12h6M9 16h6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "check":
      return (
        <svg {...commonProps}>
          <path
            d="m5 12 4 4L19 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "mail":
      return (
        <svg {...commonProps}>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="m4 7 8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "arrow":
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

    default:
      return null;
  }
}
