import { Link } from "@/i18n/navigation";

import type { DepartmentCardProps } from "../types/departments.types";

import DepartmentIcon from "./DepartmentIcon";

export default function DepartmentCard({ department }: DepartmentCardProps) {
  if (department.featured) {
    return <FeaturedDepartmentCard department={department} />;
  }

  const cardContent = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 size-52 rounded-full bg-[#00A4E4]/7 blur-3xl transition-transform duration-500 group-hover:scale-125"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[4px] origin-left scale-x-0 bg-[linear-gradient(90deg,#00A4E4_0%,#0077B6_70%,#D7A448_100%)] transition-transform duration-300 group-hover:scale-x-100"
      />

      <span className="relative z-10 flex items-start justify-between gap-5">
        <span className="flex size-15 shrink-0 items-center justify-center rounded-[18px] bg-[#EAF7FC] text-[#0077B6] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#0077B6] group-hover:text-white">
          <DepartmentIcon name={department.icon} className="size-7" />
        </span>

        <span className="inline-flex items-center gap-2 rounded-full border border-[#D5E9F1] bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#6E8B9B]">
          <DepartmentIcon name="clock" className="size-3.5 text-[#0077B6]" />

          {department.schedule}
        </span>
      </span>

      <span className="relative z-10 mt-7 flex flex-1 flex-col">
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0077B6]">
          {department.eyebrow}
        </span>

        <span className="mt-3 block text-[24px] leading-[1.25] font-bold tracking-[-0.025em] text-[#123B56]">
          {department.title}
        </span>

        <span className="mt-4 block text-sm leading-7 text-[#57778C]">
          {department.description}
        </span>

        {department.services.length > 0 && (
          <span className="mt-6 flex flex-col gap-3">
            {department.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="flex items-start gap-3 text-sm leading-6 text-[#395F73]"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#EAF7FC] text-[#0077B6]">
                  <DepartmentIcon name="check" className="size-3" />
                </span>

                {service}
              </span>
            ))}
          </span>
        )}

        <span className="mt-auto flex items-center justify-between gap-5 pt-8">
          <span className="text-sm font-semibold text-[#0077B6]">
            {department.actionLabel}
          </span>

          <span className="flex size-11 items-center justify-center rounded-[14px] bg-[#EAF7FC] text-[#0077B6] transition-all duration-300 group-hover:bg-[#0077B6] group-hover:text-white">
            <DepartmentIcon
              name="arrow"
              className="size-[18px] transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </span>
      </span>
    </>
  );

  const className =
    "group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[26px] border border-[#DCEAF1] bg-white p-7 text-[#123B56]! no-underline! shadow-[0_12px_38px_rgba(18,59,86,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00A4E4]/50 hover:shadow-[0_24px_55px_rgba(18,59,86,0.13)] motion-reduce:transform-none motion-reduce:transition-none sm:rounded-[30px] sm:p-8";

  if (department.linkType === "internal") {
    return (
      <Link
        href={department.href}
        aria-label={`${department.actionLabel}: ${department.title}`}
        className={className}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <a
      href={department.href}
      aria-label={`${department.actionLabel}: ${department.title}`}
      className={className}
    >
      {cardContent}
    </a>
  );
}

function FeaturedDepartmentCard({ department }: DepartmentCardProps) {
  const content = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-24 size-72 rounded-full border border-white/15 bg-white/7 transition-transform duration-700 group-hover:scale-110"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-28 size-72 rounded-full bg-white/10 blur-sm transition-transform duration-700 group-hover:scale-125"
      />

      <span className="relative z-10 flex items-start justify-between gap-5">
        <span className="flex size-17 items-center justify-center rounded-[21px] bg-white/14 text-white shadow-[0_14px_34px_rgba(0,39,61,0.24)] backdrop-blur-sm">
          <DepartmentIcon name={department.icon} className="size-8" />
        </span>

        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          <span className="size-2 rounded-full bg-[#65E69C] shadow-[0_0_0_5px_rgba(101,230,156,0.14)]" />

          {department.schedule}
        </span>
      </span>

      <span className="relative z-10 mt-auto block pt-20">
        <span className="text-xs font-bold uppercase tracking-[0.19em] text-[#80E5FF]">
          {department.eyebrow}
        </span>

        <span className="mt-4 block max-w-[500px] text-[34px] leading-[1.12] font-bold tracking-[-0.035em] text-white sm:text-[42px]">
          {department.title}
        </span>

        <span className="mt-5 block max-w-[540px] text-[15px] leading-8 text-white/76">
          {department.description}
        </span>

        {department.services.length > 0 && (
          <span className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {department.services.map((service) => (
              <span
                key={service}
                className="flex items-start gap-3 text-sm leading-6 text-white/82"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                  <DepartmentIcon name="check" className="size-3" />
                </span>

                {service}
              </span>
            ))}
          </span>
        )}

        <span className="mt-10 flex items-center justify-between gap-5 border-t border-white/18 pt-7">
          <span className="inline-flex items-center gap-3 text-sm font-semibold text-white">
            <DepartmentIcon name="phone" className="size-[18px]" />

            {department.actionLabel}
          </span>

          <span className="flex size-12 items-center justify-center rounded-[15px] bg-white text-[#0077B6] shadow-[0_12px_30px_rgba(0,39,61,0.20)] transition-transform duration-300 group-hover:translate-x-1">
            <DepartmentIcon name="arrow" className="size-5" />
          </span>
        </span>
      </span>
    </>
  );

  const className =
    "group relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#123B56_0%,#006D9D_58%,#00A4E4_100%)] p-8 text-white! no-underline! shadow-[0_26px_65px_rgba(0,91,143,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_75px_rgba(0,91,143,0.32)] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[620px] sm:rounded-[32px] sm:p-10";

  if (department.linkType === "internal") {
    return (
      <Link
        href={department.href}
        aria-label={`${department.actionLabel}: ${department.title}`}
        className={className}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={department.href}
      aria-label={`${department.actionLabel}: ${department.title}`}
      className={className}
    >
      {content}
    </a>
  );
}
