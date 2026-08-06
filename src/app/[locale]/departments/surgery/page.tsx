import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  SURGERY_ADVANTAGES,
  SURGERY_GALLERY,
  SURGERY_RELATED_DEPARTMENTS,
  SURGERY_SERVICES,
  SurgeryAdvantages,
  SurgeryGallery,
  SurgeryIcon,
  SurgeryInfo,
  SurgeryOverview,
  SurgeryPoster,
  SurgeryRelatedDepartments,
  SurgerySafety,
  SurgeryServices,
  surgeryPageConfig,
} from "@/components/departments/surgery";

import type {
  SurgeryResolvedAdvantageItem,
  SurgeryResolvedGalleryItem,
  SurgeryResolvedRelatedDepartmentItem,
  SurgeryResolvedServiceItem,
} from "@/components/departments/surgery";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import PageHero from "@/components/shared/page-hero";

import { routing } from "@/i18n/routing";

type SurgeryPageProps = {
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
}: SurgeryPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "SurgeryDepartmentPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/departments/surgery",
    },

    openGraph: {
      type: "website",

      url: "/departments/surgery",

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

export default async function SurgeryPage({ params }: SurgeryPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("SurgeryDepartmentPage");

  const advantages: SurgeryResolvedAdvantageItem[] = SURGERY_ADVANTAGES.map(
    (item) => ({
      ...item,

      title: t(`advantages.items.${item.key}.title`),

      description: t(`advantages.items.${item.key}.description`),
    }),
  );

  const services: SurgeryResolvedServiceItem[] = SURGERY_SERVICES.map(
    (item) => ({
      ...item,

      title: t(`services.items.${item.key}.title`),

      description: t(`services.items.${item.key}.description`),
    }),
  );

  const gallery: SurgeryResolvedGalleryItem[] = SURGERY_GALLERY.map((item) => ({
    ...item,

    title: t(`gallery.items.${item.key}.title`),

    imageAlt: t(`gallery.items.${item.key}.imageAlt`),
  }));

  const related: SurgeryResolvedRelatedDepartmentItem[] =
    SURGERY_RELATED_DEPARTMENTS.map((item) => ({
      ...item,

      title: t(`related.items.${item.key}.title`),

      description: t(`related.items.${item.key}.description`),
    }));

  const safetyItems = resolveStringArray(t.raw("safety.items"));

  return (
    <>
      <PageScrollProgress />

      {/* HERO */}
      <Reveal trigger="load" direction="up" distance={14} duration={0.75}>
        <PageHero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          description={t("hero.description")}
          imageSrc={surgeryPageConfig.heroImage}
          imageAlt={t("hero.imageAlt")}
          imagePosition="center center"
          primaryAction={{
            label: t("hero.primaryAction"),

            href: "#surgery-info",

            icon: <SurgeryIcon name="surgery" className="size-[18px]" />,
          }}
          secondaryAction={{
            label: t("hero.secondaryAction"),

            href: surgeryPageConfig.contactHref,

            icon: <SurgeryIcon name="phone" className="size-[18px]" />,
          }}
          badge={{
            eyebrow: t("hero.badgeEyebrow"),

            value: t("hero.badgeValue"),

            icon: <SurgeryIcon name="clock" className="size-5" />,
          }}
        />
      </Reveal>

      <main>
        <Reveal direction="up" distance={26}>
          <SurgeryOverview
            eyebrow={t("overview.eyebrow")}
            title={t("overview.title")}
            description={t("overview.description")}
            stats={[
              {
                value: t("overview.stats.team.value"),

                label: t("overview.stats.team.label"),
              },

              {
                value: t("overview.stats.technology.value"),

                label: t("overview.stats.technology.label"),
              },

              {
                value: t("overview.stats.emergency.value"),

                label: t("overview.stats.emergency.label"),
              },
            ]}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <SurgeryAdvantages
            eyebrow={t("advantages.eyebrow")}
            title={t("advantages.title")}
            description={t("advantages.description")}
            items={advantages}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <SurgeryServices
            eyebrow={t("services.eyebrow")}
            title={t("services.title")}
            description={t("services.description")}
            items={services}
          />
        </Reveal>

        <Reveal direction="up" distance={28}>
          <SurgeryGallery
            eyebrow={t("gallery.eyebrow")}
            title={t("gallery.title")}
            description={t("gallery.description")}
            items={gallery}
          />
        </Reveal>

        <Reveal direction="up" distance={28}>
          <SurgerySafety
            eyebrow={t("safety.eyebrow")}
            title={t("safety.title")}
            description={t("safety.description")}
            items={safetyItems}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <SurgeryInfo
            eyebrow={t("info.eyebrow")}
            title={t("info.title")}
            description={t("info.description")}
            servicesLabel={t("info.services.label")}
            servicesValue={t("info.services.value")}
            emergencyLabel={t("info.emergency.label")}
            emergencyValue={t("info.emergency.value")}
            teamLabel={t("info.team.label")}
            teamValue={t("info.team.value")}
            phoneLabel={t("info.phone.label")}
            phoneValue={surgeryPageConfig.phone.display}
            phoneHref={surgeryPageConfig.phone.href}
            actionLabel={t("info.phone.action")}
          />
        </Reveal>

        <Reveal direction="up" distance={30}>
          <SurgeryPoster
            image={surgeryPageConfig.posterImage}
            imageAlt={t("poster.imageAlt")}
            eyebrow={t("poster.eyebrow")}
            title={t("poster.title")}
            description={t("poster.description")}
            contactLabel={t("poster.contactAction")}
            contactHref={surgeryPageConfig.contactHref}
            locationLabel={t("poster.locationAction")}
            locationHref={surgeryPageConfig.locationHref}
          />
        </Reveal>

        <Reveal direction="up" distance={26}>
          <SurgeryRelatedDepartments
            eyebrow={t("related.eyebrow")}
            title={t("related.title")}
            description={t("related.description")}
            viewLabel={t("related.view")}
            items={related}
          />
        </Reveal>
      </main>
    </>
  );
}
