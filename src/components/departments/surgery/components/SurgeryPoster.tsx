import Image from "next/image";

import { Link } from "@/i18n/navigation";

import type { SurgeryPosterProps } from "../types/surgery.types";

import SurgeryIcon from "./SurgeryIcon";

export default function SurgeryPoster({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  contactLabel,
  contactHref,
  locationLabel,
  locationHref,
}: SurgeryPosterProps) {
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
              1632px
            "
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,43,65,0.97)_0%,rgba(8,43,65,0.90)_32%,rgba(8,43,65,0.70)_51%,rgba(8,43,65,0.15)_78%,rgba(8,43,65,0.02)_100%)]" />

          <div className="relative z-10 flex min-h-[480px] items-center px-7 py-14 sm:px-10 lg:px-16 xl:px-20">
            <div className="max-w-[700px]">
              <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#69DBFF]">
                {eyebrow}
              </p>

              <h2 className="mt-5 mb-0! text-[38px] leading-[1.08] font-bold tracking-[-0.04em] text-white sm:text-[48px] lg:text-[56px]">
                {title}
              </h2>

              <p className="mt-6 mb-0! max-w-[610px] text-[15px] leading-8 text-white/75">
                {description}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={contactHref}
                  className="inline-flex h-14 items-center justify-center gap-3 bg-[#00A4E4] px-7 text-sm font-semibold text-white! no-underline! transition-colors hover:bg-[#008DC4]"
                >
                  <SurgeryIcon name="phone" className="size-[18px]" />

                  {contactLabel}
                </Link>

                <Link
                  href={locationHref}
                  className="inline-flex h-14 items-center justify-center gap-3 border border-white/35 bg-white/10 px-7 text-sm font-semibold text-white! no-underline! backdrop-blur-sm transition-all hover:bg-white hover:text-[#123B56]!"
                >
                  <SurgeryIcon name="location" className="size-[18px]" />

                  {locationLabel}
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
