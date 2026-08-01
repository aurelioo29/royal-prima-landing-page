import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  DEPARTMENTS_PAGE_ITEMS,
  DepartmentCard,
  DepartmentIcon,
  DepartmentsPoster,
  departmentsPageConfig,
} from "@/components/departments";

import type { ResolvedDepartmentItem } from "@/components/departments";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import PageHero from "@/components/shared/page-hero";

import { routing } from "@/i18n/routing";

type DepartmentsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

function resolveStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is string => typeof item === "string");
}

export async function generateMetadata({
  params,
}: DepartmentsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,

    namespace: "DepartmentsPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/departments",
    },

    openGraph: {
      type: "website",

      url: "/departments",

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

export default async function DepartmentsPage({
  params,
}: DepartmentsPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("DepartmentsPage");

  const departments: ResolvedDepartmentItem[] = DEPARTMENTS_PAGE_ITEMS.map(
    (department) => ({
      ...department,

      eyebrow: t(`items.${department.translationKey}.eyebrow`),

      title: t(`items.${department.translationKey}.title`),

      description: t(`items.${department.translationKey}.description`),

      schedule: t(`items.${department.translationKey}.schedule`),

      services: resolveStringArray(
        t.raw(`items.${department.translationKey}.services`),
      ),

      actionLabel: t(`items.${department.translationKey}.action`),
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
          imageSrc={departmentsPageConfig.heroImage}
          imageAlt={t("hero.imageAlt")}
          imagePosition="center 25%"
          primaryAction={{
            label: t("hero.primaryAction"),

            href: "#department-list",

            icon: <DepartmentIcon name="arrow" className="size-[18px]" />,
          }}
          secondaryAction={{
            label: departmentsPageConfig.phone.display,

            href: departmentsPageConfig.phone.href,

            icon: <DepartmentIcon name="phone" className="size-[18px]" />,
          }}
          badge={{
            eyebrow: t("hero.badgeEyebrow"),

            value: t("hero.badgeValue"),

            icon: <DepartmentIcon name="emergency" className="size-5" />,
          }}
        />
      </Reveal>

      <main>
        {/* OVERVIEW */}
        <section className="overflow-hidden bg-[#F3F9FC] py-16 sm:py-20">
          <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Reveal direction="up" distance={20}>
                <OverviewItem
                  value={t("overview.departments.value")}
                  label={t("overview.departments.label")}
                />
              </Reveal>

              <Reveal direction="up" distance={20} delay={0.07}>
                <OverviewItem
                  value={t("overview.emergency.value")}
                  label={t("overview.emergency.label")}
                />
              </Reveal>

              <Reveal direction="up" distance={20} delay={0.14}>
                <OverviewItem
                  value={t("overview.integrated.value")}
                  label={t("overview.integrated.label")}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* DEPARTMENT LIST */}
        <section
          id="department-list"
          className="scroll-mt-[calc(var(--site-header-height)+24px)] overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
              <Reveal direction="right" distance={30} className="max-w-[820px]">
                <header>
                  <div className="flex items-center gap-4">
                    <span className="h-px w-10 bg-[#00A4E4]" />

                    <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                      {t("directory.eyebrow")}
                    </p>
                  </div>

                  <h2 className="mt-5 mb-0! max-w-[760px] text-[36px] leading-[1.12] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[46px] lg:text-[52px]">
                    {t("directory.title")}
                  </h2>

                  <p className="mt-6 mb-0! max-w-[740px] text-[15px] leading-8 text-[#57778C] sm:text-base">
                    {t("directory.description")}
                  </p>
                </header>
              </Reveal>

              <Reveal direction="left" distance={24}>
                <div className="flex items-center gap-4 rounded-[20px] border border-[#D8E9F0] bg-[#F5FAFC] px-5 py-4">
                  <span className="flex size-11 items-center justify-center rounded-[14px] bg-white text-[#0077B6] shadow-[0_8px_24px_rgba(18,59,86,0.07)]">
                    <DepartmentIcon name="clock" className="size-5" />
                  </span>

                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#0077B6]">
                      {t("directory.infoEyebrow")}
                    </span>

                    <span className="mt-1 block text-sm font-semibold text-[#123B56]">
                      {t("directory.infoValue")}
                    </span>
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {departments.map((department, index) => (
                <Reveal
                  key={department.id}
                  direction="up"
                  distance={28}
                  delay={index * 0.07}
                  duration={0.65}
                  className={`h-full ${
                    department.featured
                      ? "md:col-span-2 xl:col-span-1 xl:row-span-2"
                      : ""
                  }`}
                >
                  <DepartmentCard department={department} />
                </Reveal>
              ))}
            </div>

            <Reveal direction="up" distance={20} className="mt-9">
              <div className="flex items-start gap-4 rounded-[20px] border border-[#D9EAF1] bg-[#F4FAFC] px-5 py-5 sm:px-7">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[13px] bg-white text-[#0077B6] shadow-[0_8px_22px_rgba(18,59,86,0.06)]">
                  <DepartmentIcon name="clock" className="size-[19px]" />
                </span>

                <p className="m-0! text-sm leading-7 text-[#57778C]">
                  {t("directory.notice")}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* POSTER */}
        <Reveal direction="up" distance={34} amount={0.08}>
          <DepartmentsPoster
            image={departmentsPageConfig.posterImage}
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

type OverviewItemProps = {
  value: string;

  label: string;
};

function OverviewItem({ value, label }: OverviewItemProps) {
  return (
    <div className="flex h-full items-center gap-5 rounded-[22px] border border-[#DCEAF1] bg-white px-6 py-6 shadow-[0_10px_30px_rgba(18,59,86,0.05)] sm:px-7">
      <span className="text-[34px] leading-none font-bold tracking-[-0.04em] text-[#0077B6]">
        {value}
      </span>

      <span className="max-w-[220px] text-sm leading-6 font-medium text-[#57778C]">
        {label}
      </span>
    </div>
  );
}
