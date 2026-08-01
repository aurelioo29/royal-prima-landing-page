import { Fragment } from "react";

import type { BlogArticleBodyProps } from "../types/blog-detail.types";

export default function BlogArticleBody({
  detail,
  labels,
}: BlogArticleBodyProps) {
  return (
    <div className="min-w-0">
      <p className="m-0! text-[19px] leading-9 font-medium text-[#315A70]">
        {detail.lead}
      </p>

      {/* Poin penting */}
      <section className="mt-10 border-l-4 border-[#00A4E4] bg-[#F1FAFD] px-6 py-7 sm:px-8">
        <h2 className="m-0! text-xl font-bold text-[#123B56]">
          {labels.keyPoints}
        </h2>

        <ul className="mt-6! mb-0! flex list-none! flex-col gap-4 p-0!">
          {detail.keyPoints.map((point) => (
            <li key={point} className="flex list-none! items-start gap-4">
              <span className="mt-1 flex size-6 shrink-0 items-center justify-center bg-[#0077B6] text-white">
                <CheckIcon />
              </span>

              <span className="text-[15px] leading-8 text-[#57778C]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Content sections */}
      <div className="mt-12 space-y-12">
        {detail.sections.map((section, index) => (
          <Fragment key={section.id}>
            <section
              id={section.id}
              className="scroll-mt-[calc(var(--site-header-height)+30px)]"
            >
              <h2 className="m-0! text-[29px] leading-[1.25] font-bold tracking-[-0.025em] text-[#123B56] sm:text-[34px]">
                {section.title}
              </h2>

              <div className="mt-6 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="m-0! text-[16px] leading-8 text-[#395F73]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.items && section.items.length > 0 && (
                <ol className="mt-7! mb-0! flex flex-col gap-4 pl-6!">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={item}
                      className="pl-2 text-[15px] leading-8 text-[#395F73]"
                    >
                      <strong className="font-semibold text-[#123B56]">
                        {String(itemIndex + 1).padStart(2, "0")}.
                      </strong>{" "}
                      {item}
                    </li>
                  ))}
                </ol>
              )}
            </section>

            {index === 0 && detail.quote && (
              <blockquote className="relative m-0! overflow-hidden bg-[linear-gradient(135deg,#0077B6_0%,#18597A_100%)] px-7 py-9 text-white sm:px-10 sm:py-11">
                <span
                  aria-hidden="true"
                  className="absolute top-2 left-6 text-[90px] leading-none font-bold text-white/12"
                >
                  “
                </span>

                <p className="relative m-0! max-w-[760px] text-[23px] leading-[1.45] font-semibold tracking-[-0.015em] text-white sm:text-[28px]">
                  {detail.quote.text}
                </p>

                {detail.quote.source && (
                  <footer className="relative mt-6 text-sm font-semibold text-white/70">
                    — {detail.quote.source}
                  </footer>
                )}
              </blockquote>
            )}
          </Fragment>
        ))}
      </div>

      {/* Author */}
      <section className="mt-14 border-y border-[#D8E8EF] py-9">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="flex size-16 shrink-0 items-center justify-center bg-[#EAF7FC] text-xl font-bold text-[#0077B6]">
            {detail.author.initials}
          </div>

          <div>
            <p className="m-0! text-xs font-bold uppercase tracking-[0.15em] text-[#7793A5]">
              {labels.author}
            </p>

            <h2 className="mt-2 mb-0! text-xl font-bold text-[#123B56]">
              {detail.author.name}
            </h2>

            <p className="mt-1 mb-0! text-sm font-semibold text-[#0077B6]">
              {detail.author.role}
            </p>

            <p className="mt-4 mb-0! max-w-[760px] text-sm leading-7 text-[#57778C]">
              {detail.author.biography}
            </p>
          </div>
        </div>
      </section>

      {/* Medical notice */}
      <div className="mt-8 border border-[#D9E9F0] px-5 py-5">
        <p className="m-0! text-xs leading-6 text-[#708998]">
          {labels.medicalNotice}
        </p>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-3.5"
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
