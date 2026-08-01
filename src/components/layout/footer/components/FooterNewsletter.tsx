"use client";

import { type FormEvent, useState } from "react";

type FooterNewsletterProps = {
  title: string;
  description: string;
  emailLabel: string;
  placeholder: string;
  buttonLabel: string;
  successMessage: string;
};

export default function FooterNewsletter({
  title,
  description,
  emailLabel,
  placeholder,
  buttonLabel,
  successMessage,
}: FooterNewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      return;
    }

    // TODO:
    // Sambungkan ke Server Action atau API newsletter.
    setSubmitted(true);
  }

  return (
    <section className="w-full max-w-[560px]">
      <h2 className="m-0! max-w-[480px] text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#274760] sm:text-[34px] lg:text-[38px]">
        {title}
      </h2>

      <p className="mt-5 mb-0! max-w-[500px] text-[14px] leading-7 text-[#274760]/75 sm:text-[15px] sm:leading-8">
        {description}
      </p>

      <form onSubmit={handleSubmit} className="mt-8 w-full">
        <label htmlFor="footer-newsletter-email" className="sr-only">
          {emailLabel}
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <input
            id="footer-newsletter-email"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);

              if (submitted) {
                setSubmitted(false);
              }
            }}
            placeholder={placeholder}
            required
            className="h-14 min-w-0 flex-1 border border-[#8CB9DE] bg-white px-5 text-[15px] text-[#274760] shadow-[0_8px_24px_rgba(39,71,96,0.08)] outline-none transition-all placeholder:text-[#274760]/40 focus:border-[#2474B8] focus:ring-4 focus:ring-[#2474B8]/15"
          />

          <button
            type="submit"
            className="inline-flex h-14 shrink-0 cursor-pointer items-center justify-center gap-3 border-0 bg-[#2474B8] px-7 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(36,116,184,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#175E9D] hover:shadow-[0_14px_30px_rgba(36,116,184,0.28)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2474B8]"
          >
            {buttonLabel}

            <ArrowUpRightIcon />
          </button>
        </div>

        <p
          aria-live="polite"
          className={`mt-3 mb-0! min-h-6 text-sm transition-opacity ${
            submitted ? "text-[#0077B6] opacity-100" : "opacity-0"
          }`}
        >
          {submitted ? successMessage : ""}
        </p>
      </form>
    </section>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-[18px]"
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
