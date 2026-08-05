import type { EmergencyFacilitiesProps } from "../types/emergency.types";

import EmergencyIcon from "./EmergencyIcon";

export default function EmergencyFacilities({
  eyebrow,
  title,
  description,
  items,
  disclaimer,
}: EmergencyFacilitiesProps) {
  return (
    <section className="border-y border-[#DCEAF1] bg-[#F7FBFD] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <header className="mx-auto max-w-[820px] text-center">
          <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
            {eyebrow}
          </p>

          <h2 className="mt-4 mb-0! text-[36px] leading-[1.08] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[46px] lg:text-[52px]">
            {title}
          </h2>

          <p className="mx-auto mt-5 mb-0! max-w-[680px] text-[15px] leading-8 text-[#57778C]">
            {description}
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 border-t border-[#D7E7EE] md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.key}
              className="border-b border-[#D7E7EE] px-0 py-7 md:px-6 xl:border-r xl:nth-[3n]:border-r-0"
            >
              <span className="flex size-11 items-center justify-center bg-white text-[#0077B6]">
                <EmergencyIcon name={item.icon} className="size-5" />
              </span>

              <h3 className="mt-5 mb-0! text-[19px] font-bold text-[#123B56]">
                {item.title}
              </h3>

              <p className="mt-2 mb-0! text-sm leading-7 text-[#688497]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-7 mb-0! text-center text-xs leading-6 text-[#8AA1AF]">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}
