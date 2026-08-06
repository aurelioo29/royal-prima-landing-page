import type { OutpatientAccessProps } from "../types/outpatient.types";

import OutpatientIcon from "./OutpatientIcon";

export default function OutpatientAccess({
  eyebrow,
  title,
  description,
  items,
  loungeTitle,
  loungeDescription,
}: OutpatientAccessProps) {
  return (
    <section className="bg-[#123B56] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <header>
            <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#69DBFF]">
              {eyebrow}
            </p>

            <h2 className="mt-4 mb-0! text-[36px] leading-[1.08] font-bold tracking-[-0.04em] text-white sm:text-[46px] lg:text-[52px]">
              {title}
            </h2>

            <p className="mt-6 mb-0! text-[15px] leading-8 text-white/70">
              {description}
            </p>
          </header>

          <div className="grid grid-cols-1 border-t border-white/15 md:grid-cols-2">
            {items.map((item, index) => (
              <article
                key={item.key}
                className={[
                  "border-b border-white/15 py-7",
                  index % 2 === 0 ? "md:border-r md:pr-8" : "md:pl-8",
                ].join(" ")}
              >
                <span className="flex size-11 items-center justify-center bg-white/10 text-[#69DBFF]">
                  <OutpatientIcon name={item.icon} className="size-5" />
                </span>

                <h3 className="mt-5 mb-0! text-[19px] font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 mb-0! text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8 lg:mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[54px_minmax(0,1fr)]">
            <span className="flex size-11 items-center justify-center bg-white/10 text-[#D7A448]">
              <OutpatientIcon name="insurance" className="size-5" />
            </span>

            <div>
              <h3 className="m-0! text-[19px] font-bold text-white">
                {loungeTitle}
              </h3>

              <p className="mt-2 mb-0! max-w-[900px] text-sm leading-7 text-white/65">
                {loungeDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
