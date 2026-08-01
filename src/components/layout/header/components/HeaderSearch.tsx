"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

import { useTranslations } from "next-intl";

import { useRouter } from "@/i18n/navigation";

import type { HeaderSearchProps } from "../types/header.types";

import HeaderIcon from "./HeaderIcon";

export default function HeaderSearch({ open, onClose }: HeaderSearchProps) {
  const t = useTranslations("Header.search");
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) {
      return;
    }

    const timeout = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 150);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [open]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
      inputRef.current?.focus();
      return;
    }

    router.push(`/doctors?search=${encodeURIComponent(normalizedQuery)}`);

    setQuery("");
    onClose();
  }

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[90] transition-all duration-300 ${
        open ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
    >
      <button
        type="button"
        aria-label={t("close")}
        onClick={onClose}
        className={`absolute inset-0 border-0 bg-[#123B56]/65 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="header-search-title"
        className={`relative mx-auto mt-24 w-[calc(100%-32px)] max-w-[900px] bg-white p-5 shadow-[0_32px_90px_rgba(18,59,86,0.25)] transition-all duration-300 sm:p-8 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="m-0! text-xs font-semibold uppercase tracking-[0.18em] text-[#0077B6]!">
              {t("eyebrow")}
            </p>

            <h2
              id="header-search-title"
              className="mt-2 mb-0! text-2xl font-bold text-[#123B56]! sm:text-3xl"
            >
              {t("title")}
            </h2>
          </div>

          <button
            type="button"
            aria-label={t("close")}
            onClick={onClose}
            className="flex size-11 shrink-0 cursor-pointer items-center justify-center border border-slate-200 bg-white text-[#123B56] transition-colors hover:border-[#00A4E4] hover:bg-[#F3FBFF] hover:text-[#0077B6]"
          >
            <HeaderIcon name="close" className="size-5" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <HeaderIcon
              name="search"
              className="absolute top-1/2 left-5 size-5 -translate-y-1/2 text-[#7793A5]"
            />

            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("placeholder")}
              className="h-16 w-full border border-[#D5EAF3] bg-[#F6FBFE] pr-5 pl-14 text-base text-[#123B56]! outline-none placeholder:text-[#8AA1AF]! focus:border-[#00A4E4] focus:bg-white focus:ring-4 focus:ring-[#00A4E4]/10"
            />
          </div>

          <button
            type="submit"
            className="inline-flex h-16 cursor-pointer items-center justify-center gap-3 border-0! bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_100%)] px-8 text-sm font-semibold text-white! shadow-[0_14px_30px_rgba(0,164,228,0.24)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(0,164,228,0.32)]"
          >
            {t("button")}

            <HeaderIcon name="arrow" className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
