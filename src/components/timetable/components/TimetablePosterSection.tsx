import Image from "next/image";

import { Link } from "@/i18n/navigation";

import type { TimetablePosterSectionProps } from "../types/timetable.types";

import TimetableIcon from "./TimetableIcon";

export default function TimetablePosterSection({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  appointmentLabel,
  phoneLabel,
  phoneDisplay,
  phoneHref,
}: TimetablePosterSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <article className="relative min-h-[400px] overflow-hidden bg-[#123B56] sm:min-h-[460px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="
              (max-width: 639px) calc(100vw - 40px),
              (max-width: 1023px) calc(100vw - 64px),
              (max-width: 1279px) calc(100vw - 80px),
              (max-width: 1535px) calc(100vw - 96px),
              (max-width: 1759px) calc(100vw - 128px),
              1632px
            "
            loading="lazy"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,43,65,0.97)_0%,rgba(8,43,65,0.86)_44%,rgba(8,43,65,0.33)_76%,rgba(8,43,65,0.14)_100%)]" />

          <div className="relative z-10 flex min-h-[400px] items-center px-6 py-14 sm:min-h-[460px] sm:px-10 lg:px-16">
            <div className="max-w-[700px]">
              <p className="m-0! text-xs font-bold uppercase tracking-[0.19em] text-[#76DFFF]">
                {eyebrow}
              </p>

              <h2 className="mt-5 mb-0! text-[36px] leading-[1.12] font-bold tracking-[-0.04em] text-white sm:text-[46px] lg:text-[56px]">
                {title}
              </h2>

              <p className="mt-6 mb-0! max-w-[620px] text-[15px] leading-8 text-white/75 sm:text-base">
                {description}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/appointments"
                  className="inline-flex h-14 items-center justify-center gap-3 bg-[#00A4E4] px-7 text-sm font-semibold text-white! no-underline! shadow-[0_14px_30px_rgba(0,164,228,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#008BC2]"
                >
                  {appointmentLabel}

                  <TimetableIcon name="arrow" className="size-[18px]" />
                </Link>

                <a
                  href={phoneHref}
                  aria-label={phoneLabel}
                  className="inline-flex h-14 items-center justify-center gap-3 border border-white/35 bg-white/10 px-7 text-sm font-semibold text-white! no-underline! backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-[#123B56]!"
                >
                  <TimetableIcon name="phone" className="size-[18px]" />

                  {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
