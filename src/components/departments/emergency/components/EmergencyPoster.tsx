import Image from "next/image";

import { Link } from "@/i18n/navigation";

import type { EmergencyPosterProps } from "../types/emergency.types";

import EmergencyIcon from "./EmergencyIcon";

export default function EmergencyPoster({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  phoneLabel,
  phoneHref,
  locationLabel,
  locationHref,
}: EmergencyPosterProps) {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <article className="relative min-h-[480px] overflow-hidden bg-[#123B56]">
          {/* BACKGROUND IMAGE */}
          <Image
            src={image}
            alt={imageAlt}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="
              (max-width: 639px) calc(100vw - 40px),
              (max-width: 1023px) calc(100vw - 64px),
              (max-width: 1279px) calc(100vw - 80px),
              (max-width: 1535px) calc(100vw - 96px),
              1632px
            "
            className="object-cover object-center"
          />

          {/* DARK OVERLAY */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,43,65,0.97)_0%,rgba(8,43,65,0.92)_30%,rgba(8,43,65,0.78)_48%,rgba(8,43,65,0.28)_72%,rgba(8,43,65,0.05)_100%)]"
          />

          {/* CONTENT */}
          <div className="relative z-10 flex min-h-[480px] items-center px-7 py-14 sm:px-10 lg:px-16 xl:px-20">
            <div className="max-w-[700px]">
              {/* EYEBROW */}
              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-[#68D9FF]" />

                <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#68D9FF]">
                  {eyebrow}
                </p>
              </div>

              {/* TITLE */}
              <h2 className="mt-5 mb-0! max-w-[680px] text-[38px] leading-[1.08] font-bold tracking-[-0.04em] text-white sm:text-[48px] lg:text-[56px] xl:text-[60px]">
                {title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 mb-0! max-w-[620px] text-[15px] leading-8 text-white/75 sm:text-[16px]">
                {description}
              </p>

              {/* ACTIONS */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {/* PHONE */}
                <a
                  href={phoneHref}
                  className="inline-flex h-14 items-center justify-center gap-3 bg-[#00A4E4] px-7 text-sm font-semibold text-white! no-underline! transition-colors duration-300 hover:bg-[#008DC4]"
                >
                  <EmergencyIcon name="phone" className="size-[18px]" />

                  {phoneLabel}
                </a>

                {/* LOCATION */}
                <Link
                  href={locationHref}
                  className="inline-flex h-14 items-center justify-center gap-3 border border-white/35 bg-white/10 px-7 text-sm font-semibold text-white! no-underline! backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#123B56]!"
                >
                  <EmergencyIcon name="location" className="size-[18px]" />

                  {locationLabel}
                </Link>
              </div>
            </div>
          </div>

          {/* DECORATIVE LINE */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-[3px] bg-[linear-gradient(90deg,#00A4E4_0%,#00A4E4_28%,rgba(0,164,228,0)_65%)]"
          />
        </article>
      </div>
    </section>
  );
}
