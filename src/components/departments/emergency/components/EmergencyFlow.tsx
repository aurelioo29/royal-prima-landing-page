import type { EmergencyFlowProps } from "../types/emergency.types";

import EmergencyIcon from "./EmergencyIcon";

export default function EmergencyFlow({
  eyebrow,
  title,
  description,
  items,
}: EmergencyFlowProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <header>
            <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
              {eyebrow}
            </p>

            <h2 className="mt-4 mb-0! text-[36px] leading-[1.1] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[46px]">
              {title}
            </h2>

            <p className="mt-5 mb-0! text-[15px] leading-8 text-[#57778C]">
              {description}
            </p>
          </header>

          <div className="border-t border-[#DCEAF1]">
            {items.map((item) => (
              <article
                key={item.key}
                className="grid grid-cols-[52px_minmax(0,1fr)] gap-5 border-b border-[#DCEAF1] py-6 sm:grid-cols-[60px_54px_minmax(0,1fr)]"
              >
                <span className="text-[13px] font-bold tracking-[0.08em] text-[#00A4E4]">
                  {item.step}
                </span>

                <span className="hidden size-11 items-center justify-center bg-[#EAF7FC] text-[#0077B6] sm:flex">
                  <EmergencyIcon name={item.icon} className="size-5" />
                </span>

                <div>
                  <h3 className="m-0! text-[19px] font-bold text-[#123B56]">
                    {item.title}
                  </h3>

                  <p className="mt-2 mb-0! text-sm leading-7 text-[#668297]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
