import type { EmergencyTriageProps } from "../types/emergency.types";

import EmergencyIcon from "./EmergencyIcon";

export default function EmergencyTriage({
  eyebrow,
  title,
  description,
  points,
}: EmergencyTriageProps) {
  return (
    <section className="bg-[#123B56] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10 xl:px-12 2xl:px-16">
        <div>
          <span className="flex size-12 items-center justify-center bg-white/10 text-[#68D9FF]">
            <EmergencyIcon name="triage" className="size-5" />
          </span>

          <p className="mt-6 mb-0! text-xs font-bold uppercase tracking-[0.18em] text-[#68D9FF]">
            {eyebrow}
          </p>

          <h2 className="mt-4 mb-0! text-[36px] leading-[1.1] font-bold tracking-[-0.04em] text-white sm:text-[46px] lg:text-[52px]">
            {title}
          </h2>
        </div>

        <div>
          <p className="m-0! text-[17px] leading-9 text-white/78">
            {description}
          </p>

          <div className="mt-8 border-t border-white/15">
            {points.map((point, index) => (
              <div
                key={point}
                className="grid grid-cols-[44px_minmax(0,1fr)] gap-4 border-b border-white/15 py-5"
              >
                <span className="text-xs font-bold text-[#68D9FF]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="m-0! text-[15px] leading-7 text-white/75">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
