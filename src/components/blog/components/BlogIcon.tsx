import type { BlogIconProps } from "../types/blog.types";

export default function BlogIcon({
  name,
  className = "size-5",
}: BlogIconProps) {
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

    case "user":
      return (
        <svg {...commonProps}>
          <circle
            cx="12"
            cy="8"
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

    case "category":
      return (
        <svg {...commonProps}>
          <path
            d="M4 5h6v6H4V5ZM14 5h6v6h-6V5ZM4 15h6v6H4v-6ZM14 15h6v6h-6v-6Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );

    case "grid":
      return (
        <svg {...commonProps}>
          <rect
            x="3"
            y="3"
            width="7"
            height="7"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <rect
            x="14"
            y="3"
            width="7"
            height="7"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <rect
            x="3"
            y="14"
            width="7"
            height="7"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <rect
            x="14"
            y="14"
            width="7"
            height="7"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      );

    case "list":
      return (
        <svg {...commonProps}>
          <path
            d="M9 6h12M9 12h12M9 18h12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          <rect x="3" y="4" width="2.5" height="2.5" fill="currentColor" />

          <rect x="3" y="10.75" width="2.5" height="2.5" fill="currentColor" />

          <rect x="3" y="17.5" width="2.5" height="2.5" fill="currentColor" />
        </svg>
      );

    case "chevronLeft":
      return (
        <svg {...commonProps}>
          <path
            d="m15 18-6-6 6-6"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "chevronRight":
      return (
        <svg {...commonProps}>
          <path
            d="m9 18 6-6-6-6"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "external":
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
