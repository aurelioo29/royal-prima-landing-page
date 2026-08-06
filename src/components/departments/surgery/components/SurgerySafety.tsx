import type { SurgerySafetyProps } from "../types/surgery.types";

import SurgeryIcon from "./SurgeryIcon";

export default function SurgerySafety({
  eyebrow,
  title,
  description,
  items,
}: SurgerySafetyProps) {
  return (
    <section className="bg-[#123B56] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-10 xl:px-12 2xl:px-16">
        <header>
          <span className="flex size-12 items-center justify-center bg-white/10 text-[#69DBFF]">
            <SurgeryIcon name="shield" className="size-5" />
          </span>

          <p className="mt-6 mb-0! text-xs font-bold uppercase tracking-[0.18em] text-[#69DBFF]">
            {eyebrow}
          </p>

          <h2 className="mt-4 mb-0! text-[36px] leading-[1.08] font-bold tracking-[-0.04em] text-white sm:text-[46px] lg:text-[52px]">
            {title}
          </h2>

          <p className="mt-6 mb-0! text-[15px] leading-8 text-white/70">
            {description}
          </p>
        </header>

        <div className="border-t border-white/15">
          {items.map((item, index) => (
            <div
              key={item}
              className="grid grid-cols-[45px_minmax(0,1fr)] gap-4 border-b border-white/15 py-6"
            >
              <span className="text-xs font-bold text-[#69DBFF]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex gap-4">
                <SurgeryIcon
                  name="check"
                  className="mt-1 size-4 shrink-0 text-[#69DBFF]"
                />

                <p className="m-0! text-[15px] leading-7 text-white/75">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
