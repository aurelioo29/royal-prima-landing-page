import Image from "next/image";

import { Link } from "@/i18n/navigation";

import type {
  DoctorDetailContentProps,
  DoctorEducationItem,
} from "../types/doctors.types";

import DoctorIcon from "./DoctorIcon";

type SectionTitleProps = {
  icon: "calendar" | "education" | "experience" | "award";

  title: string;
};

type EducationItemProps = {
  item: DoctorEducationItem;

  index: number;
};

type BulletSectionProps = {
  items: readonly string[];

  accent?: "cyan" | "gold";
};

function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4 border-b border-[#DCEAF1] pb-5">
      <span className="flex size-10 shrink-0 items-center justify-center bg-[#EDF8FD] text-[#0077B6]">
        <DoctorIcon name={icon} className="size-[19px]" />
      </span>

      <h2 className="m-0! text-[21px] font-bold tracking-[-0.025em] text-[#123B56] sm:text-[23px]">
        {title}
      </h2>
    </div>
  );
}

function EducationItem({ item, index }: EducationItemProps) {
  return (
    <div className="border-l-[3px] border-[#00A4E4] bg-[#FAFDFF] px-5 py-4">
      <div className="flex items-start gap-4">
        <span className="flex size-8 shrink-0 items-center justify-center bg-[#EAF7FC] text-xs font-bold text-[#0077B6]">
          {index + 1}
        </span>

        <div className="min-w-0">
          <h3 className="m-0! text-[15px] leading-6 font-bold text-[#123B56]">
            {item.title}
          </h3>

          {item.subtitle && (
            <p className="mt-1 mb-0! text-sm leading-6 text-[#7793A5]">
              {item.subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function BulletSection({ items, accent = "cyan" }: BulletSectionProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-4 border-l-[3px] border-[#DCEAF1] bg-[#FAFDFF] px-5 py-4"
        >
          <span
            className={`mt-[9px] size-2 shrink-0 ${
              accent === "gold" ? "bg-[#D7A448]" : "bg-[#00A4E4]"
            }`}
          />

          <p className="m-0! text-[15px] leading-7 text-[#4D6B7D]">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default function DoctorDetailContent({
  doctor,
  labels,
}: DoctorDetailContentProps) {
  return (
    <main className="bg-[#F7FBFD]">
      {/* Decorative top background */}
      <div
        aria-hidden="true"
        className="h-[110px] bg-[linear-gradient(100deg,#EAF8FD_0%,#D7F0FA_48%,#B9DCF5_100%)]"
      />

      <section className="-mt-14 pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 gap-8 lg:gap-10 xl:grid-cols-[380px_minmax(0,1fr)] 2xl:grid-cols-[420px_minmax(0,1fr)]">
            {/* =========================
                LEFT
            ========================== */}
            <aside className="space-y-7">
              {/* Doctor image */}
              <div className="overflow-hidden border border-[#DCEAF1] bg-white shadow-[0_18px_45px_rgba(18,59,86,0.07)]">
                <div className="relative aspect-[633/735] w-full overflow-hidden bg-[#EAF7FC]">
                  <Image
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    fill
                    priority
                    sizes="
                      (max-width: 1279px) 100vw,
                      (max-width: 1535px) 380px,
                      420px
                    "
                    className="object-cover object-top"
                  />
                </div>

                <div className="border-t border-[#DCEAF1] bg-white px-6 py-5">
                  <p className="m-0! text-[11px] font-bold uppercase tracking-[0.16em] text-[#0077B6]">
                    {doctor.clinicLabel}
                  </p>

                  <h2 className="mt-2 mb-0! text-[20px] leading-7 font-bold tracking-[-0.02em] text-[#123B56]">
                    {doctor.name}
                  </h2>

                  <p className="mt-1.5 mb-0! text-sm leading-6 text-[#7793A5]">
                    {doctor.specialty}
                  </p>
                </div>
              </div>

              {/* Schedule */}
              <section className="border border-[#DCEAF1] bg-white p-6 shadow-[0_15px_38px_rgba(18,59,86,0.05)]">
                <SectionTitle icon="calendar" title={labels.schedules} />

                <div className="mt-5 space-y-4">
                  {doctor.schedules.map((schedule) => (
                    <div
                      key={`${schedule.label}-${schedule.days}-${schedule.hours}`}
                      className="border-l-[3px] border-[#00A4E4] bg-[#F8FCFE] px-4 py-4"
                    >
                      <p className="m-0! text-[15px] font-bold text-[#123B56]">
                        {schedule.label}
                      </p>

                      <div className="mt-3 flex flex-col gap-2">
                        <p className="m-0! text-sm leading-6 text-[#6E899A]">
                          {schedule.days}
                        </p>

                        <span className="inline-flex w-fit items-center gap-2 bg-[#EAF7FC] px-3 py-1.5 text-xs font-semibold text-[#0077B6]">
                          <DoctorIcon name="clock" className="size-3.5" />

                          {schedule.hours}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </aside>

            {/* =========================
                RIGHT
            ========================== */}
            <div className="min-w-0">
              {/* Doctor intro */}
              <section className="border border-[#DCEAF1] bg-white p-7 shadow-[0_18px_45px_rgba(18,59,86,0.06)] sm:p-9 lg:p-10">
                <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                  {doctor.clinicLabel}
                </p>

                <h1 className="mt-4 mb-0! max-w-[950px] text-[36px] leading-[1.08] font-bold tracking-[-0.045em] text-[#123B56] sm:text-[44px] lg:text-[52px]">
                  {doctor.name}
                </h1>

                <p className="mt-4 mb-0! text-[18px] font-semibold text-[#2E5E78] sm:text-[20px]">
                  {doctor.specialty}
                </p>

                <p className="mt-6 mb-0! max-w-[920px] text-[15px] leading-8 text-[#57778C] sm:text-base">
                  {doctor.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={
                      doctor.appointmentHref ??
                      `/appointments?doctor=${doctor.slug}`
                    }
                    className="inline-flex h-13 items-center justify-center gap-3 bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_100%)] px-6 text-sm font-semibold text-white! no-underline! shadow-[0_12px_28px_rgba(0,119,182,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(0,119,182,0.28)]"
                  >
                    <DoctorIcon name="calendar" className="size-[17px]" />

                    {labels.appointment}
                  </Link>

                  <Link
                    href="/doctors"
                    className="inline-flex h-13 items-center justify-center gap-3 border border-[#CFE3EC] bg-white px-6 text-sm font-semibold text-[#123B56]! no-underline! transition-colors hover:border-[#0077B6] hover:text-[#0077B6]!"
                  >
                    <DoctorIcon name="arrowLeft" className="size-[17px]" />

                    {labels.backToDoctors}
                  </Link>

                  {doctor.socialLinks && (
                    <div className="flex items-center gap-2 sm:ml-auto">
                      {doctor.socialLinks.facebook && (
                        <a
                          href={doctor.socialLinks.facebook}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Facebook ${doctor.name}`}
                          className="flex size-11 items-center justify-center border border-[#DCEAF1] bg-[#F8FCFE] text-[#0077B6] transition-colors hover:border-[#00A4E4] hover:bg-[#EAF7FC]"
                        >
                          <DoctorIcon name="facebook" className="size-[17px]" />
                        </a>
                      )}

                      {doctor.socialLinks.linkedin && (
                        <a
                          href={doctor.socialLinks.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`LinkedIn ${doctor.name}`}
                          className="flex size-11 items-center justify-center border border-[#DCEAF1] bg-[#F8FCFE] text-[#0077B6] transition-colors hover:border-[#00A4E4] hover:bg-[#EAF7FC]"
                        >
                          <DoctorIcon name="linkedin" className="size-[17px]" />
                        </a>
                      )}

                      {doctor.socialLinks.twitter && (
                        <a
                          href={doctor.socialLinks.twitter}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Twitter ${doctor.name}`}
                          className="flex size-11 items-center justify-center border border-[#DCEAF1] bg-[#F8FCFE] text-[#0077B6] transition-colors hover:border-[#00A4E4] hover:bg-[#EAF7FC]"
                        >
                          <DoctorIcon name="twitter" className="size-[17px]" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </section>

              {/* Education */}
              <section className="mt-7 border-t border-[#DCEAF1] bg-white px-0 py-8 sm:px-8">
                <SectionTitle icon="education" title={labels.education} />

                <div className="mt-6 space-y-3">
                  {doctor.education.map((item, index) => (
                    <EducationItem
                      key={`${item.title}-${index}`}
                      item={item}
                      index={index}
                    />
                  ))}
                </div>
              </section>

              {/* Experience */}
              <section className="mt-7 border-t border-[#DCEAF1] bg-white px-0 py-8 sm:px-8">
                <SectionTitle icon="experience" title={labels.experiences} />

                <div className="mt-6">
                  <BulletSection items={doctor.experiences} />
                </div>
              </section>

              {/* Awards */}
              <section className="mt-7 border-t border-[#DCEAF1] bg-white px-0 py-8 sm:px-8">
                <SectionTitle icon="award" title={labels.awards} />

                <div className="mt-6">
                  <BulletSection items={doctor.awards} accent="gold" />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
