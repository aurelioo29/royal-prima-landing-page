import type { InvestorDocumentCardProps } from "../types/investor-relations.types";

import InvestorIcon from "./InvestorIcon";

export default function InvestorDocumentCard({
  document,
  openLabel,
  pdfLabel,
  featured = false,
}: InvestorDocumentCardProps) {
  if (featured) {
    return (
      <a
        href={document.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid overflow-hidden border border-[#D8E8EF] bg-white text-[#123B56] no-underline! shadow-[0_22px_65px_rgba(18,59,86,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00A4E4] hover:shadow-[0_30px_75px_rgba(18,59,86,0.13)] md:grid-cols-[190px_1fr_auto]"
      >
        <div className="flex min-h-[180px] items-center justify-center bg-[linear-gradient(145deg,#0077B6_0%,#123B56_100%)] p-8 text-white">
          <div className="text-center">
            <InvestorIcon name="document" className="mx-auto size-11" />

            <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
              {pdfLabel}
            </span>

            <span className="mt-2 block text-[34px] font-bold">
              {document.year}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-9">
          <p className="m-0! text-xs font-bold uppercase tracking-[0.17em] text-[#0077B6]">
            {document.eyebrow}
          </p>

          <h3 className="mt-3 mb-0! text-[27px] leading-tight font-bold text-[#123B56] sm:text-[32px]">
            {document.title}
          </h3>

          <p className="mt-4 mb-0! max-w-[720px] text-sm leading-7 text-[#57778C] sm:text-[15px]">
            {document.description}
          </p>
        </div>

        <div className="flex items-center border-t border-[#E0EDF2] px-7 py-6 md:border-t-0 md:border-l md:px-8">
          <span className="inline-flex items-center gap-3 text-sm font-semibold text-[#0077B6]">
            {openLabel}

            <InvestorIcon
              name="arrow"
              className="size-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={document.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full min-h-[250px] flex-col border border-[#D8E8EF] bg-white p-6 text-[#123B56] no-underline! shadow-[0_14px_45px_rgba(18,59,86,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00A4E4] hover:shadow-[0_22px_55px_rgba(18,59,86,0.1)] sm:p-7"
    >
      <div className="flex items-start justify-between gap-5">
        <span className="flex size-12 items-center justify-center bg-[#E8F7FC] text-[#0077B6] transition-colors duration-300 group-hover:bg-[#0077B6] group-hover:text-white">
          <InvestorIcon
            name={
              document.category === "financialStatement"
                ? "financial"
                : "report"
            }
            className="size-6"
          />
        </span>

        <span className="border border-[#D5E7EF] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em] text-[#6F8998]">
          {pdfLabel}
        </span>
      </div>

      <p className="mt-7 mb-0! text-xs font-bold uppercase tracking-[0.15em] text-[#0077B6]">
        {document.eyebrow}
      </p>

      <h3 className="mt-3 mb-0! text-[21px] leading-[1.3] font-bold text-[#123B56]">
        {document.title}
      </h3>

      <p className="mt-4 mb-0! flex-1 text-sm leading-7 text-[#57778C]">
        {document.description}
      </p>

      <div className="mt-7 flex items-center justify-between border-t border-[#E4EFF3] pt-5">
        <span className="text-sm font-semibold text-[#0077B6]">
          {openLabel}
        </span>

        <InvestorIcon
          name="arrow"
          className="size-[18px] text-[#0077B6] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </a>
  );
}
