import { Link } from "@/i18n/navigation";

import type { OutpatientScheduleProps } from "../types/outpatient.types";

import OutpatientIcon from "./OutpatientIcon";

export default function OutpatientSchedule({
  eyebrow,
  title,
  description,
  weekdayLabel,
  weekdayValue,
  saturdayLabel,
  saturdayValue,
  sundayLabel,
  sundayValue,
  note,
  buttonLabel,
  buttonHref,
}: OutpatientScheduleProps) {
  const rows = [
    {
      label: weekdayLabel,
      value: weekdayValue,
    },
    {
      label: saturdayLabel,
      value: saturdayValue,
    },
    {
      label: sundayLabel,
      value: sundayValue,
    },
  ];

  return (
    <section className="border-y border-[#DCEAF1] bg-[#F7FBFD] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-10 xl:px-12 2xl:px-16">
        <header>
          <span className="flex size-12 items-center justify-center bg-white text-[#0077B6]">
            <OutpatientIcon name="calendar" className="size-5" />
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

        <div>
          <div className="border-t border-[#D7E7EE]">
            {rows.map((row, index) => (
              <div
                key={row.label}
                className="grid grid-cols-[48px_minmax(0,1fr)] gap-5 border-b border-[#D7E7EE] py-6 sm:grid-cols-[55px_190px_minmax(0,1fr)] sm:items-center"
              >
                <span className="text-xs font-bold text-[#00A4E4]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong className="text-[17px] font-bold text-[#123B56]">
                  {row.label}
                </strong>

                <p className="m-0! text-sm leading-7 text-[#688497]">
                  {row.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 mb-0! text-sm leading-7 text-[#718A9A]">{note}</p>

          <Link
            href={buttonHref}
            className="mt-7 inline-flex h-13 items-center justify-center gap-3 bg-[#0077B6] px-6 text-sm font-semibold text-white! no-underline! transition-colors hover:bg-[#00669D]"
          >
            {buttonLabel}

            <OutpatientIcon name="arrow" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
