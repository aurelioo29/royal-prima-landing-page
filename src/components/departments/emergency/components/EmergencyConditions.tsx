import type { EmergencyConditionsProps } from "../types/emergency.types";

import EmergencyIcon from "./EmergencyIcon";

export default function EmergencyConditions({
  eyebrow,
  title,
  description,
  note,
  items,
}: EmergencyConditionsProps) {
  return (
    <section className="border-y border-[#DCEAF1] bg-[#F7FBFD] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <header className="max-w-[820px]">
          <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
            {eyebrow}
          </p>

          <h2 className="mt-4 mb-0! text-[36px] leading-[1.08] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[46px] lg:text-[52px]">
            {title}
          </h2>

          <p className="mt-5 mb-0! max-w-[700px] text-[15px] leading-8 text-[#57778C]">
            {description}
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 border-t border-[#D7E7EE] sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.key}
              className="border-b border-[#D7E7EE] px-0 py-7 sm:px-6 sm:first:pl-0 xl:border-r xl:last:border-r-0"
            >
              <span className="flex size-11 items-center justify-center bg-white text-[#0077B6]">
                <EmergencyIcon name={item.icon} className="size-5" />
              </span>

              <h3 className="mt-5 mb-0! text-[19px] leading-7 font-bold text-[#123B56]">
                {item.title}
              </h3>

              <p className="mt-2 mb-0! text-sm leading-7 text-[#6A8597]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-7 mb-0! border-l-[3px] border-[#D7A448] pl-4 text-sm leading-7 text-[#718A9A]">
          {note}
        </p>
      </div>
    </section>
  );
}
