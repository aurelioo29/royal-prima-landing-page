import type { CSSProperties } from "react";

import type {
  TimetableDepartmentKey,
  WeeklyTimetableProps,
} from "../types/timetable.types";

import TimetableIcon from "./TimetableIcon";

const START_HOUR = 8;
const END_HOUR = 17;
const SLOT_MINUTES = 30;

const TOTAL_SLOTS = ((END_HOUR - START_HOUR) * 60) / SLOT_MINUTES;

const DEPARTMENT_COLORS: Record<
  TimetableDepartmentKey,
  {
    background: string;
    border: string;
  }
> = {
  pediatrics: {
    background: "#DDF3F8",
    border: "#48A8D8",
  },

  obstetricsGynecology: {
    background: "#E8F4FB",
    border: "#69A7D3",
  },

  cardiology: {
    background: "#E4F3F5",
    border: "#3C9EAF",
  },

  pulmonology: {
    background: "#EAF6F2",
    border: "#58A88E",
  },

  psychiatry: {
    background: "#F0EFFB",
    border: "#817CC3",
  },

  neurology: {
    background: "#EEF2FA",
    border: "#718FC5",
  },
};

function timeToMinutes(time: string) {
  const [hour, minute] = time.split(":").map(Number);

  return hour * 60 + minute;
}

function getSlotIndex(time: string) {
  const scheduleStart = START_HOUR * 60;

  return (timeToMinutes(time) - scheduleStart) / SLOT_MINUTES;
}

function getEventStyle(
  dayIndex: number,
  startTime: string,
  endTime: string,
): CSSProperties {
  const startSlot = getSlotIndex(startTime);

  const endSlot = getSlotIndex(endTime);

  return {
    gridColumn: dayIndex + 2,

    gridRow: `${startSlot + 2} / ${endSlot + 2}`,
  };
}

function formatHour(hour: number) {
  return `${String(hour).padStart(2, "0")}:00`;
}

export default function WeeklyTimetable({
  days,
  entries,
  labels,
}: WeeklyTimetableProps) {
  if (entries.length === 0) {
    return (
      <div className="border-y border-[#DCEAF1] py-16 text-center">
        <h3 className="m-0! text-2xl font-bold text-[#123B56]">
          {labels.emptyTitle}
        </h3>

        <p className="mx-auto mt-4 mb-0! max-w-[560px] text-sm leading-7 text-[#57778C]">
          {labels.emptyDescription}
        </p>
      </div>
    );
  }

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden overflow-x-auto lg:block">
        <div
          className="relative grid min-w-[1450px] border-r border-b border-[#CFE3EC] bg-white"
          style={{
            gridTemplateColumns: "110px repeat(6, minmax(210px, 1fr))",

            gridTemplateRows: `58px repeat(${TOTAL_SLOTS}, 56px)`,
          }}
        >
          {/* Corner */}
          <div className="border-t border-l border-[#CFE3EC]" />

          {/* Day headers */}
          {days.map((day, index) => (
            <div
              key={day.key}
              className="flex items-center justify-center border-t border-l border-[#CFE3EC] bg-[#F5FAFC] px-4 text-sm font-bold text-[#123B56]"
              style={{
                gridColumn: index + 2,

                gridRow: 1,
              }}
            >
              {day.label}
            </div>
          ))}

          {/* Vertical backgrounds */}
          {days.map((day, index) => (
            <div
              key={`column-${day.key}`}
              aria-hidden="true"
              className="border-l border-[#CFE3EC]"
              style={{
                gridColumn: index + 2,

                gridRow: `2 / ${TOTAL_SLOTS + 2}`,
              }}
            />
          ))}

          {/* Horizontal lines */}
          {Array.from({
            length: TOTAL_SLOTS + 1,
          }).map((_, index) => (
            <div
              key={`line-${index}`}
              aria-hidden="true"
              className={
                index % 2 === 0
                  ? "border-t border-[#CFE3EC]"
                  : "border-t border-[#EAF1F4]"
              }
              style={{
                gridColumn: "2 / 8",
                gridRow: index + 2,
              }}
            />
          ))}

          {/* Time labels */}
          {Array.from({
            length: END_HOUR - START_HOUR,
          }).map((_, index) => {
            const hour = START_HOUR + index;

            return (
              <div
                key={hour}
                className="border-t border-l border-[#CFE3EC] px-4 pt-3 text-xs font-semibold text-[#7793A5]"
                style={{
                  gridColumn: 1,
                  gridRow: index * 2 + 2,
                }}
              >
                {formatHour(hour)}
              </div>
            );
          })}

          {/* Schedule cards */}
          {entries.map((entry) => {
            const dayIndex = days.findIndex((day) => day.key === entry.day);

            if (dayIndex < 0) {
              return null;
            }

            const color = DEPARTMENT_COLORS[entry.department];

            return (
              <article
                key={entry.id}
                className="z-10 m-1.5 flex min-h-0 flex-col overflow-hidden border p-4 shadow-[0_7px_20px_rgba(18,59,86,0.06)]"
                style={{
                  ...getEventStyle(dayIndex, entry.startTime, entry.endTime),

                  backgroundColor: color.background,

                  borderColor: color.border,
                }}
              >
                <p className="m-0! text-[13px] leading-5 font-semibold text-[#55798D]">
                  {entry.departmentLabel}
                </p>

                <p className="mt-1 mb-0! inline-flex items-center gap-2 text-xs font-semibold text-[#7894A3]">
                  <TimetableIcon name="clock" className="size-3.5" />

                  {entry.timeLabel}
                </p>

                <div
                  className="my-3 h-px"
                  style={{
                    backgroundColor: color.border,
                  }}
                />

                <div className="space-y-1">
                  {entry.doctors.map((doctor) => (
                    <p
                      key={doctor}
                      className="m-0! text-[13px] leading-5 font-bold text-[#123B56]"
                    >
                      {doctor}
                    </p>
                  ))}
                </div>

                <p className="mt-auto mb-0! pt-4 text-xs font-semibold text-[#7894A3]">
                  {entry.room}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      {/* MOBILE / TABLET */}
      <div className="space-y-9 lg:hidden">
        {days.map((day) => {
          const dayEntries = entries.filter((entry) => entry.day === day.key);

          if (dayEntries.length === 0) {
            return null;
          }

          return (
            <section key={day.key}>
              <div className="flex items-center gap-4 border-b border-[#D8E8EF] pb-4">
                <span className="flex size-11 items-center justify-center bg-[#EAF7FC] text-[#0077B6]">
                  <TimetableIcon name="calendar" className="size-5" />
                </span>

                <h3 className="m-0! text-xl font-bold text-[#123B56]">
                  {day.label}
                </h3>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {dayEntries.map((entry) => {
                  const color = DEPARTMENT_COLORS[entry.department];

                  return (
                    <article
                      key={entry.id}
                      className="border p-5"
                      style={{
                        backgroundColor: color.background,

                        borderColor: color.border,
                      }}
                    >
                      <p className="m-0! text-xs font-bold uppercase tracking-[0.12em] text-[#55798D]">
                        {entry.departmentLabel}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#123B56]">
                          <TimetableIcon
                            name="clock"
                            className="size-4 text-[#0077B6]"
                          />

                          {entry.timeLabel}
                        </span>

                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#57778C]">
                          <TimetableIcon
                            name="location"
                            className="size-4 text-[#0077B6]"
                          />

                          {entry.room}
                        </span>
                      </div>

                      <div className="mt-5 border-t border-[#123B56]/12 pt-5">
                        <p className="m-0! text-xs font-bold uppercase tracking-[0.12em] text-[#7793A5]">
                          {labels.doctors}
                        </p>

                        <div className="mt-3 space-y-2">
                          {entry.doctors.map((doctor) => (
                            <p
                              key={doctor}
                              className="m-0! text-sm font-bold text-[#123B56]"
                            >
                              {doctor}
                            </p>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
