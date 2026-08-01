type ContactIconName = "phone" | "email" | "location" | "arrow" | "clock";

type ContactIconProps = {
  name: ContactIconName;
  className?: string;
};

export default function ContactIcon({
  name,
  className = "size-5",
}: ContactIconProps) {
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
            d="M8.7 3.4 10.4 7a1.6 1.6 0 0 1-.4 1.9L8.8 10a14.4 14.4 0 0 0 5.2 5.2l1.1-1.2a1.6 1.6 0 0 1 1.9-.4l3.6 1.7a1.6 1.6 0 0 1 .9 1.6V20a1.6 1.6 0 0 1-1.6 1.6C10.2 21.6 2.4 13.8 2.4 4.1A1.6 1.6 0 0 1 4 2.5h3.1a1.6 1.6 0 0 1 1.6.9Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "email":
      return (
        <svg {...commonProps}>
          <path
            d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />

          <path
            d="m4 7 8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
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
