import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  ABOUT_AWARDS,
  ABOUT_CHARTERS,
  ABOUT_GALLERY,
  AboutAwards,
  AboutCharters,
  AboutFacilities,
  AboutIcon,
  AboutPoster,
  AboutProfile,
  AboutVisionMission,
  aboutPageConfig,
} from "@/components/about";

import type {
  AboutResolvedAwardItem,
  AboutResolvedCharterItem,
  AboutResolvedGalleryItem,
} from "@/components/about";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import PageHero from "@/components/shared/page-hero";

import { routing } from "@/i18n/routing";

type AboutPageProps = {
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
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,

    namespace: "AboutPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/about",
    },

    openGraph: {
      type: "website",

      url: "/about",

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

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("AboutPage");

  const missionItems = resolveStringArray(t.raw("visionMission.mission.items"));

  const awards: AboutResolvedAwardItem[] = ABOUT_AWARDS.map((award) => ({
    ...award,

    title: t(`awards.items.${award.key}.title`),

    description: t(`awards.items.${award.key}.description`),

    imageAlt: t(`awards.items.${award.key}.imageAlt`),
  }));

  const charters: AboutResolvedCharterItem[] = ABOUT_CHARTERS.map((item) => ({
    ...item,

    title: t(`charters.items.${item.key}.title`),

    description: t(`charters.items.${item.key}.description`),
  }));

  const gallery: AboutResolvedGalleryItem[] = ABOUT_GALLERY.map((item) => ({
    ...item,

    imageAlt: t(`facilities.images.${item.imageAltKey}`),
  }));

  return (
    <>
      <PageScrollProgress />

      {/* =========================
          HERO
      ========================== */}
      <Reveal trigger="load" direction="up" distance={14} duration={0.75}>
        <PageHero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          description={t("hero.description")}
          imageSrc={aboutPageConfig.heroImage}
          imageAlt={t("hero.imageAlt")}
          imagePosition="center center"
          primaryAction={{
            label: t("hero.primaryAction"),

            href: "#profile",

            icon: <AboutIcon name="hospital" className="size-[18px]" />,
          }}
          secondaryAction={{
            label: t("hero.secondaryAction"),

            href: "/contact",

            icon: <AboutIcon name="arrow" className="size-[18px]" />,
          }}
        />
      </Reveal>

      <main>
        {/* =========================
            PROFILE
        ========================== */}
        <Reveal direction="up" distance={28}>
          <AboutProfile
            eyebrow={t("profile.eyebrow")}
            title={t("profile.title")}
            description={t("profile.description")}
            image={aboutPageConfig.profileImage}
            imageAlt={t("profile.imageAlt")}
          />
        </Reveal>

        {/* =========================
            VISION & MISSION
        ========================== */}
        <Reveal direction="up" distance={28}>
          <AboutVisionMission
            visionEyebrow={t("visionMission.vision.eyebrow")}
            visionTitle={t("visionMission.vision.title")}
            visionDescription={t("visionMission.vision.description")}
            missionEyebrow={t("visionMission.mission.eyebrow")}
            missionTitle={t("visionMission.mission.title")}
            missionItems={missionItems}
          />
        </Reveal>

        {/* =========================
            AWARDS
        ========================== */}
        <Reveal direction="up" distance={28}>
          <AboutAwards
            eyebrow={t("awards.eyebrow")}
            title={t("awards.title")}
            description={t("awards.description")}
            awards={awards}
          />
        </Reveal>

        {/* =========================
            CHARTERS
        ========================== */}
        <Reveal direction="up" distance={28}>
          <AboutCharters
            eyebrow={t("charters.eyebrow")}
            title={t("charters.title")}
            description={t("charters.description")}
            viewLabel={t("charters.viewPdf")}
            items={charters}
          />
        </Reveal>

        {/* =========================
            POSTER
        ========================== */}
        <Reveal direction="up" distance={30}>
          <AboutPoster
            image={aboutPageConfig.posterImage}
            imageAlt={t("poster.imageAlt")}
          />
        </Reveal>

        {/* =========================
            FACILITIES
        ========================== */}
        <Reveal direction="up" distance={30}>
          <AboutFacilities
            eyebrow={t("facilities.eyebrow")}
            title={t("facilities.title")}
            description={t("facilities.description")}
            items={gallery}
          />
        </Reveal>
      </main>
    </>
  );
}
