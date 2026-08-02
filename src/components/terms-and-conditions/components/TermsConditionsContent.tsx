import type { TermsConditionsContentProps } from "../types/terms-conditions.types";

import TermsConditionsIcon from "./TermsConditionsIcon";

export default function TermsConditionsContent({
  sections,
  introduction,
  lastUpdatedLabel,
  lastUpdatedValue,
  contactLabel,
  contactEmail,
  contactHref,
}: TermsConditionsContentProps) {
  return (
    <main className="bg-white">
      {/* INTRO */}
      <section className="border-b border-[#DCEAF1]">
        <div className="mx-auto w-full max-w-[1500px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
            <div className="max-w-[900px]">
              <p className="m-0! text-[16px] leading-8 text-[#57778C] sm:text-[17px]">
                {introduction}
              </p>
            </div>

            <aside className="border-l-[3px] border-[#00A4E4] bg-[#F7FBFD] px-5 py-4">
              <p className="m-0! text-[11px] font-bold uppercase tracking-[0.16em] text-[#7A95A6]">
                {lastUpdatedLabel}
              </p>

              <p className="mt-2 mb-0! text-[15px] font-semibold text-[#123B56]">
                {lastUpdatedValue}
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
            {/* SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-[calc(var(--site-header-height)+32px)]">
                <span className="flex size-12 items-center justify-center bg-[#EAF7FC] text-[#0077B6]">
                  <TermsConditionsIcon name="document" className="size-5" />
                </span>

                <p className="mt-5 mb-0! text-xs font-bold uppercase tracking-[0.16em] text-[#0077B6]">
                  Terms & Conditions
                </p>

                <p className="mt-3 mb-0! text-sm leading-7 text-[#7793A5]">
                  RSU Royal Prima Medan
                </p>
              </div>
            </aside>

            {/* DOCUMENT */}
            <div className="min-w-0">
              {sections.map((section, index) => (
                <article
                  key={section.key}
                  id={section.key}
                  className={`
                      scroll-mt-[calc(var(--site-header-height)+32px)]
                      ${
                        index > 0
                          ? "border-t border-[#DCEAF1] pt-10 sm:pt-12"
                          : ""
                      }
                      ${index < sections.length - 1 ? "pb-10 sm:pb-12" : ""}
                    `}
                >
                  <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-6">
                    <span className="text-[13px] font-bold tracking-[0.08em] text-[#00A4E4]">
                      {section.number}
                    </span>

                    <div>
                      <h2 className="m-0! text-[25px] leading-[1.2] font-bold tracking-[-0.03em] text-[#123B56] sm:text-[30px]">
                        {section.title}
                      </h2>

                      {section.description && (
                        <p className="mt-4 mb-0! text-[15px] leading-8 text-[#57778C]">
                          {section.description}
                        </p>
                      )}

                      {section.paragraphs.length > 0 && (
                        <div className="mt-5 space-y-4">
                          {section.paragraphs.map(
                            (paragraph, paragraphIndex) => (
                              <p
                                key={`${section.key}-paragraph-${paragraphIndex}`}
                                className="m-0! text-[15px] leading-8 text-[#57778C]"
                              >
                                {paragraph}
                              </p>
                            ),
                          )}
                        </div>
                      )}

                      {section.items.length > 0 && (
                        <ul className="mt-6 mb-0! space-y-3 p-0">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={`${section.key}-item-${itemIndex}`}
                              className="list-none"
                            >
                              <div className="flex items-start gap-4">
                                <span className="mt-[4px] flex size-5 shrink-0 items-center justify-center bg-[#EAF7FC] text-[#0077B6]">
                                  <TermsConditionsIcon
                                    name="check"
                                    className="size-3"
                                  />
                                </span>

                                <span className="text-[15px] leading-7 text-[#4E6D80]">
                                  {item}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              ))}

              {/* CONTACT */}
              <div className="mt-12 border-t-[3px] border-[#00A4E4] bg-[#F5FAFC] px-6 py-7 sm:px-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="m-0! text-[11px] font-bold uppercase tracking-[0.16em] text-[#0077B6]">
                      Informasi
                    </p>

                    <p className="mt-2 mb-0! max-w-[650px] text-[15px] leading-7 text-[#57778C]">
                      {contactLabel}
                    </p>
                  </div>

                  <a
                    href={contactHref}
                    className="inline-flex h-12 shrink-0 items-center justify-center gap-3 bg-[#0077B6] px-6 text-sm font-semibold text-white! no-underline! transition-colors hover:bg-[#00669D]"
                  >
                    <TermsConditionsIcon name="mail" className="size-[17px]" />

                    {contactEmail}

                    <TermsConditionsIcon name="arrow" className="size-[16px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
