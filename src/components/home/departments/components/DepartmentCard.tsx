import { Link } from "@/i18n/navigation";

import type {
  DepartmentAccent,
  DepartmentCardProps,
} from "../types/departments.types";

import DepartmentIcon from "./DepartmentIcon";

const ACCENT_STYLES: Record<
  DepartmentAccent,
  {
    icon: string;
    glow: string;
    hoverBorder: string;
  }
> = {
  cyan: {
    icon: "bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_100%)] text-white",

    glow: "bg-[#00A4E4]/12",

    hoverBorder: "hover:border-[#00A4E4]/55",
  },

  blue: {
    icon: "bg-[#E7F3FF] text-[#146EB4]",

    glow: "bg-[#146EB4]/10",

    hoverBorder: "hover:border-[#146EB4]/45",
  },

  teal: {
    icon: "bg-[#E6F7F3] text-[#168C7A]",

    glow: "bg-[#168C7A]/10",

    hoverBorder: "hover:border-[#168C7A]/45",
  },

  purple: {
    icon: "bg-[#F1EDFF] text-[#7564C2]",

    glow: "bg-[#7564C2]/10",

    hoverBorder: "hover:border-[#7564C2]/45",
  },

  gold: {
    icon: "bg-[#FFF5DF] text-[#B98022]",

    glow: "bg-[#D7A448]/12",

    hoverBorder: "hover:border-[#D7A448]/50",
  },
};

export default function DepartmentCard({ department }: DepartmentCardProps) {
  if (department.featured) {
    return <FeaturedDepartmentCard department={department} />;
  }

  const accent = ACCENT_STYLES[department.accent];

  return (
    <Link
      href={department.href}
      aria-label={`${department.actionLabel}: ${department.title}`}
      className={`
        group
        relative
        flex
        h-full
        min-h-[250px]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-[#DCEAF1]
        bg-white
        p-6
        text-[#123B56]!
        no-underline!
        shadow-[0_12px_35px_rgba(18,59,86,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_24px_50px_rgba(18,59,86,0.12)]
        motion-reduce:transform-none
        motion-reduce:transition-none
        sm:min-h-[270px]
        sm:rounded-[28px]
        sm:p-7
        ${accent.hoverBorder}
      `}
    >
      <span
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -top-20
          -right-20
          size-48
          rounded-full
          blur-3xl
          transition-transform
          duration-500
          group-hover:scale-125
          ${accent.glow}
        `}
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[4px]
          origin-left
          scale-x-0
          bg-[linear-gradient(90deg,#00A4E4_0%,#0077B6_65%,#D7A448_100%)]
          transition-transform
          duration-300
          group-hover:scale-x-100
        "
      />

      <span
        className={`
          relative
          z-10
          flex
          size-14
          items-center
          justify-center
          rounded-[18px]
          transition-transform
          duration-300
          group-hover:-translate-y-1
          group-hover:scale-[1.04]
          ${accent.icon}
        `}
      >
        <DepartmentIcon name={department.icon} className="size-7" />
      </span>

      <span className="relative z-10 mt-7 flex flex-1 flex-col">
        <span className="block text-[21px] leading-7 font-bold text-[#123B56]">
          {department.title}
        </span>

        <span className="mt-4 block text-sm leading-7 text-[#57778C]">
          {department.description}
        </span>

        <span className="mt-auto flex items-center justify-between gap-4 pt-7">
          <span className="text-sm font-semibold text-[#0077B6]">
            {department.actionLabel}
          </span>

          <span className="flex size-10 items-center justify-center rounded-[13px] bg-[#EAF7FC] text-[#0077B6] transition-all duration-300 group-hover:bg-[#0077B6] group-hover:text-white">
            <DepartmentIcon
              name="arrow"
              className="size-[18px] transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </span>
        </span>
      </span>
    </Link>
  );
}

function FeaturedDepartmentCard({ department }: DepartmentCardProps) {
  return (
    <Link
      href={department.href}
      aria-label={`${department.actionLabel}: ${department.title}`}
      className="
        group
        relative
        flex
        h-full
        min-h-[430px]
        flex-col
        overflow-hidden
        rounded-[26px]
        bg-[linear-gradient(145deg,#123B56_0%,#006D9D_58%,#00A4E4_100%)]
        p-7
        text-white!
        no-underline!
        shadow-[0_24px_55px_rgba(0,91,143,0.24)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_30px_65px_rgba(0,91,143,0.30)]
        motion-reduce:transform-none
        motion-reduce:transition-none
        sm:min-h-[480px]
        sm:rounded-[30px]
        sm:p-9
      "
    >
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-24
          -right-20
          size-64
          rounded-full
          border
          border-white/15
          bg-white/7
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -bottom-24
          size-60
          rounded-full
          bg-white/10
          blur-sm
          transition-transform
          duration-700
          group-hover:scale-125
        "
      />

      <span className="relative z-10 flex items-start justify-between gap-5">
        <span className="flex size-16 items-center justify-center rounded-[20px] bg-white/14 text-white shadow-[0_12px_30px_rgba(0,39,61,0.20)] backdrop-blur-sm">
          <DepartmentIcon name={department.icon} className="size-8" />
        </span>

        {department.schedule && (
          <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
            {department.schedule}
          </span>
        )}
      </span>

      <span className="relative z-10 mt-auto block pt-16">
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#87E4FF]">
          Emergency Service
        </span>

        <span className="mt-4 block max-w-[430px] text-[31px] leading-[1.15] font-bold tracking-[-0.025em] text-white sm:text-[38px]">
          {department.title}
        </span>

        <span className="mt-5 block max-w-[470px] text-[15px] leading-8 text-white/75">
          {department.description}
        </span>

        <span className="mt-8 flex items-center justify-between gap-5 border-t border-white/18 pt-6">
          <span className="text-sm font-semibold text-white">
            {department.actionLabel}
          </span>

          <span className="flex size-12 items-center justify-center rounded-[15px] bg-white text-[#0077B6] shadow-[0_12px_28px_rgba(0,39,61,0.20)] transition-transform duration-300 group-hover:translate-x-1">
            <DepartmentIcon name="arrow" className="size-5" />
          </span>
        </span>
      </span>
    </Link>
  );
}
