import { Link } from "@/i18n/navigation";

import type { TimetableDepartmentFilterProps } from "../types/timetable.types";

function createDepartmentHref(department: string) {
  if (department === "all") {
    return "/timetable#doctor-schedule";
  }

  return `/timetable?department=${encodeURIComponent(
    department,
  )}#doctor-schedule`;
}

export default function TimetableDepartmentFilter({
  departments,
  activeDepartment,
}: TimetableDepartmentFilterProps) {
  return (
    <nav aria-label="Filter departemen" className="overflow-x-auto">
      <ul className="m-0! flex min-w-max list-none! items-center gap-2 p-0!">
        {departments.map((department) => {
          const active = department.key === activeDepartment;

          return (
            <li key={department.key} className="list-none!">
              <Link
                href={createDepartmentHref(department.key)}
                aria-current={active ? "page" : undefined}
                className={`inline-flex h-12 items-center gap-3 border px-5 text-sm font-semibold no-underline! transition-all duration-200 ${
                  active
                    ? "border-[#0077B6] bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_100%)] text-white! shadow-[0_10px_25px_rgba(0,119,182,0.18)]"
                    : "border-[#D5EAF3] bg-white text-[#57778C]! hover:border-[#00A4E4] hover:bg-[#F3FBFF] hover:text-[#0077B6]!"
                }`}
              >
                {department.label}

                <span
                  className={`text-[11px] ${
                    active ? "text-white/70" : "text-[#8AA1AF]"
                  }`}
                >
                  {department.count}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
