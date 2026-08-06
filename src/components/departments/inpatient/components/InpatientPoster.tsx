import Image from "next/image";

import { Link } from "@/i18n/navigation";

import type { InpatientPosterProps } from "../types/inpatient.types";

import InpatientIcon from "./InpatientIcon";

export default function InpatientPoster({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  phoneLabel,
  phoneHref,
  locationLabel,
  locationHref,
}: InpatientPosterProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <article className="relative min-h-[480px] overflow-hidden bg-[#123B56]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            loading="lazy"
            sizes="
              (max-width: 639px) calc(100vw - 40px),
              (max-width: 1023px) calc(100vw - 64px),
              (max-width: 1279px) calc(100vw - 80px),
              (max-width: 1535px) calc(100vw - 96px),
              1632px
            "
            className="object-cover object-center"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,43,65,0.97)_0%,rgba(8,43,65,0.90)_31%,rgba(8,43,65,0.73)_51%,rgba(8,43,65,0.20)_76%,rgba(8,43,65,0.03)_100%)]"
          />

          <div className="relative z-10 flex min-h-[480px] items-center px-7 py-14 sm:px-10 lg:px-16 xl:px-20">
            <div className="max-w-[700px]">
              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-[#69DBFF]" />

                <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#69DBFF]">
                  {eyebrow}
                </p>
              </div>

              <h2 className="mt-5 mb-0! max-w-[680px] text-[38px] leading-[1.08] font-bold tracking-[-0.04em] text-white sm:text-[48px] lg:text-[56px]">
                {title}
              </h2>

              <p className="mt-6 mb-0! max-w-[610px] text-[15px] leading-8 text-white/75">
                {description}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={phoneHref}
                  className="inline-flex h-14 items-center justify-center gap-3 bg-[#00A4E4] px-7 text-sm font-semibold text-white! no-underline! transition-colors duration-300 hover:bg-[#008DC4]"
                >
                  <InpatientIcon name="phone" className="size-[18px]" />

                  {phoneLabel}
                </a>

                <Link
                  href={locationHref}
                  className="inline-flex h-14 items-center justify-center gap-3 border border-white/35 bg-white/10 px-7 text-sm font-semibold text-white! no-underline! backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#123B56]!"
                >
                  <InpatientIcon name="location" className="size-[18px]" />

                  {locationLabel}
                </Link>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-[3px] bg-[linear-gradient(90deg,#00A4E4_0%,#00A4E4_28%,rgba(0,164,228,0)_65%)]"
          />
        </article>
      </div>
    </section>
  );
}
