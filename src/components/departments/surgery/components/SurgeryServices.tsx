import type { SurgeryServicesProps } from "../types/surgery.types";

import SurgeryIcon from "./SurgeryIcon";

export default function SurgeryServices({
  eyebrow,
  title,
  description,
  items,
}: SurgeryServicesProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20 lg:px-10 xl:px-12 2xl:px-16">
        <header>
          <span className="flex size-12 items-center justify-center bg-[#EAF7FC] text-[#0077B6]">
            <SurgeryIcon name="surgery" className="size-5" />
          </span>

          <p className="mt-6 mb-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
            {eyebrow}
          </p>

          <h2 className="mt-4 mb-0! text-[36px] leading-[1.08] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[46px]">
            {title}
          </h2>

          <p className="mt-5 mb-0! text-[15px] leading-8 text-[#57778C]">
            {description}
          </p>
        </header>

        <div className="border-t border-[#DCEAF1]">
          {items.map((item, index) => (
            <article
              key={item.key}
              className="grid grid-cols-[48px_minmax(0,1fr)] gap-5 border-b border-[#DCEAF1] py-6 sm:grid-cols-[56px_54px_minmax(0,1fr)]"
            >
              <span className="text-xs font-bold text-[#00A4E4]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="hidden size-11 items-center justify-center bg-[#EAF7FC] text-[#0077B6] sm:flex">
                <SurgeryIcon name={item.icon} className="size-5" />
              </span>

              <div>
                <h3 className="m-0! text-[19px] font-bold text-[#123B56]">
                  {item.title}
                </h3>

                <p className="mt-2 mb-0! text-sm leading-7 text-[#688497]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
