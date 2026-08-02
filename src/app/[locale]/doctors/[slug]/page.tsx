import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  DOCTORS,
  DoctorDetailContent,
  getDoctorBySlug,
} from "@/components/doctors";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import { Link } from "@/i18n/navigation";

import { routing } from "@/i18n/routing";

type DoctorDetailPageProps = {
  params: Promise<{
    locale: string;

    slug: string;
  }>;
};

export function generateStaticParams() {
  return DOCTORS.map((doctor) => ({
    slug: doctor.slug,
  }));
}

export async function generateMetadata({
  params,
}: DoctorDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  return {
    title: doctor.name,

    description: doctor.description,

    alternates: {
      canonical: `/doctors/${doctor.slug}`,
    },

    openGraph: {
      type: "website",

      url: `/doctors/${doctor.slug}`,

      title: doctor.name,

      description: doctor.description,

      images: [
        {
          url: doctor.image,

          alt: doctor.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: doctor.name,

      description: doctor.description,

      images: [doctor.image],
    },
  };
}

export default async function DoctorDetailPage({
  params,
}: DoctorDetailPageProps) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  const t = await getTranslations("DoctorsPage");

  return (
    <>
      <PageScrollProgress />

      {/* ================================
          BREADCRUMB
      ================================= */}
      <section className="border-b border-[#E1EDF2] bg-white">
        <div className="mx-auto w-full max-w-[1760px] px-5 py-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <nav aria-label="Breadcrumb">
            <ol className="m-0! flex flex-wrap items-center gap-x-2 gap-y-1 p-0 text-sm">
              <li className="list-none">
                <Link
                  href="/"
                  className="text-[#7C96A7]! no-underline! transition-colors hover:text-[#0077B6]!"
                >
                  {t("breadcrumb.home")}
                </Link>
              </li>

              <li aria-hidden="true" className="list-none text-[#B5C7D0]">
                /
              </li>

              <li className="list-none">
                <Link
                  href="/doctors"
                  className="text-[#7C96A7]! no-underline! transition-colors hover:text-[#0077B6]!"
                >
                  {t("breadcrumb.doctors")}
                </Link>
              </li>

              <li aria-hidden="true" className="list-none text-[#B5C7D0]">
                /
              </li>

              <li
                aria-current="page"
                className="list-none font-semibold text-[#123B56]"
              >
                {doctor.name}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ================================
          CONTENT
      ================================= */}
      <Reveal trigger="load" direction="up" distance={16} duration={0.65}>
        <DoctorDetailContent
          doctor={doctor}
          labels={{
            home: t("breadcrumb.home"),

            doctors: t("breadcrumb.doctors"),

            appointment: t("detail.appointment"),

            backToDoctors: t("detail.backToDoctors"),

            schedules: t("detail.schedules"),

            education: t("detail.education"),

            experiences: t("detail.experiences"),

            awards: t("detail.awards"),
          }}
        />
      </Reveal>
    </>
  );
}
