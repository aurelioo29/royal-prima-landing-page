import Image from "next/image";

import type { PartnerCardProps } from "../types/partners.types";

export default function PartnerCard({
  partner,
  interactive = true,
}: PartnerCardProps) {
  const card = (
    <div
      className={`
        group
        relative
        flex
        h-[102px]
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-[18px]
        border
        px-5
        py-4
        shadow-[0_8px_28px_rgba(18,59,86,0.05)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:shadow-[0_18px_42px_rgba(18,59,86,0.12)]
        motion-reduce:transform-none
        motion-reduce:transition-none
        sm:h-[112px]
        sm:rounded-[20px]
        sm:px-6
        lg:h-[118px]
        ${
          partner.darkBackground
            ? `
              border-[#174D6D]
              bg-[linear-gradient(135deg,#123B56_0%,#006D9D_100%)]
              hover:border-[#00A4E4]
            `
            : `
              border-[#DCEAF1]
              bg-white
              hover:border-[#00A4E4]/50
            `
        }
      `}
    >
      {partner.darkBackground && (
        <>
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -top-12
              -right-10
              size-32
              rounded-full
              bg-[#00A4E4]/25
              blur-2xl
            "
          />

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-14
              -left-10
              size-28
              rounded-full
              bg-white/10
              blur-2xl
            "
          />
        </>
      )}

      {/* Hover glow */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          top-1/2
          left-1/2
          size-28
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#00A4E4]/0
          blur-2xl
          transition-colors
          duration-300
          group-hover:bg-[#00A4E4]/8
        "
      />

      {/* Garis gradient bawah */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[3px]
          origin-left
          scale-x-0
          bg-[linear-gradient(90deg,#00A4E4_0%,#0077B6_65%,#D7A448_100%)]
          transition-transform
          duration-300
          group-hover:scale-x-100
          motion-reduce:transition-none
        "
      />

      <div
        className="
          relative
          z-10
          h-[56px]
          w-full
          max-w-[160px]
          sm:h-[62px]
          sm:max-w-[178px]
          lg:h-[66px]
          lg:max-w-[190px]
        "
      >
        <Image
          src={partner.image}
          alt={partner.imageAlt}
          fill
          loading="lazy"
          sizes="
            (max-width: 639px) 160px,
            (max-width: 1023px) 178px,
            190px
          "
          className={`
            object-contain
            transition-all
            duration-300
            ease-out
            group-hover:scale-[1.05]
            motion-reduce:transform-none
            motion-reduce:transition-none
            ${
              partner.darkBackground
                ? `
                  opacity-100
                  drop-shadow-[0_5px_14px_rgba(0,0,0,0.18)]
                `
                : `
                  opacity-85
                  group-hover:opacity-100
                `
            }
          `}
        />
      </div>
    </div>
  );

  if (!interactive || !partner.href) {
    return card;
  }

  return (
    <a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Kunjungi website ${partner.imageAlt}`}
      className="
        block
        w-full
        rounded-[20px]
        no-underline!
        focus-visible:outline-2
        focus-visible:outline-offset-3
        focus-visible:outline-[#00A4E4]
      "
    >
      {card}
    </a>
  );
}
