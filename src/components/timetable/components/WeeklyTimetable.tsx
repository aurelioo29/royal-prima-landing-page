import type { ResolvedTimetableEntry } from "../types/timetable.types";

import type { WeeklyTimetableProps } from "../types/timetable.types";

import TimetableIcon from "./TimetableIcon";

const COLOR_PALETTE = [
  {
    background: "#F0FAFD",
    border: "#72C8E7",
    accent: "#0077B6",
  },
  {
    background: "#F3F9FD",
    border: "#8BC4DF",
    accent: "#347FA8",
  },
  {
    background: "#F0F9F8",
    border: "#82C6BB",
    accent: "#358D7D",
  },
  {
    background: "#F7F6FC",
    border: "#AAA5D5",
    accent: "#716BB1",
  },
  {
    background: "#F7FAFD",
    border: "#9CB8D5",
    accent: "#607FA7",
  },
  {
    background: "#F4FAF7",
    border: "#92CBB3",
    accent: "#4D9779",
  },
] as const;

function timeToMinutes(time: string) {
  const [hour, minute] = time.split(":").map(Number);

  return hour * 60 + minute;
}

function sortEntries(entries: readonly ResolvedTimetableEntry[]) {
  return [...entries].sort((a, b) => {
    const startDifference =
      timeToMinutes(a.startTime) - timeToMinutes(b.startTime);

    if (startDifference !== 0) {
      return startDifference;
    }

    return timeToMinutes(a.endTime) - timeToMinutes(b.endTime);
  });
}

function hashString(value: string) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) | 0;
  }

  return hash >>> 0;
}

function getDepartmentColor(department: string) {
  const index = hashString(department) % COLOR_PALETTE.length;

  return COLOR_PALETTE[index];
}

export default function WeeklyTimetable({
  days,
  entries,
  labels,
}: WeeklyTimetableProps) {
  if (entries.length === 0) {
    return (
      <div className="border-y border-[#DCEAF1] py-16 text-center">
        <span className="mx-auto flex size-12 items-center justify-center bg-[#F0FAFD] text-[#0077B6]">
          <TimetableIcon name="calendar" className="size-5" />
        </span>

        <h3 className="mt-5 mb-0! text-2xl font-bold text-[#123B56]">
          {labels.emptyTitle}
        </h3>

        <p className="mx-auto mt-3 mb-0! max-w-[560px] text-sm leading-7 text-[#57778C]">
          {labels.emptyDescription}
        </p>
      </div>
    );
  }

  /*
   * Biasanya page hanya menampilkan satu klinik.
   *
   * Tetapi kita tetap support kalau suatu saat
   * multiple clinic ditampilkan sekaligus.
   */
  const departmentCount = new Set(entries.map((entry) => entry.department))
    .size;

  const showDepartmentLabel = departmentCount > 1;

  return (
    <div className="border border-[#D5E7EF] bg-[#F8FBFC]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {days.map((day, index) => {
          const dayEntries = sortEntries(
            entries.filter((entry) => entry.day === day.key),
          );

          return (
            <section
              key={day.key}
              className={`min-w-0 ${
                index !== days.length - 1
                  ? "xl:border-r xl:border-[#D5E7EF]"
                  : ""
              }`}
            >
              {/* DAY HEADER */}
              <header className="flex min-h-[76px] items-center justify-between border-b border-[#D5E7EF] bg-[#EFF7FA] px-5">
                <div>
                  <h3 className="m-0! text-[14px] font-bold text-[#123B56]">
                    {day.label}
                  </h3>

                  <p className="mt-1 mb-0! text-[10px] font-bold uppercase tracking-[0.12em] text-[#0077B6]">
                    {day.categoryLabel}
                  </p>
                </div>

                {dayEntries.length > 0 && (
                  <span className="flex min-w-7 items-center justify-center bg-white px-2 py-1 text-[11px] font-bold text-[#66879A]">
                    {dayEntries.length}
                  </span>
                )}
              </header>

              {/* DAY CONTENT */}
              <div className="space-y-3 p-3">
                {dayEntries.length === 0 ? (
                  <div className="flex min-h-[130px] flex-col items-center justify-center border border-dashed border-[#D9E8EE] bg-white px-4 text-center">
                    <TimetableIcon
                      name="calendar"
                      className="size-5 text-[#A5BAC5]"
                    />

                    <p className="mt-3 mb-0! text-xs leading-5 font-medium text-[#91A7B3]">
                      {labels.noSchedule}
                    </p>
                  </div>
                ) : (
                  dayEntries.map((entry) => {
                    const color = getDepartmentColor(entry.department);

                    return (
                      <article
                        key={entry.id}
                        className="relative overflow-hidden border bg-white shadow-[0_5px_18px_rgba(18,59,86,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(18,59,86,0.09)]"
                        style={{
                          borderColor: color.border,
                        }}
                      >
                        {/* Accent */}
                        <div
                          className="absolute inset-y-0 left-0 w-[3px]"
                          style={{
                            backgroundColor: color.accent,
                          }}
                        />

                        <div className="p-4 pl-5">
                          {showDepartmentLabel && (
                            <p
                              className="m-0! mb-3! text-[11px] font-bold uppercase tracking-[0.1em]"
                              style={{
                                color: color.accent,
                              }}
                            >
                              {entry.departmentLabel}
                            </p>
                          )}

                          {/* TIME */}
                          <div className="flex items-center gap-2">
                            <span
                              className="flex size-8 shrink-0 items-center justify-center"
                              style={{
                                backgroundColor: color.background,

                                color: color.accent,
                              }}
                            >
                              <TimetableIcon name="clock" className="size-4" />
                            </span>

                            <div>
                              <p className="m-0! text-[11px] leading-4 font-semibold text-[#819AA8]">
                                Waktu Praktik
                              </p>

                              <p className="mt-0.5 mb-0! text-[14px] leading-5 font-bold text-[#123B56]">
                                {entry.timeLabel}
                              </p>
                            </div>
                          </div>

                          {/* DIVIDER */}
                          <div className="my-4 h-px bg-[#E1EDF2]" />

                          {/* DOCTORS */}
                          <div>
                            <p className="m-0! text-[10px] font-bold uppercase tracking-[0.11em] text-[#8AA1AF]">
                              {labels.doctors}
                            </p>

                            <div className="mt-2.5 space-y-2">
                              {entry.doctors.map((doctor) => (
                                <div
                                  key={doctor}
                                  className="flex items-start gap-2.5"
                                >
                                  <span className="mt-[5px] size-1.5 shrink-0 rounded-full bg-[#00A4E4]" />

                                  <p className="m-0! text-[13px] leading-[1.55] font-bold text-[#123B56]">
                                    {doctor}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* ROOM */}
                          {entry.room && (
                            <>
                              <div className="my-4 h-px bg-[#E1EDF2]" />

                              <div className="flex items-center gap-2 text-xs font-semibold text-[#66879A]">
                                <TimetableIcon
                                  name="location"
                                  className="size-4 text-[#0077B6]"
                                />

                                {entry.room}
                              </div>
                            </>
                          )}
                        </div>
                      </article>
                    );
                  })
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
