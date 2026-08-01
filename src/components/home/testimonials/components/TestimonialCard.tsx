import type { TestimonialCardProps } from "../types/testimonials.types";

import TestimonialIcon from "./TestimonialIcon";

const MAX_RATING = 5;

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article
      className="
        group
        relative
        flex
        h-full
        min-h-[370px]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-[#D8EAF1]
        bg-white
        p-6
        shadow-[0_12px_38px_rgba(18,59,86,0.07)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#00A4E4]/45
        hover:shadow-[0_24px_55px_rgba(18,59,86,0.13)]
        motion-reduce:transform-none
        motion-reduce:transition-none
        sm:min-h-[390px]
        sm:rounded-[28px]
        sm:p-8
      "
    >
      {/* Dekorasi background */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-20
          -right-20
          size-48
          rounded-full
          bg-[#00A4E4]/6
          blur-2xl
          transition-transform
          duration-500
          group-hover:scale-125
          motion-reduce:transition-none
        "
      />

      {/* Garis bawah */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[4px]
          origin-left
          scale-x-0
          bg-[linear-gradient(90deg,#00A4E4_0%,#0077B6_70%,#D7A448_100%)]
          transition-transform
          duration-300
          group-hover:scale-x-100
          motion-reduce:transition-none
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-5">
          <span
            className="
              flex
              size-14
              items-center
              justify-center
              rounded-[18px]
              bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_100%)]
              text-white
              shadow-[0_12px_28px_rgba(0,119,182,0.23)]
            "
          >
            <TestimonialIcon name="quote" className="size-7" />
          </span>

          <div
            aria-label={`${testimonial.rating} dari ${MAX_RATING} bintang`}
            className="flex items-center gap-1 text-[#D7A448]"
          >
            {Array.from({
              length: MAX_RATING,
            }).map((_, index) => (
              <TestimonialIcon
                key={index}
                name="star"
                className={`size-4 ${
                  index < testimonial.rating ? "opacity-100" : "opacity-25"
                }`}
              />
            ))}
          </div>
        </div>

        <blockquote className="mt-8 mb-0! flex-1">
          <p
            className="
              m-0!
              text-[17px]
              leading-8
              font-medium
              text-[#315A70]
              sm:text-[18px]
              sm:leading-9
            "
          >
            “{testimonial.quote}”
          </p>
        </blockquote>

        <div className="mt-8 border-t border-[#E0EDF2] pt-6">
          <div className="flex items-center gap-4">
            <span
              className="
                flex
                size-13
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#EAF7FC]
                text-sm
                font-bold
                text-[#0077B6]
                ring-4
                ring-[#F4FAFC]
              "
            >
              {testimonial.initials}
            </span>

            <span className="min-w-0">
              <span
                className="
                  block
                  truncate
                  text-[15px]
                  font-bold
                  text-[#123B56]
                "
              >
                {testimonial.name}
              </span>

              <span
                className="
                  mt-1
                  block
                  text-xs
                  font-medium
                  text-[#7793A5]
                "
              >
                {testimonial.role}
              </span>
            </span>
          </div>

          <div
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#F0F9FC]
              px-4
              py-2
              text-xs
              font-semibold
              text-[#0077B6]
            "
          >
            <TestimonialIcon name="heart" className="size-3.5" />

            {testimonial.service}
          </div>
        </div>
      </div>
    </article>
  );
}
