import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { Reveal } from "@/components/shared/motion";

import QuickInfoIcon from "./components/QuickInfoIcon";

import { HOME_QUICK_INFO } from "./data/quick-info.data";

import type { QuickInfoItem } from "./types/quick-info.types";

export default async function HomeHeroQuickInfo() {
  const t = await getTranslations("HomeHeroQuickInfo");

  return (
    <section
      aria-label={t("regionLabel")}
      className="relative z-30 -mt-6 px-4 sm:-mt-9 sm:px-8 lg:-mt-10 lg:px-10 xl:px-12 2xl:px-16"
    >
      <div className="mx-auto w-full max-w-[1760px]">
        <Reveal trigger="load" direction="up" distance={28} duration={0.75}>
          <div className="overflow-hidden rounded-[28px] border border-[#D6EAF3] bg-white/95 p-2 shadow-[0_28px_75px_rgba(0,91,143,0.16)] backdrop-blur-xl sm:rounded-[32px] sm:p-3 lg:p-4">
            <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_290px]">
              {HOME_QUICK_INFO.map((item, index) => (
                <Reveal
                  key={item.key}
                  direction="up"
                  distance={18}
                  delay={0.08 + index * 0.07}
                  duration={0.65}
                  className="h-full"
                >
                  <QuickInfoItemLink
                    item={item}
                    title={t(`items.${item.key}.title`)}
                    value={t(`items.${item.key}.value`)}
                    description={t(`items.${item.key}.description`)}
                  />
                </Reveal>
              ))}

              <Reveal
                direction="up"
                distance={18}
                delay={0.29}
                duration={0.65}
                className="h-full md:col-span-2 xl:col-span-1"
              >
                <div className="h-full">
                  <Link
                    href="/appointments"
                    className="group relative flex min-h-[154px] h-full overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_100%)] p-6 text-white! no-underline! shadow-[0_16px_35px_rgba(0,119,182,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(0,119,182,0.30)] motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
                  >
                    {/* Ornamen background */}
                    <span
                      aria-hidden="true"
                      className="absolute -top-14 -right-10 size-36 rounded-full border border-white/15 bg-white/5 transition-transform duration-500 group-hover:scale-110"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute -right-6 -bottom-16 size-32 rounded-full bg-white/10 blur-sm transition-transform duration-500 group-hover:scale-125"
                    />

                    <span className="relative z-10 flex w-full flex-col justify-between gap-7">
                      <span>
                        <span className="block text-[11px] font-bold uppercase tracking-[0.17em] text-white/70">
                          {t("appointmentEyebrow")}
                        </span>

                        <span className="mt-3 block max-w-[210px] text-[20px] leading-7 font-bold text-white">
                          {t("appointmentButton")}
                        </span>
                      </span>

                      <span className="flex items-center justify-between gap-4">
                        <span className="text-xs font-semibold text-white/72">
                          {t("appointmentDescription")}
                        </span>

                        <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-white text-[#0077B6] shadow-[0_10px_24px_rgba(0,50,80,0.18)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          <QuickInfoIcon name="arrow" className="size-[19px]" />
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type QuickInfoItemLinkProps = {
  item: QuickInfoItem;

  title: string;

  value: string;

  description: string;
};

function QuickInfoItemLink({
  item,
  title,
  value,
  description,
}: QuickInfoItemLinkProps) {
  const content = (
    <>
      {/* Arrow kecil */}
      <span className="absolute top-5 right-5 flex size-8 items-center justify-center rounded-full border border-[#D5EAF3] bg-white text-[#7793A5] transition-all duration-300 group-hover:border-[#00A4E4] group-hover:bg-[#EAF8FE] group-hover:text-[#0077B6]">
        <QuickInfoIcon
          name="arrow"
          className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </span>

      {/* Icon utama */}
      <span className="relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_100%)] text-white shadow-[0_12px_26px_rgba(0,164,228,0.22)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.04]">
        <span
          aria-hidden="true"
          className="absolute -top-4 -right-4 size-9 rounded-full bg-white/15"
        />

        <QuickInfoIcon name={item.icon} className="relative z-10 size-6" />
      </span>

      {/* Text */}
      <span className="min-w-0 pr-7">
        <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#0077B6]">
          {title}
        </span>

        <span className="mt-2 block text-[19px] leading-6 font-bold text-[#123B56] transition-colors duration-300 group-hover:text-[#0077B6]">
          {value}
        </span>

        <span className="mt-2 block max-w-[340px] text-sm leading-6 text-[#57778C]">
          {description}
        </span>
      </span>
    </>
  );

  const className =
    "group relative flex min-h-[154px] h-full items-center gap-5 overflow-hidden rounded-[22px] border border-transparent bg-[#F9FCFD] px-6 py-7 no-underline! transition-all duration-300 hover:-translate-y-1 hover:border-[#CFE7F1] hover:bg-white hover:shadow-[0_18px_42px_rgba(18,59,86,0.10)] motion-reduce:transform-none motion-reduce:transition-none sm:px-7";

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  if (item.href.startsWith("/")) {
    return (
      <Link href={item.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={item.href} className={className}>
      {content}
    </a>
  );
}
