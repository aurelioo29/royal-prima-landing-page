import { Link } from "@/i18n/navigation";

import type { OutpatientClinicsProps } from "../types/outpatient.types";

import OutpatientIcon from "./OutpatientIcon";

export default function OutpatientClinics({
  eyebrow,
  title,
  description,
  note,
  items,
}: OutpatientClinicsProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <header className="max-w-[820px]">
          <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
            {eyebrow}
          </p>

          <h2 className="mt-4 mb-0! text-[36px] leading-[1.08] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[46px] lg:text-[52px]">
            {title}
          </h2>

          <p className="mt-5 mb-0! max-w-[700px] text-[15px] leading-8 text-[#57778C]">
            {description}
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 border-t border-l border-[#D7E7EE] sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.key}
              className="group min-h-[220px] border-r border-b border-[#D7E7EE] p-7 transition-colors duration-300 hover:bg-[#F7FBFD] lg:p-8"
            >
              <span className="flex size-11 items-center justify-center bg-[#EAF7FC] text-[#0077B6]">
                <OutpatientIcon name={item.icon} className="size-5" />
              </span>

              <h3 className="mt-7 mb-0! text-[20px] font-bold text-[#123B56]">
                {item.title}
              </h3>

              <p className="mt-3 mb-0! text-sm leading-7 text-[#688497]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-l-[3px] border-[#D7A448] pl-5 md:flex-row md:items-center">
          <p className="m-0! max-w-[900px] text-sm leading-7 text-[#718A9A]">
            {note}
          </p>

          <Link
            href="/doctors"
            className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-[#0077B6]! no-underline!"
          >
            Cari Dokter
            <OutpatientIcon name="arrow" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
