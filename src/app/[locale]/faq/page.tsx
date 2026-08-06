import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  FAQ_CATEGORIES,
  FAQ_ITEMS,
  FaqContact,
  FaqDirectory,
  FaqIcon,
  faqPageConfig,
} from "@/components/faq";

import type {
  FaqResolvedCategoryItem,
  FaqResolvedItem,
} from "@/components/faq";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import PageHero from "@/components/shared/page-hero";

import { routing } from "@/i18n/routing";

type FaqPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: FaqPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "FaqPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/faq",
    },

    openGraph: {
      type: "website",

      url: "/faq",

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

export default async function FaqPage({ params }: FaqPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("FaqPage");

  const categories: FaqResolvedCategoryItem[] = FAQ_CATEGORIES.map((item) => ({
    ...item,

    label: t(`categories.${item.key}`),
  }));

  const faqItems: FaqResolvedItem[] = FAQ_ITEMS.map((item) => ({
    ...item,

    question: t(`items.${item.id}.question`),

    answer: t(`items.${item.id}.answer`),
  }));

  return (
    <>
      <PageScrollProgress />

      {/* =====================
          HERO
      ====================== */}
      <Reveal trigger="load" direction="up" distance={14} duration={0.75}>
        <PageHero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          description={t("hero.description")}
          imageSrc={faqPageConfig.heroImage}
          imageAlt={t("hero.imageAlt")}
          imagePosition="center center"
          primaryAction={{
            label: t("hero.primaryAction"),

            href: "#faq-list",

            icon: <FaqIcon name="question" className="size-[18px]" />,
          }}
          secondaryAction={{
            label: t("hero.secondaryAction"),

            href: faqPageConfig.contactHref,

            icon: <FaqIcon name="message" className="size-[18px]" />,
          }}
          badge={{
            eyebrow: t("hero.badgeEyebrow"),

            value: t("hero.badgeValue"),

            icon: <FaqIcon name="question" className="size-5" />,
          }}
        />
      </Reveal>

      <main>
        {/* =====================
            FAQ
        ====================== */}
        <Reveal direction="up" distance={26}>
          <FaqDirectory
            eyebrow={t("directory.eyebrow")}
            title={t("directory.title")}
            description={t("directory.description")}
            searchPlaceholder={t("directory.searchPlaceholder")}
            allLabel={t("directory.all")}
            emptyTitle={t("directory.empty.title")}
            emptyDescription={t("directory.empty.description")}
            categories={categories}
            items={faqItems}
          />
        </Reveal>

        {/* =====================
            CONTACT
        ====================== */}
        <Reveal direction="up" distance={28}>
          <FaqContact
            eyebrow={t("contact.eyebrow")}
            title={t("contact.title")}
            description={t("contact.description")}
            primaryLabel={t("contact.primaryAction")}
            primaryHref={faqPageConfig.contactHref}
            secondaryLabel={t("contact.secondaryAction")}
            secondaryHref={faqPageConfig.phone.href}
          />
        </Reveal>
      </main>
    </>
  );
}
