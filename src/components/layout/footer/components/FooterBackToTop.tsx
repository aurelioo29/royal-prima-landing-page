"use client";

import type { FooterBackToTopProps } from "../types/footer.types";

export default function FooterBackToTop({ label }: FooterBackToTopProps) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      className="group flex size-11 cursor-pointer items-center justify-center border border-white/30 bg-white/10 text-white shadow-[0_10px_25px_rgba(0,40,70,0.15)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#2474B8] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white motion-reduce:transform-none sm:size-12"
    >
      <ArrowUpIcon />
    </button>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5"
    >
      <path
        d="m6 10 6-6 6 6M12 4v16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
