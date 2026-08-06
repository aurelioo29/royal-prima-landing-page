import { Link } from "@/i18n/navigation";

import type { OutpatientRelatedDepartmentsProps } from "../types/outpatient.types";

import OutpatientIcon from "./OutpatientIcon";

export default function OutpatientRelatedDepartments({
  eyebrow,
  title,
  description,
  viewLabel,
  items,
}: OutpatientRelatedDepartmentsProps) {
  return (
    <section className="border-t border-[#DCEAF1] bg-[#F7FBFD] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <header className="max-w-[720px]">
          <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
            {eyebrow}
          </p>

          <h2 className="mt-4 mb-0! text-[36px] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[46px]">
            {title}
          </h2>

          <p className="mt-5 mb-0! text-[15px] leading-8 text-[#57778C]">
            {description}
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 border-t border-[#D7E7EE] md:grid-cols-2">
          {items.map((item, index) => (
            <Link
              key={`${item.key}-${item.href}`}
              href={item.href}
              className={[
                "group border-b border-[#D7E7EE] py-6 text-[#123B56]! no-underline!",
                index % 2 === 0 ? "md:border-r md:pr-6" : "md:pl-6",
              ].join(" ")}
            >
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h3 className="m-0! text-[20px] font-bold transition-colors group-hover:text-[#0077B6]">
                    {item.title}
                  </h3>

                  <p className="mt-2 mb-0! text-sm leading-7 text-[#7793A5]">
                    {item.description}
                  </p>
                </div>

                <span className="flex size-10 shrink-0 items-center justify-center bg-white text-[#0077B6] transition-colors group-hover:bg-[#0077B6] group-hover:text-white">
                  <OutpatientIcon name="arrow" className="size-[17px]" />
                </span>
              </div>

              <span className="mt-3 block text-xs font-semibold text-[#0077B6]">
                {viewLabel}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
