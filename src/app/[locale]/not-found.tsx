import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <section className="relative min-h-[calc(100svh-var(--site-header-height))] overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 size-[420px] translate-x-1/3 -translate-y-1/3 bg-[#DDF5FF] blur-[110px]" />

        <div className="absolute bottom-0 left-0 size-[360px] -translate-x-1/3 translate-y-1/3 bg-[#E8F4FA] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-var(--site-header-height))] w-full max-w-[1500px] items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <span
                aria-hidden="true"
                className="block bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_55%,#123B56_100%)] bg-clip-text text-[150px] leading-none font-bold tracking-[-0.09em] text-transparent sm:text-[210px] lg:text-[260px]"
              >
                404
              </span>

              <div className="absolute -top-6 -right-5 flex size-20 items-center justify-center border border-[#D5EAF3] bg-white text-[#0077B6] shadow-[0_20px_50px_rgba(18,59,86,0.1)] sm:size-24">
                <HospitalIcon />
              </div>
            </div>
          </div>

          <div className="max-w-[680px]">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[linear-gradient(90deg,#00A4E4,#0077B6)]" />

              <p className="m-0! text-xs font-bold uppercase tracking-[0.2em] text-[#0077B6] sm:text-sm">
                {t("eyebrow")}
              </p>
            </div>

            <h1 className="mt-6 mb-0! text-[38px] leading-[1.12] font-bold tracking-[-0.035em] text-[#123B56] sm:text-[48px] lg:text-[56px]">
              {t("title")}
            </h1>

            <p className="mt-6 mb-0! max-w-[620px] text-[15px] leading-8 text-[#57778C] sm:text-base">
              {t("description")}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex h-14 items-center justify-center gap-3 bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_100%)] px-7 text-sm font-semibold text-white! no-underline! shadow-[0_14px_30px_rgba(0,164,228,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(0,164,228,0.3)]"
              >
                <HomeIcon />

                {t("homeButton")}
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center gap-3 border border-[#D5EAF3] bg-white px-7 text-sm font-semibold text-[#123B56]! no-underline! transition-all duration-300 hover:border-[#00A4E4] hover:bg-[#F3FBFF] hover:text-[#0077B6]!"
              >
                {t("contactButton")}

                <ArrowUpRightIcon />
              </Link>
            </div>

            <div className="mt-10 border-l-4 border-[#00A4E4] bg-[#F3FBFF] p-5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="m-0! text-base font-bold text-[#123B56] sm:text-lg">
                    {t("helpText")}
                  </h2>

                  <p className="mt-2 mb-0! max-w-[440px] text-sm leading-6 text-[#57778C]">
                    {t("helpDescription")}
                  </p>
                </div>

                <a
                  href="tel:+626188813182"
                  className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-[#0077B6] no-underline! transition-colors hover:text-[#123B56]"
                >
                  <span className="flex size-11 items-center justify-center bg-white text-[#0077B6] shadow-[0_8px_24px_rgba(18,59,86,0.08)]">
                    <PhoneIcon />
                  </span>

                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#57778C]">
                      {t("phoneLabel")}
                    </span>

                    <span className="mt-1 block">{t("phoneNumber")}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HospitalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-10 sm:size-12"
    >
      <path
        d="M4 21V5.8C4 4.8 4.8 4 5.8 4h12.4c1 0 1.8.8 1.8 1.8V21M2 21h20M9 21v-4h6v4M9 9h6M12 6v6M7 14h2M15 14h2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-[18px]"
    >
      <path
        d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-[18px]"
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
      <path
        d="M8.7 3.4 10.4 7a1.6 1.6 0 0 1-.4 1.9L8.8 10a14.4 14.4 0 0 0 5.2 5.2l1.1-1.2a1.6 1.6 0 0 1 1.9-.4l3.6 1.7a1.6 1.6 0 0 1 .9 1.6V20a1.6 1.6 0 0 1-1.6 1.6C10.2 21.6 2.4 13.8 2.4 4.1A1.6 1.6 0 0 1 4 2.5h3.1a1.6 1.6 0 0 1 1.6.9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
