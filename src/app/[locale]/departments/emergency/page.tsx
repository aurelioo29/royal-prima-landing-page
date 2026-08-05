import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  EMERGENCY_CONDITIONS,
  EMERGENCY_FACILITIES,
  EMERGENCY_FACILITY_GALLERY,
  EMERGENCY_FLOW,
  EMERGENCY_RELATED_DEPARTMENTS,
  EmergencyConditions,
  EmergencyFacilities,
  EmergencyFacilityGallery,
  EmergencyFlow,
  EmergencyIcon,
  EmergencyInfo,
  EmergencyOverview,
  EmergencyPoster,
  EmergencyRelatedDepartments,
  EmergencyTriage,
  emergencyPageConfig,
} from "@/components/departments/emergency";

import type {
  EmergencyResolvedConditionItem,
  EmergencyResolvedFacilityItem,
  EmergencyResolvedFlowItem,
  EmergencyResolvedRelatedDepartmentItem,
} from "@/components/departments/emergency";

import PageHero from "@/components/shared/page-hero";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import { routing } from "@/i18n/routing";

type EmergencyPageProps = {
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
}: EmergencyPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,

    namespace: "EmergencyDepartmentPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/departments/emergency",
    },

    openGraph: {
      type: "website",

      url: "/departments/emergency",

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

export default async function EmergencyPage({ params }: EmergencyPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("EmergencyDepartmentPage");

  const conditions: EmergencyResolvedConditionItem[] = EMERGENCY_CONDITIONS.map(
    (item) => ({
      ...item,

      title: t(`conditions.items.${item.key}.title`),

      description: t(`conditions.items.${item.key}.description`),
    }),
  );

  const flow: EmergencyResolvedFlowItem[] = EMERGENCY_FLOW.map((item) => ({
    ...item,

    title: t(`flow.items.${item.key}.title`),

    description: t(`flow.items.${item.key}.description`),
  }));

  const facilities: EmergencyResolvedFacilityItem[] = EMERGENCY_FACILITIES.map(
    (item) => ({
      ...item,

      title: t(`facilities.items.${item.key}.title`),

      description: t(`facilities.items.${item.key}.description`),
    }),
  );

  const relatedDepartments: EmergencyResolvedRelatedDepartmentItem[] =
    EMERGENCY_RELATED_DEPARTMENTS.map((item) => ({
      ...item,

      title: t(`related.items.${item.key}.title`),

      description: t(`related.items.${item.key}.description`),
    }));

  const triagePoints = resolveStringArray(t.raw("triage.points"));

  return (
    <>
      <PageScrollProgress />

      {/* HERO */}
      <Reveal trigger="load" direction="up" distance={14} duration={0.75}>
        <PageHero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          description={t("hero.description")}
          imageSrc={emergencyPageConfig.heroImage}
          imageAlt={t("hero.imageAlt")}
          imagePosition="center center"
          primaryAction={{
            label: t("hero.primaryAction"),

            href: "#emergency-info",

            icon: <EmergencyIcon name="phone" className="size-[18px]" />,
          }}
          secondaryAction={{
            label: t("hero.secondaryAction"),

            href: "/contact",

            icon: <EmergencyIcon name="location" className="size-[18px]" />,
          }}
          badge={{
            eyebrow: t("hero.badgeEyebrow"),

            value: t("hero.badgeValue"),

            icon: <EmergencyIcon name="clock" className="size-5" />,
          }}
        />
      </Reveal>

      <main>
        <Reveal direction="up" distance={26}>
          <EmergencyOverview
            eyebrow={t("overview.eyebrow")}
            title={t("overview.title")}
            description={t("overview.description")}
            stats={[
              {
                value: t("overview.stats.opening.value"),

                label: t("overview.stats.opening.label"),
              },

              {
                value: t("overview.stats.triage.value"),

                label: t("overview.stats.triage.label"),
              },

              {
                value: t("overview.stats.integrated.value"),

                label: t("overview.stats.integrated.label"),
              },
            ]}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <EmergencyConditions
            eyebrow={t("conditions.eyebrow")}
            title={t("conditions.title")}
            description={t("conditions.description")}
            note={t("conditions.note")}
            items={conditions}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <EmergencyFlow
            eyebrow={t("flow.eyebrow")}
            title={t("flow.title")}
            description={t("flow.description")}
            items={flow}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <EmergencyFacilities
            eyebrow={t("facilities.eyebrow")}
            title={t("facilities.title")}
            description={t("facilities.description")}
            items={facilities}
            disclaimer={t("facilities.disclaimer")}
          />
        </Reveal>

        <Reveal direction="up" distance={28}>
          <EmergencyFacilityGallery
            eyebrow={t("facilityGallery.eyebrow")}
            title={t("facilityGallery.title")}
            description={t("facilityGallery.description")}
            items={EMERGENCY_FACILITY_GALLERY}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <EmergencyTriage
            eyebrow={t("triage.eyebrow")}
            title={t("triage.title")}
            description={t("triage.description")}
            points={triagePoints}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <EmergencyInfo
            eyebrow={t("info.eyebrow")}
            title={t("info.title")}
            description={t("info.description")}
            openingLabel={t("info.opening.label")}
            openingValue={t("info.opening.value")}
            locationLabel={t("info.location.label")}
            locationValue={t("info.location.value")}
            phoneLabel={t("info.phone.label")}
            phoneValue={emergencyPageConfig.phone.display}
            phoneHref={emergencyPageConfig.phone.href}
            contactLabel={t("info.phone.action")}
          />
        </Reveal>

        <Reveal direction="up" distance={30}>
          <EmergencyPoster
            image={emergencyPageConfig.posterImage}
            imageAlt={t("poster.imageAlt")}
            eyebrow={t("poster.eyebrow")}
            title={t("poster.title")}
            description={t("poster.description")}
            phoneLabel={t("poster.phoneAction")}
            phoneHref={emergencyPageConfig.phone.href}
            locationLabel={t("poster.locationAction")}
            locationHref={emergencyPageConfig.locationHref}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <EmergencyRelatedDepartments
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
