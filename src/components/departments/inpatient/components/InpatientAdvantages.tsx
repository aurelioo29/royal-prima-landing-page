import type { InpatientAdvantagesProps } from "../types/inpatient.types";

import InpatientIcon from "./InpatientIcon";

export default function InpatientAdvantages({
  eyebrow,
  title,
  description,
  items,
}: InpatientAdvantagesProps) {
  return (
    <section className="border-y border-[#DCEAF1] bg-[#F7FBFD] py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* =========================
            HEADER
        ========================== */}
        <header className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.55fr)] lg:items-end lg:gap-16">
          <div className="max-w-[860px]">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-px w-10 shrink-0 bg-[#00A4E4]"
              />

              <p className="m-0! text-[11px] font-bold uppercase tracking-[0.2em] text-[#0077B6] sm:text-xs">
                {eyebrow}
              </p>
            </div>

            <h2 className="mt-5 mb-0! max-w-[850px] text-[36px] leading-[1.08] font-bold tracking-[-0.045em] text-[#123B56] sm:text-[44px] lg:text-[50px] xl:text-[56px]">
              {title}
            </h2>
          </div>

          <div className="lg:border-l lg:border-[#D7E7EE] lg:pl-8">
            <p className="m-0! max-w-[580px] text-[15px] leading-8 text-[#688497]">
              {description}
            </p>
          </div>
        </header>

        {/* =========================
            ADVANTAGES GRID
        ========================== */}
        <div className="mt-12 border-t border-l border-[#D7E7EE] sm:mt-14 lg:mt-16">
          <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => (
              <article
                key={item.key}
                className="group relative flex min-h-[240px] flex-col border-r border-b border-[#D7E7EE] bg-[#F7FBFD] p-6 transition-colors duration-300 hover:bg-white sm:p-7 lg:min-h-[260px] lg:p-8 xl:min-h-[280px] xl:p-9"
              >
                {/* NUMBER */}
                <span className="absolute top-7 right-7 text-[11px] font-bold tracking-[0.14em] text-[#ABC0CC] lg:top-8 lg:right-8 xl:top-9 xl:right-9">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* ICON */}
                <span className="flex size-12 shrink-0 items-center justify-center bg-white text-[#0077B6] shadow-[0_6px_20px_rgba(18,59,86,0.045)] transition-all duration-300 group-hover:bg-[#0077B6] group-hover:text-white">
                  <InpatientIcon name={item.icon} className="size-[21px]" />
                </span>

                {/* CONTENT */}
                <div className="mt-auto pt-10">
                  <h3 className="m-0! max-w-[340px] text-[19px] leading-7 font-bold tracking-[-0.02em] text-[#123B56] sm:text-[20px] lg:text-[21px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 mb-0! max-w-[390px] text-[14px] leading-7 text-[#6C8799]">
                    {item.description}
                  </p>
                </div>

                {/* HOVER ACCENT */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#00A4E4] transition-all duration-500 ease-out group-hover:w-full"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
