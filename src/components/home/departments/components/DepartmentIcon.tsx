import type { DepartmentIconProps } from "../types/departments.types";

export default function DepartmentIcon({
  name,
  className = "size-6",
}: DepartmentIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",

    fill: "none",

    "aria-hidden": true,

    className,
  };

  switch (name) {
    case "emergency":
      return (
        <svg {...commonProps}>
          <path
            d="M9 3h6v5h5v6h-5v7H9v-7H4V8h5V3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />

          <path d="m11 9-2 4h3l-1 4 4-6h-3l1-2h-2Z" fill="currentColor" />
        </svg>
      );

    case "outpatient":
      return (
        <svg {...commonProps}>
          <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.7" />

          <path
            d="M3.5 20v-2.5A5.5 5.5 0 0 1 9 12a5.4 5.4 0 0 1 4.5 2.3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <path
            d="M17 12v8M13 16h8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "inpatient":
      return (
        <svg {...commonProps}>
          <path
            d="M3 19V8M21 19v-7a3 3 0 0 0-3-3H9v10"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <path
            d="M3 15h18M6 9h3v6H6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />

          <path
            d="M3 21v-2M21 21v-2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );

    case "supporting":
      return (
        <svg {...commonProps}>
          <path
            d="M9 3h6M10 3v5l-5.5 9.2A2.5 2.5 0 0 0 6.7 21h10.6a2.5 2.5 0 0 0 2.2-3.8L14 8V3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M7 15h10"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <circle cx="10" cy="17.5" r="1" fill="currentColor" />

          <circle cx="14.5" cy="18" r=".8" fill="currentColor" />
        </svg>
      );

    case "surgery":
      return (
        <svg {...commonProps}>
          <path
            d="m5 19 5.5-5.5M8 16l-3-3 8.5-8.5a2.1 2.1 0 0 1 3 3L8 16Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="m13 12 6 6M16 15l3-3M19 18l2-2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
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
