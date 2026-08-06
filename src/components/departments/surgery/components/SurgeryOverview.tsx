import type { SurgeryOverviewProps } from "../types/surgery.types";

export default function SurgeryOverview({
  eyebrow,
  title,
  description,
  stats,
}: SurgeryOverviewProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20 lg:px-10 xl:px-12 2xl:px-16">
        <div className="max-w-[850px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-9 bg-[#00A4E4]" />

            <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
              {eyebrow}
            </p>
          </div>

          <h2 className="mt-5 mb-0! text-[36px] leading-[1.08] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[46px] lg:text-[54px]">
            {title}
          </h2>

          <p className="mt-7 mb-0! text-[16px] leading-8 text-[#57778C]">
            {description}
          </p>
        </div>

        <div className="border-t border-[#DCEAF1]">
          {stats.map((stat) => (
            <div
              key={`${stat.value}-${stat.label}`}
              className="grid grid-cols-[140px_minmax(0,1fr)] items-center gap-5 border-b border-[#DCEAF1] py-5"
            >
              <strong className="text-[23px] font-bold tracking-[-0.03em] text-[#0077B6]">
                {stat.value}
              </strong>

              <span className="text-sm leading-6 text-[#57778C]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
