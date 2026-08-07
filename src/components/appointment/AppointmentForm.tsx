"use client";

import { type FormEvent, useEffect, useMemo, useState } from "react";

import { useTranslations } from "next-intl";

import ContactIcon from "@/components/contact/ContactIcon";

type ScheduleCategory = "nonjkn" | "jkn";

type LocationOption = {
  id: string;

  bpjs_code: string | null;

  label: string;

  name: string;
};

type DoctorOption = {
  id: string;

  full_name: string;

  photo_url?: string | null;

  schedules: string;
};

type ParsedSchedule = {
  day: "Senin" | "Selasa" | "Rabu" | "Kamis" | "Jumat" | "Sabtu";

  dayIndex: number;

  startTime: string;

  endTime: string;
};

type AppointmentOption = {
  value: string;

  label: string;

  timestamp: number;
};

type CreatedAppointment = {
  id: string;

  documentCode: string;

  displayName: string;

  displayPhone: string;

  estimatedVisitAt: string;

  status: string;

  doctor: {
    id: string;

    name: string;

    checkInBeforeMinutes: number | null;
  };

  location: {
    id: string;

    name: string;

    label: string;
  };
};

const DAY_INDEX: Record<ParsedSchedule["day"], number> = {
  Senin: 1,

  Selasa: 2,

  Rabu: 3,

  Kamis: 4,

  Jumat: 5,

  Sabtu: 6,
};

function parseDoctorSchedules(value: string): ParsedSchedule[] {
  const normalized = value.replace(/\\n/g, "\n");

  return normalized
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .flatMap((line) => {
      const match = line.match(
        /^(Senin|Selasa|Rabu|Kamis|Jumat|Sabtu)\s+(\d{1,2}:\d{2})\s*[-–—]\s*(\d{1,2}:\d{2})$/i,
      );

      if (!match) {
        return [];
      }

      const rawDay = match[1];

      const day = `${rawDay[0].toUpperCase()}${rawDay
        .slice(1)
        .toLowerCase()}` as ParsedSchedule["day"];

      return [
        {
          day,

          dayIndex: DAY_INDEX[day],

          startTime: match[2],

          endTime: match[3],
        },
      ];
    });
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function createHisDateTime(date: Date, time: string) {
  return [
    `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()}`,

    `${time}:00`,
  ].join(" ");
}

function timeToMinutes(time: string) {
  const [hour, minute] = time.split(":").map(Number);

  return hour * 60 + minute;
}

function createUpcomingOptions(schedules: string): AppointmentOption[] {
  const parsed = parseDoctorSchedules(schedules);

  if (parsed.length === 0) {
    return [];
  }

  const now = new Date();

  const options: AppointmentOption[] = [];

  /*
   * Tampilkan jadwal 8 minggu ke depan.
   */
  for (let offset = 0; offset < 56; offset += 1) {
    const date = new Date(
      now.getFullYear(),

      now.getMonth(),

      now.getDate() + offset,

      12,
      0,
      0,
    );

    const matchingSchedules = parsed.filter(
      (schedule) => schedule.dayIndex === date.getDay(),
    );

    matchingSchedules.forEach((schedule) => {
      /*
       * Kalau jadwal hari ini sudah lewat,
       * jangan tampilkan.
       */
      if (offset === 0) {
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        if (timeToMinutes(schedule.startTime) <= currentMinutes) {
          return;
        }
      }

      const dateLabel = new Intl.DateTimeFormat("id-ID", {
        weekday: "long",

        day: "2-digit",

        month: "long",

        year: "numeric",
      }).format(date);

      options.push({
        value: createHisDateTime(date, schedule.startTime),

        label: `${dateLabel} • ${schedule.startTime} – ${schedule.endTime}`,

        timestamp: date.getTime() + timeToMinutes(schedule.startTime) * 60_000,
      });
    });
  }

  return options.sort((a, b) => a.timestamp - b.timestamp);
}

export default function AppointmentForm() {
  const t = useTranslations("AppointmentPage.form");

  const [category, setCategory] = useState<ScheduleCategory>("nonjkn");

  const [locations, setLocations] = useState<LocationOption[]>([]);

  const [locationId, setLocationId] = useState("");

  const [doctors, setDoctors] = useState<DoctorOption[]>([]);

  const [doctorId, setDoctorId] = useState("");

  const [loadingLocations, setLoadingLocations] = useState(true);

  const [loadingDoctors, setLoadingDoctors] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [appointment, setAppointment] = useState<CreatedAppointment | null>(
    null,
  );

  /*
   * =========================
   * GET LOCATIONS
   * =========================
   */
  useEffect(() => {
    const controller = new AbortController();

    async function loadLocations() {
      try {
        setLoadingLocations(true);

        const response = await fetch("/api/public/locations", {
          signal: controller.signal,

          cache: "no-store",
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Gagal mengambil klinik.");
        }

        const data = (result.data ?? []) as LocationOption[];

        setLocations(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        console.error(error);

        setErrorMessage(t("errors.locations"));
      } finally {
        setLoadingLocations(false);
      }
    }

    loadLocations();

    return () => {
      controller.abort();
    };
  }, [t]);

  /*
   * =========================
   * GET DOCTORS
   * =========================
   */
  useEffect(() => {
    if (!locationId) {
      setDoctors([]);

      setDoctorId("");

      return;
    }

    const controller = new AbortController();

    async function loadDoctors() {
      try {
        setLoadingDoctors(true);

        setDoctorId("");

        setDoctors([]);

        const params = new URLSearchParams({
          location_id: locationId,

          category,
        });

        const response = await fetch(
          `/api/public/doctor-schedules?${params.toString()}`,
          {
            signal: controller.signal,

            cache: "no-store",
          },
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Gagal mengambil jadwal dokter.");
        }

        setDoctors(result.data ?? []);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        console.error(error);

        setErrorMessage(t("errors.doctors"));
      } finally {
        setLoadingDoctors(false);
      }
    }

    loadDoctors();

    return () => {
      controller.abort();
    };
  }, [locationId, category, t]);

  const selectedDoctor = useMemo(
    () => doctors.find((doctor) => doctor.id === doctorId) ?? null,
    [doctors, doctorId],
  );

  const appointmentOptions = useMemo(
    () =>
      selectedDoctor ? createUpcomingOptions(selectedDoctor.schedules) : [],
    [selectedDoctor],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) {
      return;
    }

    setErrorMessage("");

    setAppointment(null);

    const form = event.currentTarget;

    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();

    const phone = String(formData.get("phone") ?? "").trim();

    const estimatedVisitAt = String(formData.get("schedule") ?? "").trim();

    const website = String(formData.get("website") ?? "").trim();

    if (!name || !phone || !locationId || !doctorId || !estimatedVisitAt) {
      setErrorMessage(t("errors.required"));

      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch("/api/public/appointments", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          displayName: name,

          displayPhone: phone,

          locationId,

          doctorId,

          estimatedVisitAt,

          website,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || t("errors.submit"));
      }

      setAppointment(result.appointment);

      form.reset();

      setDoctorId("");
    } catch (error) {
      console.error(error);

      setErrorMessage(
        error instanceof Error ? error.message : t("errors.submit"),
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
        {t("eyebrow")}
      </p>

      <h2 className="mt-4 mb-0! max-w-[620px] text-[34px] leading-[1.15] font-bold tracking-[-0.03em] text-[#123B56] sm:text-[42px]">
        {t("title")}
      </h2>

      <p className="mt-5 mb-0! max-w-[620px] text-[15px] leading-8 text-[#57778C]">
        {t("description")}
      </p>

      <form onSubmit={handleSubmit} className="mt-12">
        {/* Honeypot */}
        <div aria-hidden="true" className="absolute -left-[9999px]">
          <label>
            Website
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
          {/* NAME */}
          <FormField
            id="appointment-name"
            name="name"
            type="text"
            label={t("fields.name.label")}
            placeholder={t("fields.name.placeholder")}
            autoComplete="name"
            required
          />

          {/* PHONE */}
          <FormField
            id="appointment-phone"
            name="phone"
            type="tel"
            label={t("fields.phone.label")}
            placeholder={t("fields.phone.placeholder")}
            autoComplete="tel"
            required
          />

          {/* CATEGORY */}
          <FormSelect
            id="appointment-category"
            label={t("fields.category.label")}
            value={category}
            onChange={(value) => {
              setCategory(value as ScheduleCategory);

              setDoctorId("");

              setAppointment(null);
            }}
          >
            <option value="nonjkn">{t("fields.category.nonJkn")}</option>

            <option value="jkn">{t("fields.category.jkn")}</option>
          </FormSelect>

          {/* CLINIC */}
          <FormSelect
            id="appointment-location"
            label={t("fields.location.label")}
            value={locationId}
            disabled={loadingLocations}
            onChange={(value) => {
              setLocationId(value);

              setDoctorId("");

              setAppointment(null);
            }}
          >
            <option value="">
              {loadingLocations
                ? t("fields.location.loading")
                : t("fields.location.placeholder")}
            </option>

            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.label}
              </option>
            ))}
          </FormSelect>

          {/* DOCTOR */}
          <FormSelect
            id="appointment-doctor"
            label={t("fields.doctor.label")}
            value={doctorId}
            disabled={!locationId || loadingDoctors}
            onChange={(value) => {
              setDoctorId(value);

              setAppointment(null);
            }}
          >
            <option value="">
              {loadingDoctors
                ? t("fields.doctor.loading")
                : t("fields.doctor.placeholder")}
            </option>

            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.full_name}
              </option>
            ))}
          </FormSelect>

          {/* SCHEDULE */}
          <FormSelect
            id="appointment-schedule"
            name="schedule"
            label={t("fields.schedule.label")}
            disabled={!doctorId}
            required
          >
            <option value="">
              {doctorId
                ? t("fields.schedule.placeholder")
                : t("fields.schedule.selectDoctor")}
            </option>

            {appointmentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormSelect>
        </div>

        {/* DOCTOR SCHEDULE INFO */}
        {selectedDoctor && (
          <div className="mt-9 border-l-4 border-[#00A4E4] bg-[#F2FAFD] px-6 py-5">
            <p className="m-0! text-xs font-bold uppercase tracking-[0.12em] text-[#0077B6]">
              {t("doctorScheduleLabel")}
            </p>

            <p className="mt-2 mb-0! text-sm font-bold text-[#123B56]">
              {selectedDoctor.full_name}
            </p>

            <p className="mt-2 mb-0! whitespace-pre-line text-sm leading-7 text-[#57778C]">
              {selectedDoctor.schedules.replace(/\\n/g, "\n")}
            </p>
          </div>
        )}

        {/* FOOTER */}
        <div className="mt-9 flex flex-col items-start justify-between gap-6 border-t border-[#E2EDF2] pt-7 sm:flex-row sm:items-center">
          <p className="m-0! max-w-[520px] text-xs leading-6 text-[#708998]">
            {t("privacyNote")}
          </p>

          <button
            type="submit"
            disabled={
              submitting || !doctorId || appointmentOptions.length === 0
            }
            className="inline-flex h-14 shrink-0 cursor-pointer items-center justify-center gap-3 border-0 bg-[#0077B6] px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#005F92] hover:shadow-[0_14px_30px_rgba(0,119,182,0.2)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            {submitting ? t("submitting") : t("submit")}

            {!submitting && (
              <ContactIcon name="arrow" className="size-[18px]" />
            )}
          </button>
        </div>

        {/* ERROR */}
        {errorMessage && (
          <div
            role="alert"
            className="mt-6 border-l-4 border-[#D9544D] bg-[#FFF5F4] px-5 py-4"
          >
            <p className="m-0! text-sm leading-6 font-semibold text-[#A8403B]">
              {errorMessage}
            </p>
          </div>
        )}

        {/* SUCCESS */}
        {appointment && (
          <div
            aria-live="polite"
            className="mt-6 border-l-4 border-[#36A47C] bg-[#F0FAF6] px-6 py-6"
          >
            <p className="m-0! text-xs font-bold uppercase tracking-[0.12em] text-[#358D70]">
              {t("success.eyebrow")}
            </p>

            <h3 className="mt-2 mb-0! text-xl font-bold text-[#123B56]">
              {t("success.title")}
            </h3>

            <dl className="mt-5 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <SuccessItem
                label={t("success.bookingCode")}
                value={appointment.documentCode}
              />

              <SuccessItem
                label={t("success.status")}
                value={appointment.status}
              />

              <SuccessItem
                label={t("success.doctor")}
                value={appointment.doctor.name}
              />

              <SuccessItem
                label={t("success.clinic")}
                value={appointment.location.label}
              />

              <SuccessItem
                label={t("success.schedule")}
                value={appointment.estimatedVisitAt}
              />
            </dl>

            {appointment.doctor.checkInBeforeMinutes && (
              <p className="mt-5 mb-0! text-sm leading-7 text-[#57778C]">
                {t("success.checkIn", {
                  minutes: appointment.doctor.checkInBeforeMinutes,
                })}
              </p>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

type FormFieldProps = {
  id: string;

  name: string;

  type: string;

  label: string;

  placeholder: string;

  autoComplete?: string;

  required?: boolean;
};

function FormField({
  id,
  name,
  type,
  label,
  placeholder,
  autoComplete,
  required = false,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-[#123B56]"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className="mt-3 h-12 w-full border-0 border-b border-[#BCD6E2] bg-transparent px-0 text-[15px] text-[#123B56] outline-none transition-colors placeholder:text-[#8AA1AF] focus:border-[#0077B6] focus:ring-0"
      />
    </div>
  );
}

type FormSelectProps = {
  id: string;

  name?: string;

  label: string;

  value?: string;

  disabled?: boolean;

  required?: boolean;

  children: React.ReactNode;

  onChange?: (value: string) => void;
};

function FormSelect({
  id,
  name,
  label,
  value,
  disabled = false,
  required = false,
  children,
  onChange,
}: FormSelectProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-[#123B56]"
      >
        {label}
      </label>

      <select
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        required={required}
        onChange={
          onChange ? (event) => onChange(event.target.value) : undefined
        }
        className="mt-3 h-12 w-full cursor-pointer border-0 border-b border-[#BCD6E2] bg-transparent px-0 text-[15px] text-[#123B56] outline-none transition-colors focus:border-[#0077B6] focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {children}
      </select>
    </div>
  );
}

function SuccessItem({
  label,
  value,
}: {
  label: string;

  value: string;
}) {
  return (
    <div>
      <dt className="text-xs font-bold uppercase tracking-[0.1em] text-[#7894A3]">
        {label}
      </dt>

      <dd className="mt-1.5 ml-0 text-sm leading-6 font-bold text-[#123B56]">
        {value}
      </dd>
    </div>
  );
}
