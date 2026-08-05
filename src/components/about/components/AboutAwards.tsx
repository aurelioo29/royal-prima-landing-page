import Image from "next/image";

import type { AboutAwardsProps } from "../types/about.types";

import AboutIcon from "./AboutIcon";

export default function AboutAwards({
  eyebrow,
  title,
  description,
  awards,
}: AboutAwardsProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <header className="mx-auto max-w-[800px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-9 bg-[#00A4E4]" />

            <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
              {eyebrow}
            </p>

            <span className="h-px w-9 bg-[#00A4E4]" />
          </div>

          <h2 className="mt-5 mb-0! text-[36px] leading-[1.1] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[44px] lg:text-[52px]">
            {title}
          </h2>

          <p className="mx-auto mt-5 mb-0! max-w-[650px] text-[15px] leading-8 text-[#7793A5]">
            {description}
          </p>
        </header>

        <div className="mx-auto mt-12 grid max-w-[1150px] grid-cols-1 gap-5 md:grid-cols-2">
          {awards.map((award) => (
            <article
              key={award.key}
              className="grid grid-cols-[100px_minmax(0,1fr)] items-center gap-5 border border-[#DCEAF1] bg-white p-5 shadow-[0_12px_34px_rgba(18,59,86,0.05)] sm:grid-cols-[118px_minmax(0,1fr)] sm:p-6"
            >
              <div className="relative aspect-square overflow-hidden bg-[#EDF8FD]">
                <Image
                  src={award.image}
                  alt={award.imageAlt}
                  fill
                  sizes="118px"
                  className="object-contain p-3"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#0077B6]">
                  <AboutIcon name="award" className="size-[18px]" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.14em]">
                    Award
                  </span>
                </div>

                <h3 className="mt-2 mb-0! text-[19px] leading-7 font-bold text-[#123B56] sm:text-[21px]">
                  {award.title}
                </h3>

                <p className="mt-2 mb-0! text-sm leading-6 text-[#7793A5]">
                  {award.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
