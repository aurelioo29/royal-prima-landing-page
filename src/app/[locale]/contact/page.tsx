import type { Metadata } from "next";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

// import ContactForm from "@/components/contact/ContactForm";
import ContactIcon from "@/components/contact/ContactIcon";

import { contactData } from "@/components/contact/contact.data";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import PageHero from "@/components/shared/page-hero";

import { routing } from "@/i18n/routing";
import AppointmentForm from "@/components/appointment/AppointmentForm";

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "ContactPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/contact",
    },

    openGraph: {
      type: "website",
      url: "/contact",
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

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("ContactPage");

  return (
    <>
      <PageScrollProgress />

      {/* HERO */}
      <Reveal trigger="load" direction="up" distance={14} duration={0.75}>
        <PageHero
          eyebrow={t("hero.eyebrow")}
          title={t("hero.title")}
          description={t("hero.description")}
          imageSrc="/images/contact/contact-hero.webp"
          imageAlt={t("hero.imageAlt")}
          imagePosition="center"
          primaryAction={{
            label: t("hero.primaryAction"),

            href: "#contact-form",

            icon: <ContactIcon name="arrow" className="size-[18px]" />,
          }}
          secondaryAction={{
            label: contactData.phone.display,

            href: contactData.phone.href,

            icon: <ContactIcon name="phone" className="size-[18px]" />,
          }}
          badge={{
            eyebrow: t("hero.imageBadge"),

            value: contactData.phone.display,

            icon: <ContactIcon name="phone" className="size-[18px]" />,
          }}
        />
      </Reveal>

      <main>
        {/* FORM DAN INFO KONTAK */}
        <section
          id="contact-form"
          className="scroll-mt-[calc(var(--site-header-height)+24px)] overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
        >
          <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-20 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24 lg:px-10 xl:gap-32 xl:px-12 2xl:px-16">
            {/* Form */}
            <Reveal direction="right" distance={38} amount={0.12}>
              <AppointmentForm />
            </Reveal>

            {/* Informasi kontak */}
            <aside className="relative lg:pl-8 xl:pl-14">
              <div
                aria-hidden="true"
                className="absolute top-0 bottom-0 left-0 hidden w-px bg-[linear-gradient(180deg,transparent,#CFE3EC_12%,#CFE3EC_88%,transparent)] lg:block"
              />

              <Reveal direction="left" distance={34}>
                <div>
                  <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                    {t("info.eyebrow")}
                  </p>

                  <h2 className="mt-4 mb-0! max-w-[520px] text-[34px] leading-[1.16] font-bold tracking-[-0.03em] text-[#123B56] sm:text-[42px]">
                    {t("info.title")}
                  </h2>

                  <p className="mt-6 mb-0! max-w-[520px] text-[15px] leading-8 text-[#57778C]">
                    {t("info.description")}
                  </p>
                </div>
              </Reveal>

              <div className="mt-12">
                <Reveal direction="left" distance={24} delay={0.04}>
                  <ContactInfoItem
                    icon="phone"
                    label={t("channels.phone.eyebrow")}
                    value={contactData.phone.display}
                    href={contactData.phone.href}
                  />
                </Reveal>

                <Reveal direction="left" distance={24} delay={0.1}>
                  <ContactInfoItem
                    icon="email"
                    label={t("channels.email.eyebrow")}
                    value={contactData.email.display}
                    href={contactData.email.href}
                  />
                </Reveal>

                <Reveal direction="left" distance={24} delay={0.16}>
                  <ContactInfoItem
                    icon="location"
                    label={t("channels.location.eyebrow")}
                    value={contactData.address.display}
                    href={contactData.address.directionsUrl}
                    external
                  />
                </Reveal>

                <Reveal direction="left" distance={24} delay={0.22}>
                  <ContactInfoItem
                    icon="clock"
                    label={t("officeHours.label")}
                    value={t("officeHours.value")}
                    last
                  />
                </Reveal>
              </div>

              <Reveal
                direction="up"
                distance={24}
                delay={0.12}
                className="mt-10"
              >
                <div className="bg-[#F2FAFD] px-6 py-6 sm:px-7">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center bg-white text-[#0077B6] shadow-[0_8px_24px_rgba(18,59,86,0.07)]">
                      <ContactIcon name="phone" className="size-[18px]" />
                    </span>

                    <p className="m-0! text-sm leading-7 text-[#57778C]">
                      {t("info.note")}
                    </p>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F4FAFD_0%,#E9F5FA_100%)] py-20 sm:py-24 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[-180px] right-[-160px] size-[480px] rounded-full bg-[#CBEFFA]/40 blur-[100px]"
          />

          <div className="relative z-10 mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <Reveal direction="right" distance={34} className="max-w-[760px]">
                <div>
                  <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                    {t("map.eyebrow")}
                  </p>

                  <h2 className="mt-4 mb-0! text-[36px] leading-[1.14] font-bold tracking-[-0.03em] text-[#123B56] sm:text-[46px]">
                    {t("map.title")}
                  </h2>

                  <p className="mt-5 mb-0! max-w-[660px] text-[15px] leading-8 text-[#57778C]">
                    {t("map.description")}
                  </p>
                </div>
              </Reveal>

              <Reveal direction="left" distance={24} delay={0.08}>
                <a
                  href={contactData.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 shrink-0 items-center justify-center gap-3 border-b-2 border-[#0077B6] text-sm font-semibold text-[#0077B6]! no-underline! transition-colors hover:border-[#123B56] hover:text-[#123B56]!"
                >
                  {t("map.openMap")}

                  <ContactIcon name="arrow" className="size-[18px]" />
                </a>
              </Reveal>
            </div>

            {/* Map wrapper */}
            <Reveal
              direction="up"
              distance={38}
              delay={0.08}
              amount={0.08}
              className="mt-12"
            >
              <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_30px_90px_rgba(18,59,86,0.12)] sm:rounded-[40px]">
                <div className="h-[440px] w-full sm:h-[520px] lg:h-[590px]">
                  <iframe
                    src={contactData.address.embedUrl}
                    title={t("map.iframeTitle")}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 border-t border-[#DDEBF1] bg-white px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
                  <div className="flex items-start gap-5">
                    <span className="flex size-12 shrink-0 items-center justify-center bg-[#EAF7FC] text-[#0077B6]">
                      <ContactIcon name="location" className="size-5" />
                    </span>

                    <div>
                      <p className="m-0! text-xs font-bold uppercase tracking-[0.14em] text-[#7793A5]">
                        {t("map.addressLabel")}
                      </p>

                      <address className="mt-2 max-w-[720px] text-sm leading-7 font-semibold text-[#123B56] not-italic sm:text-[15px]">
                        {contactData.address.display}
                      </address>
                    </div>
                  </div>

                  <a
                    href={contactData.phone.href}
                    className="flex items-center gap-4 border-t border-[#E2EDF2] pt-6 text-[#123B56] no-underline! transition-colors hover:text-[#0077B6] lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center bg-[#EAF7FC] text-[#0077B6]">
                      <ContactIcon name="phone" className="size-5" />
                    </span>

                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-[#7793A5]">
                        {t("map.phoneLabel")}
                      </span>

                      <span className="mt-2 block text-[15px] font-semibold">
                        {contactData.phone.display}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

type ContactInfoItemProps = {
  icon: "phone" | "email" | "location" | "clock";

  label: string;
  value: string;
  href?: string;
  external?: boolean;
  last?: boolean;
};

function ContactInfoItem({
  icon,
  label,
  value,
  href,
  external = false,
  last = false,
}: ContactInfoItemProps) {
  const content = (
    <div
      className={`group flex items-start gap-5 py-8 first:pt-0 ${
        last ? "" : "border-b border-[#DCEAF1]"
      }`}
    >
      <span className="flex size-12 shrink-0 items-center justify-center bg-[#EAF7FC] text-[#0077B6] transition-colors duration-300 group-hover:bg-[#0077B6] group-hover:text-white">
        <ContactIcon name={icon} className="size-[21px]" />
      </span>

      <div className="min-w-0 pt-0.5">
        <p className="m-0! text-xs font-bold uppercase tracking-[0.15em] text-[#7793A5]">
          {label}
        </p>

        <p className="mt-3 mb-0! max-w-[470px] break-words text-[15px] leading-7 font-semibold text-[#123B56] sm:text-base">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block no-underline!"
    >
      {content}
    </a>
  );
}
