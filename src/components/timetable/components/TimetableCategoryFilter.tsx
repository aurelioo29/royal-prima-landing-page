import { Link } from "@/i18n/navigation";

import type {
  TimetableCategory,
  TimetableCategoryFilterProps,
} from "../types/timetable.types";

function createCategoryHref(
  category: TimetableCategory,
  activeDepartment: string | null,
) {
  const params = new URLSearchParams();

  params.set("category", category);

  if (activeDepartment) {
    params.set("location", activeDepartment);
  }

  return `/timetable?${params.toString()}#doctor-schedule`;
}

export default function TimetableCategoryFilter({
  activeCategory,
  activeDepartment,
  generalLabel,
  jknLabel,
}: TimetableCategoryFilterProps) {
  const options: {
    key: TimetableCategory;

    label: string;
  }[] = [
    {
      key: "nonjkn",

      label: generalLabel,
    },

    {
      key: "jkn",

      label: jknLabel,
    },
  ];

  return (
    <nav aria-label="Jenis layanan">
      <ul className="m-0! flex list-none! flex-wrap items-center gap-2 p-0!">
        {options.map((option) => {
          const active = option.key === activeCategory;

          return (
            <li key={option.key} className="list-none!">
              <Link
                href={createCategoryHref(option.key, activeDepartment)}
                aria-current={active ? "page" : undefined}
                className={`inline-flex h-11 items-center justify-center border px-5 text-sm font-semibold no-underline! transition-colors ${
                  active
                    ? "border-[#123B56] bg-[#123B56] text-white!"
                    : "border-[#D5EAF3] bg-white text-[#57778C]! hover:border-[#0077B6] hover:text-[#0077B6]!"
                }`}
              >
                {option.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
