import type { TestimonialIconProps } from "../types/testimonials.types";

export default function TestimonialIcon({
  name,
  className = "size-5",
}: TestimonialIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",

    fill: "none",

    "aria-hidden": true,

    className,
  };

  switch (name) {
    case "quote":
      return (
        <svg {...commonProps}>
          <path
            d="M10.5 6H6.8A3.8 3.8 0 0 0 3 9.8v2.7A3.5 3.5 0 0 0 6.5 16H10v-5H6.2v-.9A1.6 1.6 0 0 1 7.8 8.5h2.7V6ZM21 6h-3.7a3.8 3.8 0 0 0-3.8 3.8v2.7A3.5 3.5 0 0 0 17 16h3.5v-5h-3.8v-.9a1.6 1.6 0 0 1 1.6-1.6H21V6Z"
            fill="currentColor"
          />
        </svg>
      );

    case "star":
      return (
        <svg {...commonProps}>
          <path
            d="m12 2.8 2.75 5.57 6.15.9-4.45 4.33 1.05 6.12L12 16.83l-5.5 2.89 1.05-6.12L3.1 9.27l6.15-.9L12 2.8Z"
            fill="currentColor"
          />
        </svg>
      );

    case "heart":
      return (
        <svg {...commonProps}>
          <path
            d="M20.8 5.9a5.2 5.2 0 0 0-7.4 0L12 7.3l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 22l8.8-8.7a5.2 5.2 0 0 0 0-7.4Z"
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
