import type { SurgeryAdvantagesProps } from "../types/surgery.types";

import SurgeryIcon from "./SurgeryIcon";

export default function SurgeryAdvantages({
  eyebrow,
  title,
  description,
  items,
}: SurgeryAdvantagesProps) {
  return (
    <section className="border-y border-[#DCEAF1] bg-[#F7FBFD] py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <header className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.55fr)] lg:items-end lg:gap-16">
          <div>
            <p className="m-0! text-xs font-bold uppercase tracking-[0.2em] text-[#0077B6]">
              {eyebrow}
            </p>

            <h2 className="mt-5 mb-0! max-w-[850px] text-[36px] leading-[1.08] font-bold tracking-[-0.045em] text-[#123B56] sm:text-[44px] lg:text-[50px] xl:text-[56px]">
              {title}
            </h2>
          </div>

          <div className="lg:border-l lg:border-[#D7E7EE] lg:pl-8">
            <p className="m-0! text-[15px] leading-8 text-[#688497]">
              {description}
            </p>
          </div>
        </header>

        <div className="mt-12 border-t border-l border-[#D7E7EE] lg:mt-16">
          <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2">
            {items.map((item, index) => (
              <article
                key={item.key}
                className="group relative flex min-h-[280px] flex-col border-r border-b border-[#D7E7EE] p-7 transition-colors duration-300 hover:bg-white lg:min-h-[310px] lg:p-9 xl:p-10"
              >
                <span className="absolute top-8 right-8 text-[11px] font-bold tracking-[0.14em] text-[#ABC0CC] lg:top-9 lg:right-9">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex size-12 items-center justify-center bg-white text-[#0077B6] transition-all duration-300 group-hover:bg-[#0077B6] group-hover:text-white">
                  <SurgeryIcon name={item.icon} className="size-[21px]" />
                </span>

                <div className="mt-auto max-w-[560px] pt-12">
                  <h3 className="m-0! text-[21px] leading-7 font-bold tracking-[-0.02em] text-[#123B56] sm:text-[22px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 mb-0! text-[14px] leading-7 text-[#6C8799]">
                    {item.description}
                  </p>
                </div>

                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#00A4E4] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
