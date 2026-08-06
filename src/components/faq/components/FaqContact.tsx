import { Link } from "@/i18n/navigation";

import type { FaqContactProps } from "../types/faq.types";

import FaqIcon from "./FaqIcon";

export default function FaqContact({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: FaqContactProps) {
  return (
    <section className="border-t border-[#DCEAF1] bg-[#123B56] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-20 lg:px-10 xl:px-12 2xl:px-16">
        <div className="max-w-[850px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#69DBFF]" />

            <p className="m-0! text-xs font-bold uppercase tracking-[0.2em] text-[#69DBFF]">
              {eyebrow}
            </p>
          </div>

          <h2 className="mt-5 mb-0! text-[38px] leading-[1.08] font-bold tracking-[-0.045em] text-white sm:text-[48px] lg:text-[54px]">
            {title}
          </h2>

          <p className="mt-5 mb-0! max-w-[700px] text-[15px] leading-8 text-white/70">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex h-14 items-center justify-center gap-3 bg-[#00A4E4] px-7 text-sm font-semibold text-white! no-underline! transition-colors hover:bg-[#008DC4]"
          >
            <FaqIcon name="message" className="size-[18px]" />

            {primaryLabel}
          </Link>

          <a
            href={secondaryHref}
            className="inline-flex h-14 items-center justify-center gap-3 border border-white/30 px-7 text-sm font-semibold text-white! no-underline! transition-colors hover:bg-white hover:text-[#123B56]!"
          >
            <FaqIcon name="phone" className="size-[18px]" />

            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
