import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  CareerIcon,
  CareerVacancyCard,
  careerConfig,
  careerVacancies,
} from "@/components/career";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import PageHero from "@/components/shared/page-hero";

import { routing } from "@/i18n/routing";

type CareerPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: CareerPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "CareerPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/career",
    },

    openGraph: {
      type: "website",
      url: "/career",

      title: t("title"),

      description: t("description"),

      images: [
        {
          url: careerConfig.heroImage,

          alt: t("imageAlt"),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: t("title"),

      description: t("description"),

      images: [careerConfig.heroImage],
    },
  };
}

export default async function CareerPage({ params }: CareerPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("CareerPage");

  return (
    <>
      <PageScrollProgress />

      {/* HERO */}
      <Reveal trigger="load" direction="up" distance={14} duration={0.75}>
        <PageHero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          description={t("hero.description")}
          imageSrc={careerConfig.heroImage}
          imageAlt={t("hero.imageAlt")}
          imagePosition="center 30%"
          primaryAction={{
            label: t("hero.primaryAction"),

            href: "#career-vacancies",

            icon: <CareerIcon name="arrow" className="size-[18px]" />,
          }}
          secondaryAction={{
            label: t("hero.secondaryAction"),

            href: `mailto:${careerConfig.recruitmentEmail}`,

            icon: <CareerIcon name="email" className="size-[18px]" />,
          }}
          badge={{
            eyebrow: t("hero.imageBadge"),

            value: t("hero.imageBadgeValue"),

            icon: <CareerIcon name="briefcase" className="size-5" />,
          }}
        />
      </Reveal>

      <main>
        {/* INTRO */}
        <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20 lg:px-10 xl:px-12 2xl:px-16">
            <Reveal direction="right" distance={32}>
              <div>
                <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                  {t("overview.eyebrow")}
                </p>

                <h2 className="mt-4 mb-0! max-w-[620px] text-[36px] leading-[1.14] font-bold tracking-[-0.035em] text-[#123B56] sm:text-[46px]">
                  {t("overview.title")}
                </h2>
              </div>
            </Reveal>

            <Reveal direction="left" distance={32} delay={0.08}>
              <p className="m-0! max-w-[780px] text-[15px] leading-8 text-[#57778C] sm:text-base">
                {t("overview.description")}
              </p>
            </Reveal>
          </div>
        </section>

        {/* LOWONGAN */}
        <section
          id="career-vacancies"
          className="scroll-mt-[calc(var(--site-header-height)+24px)] overflow-hidden bg-[#F3F9FC] py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <Reveal direction="up" className="max-w-[760px]">
              <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                {t("vacancies.eyebrow")}
              </p>

              <h2 className="mt-4 mb-0! text-[36px] leading-[1.14] font-bold tracking-[-0.035em] text-[#123B56] sm:text-[46px]">
                {t("vacancies.title")}
              </h2>

              <p className="mt-5 mb-0! max-w-[700px] text-[15px] leading-8 text-[#57778C]">
                {t("vacancies.description")}
              </p>
            </Reveal>

            <div className="mt-14 space-y-12">
              {careerVacancies.map((vacancy, index) => (
                <Reveal
                  key={vacancy.id}
                  direction="up"
                  distance={38}
                  delay={Math.min(index * 0.08, 0.3)}
                  amount={0.08}
                >
                  <CareerVacancyCard
                    vacancy={vacancy}
                    labels={{
                      openStatus: t("card.status.open"),

                      closedStatus: t("card.status.closed"),

                      requirements: t("card.requirements"),

                      benefits: t("card.benefits"),

                      emailLabel: t("card.emailAction"),

                      formLabel: t("card.formAction"),

                      posterLabel: t("card.posterAction"),

                      emailSubjectLabel: t("card.emailSubject"),
                    }}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CARA MELAMAR */}
        <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <Reveal direction="up" className="max-w-[740px]">
              <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                {t("process.eyebrow")}
              </p>

              <h2 className="mt-4 mb-0! text-[36px] leading-[1.14] font-bold tracking-[-0.035em] text-[#123B56] sm:text-[46px]">
                {t("process.title")}
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 border-t border-[#DCEAF1] md:grid-cols-3">
              {(["prepare", "submit", "selection"] as const).map(
                (step, index) => (
                  <Reveal
                    key={step}
                    direction="up"
                    distance={24}
                    delay={index * 0.08}
                  >
                    <article className="relative border-b border-[#DCEAF1] py-9 md:min-h-[260px] md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-r-0">
                      <span className="text-[48px] leading-none font-bold tracking-[-0.05em] text-[#D7EDF6]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="mt-6 mb-0! text-xl font-bold text-[#123B56]">
                        {t(`process.steps.${step}.title`)}
                      </h3>

                      <p className="mt-4 mb-0! text-sm leading-7 text-[#57778C] sm:text-[15px]">
                        {t(`process.steps.${step}.description`)}
                      </p>
                    </article>
                  </Reveal>
                ),
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
