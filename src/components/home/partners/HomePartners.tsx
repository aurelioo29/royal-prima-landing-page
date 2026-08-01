import { getTranslations } from "next-intl/server";

import { Reveal } from "@/components/shared/motion";

import PartnerMarqueeRow from "./components/PartnerMarqueeRow";

import { HOME_PARTNERS } from "./data/partners.data";

import type { HomePartnersProps } from "./types/partners.types";

export default async function HomePartners({
  data = HOME_PARTNERS,
  topRowDuration = 42,
  bottomRowDuration = 47,
}: HomePartnersProps) {
  const t = await getTranslations("HomePartners");

  if (data.length === 0) {
    return null;
  }

  const middleIndex = Math.ceil(data.length / 2);

  const topRow = data.slice(0, middleIndex);

  const remainingPartners = data.slice(middleIndex);

  const bottomRow = remainingPartners.length > 0 ? remainingPartners : topRow;

  return (
    <section
      aria-labelledby="home-partners-title"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Dekorasi kiri */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          top-1/2
          -left-36
          size-[360px]
          -translate-y-1/2
          rounded-full
          bg-[#00A4E4]/7
          blur-3xl
        "
      />

      {/* Dekorasi kanan */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          top-1/2
          -right-36
          size-[360px]
          -translate-y-1/2
          rounded-full
          bg-[#D7A448]/7
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
        <Reveal direction="up" distance={28}>
          <header className="mx-auto max-w-[820px] text-center">
            <div className="flex items-center justify-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-[#00A4E4]" />

              <p
                className="
                  m-0!
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#0077B6]
                "
              >
                {t("eyebrow")}
              </p>

              <span aria-hidden="true" className="h-px w-10 bg-[#00A4E4]" />
            </div>

            <h2
              id="home-partners-title"
              className="
                mt-5
                mb-0!
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

            <p
              className="
                mx-auto
                mt-6
                mb-0!
                max-w-[740px]
                text-[15px]
                leading-8
                text-[#57778C]
                sm:text-base
              "
            >
              {t("description")}
            </p>
          </header>
        </Reveal>

        {/* Marquee container */}
        <Reveal
          direction="up"
          distance={34}
          delay={0.1}
          amount={0.08}
          className="mt-12 sm:mt-14"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[26px]
              border
              border-[#DCEAF1]
              bg-[linear-gradient(135deg,#FAFDFF_0%,#F1FAFE_100%)]
              px-2
              py-4
              shadow-[0_24px_65px_rgba(18,59,86,0.09)]
              sm:rounded-[30px]
              sm:px-4
              sm:py-5
              lg:px-6
              lg:py-6
            "
          >
            {/* Garis aksen atas */}
            <span
              aria-hidden="true"
              className="
                absolute
                top-0
                right-10
                left-10
                h-[3px]
                rounded-full
                bg-[linear-gradient(90deg,#00A4E4_0%,#0077B6_65%,#D7A448_100%)]
                sm:right-16
                sm:left-16
              "
            />

            {/* Fade kiri */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                z-20
                w-10
                bg-[linear-gradient(90deg,#F6FCFE_0%,rgba(246,252,254,0)_100%)]
                sm:w-16
                lg:w-24
              "
            />

            {/* Fade kanan */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                z-20
                w-10
                bg-[linear-gradient(270deg,#F6FCFE_0%,rgba(246,252,254,0)_100%)]
                sm:w-16
                lg:w-24
              "
            />

            <div
              aria-label={t("ariaLabel")}
              className="
                home-partners-marquee
                space-y-4
                py-2
                sm:space-y-5
                sm:py-3
              "
            >
              {/* Baris atas bergerak ke kanan */}
              <PartnerMarqueeRow
                partners={topRow}
                direction="right"
                duration={topRowDuration}
              />

              {/* Baris bawah bergerak ke kiri */}
              <PartnerMarqueeRow
                partners={bottomRow}
                direction="left"
                duration={bottomRowDuration}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
