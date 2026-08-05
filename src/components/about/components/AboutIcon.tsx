import type { AboutIconProps } from "../types/about.types";

export default function AboutIcon({
  name,
  className = "size-5",
}: AboutIconProps) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "hospital":
      return (
        <svg {...props}>
          <path
            d="M5 21V5h10v16M15 10h4v11M8 8h4M8 12h4M8 16h4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M10 3v4M8 5h4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "vision":
      return (
        <svg {...props}>
          <path
            d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <circle
            cx="12"
            cy="12"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      );

    case "mission":
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
            d="m15 9 5-5M17 4h3v3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "award":
      return (
        <svg {...props}>
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

    case "document":
      return (
        <svg {...props}>
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

    case "external":
      return (
        <svg {...props}>
          <path
            d="M8 16 16 8M10 8h6v6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
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

    default:
      return null;
  }
}
