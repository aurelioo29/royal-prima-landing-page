"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { HEADER_NAVIGATION } from "../../data/header.data";
import type { HeaderDesktopNavProps } from "../../types/header.types";
import { isPathActive } from "../../utils/is-path-active";

import HeaderIcon from "../HeaderIcon";

export default function HeaderDesktopNav({ pathname }: HeaderDesktopNavProps) {
  const navigationT = useTranslations("Navigation");
  const t = useTranslations("Header");

  return (
    <nav
      aria-label={t("mainNavigation")}
      className="hidden h-full flex-1 items-center justify-center xl:flex"
    >
      <ul className="m-0! flex h-full list-none! items-center justify-center gap-1 2xl:gap-2 p-0!">
        {HEADER_NAVIGATION.map((item) => {
          const active = item.href
            ? isPathActive(pathname, item.href)
            : (item.children?.some((child) =>
                isPathActive(pathname, child.href),
              ) ?? false);

          if (!item.children?.length && item.href) {
            return (
              <li key={item.key} className="h-full list-none!">
                <Link
                  href={item.href}
                  className={`relative flex h-full items-center whitespace-nowrap px-3 text-[15px] font-semibold no-underline! transition-colors duration-200 2xl:px-4 2xl:text-base ${
                    active
                      ? "text-[#0077B6]!"
                      : "text-[#123B56]! hover:text-[#00A4E4]!"
                  }`}
                >
                  {navigationT(item.labelKey)}

                  <span
                    className={`absolute right-3 bottom-0 left-3 h-[3px] origin-center bg-[linear-gradient(90deg,#00A4E4,#0077B6)] transition-transform duration-300 2xl:right-4 2xl:left-4 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            );
          }

          return (
            <li
              key={item.key}
              className="group relative flex h-full list-none! items-center"
            >
              <button
                type="button"
                aria-haspopup="menu"
                className={`flex h-full cursor-pointer items-center gap-1.5 whitespace-nowrap border-0! bg-transparent px-3 text-[15px] font-semibold transition-colors duration-200 2xl:px-4 2xl:text-base ${
                  active
                    ? "text-[#0077B6]!"
                    : "text-[#123B56]! group-hover:text-[#00A4E4]!"
                }`}
              >
                {navigationT(item.labelKey)}

                <HeaderIcon
                  name="chevronDown"
                  className="size-4 transition-transform duration-200 group-hover:rotate-180"
                />
              </button>

              <span
                className={`pointer-events-none absolute right-3 bottom-0 left-3 h-[3px] origin-center bg-[linear-gradient(90deg,#00A4E4,#0077B6)] transition-transform duration-300 2xl:right-4 2xl:left-4 ${
                  active ? "scale-x-100" : "scale-x-0"
                }`}
              />

              <div className="invisible absolute top-full left-1/2 z-50 w-[290px] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="border border-[#D8EAF2] bg-white p-2 shadow-[0_24px_60px_rgba(18,59,86,0.16)]">
                  {item.children?.map((child) => {
                    const childActive = isPathActive(pathname, child.href);

                    return (
                      <Link
                        key={child.key}
                        href={child.href}
                        className={`flex min-h-13 items-center justify-between px-4 text-[15px] no-underline! transition-colors duration-200 ${
                          childActive
                            ? "bg-[#DDF5FF] font-semibold text-[#0077B6]!"
                            : "text-[#57778C]! hover:bg-[#F3FBFF] hover:text-[#0077B6]!"
                        }`}
                      >
                        {navigationT(child.labelKey)}

                        <HeaderIcon name="arrow" className="size-4" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
