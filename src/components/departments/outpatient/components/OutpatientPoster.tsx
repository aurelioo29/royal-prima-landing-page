import Image from "next/image";

import { Link } from "@/i18n/navigation";

import type { OutpatientPosterProps } from "../types/outpatient.types";

import OutpatientIcon from "./OutpatientIcon";

export default function OutpatientPoster({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  scheduleLabel,
  scheduleHref,
  contactLabel,
  contactHref,
}: OutpatientPosterProps) {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
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

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,43,65,0.97)_0%,rgba(8,43,65,0.88)_34%,rgba(8,43,65,0.66)_52%,rgba(8,43,65,0.14)_78%,rgba(8,43,65,0.02)_100%)]" />

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
                  href={scheduleHref}
                  className="inline-flex h-14 items-center justify-center gap-3 bg-[#00A4E4] px-7 text-sm font-semibold text-white! no-underline! hover:bg-[#008DC4]"
                >
                  <OutpatientIcon name="calendar" className="size-[18px]" />

                  {scheduleLabel}
                </Link>

                <Link
                  href={contactHref}
                  className="inline-flex h-14 items-center justify-center gap-3 border border-white/35 bg-white/10 px-7 text-sm font-semibold text-white! no-underline! backdrop-blur-sm hover:bg-white hover:text-[#123B56]!"
                >
                  <OutpatientIcon name="phone" className="size-[18px]" />

                  {contactLabel}
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
