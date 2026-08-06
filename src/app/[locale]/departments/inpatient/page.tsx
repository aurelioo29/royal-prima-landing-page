import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  INPATIENT_ADVANTAGES,
  INPATIENT_RELATED_DEPARTMENTS,
  INPATIENT_ROOMS,
  INPATIENT_SUPPORT,
  InpatientAdvantages,
  InpatientIcon,
  InpatientInfo,
  InpatientOverview,
  InpatientPoster,
  InpatientRelatedDepartments,
  InpatientRooms,
  InpatientSupport,
  inpatientPageConfig,
} from "@/components/departments/inpatient";

import type {
  InpatientResolvedAdvantageItem,
  InpatientResolvedRelatedDepartmentItem,
  InpatientResolvedRoomItem,
  InpatientResolvedSupportItem,
} from "@/components/departments/inpatient";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import PageHero from "@/components/shared/page-hero";

import { routing } from "@/i18n/routing";

type InpatientPageProps = {
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
}: InpatientPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "InpatientDepartmentPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/departments/inpatient",
    },

    openGraph: {
      type: "website",

      url: "/departments/inpatient",

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

export default async function InpatientPage({ params }: InpatientPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("InpatientDepartmentPage");

  const advantages: InpatientResolvedAdvantageItem[] = INPATIENT_ADVANTAGES.map(
    (item) => ({
      ...item,

      title: t(`advantages.items.${item.key}.title`),

      description: t(`advantages.items.${item.key}.description`),
    }),
  );

  const rooms: InpatientResolvedRoomItem[] = INPATIENT_ROOMS.map((item) => ({
    ...item,

    title: t(`rooms.items.${item.key}.title`),

    description: t(`rooms.items.${item.key}.description`),

    imageAlt: t(`rooms.items.${item.key}.imageAlt`),

    facilities: resolveStringArray(t.raw(`rooms.items.${item.key}.facilities`)),
  }));

  const supportItems: InpatientResolvedSupportItem[] = INPATIENT_SUPPORT.map(
    (item) => ({
      ...item,

      title: t(`support.items.${item.key}.title`),

      description: t(`support.items.${item.key}.description`),
    }),
  );

  const relatedDepartments: InpatientResolvedRelatedDepartmentItem[] =
    INPATIENT_RELATED_DEPARTMENTS.map((item) => ({
      ...item,

      title: t(`related.items.${item.key}.title`),

      description: t(`related.items.${item.key}.description`),
    }));

  return (
    <>
      <PageScrollProgress />

      {/* HERO */}
      <Reveal trigger="load" direction="up" distance={14} duration={0.75}>
        <PageHero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          description={t("hero.description")}
          imageSrc={inpatientPageConfig.heroImage}
          imageAlt={t("hero.imageAlt")}
          imagePosition="center center"
          primaryAction={{
            label: t("hero.primaryAction"),

            href: "#room-options",

            icon: <InpatientIcon name="bed" className="size-[18px]" />,
          }}
          secondaryAction={{
            label: t("hero.secondaryAction"),

            href: "#inpatient-info",

            icon: <InpatientIcon name="phone" className="size-[18px]" />,
          }}
          badge={{
            eyebrow: t("hero.badgeEyebrow"),

            value: t("hero.badgeValue"),

            icon: <InpatientIcon name="rooms" className="size-5" />,
          }}
        />
      </Reveal>

      <main>
        {/* OVERVIEW */}
        <Reveal direction="up" distance={26}>
          <InpatientOverview
            eyebrow={t("overview.eyebrow")}
            title={t("overview.title")}
            description={t("overview.description")}
            stats={[
              {
                value: t("overview.stats.rooms.value"),

                label: t("overview.stats.rooms.label"),
              },
              {
                value: t("overview.stats.medical.value"),

                label: t("overview.stats.medical.label"),
              },
              {
                value: t("overview.stats.payment.value"),

                label: t("overview.stats.payment.label"),
              },
            ]}
          />
        </Reveal>

        {/* ADVANTAGES */}
        <Reveal direction="up" distance={26}>
          <InpatientAdvantages
            eyebrow={t("advantages.eyebrow")}
            title={t("advantages.title")}
            description={t("advantages.description")}
            items={advantages}
          />
        </Reveal>

        {/* ROOM OPTIONS */}
        <Reveal direction="up" distance={28}>
          <InpatientRooms
            eyebrow={t("rooms.eyebrow")}
            title={t("rooms.title")}
            description={t("rooms.description")}
            facilityLabel={t("rooms.facilityLabel")}
            disclaimer={t("rooms.disclaimer")}
            items={rooms}
          />
        </Reveal>

        {/* MEDICAL SUPPORT */}
        <Reveal direction="up" distance={28}>
          <InpatientSupport
            eyebrow={t("support.eyebrow")}
            title={t("support.title")}
            description={t("support.description")}
            items={supportItems}
          />
        </Reveal>

        {/* INFORMATION */}
        <Reveal direction="up" distance={26}>
          <InpatientInfo
            eyebrow={t("info.eyebrow")}
            title={t("info.title")}
            description={t("info.description")}
            roomLabel={t("info.rooms.label")}
            roomValue={t("info.rooms.value")}
            patientLabel={t("info.patient.label")}
            patientValue={t("info.patient.value")}
            availabilityLabel={t("info.availability.label")}
            availabilityValue={t("info.availability.value")}
            phoneLabel={t("info.phone.label")}
            phoneValue={inpatientPageConfig.phone.display}
            phoneHref={inpatientPageConfig.phone.href}
            contactLabel={t("info.phone.action")}
          />
        </Reveal>

        {/* POSTER */}
        <Reveal direction="up" distance={30}>
          <InpatientPoster
            image={inpatientPageConfig.posterImage}
            imageAlt={t("poster.imageAlt")}
            eyebrow={t("poster.eyebrow")}
            title={t("poster.title")}
            description={t("poster.description")}
            phoneLabel={t("poster.phoneAction")}
            phoneHref={inpatientPageConfig.phone.href}
            locationLabel={t("poster.locationAction")}
            locationHref={inpatientPageConfig.locationHref}
          />
        </Reveal>

        {/* RELATED */}
        <Reveal direction="up" distance={26}>
          <InpatientRelatedDepartments
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
