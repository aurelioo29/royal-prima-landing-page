import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  TIMETABLE_DAY_KEYS,
  TimetableCategoryFilter,
  TimetableDepartmentFilter,
  TimetableIcon,
  TimetablePosterSection,
  WeeklyTimetable,
  timetableConfig,
} from "@/components/timetable";

import type {
  ResolvedTimetableEntry,
  TimetableCategory,
  TimetableDayOption,
  TimetableDepartmentOption,
} from "@/components/timetable";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import PageHero from "@/components/shared/page-hero";

import { routing } from "@/i18n/routing";

import { getHisDoctorSchedules } from "@/lib/his/doctor-schedules";

import { getHisClinicLocations } from "@/lib/his/locations";

import { createHisTimetableEntries } from "@/lib/his/timetable";

type TimetableSearchParams = {
  location?: string | string[];

  category?: string | string[];
};

type TimetablePageProps = {
  params: Promise<{
    locale: string;
  }>;

  searchParams: Promise<TimetableSearchParams>;
};

/*
 * HIS menggunakan cache:no-store.
 * Jadi page ini memang dynamic.
 */
export const dynamic = "force-dynamic";

function getSingleSearchParam(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

function isTimetableCategory(
  value: string | undefined,
): value is TimetableCategory {
  return value === "jkn" || value === "nonjkn";
}

export async function generateMetadata({
  params,
}: TimetablePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,

    namespace: "TimetablePage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/timetable",
    },

    openGraph: {
      type: "website",

      url: "/timetable",

      title: t("title"),

      description: t("description"),

      images: [
        {
          url: "/images/og/royal-prima-medan.png",

          alt: t("imageAlt"),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: t("title"),

      description: t("description"),

      images: ["/images/og/royal-prima-medan.png"],
    },
  };
}

export default async function TimetablePage({
  params,
  searchParams,
}: TimetablePageProps) {
  const { locale } = await params;

  const query = await searchParams;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("TimetablePage");

  const requestedLocationId = getSingleSearchParam(query.location);

  const requestedCategory = getSingleSearchParam(query.category);

  const activeCategory: TimetableCategory = isTimetableCategory(
    requestedCategory,
  )
    ? requestedCategory
    : "nonjkn";

  /*
   * ===========================
   * GET CLINICS FROM HIS
   * ===========================
   */

  let locations = await getHisClinicLocations().catch((error) => {
    console.error("Gagal mengambil HIS locations:", error);

    return [];
  });

  /*
   * Bersihkan duplicate jika suatu saat
   * response API berubah.
   */
  locations = Array.from(
    new Map(locations.map((location) => [location.id, location])).values(),
  );

  /*
   * Kalau URL punya location yang valid,
   * gunakan location tersebut.
   *
   * Kalau tidak ada query,
   * pilih klinik pertama.
   */
  const activeLocation =
    locations.find((location) => location.id === requestedLocationId) ??
    locations[0] ??
    null;

  /*
   * ===========================
   * GET DOCTOR SCHEDULE
   * ===========================
   */

  let scheduleLoadError = false;

  const timetableEntries = activeLocation
    ? await getHisDoctorSchedules({
        locationId: activeLocation.id,

        category: activeCategory,
      })
        .then((result) =>
          createHisTimetableEntries({
            location: activeLocation,

            doctors: result.data ?? [],
          }),
        )
        .catch((error) => {
          console.error("Gagal mengambil HIS doctor schedules:", error);

          scheduleLoadError = true;

          return [];
        })
    : [];

  /*
   * ===========================
   * RESOLVE UI DATA
   * ===========================
   */

  const categoryLabel =
    activeCategory === "jkn"
      ? t("schedule.bpjsLabel")
      : t("schedule.nonBpjsLabel");

  const days: TimetableDayOption[] = TIMETABLE_DAY_KEYS.map((day) => ({
    key: day,

    label: t(`days.${day}`),

    categoryLabel,
  }));

  const resolvedEntries: ResolvedTimetableEntry[] = timetableEntries.map(
    (entry) => ({
      ...entry,

      dayLabel: t(`days.${entry.day}`),

      timeLabel: `${entry.startTime} – ${entry.endTime}`,
    }),
  );

  const departments: TimetableDepartmentOption[] = locations.map(
    (location) => ({
      key: location.id,

      label: location.label || location.name,
    }),
  );

  return (
    <>
      <PageScrollProgress />

      {/* HERO */}
      <Reveal trigger="load" direction="up" distance={14} duration={0.75}>
        <PageHero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          description={t("hero.description")}
          imageSrc={timetableConfig.heroImage}
          imageAlt={t("hero.imageAlt")}
          imagePosition="center 30%"
          primaryAction={{
            label: t("hero.primaryAction"),

            href: "#doctor-schedule",

            icon: <TimetableIcon name="calendar" className="size-[18px]" />,
          }}
          secondaryAction={{
            label: timetableConfig.phone.display,

            href: timetableConfig.phone.href,

            icon: <TimetableIcon name="phone" className="size-[18px]" />,
          }}
          badge={{
            eyebrow: t("hero.imageBadge"),

            value: t("hero.imageBadgeValue"),

            icon: <TimetableIcon name="clock" className="size-5" />,
          }}
        />
      </Reveal>

      <main>
        {/* SCHEDULE */}
        <section
          id="doctor-schedule"
          className="scroll-mt-[calc(var(--site-header-height)+24px)] overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
              <Reveal direction="right" distance={30} className="max-w-[780px]">
                <div>
                  <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                    {t("schedule.eyebrow")}
                  </p>

                  <h2 className="mt-4 mb-0! text-[36px] leading-[1.14] font-bold tracking-[-0.035em] text-[#123B56] sm:text-[46px]">
                    {activeLocation
                      ? t("schedule.filteredTitle", {
                          department:
                            activeLocation.label || activeLocation.name,
                        })
                      : t("schedule.title")}
                  </h2>

                  <p className="mt-5 mb-0! max-w-[720px] text-[15px] leading-8 text-[#57778C]">
                    {t("schedule.description")}
                  </p>
                </div>
              </Reveal>

              <Reveal direction="left" distance={24}>
                <p className="m-0! text-sm font-semibold text-[#7793A5]">
                  {t("schedule.resultCount", {
                    count: resolvedEntries.length,
                  })}
                </p>
              </Reveal>
            </div>

            {/* SERVICE TYPE */}
            <Reveal direction="up" distance={20} className="mt-10">
              <div>
                <p className="mb-3! text-xs font-bold uppercase tracking-[0.14em] text-[#7793A5]">
                  {t("schedule.serviceType")}
                </p>

                <TimetableCategoryFilter
                  activeCategory={activeCategory}
                  activeDepartment={activeLocation?.id ?? null}
                  generalLabel={t("schedule.generalCategory")}
                  jknLabel={t("schedule.jknCategory")}
                />
              </div>
            </Reveal>

            {/* CLINIC FILTER */}
            <Reveal direction="up" distance={20} className="mt-8">
              <TimetableDepartmentFilter
                departments={departments}
                activeDepartment={activeLocation?.id ?? null}
                category={activeCategory}
              />
            </Reveal>

            {/* Schedule API Error */}
            {scheduleLoadError && (
              <Reveal direction="up" distance={20} className="mt-12">
                <div className="border-l-4 border-[#E09B38] bg-[#FFF9EE] px-6 py-6">
                  <h3 className="m-0! text-base font-bold text-[#123B56]">
                    {t("schedule.loadErrorTitle")}
                  </h3>

                  <p className="mt-2 mb-0! text-sm leading-7 text-[#57778C]">
                    {t("schedule.loadErrorDescription")}
                  </p>
                </div>
              </Reveal>
            )}

            {/* Schedule grid */}
            {!scheduleLoadError && (
              <Reveal
                direction="up"
                distance={32}
                amount={0.04}
                className="mt-12"
              >
                <WeeklyTimetable
                  days={days}
                  entries={resolvedEntries}
                  labels={{
                    room: t("schedule.room"),

                    doctors: t("schedule.doctors"),

                    noSchedule: t("schedule.noSchedule"),

                    emptyTitle: t("schedule.emptyTitle"),

                    emptyDescription: t("schedule.emptyDescription"),
                  }}
                />
              </Reveal>
            )}

            {/* Schedule notice */}
            <Reveal direction="up" distance={20} className="mt-10">
              <div className="border-l-4 border-[#00A4E4] bg-[#F1FAFD] px-6 py-6 sm:px-7">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center bg-white text-[#0077B6] shadow-[0_8px_24px_rgba(18,59,86,0.07)]">
                    <TimetableIcon name="info" className="size-[19px]" />
                  </span>

                  <div>
                    <h3 className="m-0! text-base font-bold text-[#123B56]">
                      {t("notice.title")}
                    </h3>

                    <p className="mt-2 mb-0! max-w-[1100px] text-sm leading-7 text-[#57778C]">
                      {t("notice.description")}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* POSTER */}
        <Reveal direction="up" distance={36} amount={0.08}>
          <TimetablePosterSection
            image={timetableConfig.posterImage}
            imageAlt={t("poster.imageAlt")}
            eyebrow={t("poster.eyebrow")}
            title={t("poster.title")}
            description={t("poster.description")}
            appointmentLabel={t("poster.appointmentAction")}
            phoneLabel={t("poster.phoneAction")}
            phoneDisplay={timetableConfig.phone.display}
            phoneHref={timetableConfig.phone.href}
          />
        </Reveal>
      </main>
    </>
  );
}
