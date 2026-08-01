import Image from "next/image";

import type { CareerVacancyCardProps } from "../types/career.types";

import CareerIcon from "./CareerIcon";

export default function CareerVacancyCard({
  vacancy,
  labels,
}: CareerVacancyCardProps) {
  const isOpen = vacancy.status === "open";

  const emailHref = [
    `mailto:${vacancy.application.email}`,
    `?subject=${encodeURIComponent(vacancy.application.emailSubject)}`,
  ].join("");

  return (
    <article className="grid grid-cols-1 overflow-hidden border-y border-[#D9E9F0] bg-white lg:grid-cols-[minmax(300px,430px)_1fr]">
      {/* Poster */}
      <figure className="relative m-0! bg-[#EEF7FA]">
        <a
          href={vacancy.posterImage}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${labels.posterLabel}: ${vacancy.title}`}
          className="group relative block aspect-[9/16] overflow-hidden no-underline! lg:h-full lg:min-h-[780px]"
        >
          <Image
            src={vacancy.posterImage}
            alt={`${labels.posterLabel} ${vacancy.title}`}
            fill
            sizes="
              (max-width: 1024px) 100vw,
              430px
            "
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />

          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[linear-gradient(180deg,transparent,rgba(18,59,86,0.9))] px-6 pt-24 pb-7 text-white transition-transform duration-300 group-hover:translate-y-0">
            <span className="inline-flex items-center gap-3 text-sm font-semibold">
              {labels.posterLabel}

              <CareerIcon name="external" className="size-[18px]" />
            </span>
          </div>
        </a>
      </figure>

      {/* Job information */}
      <div className="flex flex-col justify-center px-6 py-10 sm:px-9 sm:py-12 lg:px-12 lg:py-14 xl:px-16">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] ${
              isOpen
                ? "bg-[#E4F7ED] text-[#167848]"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {isOpen ? labels.openStatus : labels.closedStatus}
          </span>

          <span className="text-sm font-semibold text-[#7793A5]">
            {vacancy.department}
          </span>
        </div>

        <h2 className="mt-6 mb-0! text-[38px] leading-[1.1] font-bold tracking-[-0.035em] text-[#123B56] sm:text-[48px]">
          {vacancy.title}
        </h2>

        <div className="mt-6 flex flex-wrap gap-x-7 gap-y-4 border-b border-[#DCEAF1] pb-8">
          <div className="flex items-center gap-3 text-sm font-semibold text-[#57778C]">
            <CareerIcon
              name="briefcase"
              className="size-[18px] text-[#0077B6]"
            />

            {vacancy.employmentType}
          </div>

          <div className="flex items-center gap-3 text-sm font-semibold text-[#57778C]">
            <CareerIcon
              name="location"
              className="size-[18px] text-[#0077B6]"
            />

            {vacancy.location}
          </div>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-10 xl:grid-cols-2">
          <div>
            <h3 className="m-0! text-lg font-bold text-[#123B56]">
              {labels.requirements}
            </h3>

            <ul className="mt-6! mb-0! flex list-none! flex-col gap-4 p-0!">
              {vacancy.requirements.map((requirement) => (
                <li
                  key={requirement}
                  className="flex list-none! items-start gap-4"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center bg-[#EAF7FC] text-[#0077B6]">
                    <CareerIcon name="check" className="size-3.5" />
                  </span>

                  <span className="text-sm leading-7 text-[#57778C] sm:text-[15px]">
                    {requirement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="m-0! text-lg font-bold text-[#123B56]">
              {labels.benefits}
            </h3>

            <ul className="mt-6! mb-0! flex list-none! flex-col gap-4 p-0!">
              {vacancy.benefits.map((benefit) => (
                <li key={benefit} className="flex list-none! items-start gap-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center bg-[#E9F8EC] text-[#25894F]">
                    <CareerIcon name="check" className="size-3.5" />
                  </span>

                  <span className="text-sm leading-7 text-[#57778C] sm:text-[15px]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#DCEAF1] pt-8">
          <p className="m-0! text-xs font-bold uppercase tracking-[0.14em] text-[#7793A5]">
            {labels.emailSubjectLabel}
          </p>

          <code className="mt-3 block break-words bg-[#F3F9FC] px-4 py-3 text-sm font-semibold text-[#123B56]">
            {vacancy.application.emailSubject}
          </code>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={emailHref}
            className="inline-flex h-14 items-center justify-center gap-3 bg-[#0077B6] px-7 text-sm font-semibold text-white! no-underline! shadow-[0_14px_30px_rgba(0,119,182,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#005F92]"
          >
            <CareerIcon name="email" className="size-[18px]" />

            {labels.emailLabel}
          </a>

          <a
            href={vacancy.application.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-3 border border-[#B8D8E5] bg-white px-7 text-sm font-semibold text-[#123B56]! no-underline! transition-all duration-300 hover:border-[#0077B6] hover:bg-[#F3FBFF] hover:text-[#0077B6]!"
          >
            {labels.formLabel}

            <CareerIcon name="external" className="size-[18px]" />
          </a>
        </div>
      </div>
    </article>
  );
}
