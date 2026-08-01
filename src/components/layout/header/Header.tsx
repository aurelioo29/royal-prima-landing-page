"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";

import HeaderIcon from "./components/HeaderIcon";
import HeaderSearch from "./components/HeaderSearch";
import HeaderDesktopNav from "./components/navbar/HeaderDesktopNav";
import HeaderDrawer from "./components/navbar/HeaderDrawer";

import type { HeaderProps } from "./types/header.types";

export default function Header({ logoSrc, variant = "" }: HeaderProps) {
  const t = useTranslations("Header");
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const overlayOpen = drawerOpen || searchOpen;

    document.body.style.overflow = overlayOpen ? "hidden" : "";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setDrawerOpen(false);
      setSearchOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [drawerOpen, searchOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] border-b transition-all duration-300 ${variant} ${
          scrolled
            ? "border-[#D8EAF2] bg-white/95 shadow-[0_12px_35px_rgba(18,59,86,0.08)] backdrop-blur-xl"
            : "border-transparent bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[var(--site-header-height)] w-full max-w-[1760px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10 xl:gap-8 xl:px-12 2xl:px-16">
          <Link
            href="/"
            aria-label="RSU Royal Prima Medan"
            className="inline-flex shrink-0 no-underline!"
          >
            <Image
              src={logoSrc}
              alt="RSU Royal Prima Medan"
              width={300}
              height={78}
              loading="eager"
              fetchPriority="high"
              className="h-auto w-[210px] object-contain sm:w-[235px]"
            />
          </Link>

          <HeaderDesktopNav pathname={pathname} />

          <div className="flex shrink-0 items-center gap-2 xl:gap-3">
            <Link
              href="/appointments"
              className="hidden h-12 items-center justify-center whitespace-nowrap bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_100%)] px-5 text-sm font-semibold text-white! no-underline! shadow-[0_10px_24px_rgba(0,164,228,0.20)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,164,228,0.28)] 2xl:inline-flex"
            >
              {t("appointmentButton")}
            </Link>

            <button
              type="button"
              aria-label={t("openSearch")}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen(true)}
              className="flex size-12 cursor-pointer items-center justify-center border border-transparent bg-transparent text-[#123B56] transition-colors hover:border-[#D5EAF3] hover:bg-[#DDF5FF] hover:text-[#0077B6]"
            >
              <HeaderIcon name="search" className="size-[23px]" />
            </button>

            <button
              type="button"
              aria-label={t("openMenu")}
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
              className="flex size-12 cursor-pointer items-center justify-center border border-[#D5EAF3] bg-white text-[#123B56] transition-colors hover:border-[#00A4E4] hover:bg-[#DDF5FF] hover:text-[#0077B6]"
            >
              <HeaderIcon name="menu" className="size-[25px]" />
            </button>
          </div>
        </div>

        <div
          className={`absolute bottom-0 left-0 h-[2px] bg-[linear-gradient(90deg,#00A4E4,#0077B6)] transition-all duration-300 ${
            scrolled ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
        />
      </header>

      <HeaderDrawer
        open={drawerOpen}
        logoSrc={logoSrc}
        onClose={() => setDrawerOpen(false)}
      />

      <HeaderSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
