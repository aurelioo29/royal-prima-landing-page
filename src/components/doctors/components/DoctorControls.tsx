"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { DoctorControlsProps } from "../types/doctors.types";

import DoctorIcon from "./DoctorIcon";

export default function DoctorControls({
  clinics,
  activeClinic,
  view,
  resultLabel,
  labels,
}: DoctorControlsProps) {
  const pathname = usePathname();

  const router = useRouter();

  const searchParams = useSearchParams();

  function updateQuery(key: "clinic" | "view", value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (key === "clinic" && value === "all") {
      params.delete("clinic");
    } else if (key === "view" && value === "card") {
      params.delete("view");
    } else {
      params.set(key, value);
    }

    if (key === "clinic") {
      params.delete("page");
    }

    const query = params.toString();

    router.push(`${pathname}${query ? `?${query}` : ""}#doctor-list`, {
      scroll: false,
    });
  }

  return (
    <div className="flex flex-col gap-5 border-y border-[#DCEAF1] py-5 md:flex-row md:items-end md:justify-between">
      {/* POLI */}
      <div className="w-full md:max-w-[380px]">
        <label
          htmlFor="doctor-clinic"
          className="mb-2 block text-xs font-semibold text-[#7793A5]"
        >
          {labels.clinic}
        </label>

        <div className="relative">
          <select
            id="doctor-clinic"
            value={activeClinic}
            onChange={(event) => updateQuery("clinic", event.target.value)}
            className="h-12 w-full cursor-pointer appearance-none border border-[#D1E5ED] bg-white px-4 pr-11 text-sm font-semibold text-[#123B56] outline-none transition-colors hover:border-[#8DCDE5] focus:border-[#0077B6]"
          >
            {clinics.map((clinic) => (
              <option key={clinic.key} value={clinic.key}>
                {clinic.label} ({clinic.count})
              </option>
            ))}
          </select>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#7793A5]"
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-4">
              <path
                d="m7 10 5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* VIEW */}
      <div className="flex items-center justify-between gap-6 md:justify-end">
        <p className="m-0! whitespace-nowrap text-sm text-[#8AA1AF]">
          {resultLabel}
        </p>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => updateQuery("view", "card")}
            aria-label={labels.card}
            aria-pressed={view === "card"}
            className={`flex size-10 cursor-pointer items-center justify-center border-0! bg-transparent transition-colors ${
              view === "card"
                ? "text-[#0077B6]"
                : "text-[#B5C7D0] hover:text-[#0077B6]"
            }`}
          >
            <DoctorIcon name="grid" className="size-[20px]" />
          </button>

          <button
            type="button"
            onClick={() => updateQuery("view", "list")}
            aria-label={labels.list}
            aria-pressed={view === "list"}
            className={`flex size-10 cursor-pointer items-center justify-center border-0! bg-transparent transition-colors ${
              view === "list"
                ? "text-[#0077B6]"
                : "text-[#B5C7D0] hover:text-[#0077B6]"
            }`}
          >
            <DoctorIcon name="list" className="size-[21px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
