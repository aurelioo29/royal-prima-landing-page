import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  DOCTOR_CLINIC_KEYS,
  DOCTORS,
  DoctorCard,
  DoctorControls,
  DoctorIcon,
  DoctorPagination,
  DoctorsPoster,
  doctorsPageConfig,
} from "@/components/doctors";

import type {
  DoctorClinicFilterKey,
  DoctorClinicKey,
  DoctorClinicOption,
  DoctorViewMode,
  ResolvedDoctorItem,
} from "@/components/doctors";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import PageHero from "@/components/shared/page-hero";

import { routing } from "@/i18n/routing";

const DOCTORS_PER_PAGE = 8;

type DoctorsPageSearchParams = {
  page?: string | string[];

  clinic?: string | string[];

  view?: string | string[];
};

type DoctorsPageProps = {
  params: Promise<{
    locale: string;
  }>;

  searchParams: Promise<DoctorsPageSearchParams>;
};

function getSingleParam(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

function resolvePage(value: string | undefined): number {
  const page = Number.parseInt(value ?? "1", 10);

  if (!Number.isFinite(page) || page < 1) {
    return 1;
  }

  return page;
}

function resolveView(value: string | undefined): DoctorViewMode {
  return value === "list" ? "list" : "card";
}

function isClinicKey(value: string | undefined): value is DoctorClinicKey {
  if (!value) {
    return false;
  }

  return DOCTOR_CLINIC_KEYS.includes(value as DoctorClinicKey);
}

export async function generateMetadata({
  params,
}: DoctorsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "DoctorsPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/doctors",
    },

    openGraph: {
      type: "website",

      url: "/doctors",

      title: t("title"),

      description: t("description"),

      images: [
        {
          url: "/images/og/royal-prima-medan.png",

          alt: t("imageAlt"),
        },
      ],
    },
  };
}

export default async function DoctorsPage({
  params,
  searchParams,
}: DoctorsPageProps) {
  const { locale } = await params;

  const query = await searchParams;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("DoctorsPage");

  const clinicParam = getSingleParam(query.clinic);

  const pageParam = getSingleParam(query.page);

  const viewParam = getSingleParam(query.view);

  const activeClinic: DoctorClinicFilterKey = isClinicKey(clinicParam)
    ? clinicParam
    : "all";

  const requestedPage = resolvePage(pageParam);

  const view = resolveView(viewParam);

  const filteredDoctors =
    activeClinic === "all"
      ? [...DOCTORS]
      : DOCTORS.filter((doctor) => doctor.clinicKey === activeClinic);

  const totalDoctors = filteredDoctors.length;

  const totalPages = Math.max(1, Math.ceil(totalDoctors / DOCTORS_PER_PAGE));

  const currentPage = Math.min(requestedPage, totalPages);

  const startIndex = (currentPage - 1) * DOCTORS_PER_PAGE;

  const doctors: ResolvedDoctorItem[] = filteredDoctors
    .slice(startIndex, startIndex + DOCTORS_PER_PAGE)
    .map((doctor) => ({
      ...doctor,

      clinicLabel: t(`clinics.${doctor.clinicKey}`),
    }));

  const clinics: DoctorClinicOption[] = [
    {
      key: "all",

      label: t("clinics.all"),

      count: DOCTORS.length,
    },

    ...DOCTOR_CLINIC_KEYS.map((clinic) => ({
      key: clinic,

      label: t(`clinics.${clinic}`),

      count: DOCTORS.filter((doctor) => doctor.clinicKey === clinic).length,
    })),
  ];

  return (
    <>
      <PageScrollProgress />

      {/* HERO */}
      <Reveal trigger="load" direction="up" distance={14} duration={0.75}>
        <PageHero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          description={t("hero.description")}
          imageSrc={doctorsPageConfig.heroImage}
          imageAlt={t("hero.imageAlt")}
          imagePosition="center 20%"
          primaryAction={{
            label: t("hero.primaryAction"),

            href: "#doctor-list",

            icon: <DoctorIcon name="doctor" className="size-[18px]" />,
          }}
          secondaryAction={{
            label: t("hero.secondaryAction"),

            href: "/timetable",

            icon: <DoctorIcon name="calendar" className="size-[18px]" />,
          }}
          badge={{
            eyebrow: t("hero.badgeEyebrow"),

            value: t("hero.badgeValue"),

            icon: <DoctorIcon name="doctor" className="size-5" />,
          }}
        />
      </Reveal>

      <main>
        <section
          id="doctor-list"
          className="
            scroll-mt-[calc(var(--site-header-height)+20px)]
            bg-white
            py-16
            sm:py-20
            lg:py-24
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[1760px]
              px-5
              sm:px-8
              lg:px-10
              xl:px-12
              2xl:px-16
            "
          >
            {/* HEADER */}
            <Reveal direction="up" distance={24}>
              <header className="mx-auto max-w-[760px] text-center">
                <div className="flex items-center justify-center gap-4">
                  <span className="h-px w-9 bg-[#00A4E4]" />

                  <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                    {t("directory.eyebrow")}
                  </p>

                  <span className="h-px w-9 bg-[#00A4E4]" />
                </div>

                <h2 className="mt-5 mb-0! text-[36px] leading-[1.1] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[44px] lg:text-[50px]">
                  {t("directory.title")}
                </h2>

                <p className="mx-auto mt-5 mb-0! max-w-[650px] text-[15px] leading-8 text-[#57778C]">
                  {t("directory.description")}
                </p>
              </header>
            </Reveal>

            {/* FILTER */}
            <Reveal direction="up" distance={20} delay={0.06} className="mt-12">
              <DoctorControls
                clinics={clinics}
                activeClinic={activeClinic}
                view={view}
                resultLabel={t("directory.showing", {
                  count: totalDoctors,
                })}
                labels={{
                  clinic: t("controls.clinic"),

                  card: t("controls.card"),

                  list: t("controls.list"),
                }}
              />
            </Reveal>

            {/* DOCTORS */}
            {doctors.length > 0 ? (
              <div
                className={
                  view === "card"
                    ? `
                      mt-10
                      grid
                      grid-cols-1
                      gap-x-6
                      gap-y-10
                      sm:grid-cols-2
                      lg:grid-cols-3
                      xl:grid-cols-4
                    `
                    : `
                      mt-10
                      grid
                      grid-cols-1
                      gap-7
                    `
                }
              >
                {doctors.map((doctor, index) => (
                  <Reveal
                    key={doctor.id}
                    direction="up"
                    distance={24}
                    delay={Math.min(index * 0.04, 0.2)}
                    duration={0.6}
                    className="h-full"
                  >
                    <DoctorCard
                      doctor={doctor}
                      view={view}
                      profileLabel={t("card.profile")}
                    />
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="mt-14 border-y border-[#DCEAF1] py-20 text-center">
                <span className="mx-auto flex size-14 items-center justify-center bg-[#EEF9FD] text-[#0077B6]">
                  <DoctorIcon name="doctor" className="size-6" />
                </span>

                <h3 className="mt-5 mb-0! text-[24px] font-bold text-[#123B56]">
                  {t("empty.title")}
                </h3>

                <p className="mx-auto mt-3 mb-0! max-w-[520px] text-sm leading-7 text-[#57778C]">
                  {t("empty.description")}
                </p>
              </div>
            )}

            <DoctorPagination
              currentPage={currentPage}
              totalPages={totalPages}
              activeClinic={activeClinic}
              view={view}
              previousLabel={t("pagination.previous")}
              nextLabel={t("pagination.next")}
            />
          </div>
        </section>

        {/* POSTER */}
        <Reveal direction="up" distance={30} amount={0.08}>
          <DoctorsPoster
            image={doctorsPageConfig.posterImage}
            imageAlt={t("poster.imageAlt")}
            eyebrow={t("poster.eyebrow")}
            title={t("poster.title")}
            description={t("poster.description")}
            appointmentLabel={t("poster.appointmentAction")}
            timetableLabel={t("poster.timetableAction")}
          />
        </Reveal>
      </main>
    </>
  );
}
