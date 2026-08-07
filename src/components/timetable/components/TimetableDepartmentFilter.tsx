import { Link } from "@/i18n/navigation";

import type {
  TimetableCategory,
  TimetableDepartmentFilterProps,
} from "../types/timetable.types";

function createDepartmentHref(department: string, category: TimetableCategory) {
  const params = new URLSearchParams({
    location: department,
    category,
  });

  return `/timetable?${params.toString()}#doctor-schedule`;
}

export default function TimetableDepartmentFilter({
  departments,
  activeDepartment,
  category,
}: TimetableDepartmentFilterProps) {
  if (departments.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Filter klinik">
      <ul className="m-0! grid list-none! grid-cols-2 gap-2 p-0! sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {departments.map((department) => {
          const active = department.key === activeDepartment;

          return (
            <li key={department.key} className="list-none!">
              <Link
                href={createDepartmentHref(department.key, category)}
                aria-current={active ? "page" : undefined}
                className={`flex h-full min-h-12 w-full items-center justify-center px-4 py-3 text-center text-[13px] leading-5 font-semibold whitespace-normal no-underline! transition-all duration-200 ${
                  active
                    ? "bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_100%)] text-white! shadow-[0_8px_20px_rgba(0,119,182,0.16)]"
                    : "border border-[#D5EAF3] bg-white text-[#57778C]! hover:border-[#00A4E4] hover:bg-[#F3FBFF] hover:text-[#0077B6]!"
                }`}
              >
                {department.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
