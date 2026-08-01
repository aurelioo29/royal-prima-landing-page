import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/shared/motion";

import TestimonialSlider from "./components/TestimonialSlider";

import { HOME_TESTIMONIALS } from "./data/testimonials.data";

import type { ResolvedTestimonialItem } from "./types/testimonials.types";

export default async function HomeTestimonials() {
  const t = await getTranslations("HomeTestimonials");

  const testimonials: ResolvedTestimonialItem[] = HOME_TESTIMONIALS.map(
    (testimonial) => ({
      ...testimonial,

      quote: t(`items.${testimonial.translationKey}.quote`),

      name: t(`items.${testimonial.translationKey}.name`),

      role: t(`items.${testimonial.translationKey}.role`),

      service: t(`items.${testimonial.translationKey}.service`),
    }),
  );

  return (
    <section
      aria-labelledby="home-testimonials-title"
      className="
        relative
        overflow-hidden
        bg-[#F3F9FC]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Ornamen kiri */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-32
          -left-32
          size-[400px]
          rounded-full
          bg-[#00A4E4]/8
          blur-3xl
        "
      />

      {/* Ornamen kanan */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-36
          -bottom-36
          size-[420px]
          rounded-full
          bg-[#D7A448]/7
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1760px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
          2xl:px-16
        "
      >
        <div
          className="
            flex
            flex-col
            items-start
            justify-between
            gap-8
            lg:flex-row
            lg:items-end
          "
        >
          <Reveal direction="right" distance={30} className="max-w-[820px]">
            <header>
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-10 bg-[#00A4E4]" />

                <p
                  className="
                    m-0!
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#0077B6]
                  "
                >
                  {t("eyebrow")}
                </p>
              </div>

              <h2
                id="home-testimonials-title"
                className="
                  mt-5
                  mb-0!
                  max-w-[760px]
                  text-[36px]
                  leading-[1.12]
                  font-bold
                  tracking-[-0.04em]
                  text-[#123B56]
                  sm:text-[46px]
                  lg:text-[52px]
                "
              >
                {t("title")}
              </h2>

              <p
                className="
                  mt-6
                  mb-0!
                  max-w-[740px]
                  text-[15px]
                  leading-8
                  text-[#57778C]
                  sm:text-base
                "
              >
                {t("description")}
              </p>
            </header>
          </Reveal>

          <Reveal direction="left" distance={24} className="hidden lg:block">
            <div
              className="
                flex
                items-center
                gap-4
                rounded-[20px]
                border
                border-[#D5E8F0]
                bg-white
                px-5
                py-4
                shadow-[0_12px_32px_rgba(18,59,86,0.07)]
              "
            >
              <span
                className="
                  flex
                  size-11
                  items-center
                  justify-center
                  rounded-[14px]
                  bg-[#EAF7FC]
                  text-[#0077B6]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="size-5"
                >
                  <path
                    d="M20.8 5.9a5.2 5.2 0 0 0-7.4 0L12 7.3l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 22l8.8-8.7a5.2 5.2 0 0 0 0-7.4Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span>
                <span
                  className="
                    block
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#0077B6]
                  "
                >
                  {t("highlight.eyebrow")}
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-sm
                    font-semibold
                    text-[#123B56]
                  "
                >
                  {t("highlight.value")}
                </span>
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal
          direction="up"
          distance={34}
          delay={0.1}
          amount={0.06}
          className="mt-12 sm:mt-14"
        >
          <TestimonialSlider
            items={testimonials}
            labels={{
              previousSlide: t("slider.previousSlide"),

              nextSlide: t("slider.nextSlide"),

              firstSlide: t("slider.firstSlide"),

              lastSlide: t("slider.lastSlide"),

              slideLabel: String(t.raw("slider.slideLabel")),
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}
