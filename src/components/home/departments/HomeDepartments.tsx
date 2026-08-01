import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { Reveal } from "@/components/shared/motion";

import DepartmentCard from "./components/DepartmentCard";
import DepartmentIcon from "./components/DepartmentIcon";

import { HOME_DEPARTMENTS } from "./data/departments.data";

import type { ResolvedDepartmentItem } from "./types/departments.types";

export default async function HomeDepartments() {
  const t = await getTranslations("HomeDepartments");

  const departments: ResolvedDepartmentItem[] = HOME_DEPARTMENTS.map(
    (department) => ({
      ...department,

      title: t(`items.${department.translationKey}.title`),

      description: t(`items.${department.translationKey}.description`),

      schedule: department.featured
        ? t(`items.${department.translationKey}.schedule`)
        : undefined,

      actionLabel: t("departmentAction"),
    }),
  );

  return (
    <section
      aria-labelledby="home-departments-title"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Dekorasi */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-40
          -right-36
          size-[450px]
          rounded-full
          bg-[#00A4E4]/7
          blur-3xl
        "
      />

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-36
          -left-36
          size-[400px]
          rounded-full
          bg-[#D7A448]/6
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1760px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
          2xl:px-16
        "
      >
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal direction="right" distance={30} className="max-w-[820px]">
            <header>
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-10 bg-[#00A4E4]" />

                <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                  {t("eyebrow")}
                </p>
              </div>

              <h2
                id="home-departments-title"
                className="
                  mt-5
                  mb-0!
                  max-w-[780px]
                  text-[36px]
                  leading-[1.12]
                  font-bold
                  tracking-[-0.04em]
                  text-[#123B56]
                  sm:text-[46px]
                  lg:text-[52px]
                "
              >
                {t("title")}
              </h2>

              <p className="mt-6 mb-0! max-w-[740px] text-[15px] leading-8 text-[#57778C] sm:text-base">
                {t("description")}
              </p>
            </header>
          </Reveal>

          <Reveal direction="left" distance={24}>
            <Link
              href="/departments"
              className="
                group
                inline-flex
                h-14
                items-center
                justify-center
                gap-4
                rounded-[16px]
                border
                border-[#CFE4ED]
                bg-white
                px-6
                text-sm
                font-semibold
                text-[#123B56]!
                no-underline!
                shadow-[0_10px_28px_rgba(18,59,86,0.06)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#0077B6]
                hover:text-[#0077B6]!
              "
            >
              {t("viewAll")}

              <span className="flex size-9 items-center justify-center rounded-[12px] bg-[#EAF7FC] text-[#0077B6] transition-all duration-300 group-hover:bg-[#0077B6] group-hover:text-white">
                <DepartmentIcon name="arrow" className="size-[18px]" />
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Department grid */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            xl:grid-cols-3
            xl:gap-6
          "
        >
          {departments.map((department, index) => (
            <Reveal
              key={department.id}
              direction="up"
              distance={28}
              delay={index * 0.07}
              duration={0.65}
              className={`
                  h-full
                  ${
                    department.featured
                      ? "md:col-span-2 xl:col-span-1 xl:row-span-2"
                      : ""
                  }
                `}
            >
              <DepartmentCard department={department} />
            </Reveal>
          ))}
        </div>

        {/* Catatan */}
        <Reveal direction="up" distance={20} delay={0.1} className="mt-8">
          <div
            className="
              flex
              flex-col
              gap-4
              rounded-[20px]
              border
              border-[#D9EAF1]
              bg-[#F4FAFC]
              px-5
              py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-7
            "
          >
            <p className="m-0! text-sm leading-7 text-[#57778C]">
              {t("notice")}
            </p>

            <Link
              href="/contact"
              className="shrink-0 text-sm font-semibold text-[#0077B6]! no-underline! hover:underline!"
            >
              {t("contactAction")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
