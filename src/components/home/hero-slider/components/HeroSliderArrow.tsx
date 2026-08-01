type HeroSliderArrowProps = {
  direction: "left" | "right";

  className?: string;
};

export default function HeroSliderArrow({
  direction,
  className = "size-5",
}: HeroSliderArrowProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {direction === "left" ? (
        <path
          d="M19 12H5m6-6-6 6 6 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M5 12h14m-6-6 6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
