import type { AboutChartersProps } from "../types/about.types";

import AboutIcon from "./AboutIcon";

export default function AboutCharters({
  eyebrow,
  title,
  description,
  viewLabel,
  items,
}: AboutChartersProps) {
  return (
    <section className="border-y border-[#DCEAF1] bg-[#F7FBFD] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* LEFT */}
          <header className="max-w-[570px]">
            <span className="flex size-12 items-center justify-center bg-[#EAF7FC] text-[#0077B6]">
              <AboutIcon name="document" className="size-5" />
            </span>

            <div className="mt-6 flex items-center gap-4">
              <span className="h-px w-9 bg-[#00A4E4]" />

              <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                {eyebrow}
              </p>
            </div>

            <h2 className="mt-5 mb-0! text-[36px] leading-[1.1] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[44px] lg:text-[50px]">
              {title}
            </h2>

            <p className="mt-5 mb-0! text-[15px] leading-8 text-[#57778C]">
              {description}
            </p>
          </header>

          {/* DOCUMENTS */}
          <div className="border-t border-[#D2E4EC]">
            {items.map((item, index) => (
              <article
                key={item.key}
                className="group grid grid-cols-[46px_minmax(0,1fr)] gap-4 border-b border-[#D2E4EC] py-6 sm:grid-cols-[62px_minmax(0,1fr)_auto] sm:items-center sm:gap-6 lg:py-7"
              >
                <span className="text-[12px] font-bold tracking-[0.08em] text-[#00A4E4]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h3 className="m-0! text-[18px] leading-7 font-bold tracking-[-0.02em] text-[#123B56] sm:text-[20px]">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 mb-0! text-sm leading-6 text-[#7793A5]">
                    {item.description}
                  </p>
                </div>

                <div className="col-start-2 sm:col-start-auto">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-3 text-sm font-semibold text-[#0077B6]! no-underline!"
                  >
                    {viewLabel}

                    <span className="flex size-10 items-center justify-center border border-[#CFE3EC] bg-white text-[#0077B6] transition-all duration-300 group-hover/link:border-[#0077B6] group-hover/link:bg-[#0077B6] group-hover/link:text-white">
                      <AboutIcon name="external" className="size-[17px]" />
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
