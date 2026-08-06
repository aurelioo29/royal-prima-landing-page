"use client";

import { useEffect, useRef, useState } from "react";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { HEADER_NAVIGATION } from "../../data/header.data";

import type { HeaderDesktopNavProps } from "../../types/header.types";

import { isPathActive } from "../../utils/is-path-active";

import HeaderIcon from "../HeaderIcon";

type OpenMenuKey = string | null;

export default function HeaderDesktopNav({ pathname }: HeaderDesktopNavProps) {
  const navigationT = useTranslations("Navigation");

  const t = useTranslations("Header");

  const navRef = useRef<HTMLElement>(null);

  const [openMenu, setOpenMenu] = useState<OpenMenuKey>(null);

  /*
   * ============================
   * ROUTE BERUBAH
   * TUTUP SEMUA DROPDOWN
   * ============================
   */
  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  /*
   * ============================
   * CLICK OUTSIDE
   * ============================
   */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (navRef.current && !navRef.current.contains(target)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /*
   * ============================
   * ESCAPE
   * ============================
   */
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeMenu() {
    setOpenMenu(null);
  }

  function toggleMenu(key: string) {
    setOpenMenu((current) => (current === key ? null : key));
  }

  return (
    <nav
      ref={navRef}
      aria-label={t("mainNavigation")}
      className="hidden h-full flex-1 items-center justify-center xl:flex"
    >
      <ul className="m-0! flex h-full list-none! items-center justify-center gap-1 p-0! 2xl:gap-2">
        {HEADER_NAVIGATION.map((item) => {
          const hasChildren = Boolean(item.children?.length);

          const active = item.href
            ? isPathActive(pathname, item.href)
            : (item.children?.some((child) =>
                isPathActive(pathname, child.href),
              ) ?? false);

          /*
           * =====================
           * NORMAL LINK
           * =====================
           */
          if (!hasChildren && item.href) {
            return (
              <li key={item.key} className="h-full list-none!">
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`relative flex h-full items-center whitespace-nowrap px-3 text-[15px] font-semibold no-underline! transition-colors duration-200 2xl:px-4 2xl:text-base ${
                    active
                      ? "text-[#0077B6]!"
                      : "text-[#123B56]! hover:text-[#00A4E4]!"
                  }`}
                >
                  {navigationT(item.labelKey)}

                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute right-3 bottom-0 left-3 h-[3px] origin-center bg-[linear-gradient(90deg,#00A4E4,#0077B6)] transition-transform duration-300 2xl:right-4 2xl:left-4 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            );
          }

          /*
           * =====================
           * DROPDOWN
           * =====================
           */
          const isOpen = openMenu === item.key;

          return (
            <li
              key={item.key}
              className="relative flex h-full list-none! items-center"
              onMouseEnter={() => setOpenMenu(item.key)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {/* BUTTON */}
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={isOpen}
                onClick={() => toggleMenu(item.key)}
                className={`flex h-full cursor-pointer items-center gap-1.5 whitespace-nowrap border-0! bg-transparent px-3 text-[15px] font-semibold transition-colors duration-200 2xl:px-4 2xl:text-base ${
                  active || isOpen
                    ? "text-[#0077B6]!"
                    : "text-[#123B56]! hover:text-[#00A4E4]!"
                }`}
              >
                {navigationT(item.labelKey)}

                <HeaderIcon
                  name="chevronDown"
                  className={`size-4 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ACTIVE LINE */}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute right-3 bottom-0 left-3 h-[3px] origin-center bg-[linear-gradient(90deg,#00A4E4,#0077B6)] transition-transform duration-300 2xl:right-4 2xl:left-4 ${
                  active || isOpen ? "scale-x-100" : "scale-x-0"
                }`}
              />

              {/* DROPDOWN */}
              <div
                className={`absolute top-full left-1/2 z-50 w-[290px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                  isOpen
                    ? "visible translate-y-0 opacity-100"
                    : "pointer-events-none invisible translate-y-3 opacity-0"
                }`}
              >
                <div className="border border-[#D8EAF2] bg-white p-2 shadow-[0_24px_60px_rgba(18,59,86,0.16)]">
                  {item.children?.map((child) => {
                    const childActive = isPathActive(pathname, child.href);

                    return (
                      <Link
                        key={child.key}
                        href={child.href}
                        onClick={closeMenu}
                        className={`group/link flex min-h-13 items-center justify-between gap-5 px-4 text-[15px] no-underline! transition-colors duration-200 ${
                          childActive
                            ? "bg-[#DDF5FF] font-semibold text-[#0077B6]!"
                            : "text-[#57778C]! hover:bg-[#F3FBFF] hover:text-[#0077B6]!"
                        }`}
                      >
                        <span>{navigationT(child.labelKey)}</span>

                        <HeaderIcon
                          name="arrow"
                          className="size-4 shrink-0 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
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
