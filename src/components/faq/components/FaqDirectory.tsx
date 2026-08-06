"use client";

import { useMemo, useState } from "react";

import type { FaqCategoryKey, FaqDirectoryProps } from "../types/faq.types";

import FaqIcon from "./FaqIcon";

type SelectedCategory = "all" | FaqCategoryKey;

export default function FaqDirectory({
  eyebrow,
  title,
  description,
  searchPlaceholder,
  allLabel,
  emptyTitle,
  emptyDescription,
  categories,
  items,
}: FaqDirectoryProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategory>("all");

  const [search, setSearch] = useState("");

  const [openItem, setOpenItem] = useState<string | null>(items[0]?.id ?? null);

  const filteredItems = useMemo(() => {
    const keyword = search.trim().toLocaleLowerCase("id-ID");

    return items.filter((item) => {
      const categoryMatch =
        selectedCategory === "all" || item.category === selectedCategory;

      if (!categoryMatch) {
        return false;
      }

      if (!keyword) {
        return true;
      }

      const searchableText =
        `${item.question} ${item.answer}`.toLocaleLowerCase("id-ID");

      return searchableText.includes(keyword);
    });
  }, [items, search, selectedCategory]);

  function handleCategoryChange(category: SelectedCategory) {
    setSelectedCategory(category);

    setOpenItem(null);
  }

  return (
    <section
      id="faq-list"
      className="scroll-mt-[calc(var(--site-header-height)+32px)] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* =====================
            HEADER
        ====================== */}
        <header className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(380px,0.55fr)] lg:items-end lg:gap-20">
          <div className="max-w-[850px]">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-[#00A4E4]" />

              <p className="m-0! text-xs font-bold uppercase tracking-[0.2em] text-[#0077B6]">
                {eyebrow}
              </p>
            </div>

            <h2 className="mt-5 mb-0! text-[38px] leading-[1.08] font-bold tracking-[-0.045em] text-[#123B56] sm:text-[48px] lg:text-[56px]">
              {title}
            </h2>
          </div>

          <p className="m-0! border-l border-[#D7E7EE] pl-7 text-[15px] leading-8 text-[#688497]">
            {description}
          </p>
        </header>

        {/* =====================
            SEARCH
        ====================== */}
        <div className="relative mt-10 max-w-[820px] sm:mt-12">
          <span className="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 text-[#7895A7]">
            <FaqIcon name="search" className="size-5" />
          </span>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={searchPlaceholder}
            className="h-15 w-full border border-[#D7E7EE] bg-[#F8FBFD] pr-5 pl-14 text-[15px] text-[#123B56] outline-none transition-colors placeholder:text-[#94AAB7] focus:border-[#00A4E4] focus:bg-white"
          />
        </div>

        {/* =====================
            CONTENT
        ====================== */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[330px_minmax(0,1fr)] xl:gap-20">
          {/* CATEGORIES */}
          <aside>
            <div className="border-t border-[#D7E7EE]">
              <button
                type="button"
                onClick={() => handleCategoryChange("all")}
                className={`flex min-h-15 w-full cursor-pointer items-center justify-between gap-4 border-0 border-b border-[#D7E7EE] px-0 text-left transition-colors ${
                  selectedCategory === "all"
                    ? "text-[#0077B6]"
                    : "text-[#57778C] hover:text-[#0077B6]"
                }`}
              >
                <span className="flex items-center gap-4">
                  <span
                    className={`flex size-10 items-center justify-center ${
                      selectedCategory === "all"
                        ? "bg-[#0077B6] text-white"
                        : "bg-[#F1F8FB] text-[#0077B6]"
                    }`}
                  >
                    <FaqIcon name="question" className="size-[18px]" />
                  </span>

                  <span className="text-sm font-semibold">{allLabel}</span>
                </span>

                <span className="text-xs font-semibold text-[#9DB1BC]">
                  {String(items.length).padStart(2, "0")}
                </span>
              </button>

              {categories.map((category) => {
                const count = items.filter(
                  (item) => item.category === category.key,
                ).length;

                const active = selectedCategory === category.key;

                return (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => handleCategoryChange(category.key)}
                    className={`flex min-h-15 w-full cursor-pointer items-center justify-between gap-4 border-0 border-b border-[#D7E7EE] px-0 text-left transition-colors ${
                      active
                        ? "text-[#0077B6]"
                        : "text-[#57778C] hover:text-[#0077B6]"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`flex size-10 items-center justify-center transition-colors ${
                          active
                            ? "bg-[#0077B6] text-white"
                            : "bg-[#F1F8FB] text-[#0077B6]"
                        }`}
                      >
                        <FaqIcon name={category.icon} className="size-[18px]" />
                      </span>

                      <span className="text-sm font-semibold">
                        {category.label}
                      </span>
                    </span>

                    <span className="text-xs font-semibold text-[#9DB1BC]">
                      {String(count).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* FAQ */}
          <div>
            {filteredItems.length > 0 ? (
              <div className="border-t border-[#D7E7EE]">
                {filteredItems.map((item, index) => {
                  const isOpen = openItem === item.id;

                  return (
                    <article
                      key={item.id}
                      className="border-b border-[#D7E7EE]"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenItem(isOpen ? null : item.id)}
                        className="group grid w-full cursor-pointer grid-cols-[42px_minmax(0,1fr)_42px] items-start gap-4 border-0 bg-transparent py-6 text-left sm:grid-cols-[52px_minmax(0,1fr)_48px] sm:gap-5 sm:py-7"
                      >
                        <span className="pt-1 text-[11px] font-bold tracking-[0.12em] text-[#00A4E4]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3
                          className={`m-0! text-[17px] leading-7 font-bold transition-colors sm:text-[19px] ${
                            isOpen
                              ? "text-[#0077B6]"
                              : "text-[#123B56] group-hover:text-[#0077B6]"
                          }`}
                        >
                          {item.question}
                        </h3>

                        <span
                          className={`flex size-10 items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-[#0077B6] text-white"
                              : "bg-[#F1F8FB] text-[#0077B6]"
                          }`}
                        >
                          <FaqIcon
                            name="chevron"
                            className={`size-[18px] transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="grid grid-cols-[42px_minmax(0,1fr)_42px] gap-4 pb-7 sm:grid-cols-[52px_minmax(0,1fr)_48px] sm:gap-5 sm:pb-8">
                            <div />

                            <p className="m-0! max-w-[900px] text-[15px] leading-8 text-[#668297]">
                              {item.answer}
                            </p>

                            <div />
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="border-y border-[#D7E7EE] py-14">
                <span className="flex size-12 items-center justify-center bg-[#F1F8FB] text-[#0077B6]">
                  <FaqIcon name="search" className="size-5" />
                </span>

                <h3 className="mt-6 mb-0! text-[24px] font-bold text-[#123B56]">
                  {emptyTitle}
                </h3>

                <p className="mt-3 mb-0! max-w-[520px] text-sm leading-7 text-[#688497]">
                  {emptyDescription}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
