import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  SUPPORTING_ADVANTAGES,
  SUPPORTING_FACILITIES,
  SUPPORTING_GALLERY,
  SUPPORTING_RELATED_DEPARTMENTS,
  SupportingAdvantages,
  SupportingFacilities,
  SupportingGallery,
  SupportingIcon,
  SupportingInfo,
  SupportingOverview,
  SupportingPoster,
  SupportingRelatedDepartments,
  supportingPageConfig,
} from "@/components/departments/supporting";

import type {
  SupportingResolvedAdvantageItem,
  SupportingResolvedFacilityItem,
  SupportingResolvedGalleryItem,
  SupportingResolvedRelatedDepartmentItem,
} from "@/components/departments/supporting";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import PageHero from "@/components/shared/page-hero";

import { routing } from "@/i18n/routing";

type SupportingPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: SupportingPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "SupportingDepartmentPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/departments/supporting",
    },

    openGraph: {
      type: "website",

      url: "/departments/supporting",

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

export default async function SupportingPage({ params }: SupportingPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("SupportingDepartmentPage");

  const facilities: SupportingResolvedFacilityItem[] =
    SUPPORTING_FACILITIES.map((item) => ({
      ...item,

      title: t(`facilities.items.${item.key}.title`),

      description: t(`facilities.items.${item.key}.description`),
    }));

  const advantages: SupportingResolvedAdvantageItem[] =
    SUPPORTING_ADVANTAGES.map((item) => ({
      ...item,

      title: t(`advantages.items.${item.key}.title`),

      description: t(`advantages.items.${item.key}.description`),
    }));

  const gallery: SupportingResolvedGalleryItem[] = SUPPORTING_GALLERY.map(
    (item) => ({
      ...item,

      title: t(`gallery.items.${item.key}.title`),

      description: t(`gallery.items.${item.key}.description`),

      imageAlt: t(`gallery.items.${item.key}.imageAlt`),
    }),
  );

  const relatedDepartments: SupportingResolvedRelatedDepartmentItem[] =
    SUPPORTING_RELATED_DEPARTMENTS.map((item) => ({
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
          imageSrc={supportingPageConfig.heroImage}
          imageAlt={t("hero.imageAlt")}
          imagePosition="center center"
          primaryAction={{
            label: t("hero.primaryAction"),

            href: "#supporting-facilities",

            icon: <SupportingIcon name="supporting" className="size-[18px]" />,
          }}
          secondaryAction={{
            label: t("hero.secondaryAction"),

            href: "#supporting-info",

            icon: <SupportingIcon name="phone" className="size-[18px]" />,
          }}
          badge={{
            eyebrow: t("hero.badgeEyebrow"),

            value: t("hero.badgeValue"),

            icon: <SupportingIcon name="technology" className="size-5" />,
          }}
        />
      </Reveal>

      <main>
        {/* OVERVIEW */}
        <Reveal direction="up" distance={26}>
          <SupportingOverview
            eyebrow={t("overview.eyebrow")}
            title={t("overview.title")}
            description={t("overview.description")}
            stats={[
              {
                value: t("overview.stats.diagnostic.value"),

                label: t("overview.stats.diagnostic.label"),
              },

              {
                value: t("overview.stats.integration.value"),

                label: t("overview.stats.integration.label"),
              },

              {
                value: t("overview.stats.technology.value"),

                label: t("overview.stats.technology.label"),
              },
            ]}
          />
        </Reveal>

        {/* FACILITIES */}
        <div id="supporting-facilities">
          <Reveal direction="up" distance={26}>
            <SupportingFacilities
              eyebrow={t("facilities.eyebrow")}
              title={t("facilities.title")}
              description={t("facilities.description")}
              items={facilities}
            />
          </Reveal>
        </div>

        {/* GALLERY */}
        <Reveal direction="up" distance={28}>
          <SupportingGallery
            eyebrow={t("gallery.eyebrow")}
            title={t("gallery.title")}
            description={t("gallery.description")}
            items={gallery}
          />
        </Reveal>

        {/* ADVANTAGES */}
        <Reveal direction="up" distance={28}>
          <SupportingAdvantages
            eyebrow={t("advantages.eyebrow")}
            title={t("advantages.title")}
            description={t("advantages.description")}
            items={advantages}
          />
        </Reveal>

        {/* INFO */}
        <Reveal direction="up" distance={26}>
          <SupportingInfo
            eyebrow={t("info.eyebrow")}
            title={t("info.title")}
            description={t("info.description")}
            serviceLabel={t("info.service.label")}
            serviceValue={t("info.service.value")}
            integrationLabel={t("info.integration.label")}
            integrationValue={t("info.integration.value")}
            guaranteeLabel={t("info.guarantee.label")}
            guaranteeValue={t("info.guarantee.value")}
            phoneLabel={t("info.phone.label")}
            phoneValue={supportingPageConfig.phone.display}
            phoneHref={supportingPageConfig.phone.href}
            contactLabel={t("info.phone.action")}
          />
        </Reveal>

        {/* POSTER */}
        <Reveal direction="up" distance={30}>
          <SupportingPoster
            image={supportingPageConfig.posterImage}
            imageAlt={t("poster.imageAlt")}
            eyebrow={t("poster.eyebrow")}
            title={t("poster.title")}
            description={t("poster.description")}
            contactLabel={t("poster.contactAction")}
            contactHref={supportingPageConfig.contactHref}
            doctorLabel={t("poster.doctorAction")}
            doctorHref={supportingPageConfig.doctorHref}
          />
        </Reveal>

        {/* RELATED */}
        <Reveal direction="up" distance={26}>
          <SupportingRelatedDepartments
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
