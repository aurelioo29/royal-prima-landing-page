import Image from "next/image";

import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import {
  footerConfig,
  footerContacts,
  footerMenus,
  footerSocials,
} from "./data/footer.data";

import type {
  ResolvedFooterContactItem,
  ResolvedFooterMenuGroup,
  ResolvedFooterSocialItem,
} from "./types/footer.types";

import FooterBackToTop from "./components/FooterBackToTop";
import FooterContact from "./components/FooterContact";
import FooterMenu from "./components/FooterMenu";
import FooterNewsletter from "./components/FooterNewsletter";
import FooterSocial from "./components/FooterSocial";

export default async function Footer() {
  const t = await getTranslations("Footer");

  const contacts: ResolvedFooterContactItem[] = footerContacts.map((item) => ({
    ...item,

    label: t(`contact.items.${item.key}`),
  }));

  const menus: ResolvedFooterMenuGroup[] = footerMenus.map((group) => ({
    key: group.key,

    title: t(`menus.${group.key}.title`),

    items: group.items.map((item) => ({
      ...item,

      label: t(`menus.${group.key}.items.${item.key}`),
    })),
  }));

  const socials: ResolvedFooterSocialItem[] = footerSocials.map((item) => ({
    ...item,

    label: t(`social.items.${item.key}`),
  }));

  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-40 text-[#274760] sm:mt-48 lg:mt-56">
      {/* Background gelombang */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[calc(100%+130px)] w-full bg-cover bg-top bg-no-repeat sm:h-[calc(100%+160px)] lg:h-[calc(100%+200px)]"
        style={{
          backgroundImage: `url(${footerConfig.background.wave})`,
        }}
      />

      {/* Logo di tengah gelombang */}
      <div className="absolute top-[-68px] left-1/2 z-20 -translate-x-1/2 sm:top-[-78px] lg:top-[-96px]">
        <Link
          href={footerConfig.logo.href}
          aria-label={footerConfig.logo.alt}
          className="footer-logo-float inline-flex no-underline!"
        >
          <Image
            src={footerConfig.logo.src}
            alt={footerConfig.logo.alt}
            width={200}
            height={208}
            className="h-auto w-[90px] object-contain opacity-95 drop-shadow-[0_12px_24px_rgba(201,148,45,0.16)] sm:w-[106px] lg:w-[126px]"
          />
        </Link>
      </div>

      <div className="relative z-10">
        {/* Konten utama */}
        <div className="mx-auto w-full max-w-[1760px] px-5 pt-24 pb-16 sm:px-8 sm:pt-28 sm:pb-20 lg:px-10 lg:pt-32 lg:pb-24 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-[1.25fr_0.75fr_0.95fr_1.4fr] xl:items-start xl:gap-x-12 2xl:gap-x-16">
            {/* Brand dan kontak */}
            <section className="max-w-[410px]">
              <h2 className="m-0! max-w-[360px] text-[30px] font-bold leading-[1.18] tracking-[-0.025em] text-[#274760] sm:text-[34px] lg:text-[38px]">
                {t("brand.title")}
              </h2>

              <p className="mt-5 mb-0! max-w-[390px] text-[14px] leading-7 text-[#274760]/75 sm:text-[15px] sm:leading-8">
                {t("brand.description")}
              </p>

              <div className="mt-8">
                <FooterContact items={contacts} />
              </div>

              <div className="mt-7">
                <FooterSocial items={socials} ariaLabel={t("social.title")} />
              </div>
            </section>

            {/* Menu */}
            {menus.map((group) => (
              <FooterMenu key={group.key} group={group} />
            ))}

            {/* Newsletter */}
            <FooterNewsletter
              title={t("newsletter.title")}
              description={t("newsletter.description")}
              emailLabel={t("newsletter.emailLabel")}
              placeholder={t("newsletter.placeholder")}
              buttonLabel={t("newsletter.button")}
              successMessage={t("newsletter.success")}
            />
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white/20 bg-[#2F80C8]">
          <div className="mx-auto flex w-full max-w-[1760px] flex-col items-center justify-between gap-5 px-5 py-5 sm:px-8 md:flex-row lg:px-10 xl:px-12 2xl:px-16">
            <p className="m-0! text-center text-[13px] leading-6 text-white/80 sm:text-[14px] md:text-left">
              {t("copyright", {
                year,
              })}
            </p>

            <FooterBackToTop label={t("backToTop")} />
          </div>
        </div>
      </div>
    </footer>
  );
}
