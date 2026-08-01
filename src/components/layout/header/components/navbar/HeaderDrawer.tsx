"use client";

import Image from "next/image";
import { useState } from "react";

import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";

import {
  HEADER_CONTACTS,
  HEADER_NAVIGATION,
  HEADER_SOCIALS,
} from "../../data/header.data";

import type { HeaderDrawerProps } from "../../types/header.types";

import { isPathActive } from "../../utils/is-path-active";

import HeaderIcon from "../HeaderIcon";

export default function HeaderDrawer({
  open,
  logoSrc,
  onClose,
}: HeaderDrawerProps) {
  const navigationT = useTranslations("Navigation");

  const t = useTranslations("Header");
  const pathname = usePathname();

  const [openGroup, setOpenGroup] = useState<string | null>("services");

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[100] ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <button
        type="button"
        aria-label={t("closeMenu")}
        onClick={onClose}
        className={`absolute inset-0 border-0 bg-[#123B56]/55 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        aria-label={t("drawer.title")}
        className={`absolute top-0 right-0 flex h-full w-full max-w-[500px] flex-col overflow-y-auto bg-white shadow-[-30px_0_80px_rgba(18,59,86,0.18)] transition-transform duration-300 sm:max-w-[540px] lg:max-w-[620px] xl:max-w-[680px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-6 sm:px-8 lg:px-10">
          <Link
            href="/"
            onClick={onClose}
            aria-label="RSU Royal Prima Medan"
            className="inline-flex no-underline!"
          >
            <Image
              src={logoSrc}
              alt="RSU Royal Prima Medan"
              width={300}
              height={78}
              loading="eager"
              fetchPriority="auto"
              className="h-auto w-[230px] object-contain sm:w-[260px]"
            />
          </Link>

          <button
            type="button"
            aria-label={t("closeMenu")}
            onClick={onClose}
            className="flex size-12 cursor-pointer items-center justify-center border border-slate-200 bg-white text-[#123B56] transition-colors hover:border-[#00A4E4] hover:bg-[#F3FBFF] hover:text-[#0077B6]"
          >
            <HeaderIcon name="close" className="size-5" />
          </button>
        </div>

        <div className="flex-1 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <p className="m-0! text-xs font-semibold uppercase tracking-[0.18em] text-[#0077B6]!">
            {t("drawer.eyebrow")}
          </p>

          <h2 className="mt-3 mb-0! max-w-[540px] text-[30px] leading-tight font-bold text-[#123B56]! sm:text-[34px] lg:text-[38px]">
            {t("drawer.title")}
          </h2>

          <p className="mt-4 mb-0! max-w-[560px] text-sm leading-7 text-[#57778C]! sm:text-[15px]">
            {t("drawer.description")}
          </p>

          <nav
            aria-label={t("drawer.navigationLabel")}
            className="mt-8 lg:mt-10"
          >
            <ul className="m-0! flex list-none! flex-col p-0!">
              {HEADER_NAVIGATION.map((item) => {
                const hasChildren = Boolean(item.children?.length);

                const active = item.href
                  ? isPathActive(pathname, item.href)
                  : (item.children?.some((child) =>
                      isPathActive(pathname, child.href),
                    ) ?? false);

                if (!hasChildren && item.href) {
                  return (
                    <li key={item.key} className="list-none!">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`flex min-h-16 items-center justify-between border-b border-slate-100 text-[16px] font-semibold no-underline! transition-colors lg:min-h-[68px] lg:text-[17px] ${
                          active
                            ? "text-[#0077B6]!"
                            : "text-[#123B56]! hover:text-[#00A4E4]!"
                        }`}
                      >
                        {navigationT(item.labelKey)}

                        {active ? (
                          <span className="size-2.5 rounded-full bg-[#00A4E4]" />
                        ) : (
                          <HeaderIcon
                            name="arrow"
                            className="size-4 text-[#9BB0BC]"
                          />
                        )}
                      </Link>
                    </li>
                  );
                }

                const expanded = openGroup === item.key;

                return (
                  <li key={item.key} className="list-none!">
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() =>
                        setOpenGroup((current) =>
                          current === item.key ? null : item.key,
                        )
                      }
                      className={`flex min-h-16 w-full cursor-pointer items-center justify-between border-0! border-b! border-slate-100! bg-transparent p-0! text-left text-[16px] font-semibold lg:min-h-[68px] lg:text-[17px] ${
                        active ? "text-[#0077B6]!" : "text-[#123B56]!"
                      }`}
                    >
                      {navigationT(item.labelKey)}

                      <span className="flex size-9 items-center justify-center bg-[#F3FBFF] text-[#0077B6]">
                        <HeaderIcon
                          name="chevronDown"
                          className={`size-4 transition-transform duration-300 ${
                            expanded ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="m-0! list-none! bg-[#F3FBFF] p-3! sm:p-4!">
                          {item.children?.map((child) => {
                            const childActive = isPathActive(
                              pathname,
                              child.href,
                            );

                            return (
                              <li key={child.key} className="list-none!">
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  className={`flex min-h-12 items-center justify-between px-4 text-sm no-underline! transition-colors sm:min-h-13 sm:text-[15px] ${
                                    childActive
                                      ? "bg-[#DDF5FF] font-semibold text-[#0077B6]!"
                                      : "text-[#57778C]! hover:bg-white hover:text-[#0077B6]!"
                                  }`}
                                >
                                  {navigationT(child.labelKey)}

                                  <HeaderIcon name="arrow" className="size-4" />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/appointments"
            onClick={onClose}
            className="mt-8 inline-flex h-15 w-full items-center justify-center gap-3 bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_100%)] px-6 text-sm font-semibold text-white! no-underline! shadow-[0_14px_30px_rgba(0,164,228,0.22)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(0,164,228,0.30)] lg:h-16 lg:text-[15px]"
          >
            {t("appointmentButton")}

            <HeaderIcon name="arrow" className="size-5" />
          </Link>

          <div className="mt-10 border-t border-slate-100 pt-8 lg:mt-12 lg:pt-10">
            <h3 className="m-0! text-lg font-bold text-[#123B56]! lg:text-xl">
              {t("contact.title")}
            </h3>

            <ul className="mt-6! mb-0! grid list-none! grid-cols-1 gap-5 p-0! lg:grid-cols-2">
              {HEADER_CONTACTS.map((item) => (
                <li
                  key={item.key}
                  className={`list-none! ${
                    item.key === "address" ? "lg:col-span-2" : ""
                  }`}
                >
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="flex h-full items-start gap-4 border border-[#E2EFF5] bg-[#F8FCFE] p-4 text-[#123B56] no-underline! transition-colors hover:border-[#00A4E4] hover:bg-white hover:text-[#0077B6]"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center bg-[#DDF5FF] text-[#0077B6]">
                      <HeaderIcon name={item.icon} className="size-5" />
                    </span>

                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#0077B6]!">
                        {t(`contact.${item.key}`)}
                      </span>

                      <span className="mt-1 block text-sm leading-6 text-[#57778C]!">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-8 lg:mt-12 lg:pt-10">
            <p className="m-0! text-sm font-semibold text-[#123B56]! lg:text-base">
              {t("social.title")}
            </p>

            <div className="mt-4 flex gap-3">
              {HEADER_SOCIALS.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t(`social.${item.key}`)}
                  title={t(`social.${item.key}`)}
                  className="flex size-12 items-center justify-center border border-[#D5EAF3] bg-white text-[#0077B6] no-underline! transition-all hover:-translate-y-1 hover:border-[#00A4E4] hover:bg-[#00A4E4] hover:text-white"
                >
                  <HeaderIcon name={item.icon} className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
