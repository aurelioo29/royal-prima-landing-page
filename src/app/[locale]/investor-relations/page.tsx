import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import PageHero from "@/components/shared/page-hero";

import { Reveal } from "@/components/shared/motion";

import {
  InvestorDocumentCard,
  InvestorIcon,
  InvestorScrollProgress,
  investorDocuments,
  investorRelationsConfig,
} from "@/components/investor-relations";

import type {
  InvestorDocumentItem,
  ResolvedInvestorDocumentItem,
} from "@/components/investor-relations";

import { routing } from "@/i18n/routing";

type InvestorRelationsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: InvestorRelationsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "InvestorRelationsPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/investor-relations",
    },

    openGraph: {
      type: "website",
      url: "/investor-relations",

      title: t("title"),

      description: t("description"),

      images: [
        {
          url: investorRelationsConfig.heroImage,

          alt: t("imageAlt"),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: t("title"),

      description: t("description"),

      images: [investorRelationsConfig.heroImage],
    },
  };
}

export default async function InvestorRelationsPage({
  params,
}: InvestorRelationsPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("InvestorRelationsPage");

  function resolveDocument(
    document: InvestorDocumentItem,
  ): ResolvedInvestorDocumentItem {
    if (document.category === "prospectus") {
      return {
        ...document,

        eyebrow: t("documents.prospectus.eyebrow"),

        title: t("documents.prospectus.title", {
          year: document.year,
        }),

        description: t("documents.prospectus.description"),
      };
    }

    if (document.category === "annualReport") {
      return {
        ...document,

        eyebrow: t("documents.annualReport.eyebrow"),

        title: t("documents.annualReport.title", {
          year: document.year,
        }),

        description: t("documents.annualReport.description", {
          year: document.year,
        }),
      };
    }

    const period = document.period ? t(`periods.${document.period}`) : "";

    return {
      ...document,

      eyebrow: t("documents.financialStatement.eyebrow"),

      title: t("documents.financialStatement.title", {
        period,
        year: document.year,
      }),

      description: t("documents.financialStatement.description", {
        period,
        year: document.year,
      }),
    };
  }

  const resolvedDocuments = investorDocuments.map(resolveDocument);

  const prospectus = resolvedDocuments.find(
    (document) => document.category === "prospectus",
  );

  const annualReports = resolvedDocuments.filter(
    (document) => document.category === "annualReport",
  );

  const financialStatements = resolvedDocuments.filter(
    (document) => document.category === "financialStatement",
  );

  const financialYears = [
    ...new Set(financialStatements.map((document) => document.year)),
  ].sort((firstYear, secondYear) => secondYear - firstYear);

  return (
    <>
      <InvestorScrollProgress />

      {/* HERO */}
      <Reveal trigger="load" direction="up" distance={14} duration={0.75}>
        <PageHero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          description={t("hero.description")}
          imageSrc={investorRelationsConfig.heroImage}
          imageAlt={t("hero.imageAlt")}
          imagePosition="center 30%"
          primaryAction={{
            label: t("hero.primaryAction"),

            href: "#investor-documents",

            icon: <InvestorIcon name="arrow" className="size-[18px]" />,
          }}
          secondaryAction={{
            label: t("hero.secondaryAction"),

            href: "/contact",
          }}
          badge={{
            eyebrow: t("hero.imageBadge"),

            value: t("hero.imageBadgeValue"),

            icon: <InvestorIcon name="document" className="size-5" />,
          }}
        />
      </Reveal>

      <main
        id="investor-documents"
        className="scroll-mt-[calc(var(--site-header-height)+24px)]"
      >
        {/* INTRO + PROSPECTUS */}
        <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
              <Reveal direction="right" distance={32}>
                <div>
                  <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                    {t("overview.eyebrow")}
                  </p>

                  <h2 className="mt-4 mb-0! text-[36px] leading-[1.14] font-bold tracking-[-0.035em] text-[#123B56] sm:text-[46px]">
                    {t("overview.title")}
                  </h2>
                </div>
              </Reveal>

              <Reveal direction="left" distance={32} delay={0.08}>
                <p className="m-0! max-w-[760px] text-[15px] leading-8 text-[#57778C] sm:text-base">
                  {t("overview.description")}
                </p>
              </Reveal>
            </div>

            {prospectus && (
              <Reveal
                className="mt-14"
                direction="up"
                distance={36}
                delay={0.08}
              >
                <InvestorDocumentCard
                  document={prospectus}
                  featured
                  pdfLabel={t("card.pdf")}
                  openLabel={t("card.openDocument")}
                />
              </Reveal>
            )}
          </div>
        </section>

        {/* ANNUAL REPORTS */}
        <section className="overflow-hidden bg-[#F3F9FC] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <Reveal direction="up" className="max-w-[780px]">
              <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                {t("sections.annualReports.eyebrow")}
              </p>

              <h2 className="mt-4 mb-0! text-[36px] leading-[1.14] font-bold tracking-[-0.035em] text-[#123B56] sm:text-[46px]">
                {t("sections.annualReports.title")}
              </h2>

              <p className="mt-5 mb-0! max-w-[700px] text-[15px] leading-8 text-[#57778C]">
                {t("sections.annualReports.description")}
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {annualReports.map((document, index) => (
                <Reveal
                  key={document.id}
                  direction="up"
                  distance={28}
                  delay={Math.min(index * 0.06, 0.36)}
                  className="h-full"
                >
                  <InvestorDocumentCard
                    document={document}
                    pdfLabel={t("card.pdf")}
                    openLabel={t("card.openDocument")}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINANCIAL STATEMENTS */}
        <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <Reveal direction="up" className="max-w-[820px]">
              <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                {t("sections.financialStatements.eyebrow")}
              </p>

              <h2 className="mt-4 mb-0! text-[36px] leading-[1.14] font-bold tracking-[-0.035em] text-[#123B56] sm:text-[46px]">
                {t("sections.financialStatements.title")}
              </h2>

              <p className="mt-5 mb-0! max-w-[720px] text-[15px] leading-8 text-[#57778C]">
                {t("sections.financialStatements.description")}
              </p>
            </Reveal>

            <div className="mt-14 space-y-16">
              {financialYears.map((year) => {
                const yearDocuments = financialStatements.filter(
                  (document) => document.year === year,
                );

                return (
                  <Reveal key={year} direction="up" distance={32}>
                    <section className="grid grid-cols-1 gap-7 border-t border-[#DCEAF1] pt-9 lg:grid-cols-[150px_1fr] lg:gap-12">
                      <Reveal direction="right" distance={24} delay={0.06}>
                        <div>
                          <p className="m-0! text-xs font-bold uppercase tracking-[0.15em] text-[#7793A5]">
                            {t("sections.financialStatements.yearLabel")}
                          </p>

                          <p className="mt-2 mb-0! text-[42px] font-bold tracking-[-0.04em] text-[#123B56]">
                            {year}
                          </p>
                        </div>
                      </Reveal>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                        {yearDocuments.map((document, index) => (
                          <Reveal
                            key={document.id}
                            direction="up"
                            distance={24}
                            delay={0.08 + index * 0.06}
                            className="h-full"
                          >
                            <InvestorDocumentCard
                              document={document}
                              pdfLabel={t("card.pdf")}
                              openLabel={t("card.openDocument")}
                            />
                          </Reveal>
                        ))}
                      </div>
                    </section>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
