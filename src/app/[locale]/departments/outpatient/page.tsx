import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  OUTPATIENT_ACCESS,
  OUTPATIENT_ADVANTAGES,
  OUTPATIENT_CLINICS,
  OUTPATIENT_RELATED_DEPARTMENTS,
  OutpatientAccess,
  OutpatientAdvantages,
  OutpatientClinics,
  OutpatientIcon,
  OutpatientInfo,
  OutpatientOverview,
  OutpatientPoster,
  OutpatientRelatedDepartments,
  OutpatientSchedule,
  outpatientPageConfig,
} from "@/components/departments/outpatient";

import type {
  OutpatientResolvedAccessItem,
  OutpatientResolvedAdvantageItem,
  OutpatientResolvedClinicItem,
  OutpatientResolvedRelatedDepartmentItem,
} from "@/components/departments/outpatient";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import PageHero from "@/components/shared/page-hero";

import { routing } from "@/i18n/routing";

type OutpatientPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: OutpatientPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "OutpatientDepartmentPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/departments/outpatient",
    },

    openGraph: {
      type: "website",

      url: "/departments/outpatient",

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

export default async function OutpatientPage({ params }: OutpatientPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("OutpatientDepartmentPage");

  const advantages: OutpatientResolvedAdvantageItem[] =
    OUTPATIENT_ADVANTAGES.map((item) => ({
      ...item,

      title: t(`advantages.items.${item.key}.title`),

      description: t(`advantages.items.${item.key}.description`),
    }));

  const clinics: OutpatientResolvedClinicItem[] = OUTPATIENT_CLINICS.map(
    (item) => ({
      ...item,

      title: t(`clinics.items.${item.key}.title`),

      description: t(`clinics.items.${item.key}.description`),
    }),
  );

  const accessItems: OutpatientResolvedAccessItem[] = OUTPATIENT_ACCESS.map(
    (item) => ({
      ...item,

      title: t(`access.items.${item.key}.title`),

      description: t(`access.items.${item.key}.description`),
    }),
  );

  const relatedDepartments: OutpatientResolvedRelatedDepartmentItem[] =
    OUTPATIENT_RELATED_DEPARTMENTS.map((item) => ({
      ...item,

      title: t(`related.items.${item.key}.title`),

      description: t(`related.items.${item.key}.description`),
    }));

  return (
    <>
      <PageScrollProgress />

      <Reveal trigger="load" direction="up" distance={14} duration={0.75}>
        <PageHero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          description={t("hero.description")}
          imageSrc={outpatientPageConfig.heroImage}
          imageAlt={t("hero.imageAlt")}
          imagePosition="center center"
          primaryAction={{
            label: t("hero.primaryAction"),

            href: outpatientPageConfig.scheduleHref,

            icon: <OutpatientIcon name="calendar" className="size-[18px]" />,
          }}
          secondaryAction={{
            label: t("hero.secondaryAction"),

            href: "#outpatient-info",

            icon: <OutpatientIcon name="queue" className="size-[18px]" />,
          }}
          badge={{
            eyebrow: t("hero.badgeEyebrow"),

            value: t("hero.badgeValue"),

            icon: <OutpatientIcon name="doctor" className="size-5" />,
          }}
        />
      </Reveal>

      <main>
        <Reveal direction="up" distance={26}>
          <OutpatientOverview
            eyebrow={t("overview.eyebrow")}
            title={t("overview.title")}
            description={t("overview.description")}
            stats={[
              {
                value: t("overview.stats.queue.value"),

                label: t("overview.stats.queue.label"),
              },

              {
                value: t("overview.stats.doctors.value"),

                label: t("overview.stats.doctors.label"),
              },

              {
                value: t("overview.stats.support.value"),

                label: t("overview.stats.support.label"),
              },
            ]}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <OutpatientAdvantages
            eyebrow={t("advantages.eyebrow")}
            title={t("advantages.title")}
            description={t("advantages.description")}
            items={advantages}
          />
        </Reveal>

        <Reveal direction="up" distance={28}>
          <OutpatientClinics
            eyebrow={t("clinics.eyebrow")}
            title={t("clinics.title")}
            description={t("clinics.description")}
            note={t("clinics.note")}
            items={clinics}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <OutpatientSchedule
            eyebrow={t("schedule.eyebrow")}
            title={t("schedule.title")}
            description={t("schedule.description")}
            weekdayLabel={t("schedule.weekday.label")}
            weekdayValue={t("schedule.weekday.value")}
            saturdayLabel={t("schedule.saturday.label")}
            saturdayValue={t("schedule.saturday.value")}
            sundayLabel={t("schedule.sunday.label")}
            sundayValue={t("schedule.sunday.value")}
            note={t("schedule.note")}
            buttonLabel={t("schedule.button")}
            buttonHref={outpatientPageConfig.scheduleHref}
          />
        </Reveal>

        <Reveal direction="up" distance={28}>
          <OutpatientAccess
            eyebrow={t("access.eyebrow")}
            title={t("access.title")}
            description={t("access.description")}
            items={accessItems}
            loungeTitle={t("access.lounge.title")}
            loungeDescription={t("access.lounge.description")}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <OutpatientInfo
            eyebrow={t("info.eyebrow")}
            title={t("info.title")}
            description={t("info.description")}
            scheduleLabel={t("info.schedule.label")}
            scheduleValue={t("info.schedule.value")}
            registrationLabel={t("info.registration.label")}
            registrationValue={t("info.registration.value")}
            patientLabel={t("info.patient.label")}
            patientValue={t("info.patient.value")}
            phoneLabel={t("info.phone.label")}
            phoneValue={outpatientPageConfig.phone.display}
            phoneHref={outpatientPageConfig.phone.href}
            contactLabel={t("info.phone.action")}
          />
        </Reveal>

        <Reveal direction="up" distance={30}>
          <OutpatientPoster
            image={outpatientPageConfig.posterImage}
            imageAlt={t("poster.imageAlt")}
            eyebrow={t("poster.eyebrow")}
            title={t("poster.title")}
            description={t("poster.description")}
            scheduleLabel={t("poster.scheduleAction")}
            scheduleHref={outpatientPageConfig.scheduleHref}
            contactLabel={t("poster.contactAction")}
            contactHref={outpatientPageConfig.contactHref}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <OutpatientRelatedDepartments
            eyebrow={t("related.eyebrow")}
            title={t("related.title")}
            description={t("related.description")}
            viewLabel={t("related.view")}
            items={relatedDepartments}
          />
        </Reveal>
      </main>
    </>
  );
}
