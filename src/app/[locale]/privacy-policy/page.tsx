import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  PRIVACY_POLICY_SECTIONS,
  PrivacyPolicyContent,
  PrivacyPolicyIcon,
  privacyPolicyConfig,
} from "@/components/privacy-policy";

import type { PrivacyPolicyResolvedSection } from "@/components/privacy-policy";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import { routing } from "@/i18n/routing";

type PrivacyPolicyPageProps = {
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
}: PrivacyPolicyPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,

    namespace: "PrivacyPolicyPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/privacy-policy",
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",

      url: "/privacy-policy",

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

export default async function PrivacyPolicyPage({
  params,
}: PrivacyPolicyPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("PrivacyPolicyPage");

  const sections: PrivacyPolicyResolvedSection[] = PRIVACY_POLICY_SECTIONS.map(
    (section) => ({
      ...section,

      title: t(`sections.${section.key}.title`),

      description: t.has(`sections.${section.key}.description`)
        ? t(`sections.${section.key}.description`)
        : undefined,

      paragraphs: resolveStringArray(
        t.raw(`sections.${section.key}.paragraphs`),
      ),

      items: resolveStringArray(t.raw(`sections.${section.key}.items`)),
    }),
  );

  return (
    <>
      <PageScrollProgress />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#DCEAF1] bg-[#F2FAFD] pt-[calc(var(--site-header-height)+64px)] pb-16 sm:pt-[calc(var(--site-header-height)+80px)] sm:pb-20 lg:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-100px] size-[420px] rounded-full bg-[#00A4E4]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-44 left-[-120px] size-[400px] rounded-full bg-[#D7A448]/8 blur-3xl"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <Reveal trigger="load" direction="up" distance={20}>
            <div className="max-w-[900px]">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center bg-white text-[#0077B6] shadow-[0_8px_26px_rgba(18,59,86,0.06)]">
                  <PrivacyPolicyIcon name="shield" className="size-[19px]" />
                </span>

                <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                  {t("hero.eyebrow")}
                </p>
              </div>

              <h1 className="mt-7 mb-0! max-w-[900px] text-[42px] leading-[1.05] font-bold tracking-[-0.045em] text-[#123B56] sm:text-[54px] lg:text-[66px]">
                {t("hero.title")}
              </h1>

              <p className="mt-6 mb-0! max-w-[780px] text-[16px] leading-8 text-[#57778C] sm:text-[17px]">
                {t("hero.description")}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal direction="up" distance={24}>
        <PrivacyPolicyContent
          sections={sections}
          introduction={t("introduction")}
          lastUpdatedLabel={t("lastUpdated.label")}
          lastUpdatedValue={t("lastUpdated.value")}
          contactLabel={t("contact.description")}
          contactHref={privacyPolicyConfig.emailHref}
        />
      </Reveal>
    </>
  );
}
