import Image from "next/image";

import { Link } from "@/i18n/navigation";

import type { PageHeroAction, PageHeroProps } from "./page-hero.types";

export default function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "center",
  primaryAction,
  secondaryAction,
  badge,
  priority = true,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(120deg,#F7FCFE_0%,#EDF8FC_58%,#DDF3FC_100%)]">
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-280px] right-[-180px] size-[700px] rounded-full bg-[#BDEBFA]/60 blur-[110px]" />

        <div className="absolute bottom-[-240px] left-[-160px] size-[520px] rounded-full bg-white/90 blur-[100px]" />

        <div className="absolute top-[18%] left-[49%] hidden h-[320px] w-px bg-[linear-gradient(180deg,transparent,#8DCEE8,transparent)] opacity-40 xl:block" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[680px] w-full max-w-[1760px] grid-cols-1 items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-10 lg:py-24 xl:px-12 2xl:px-16">
        {/* Content */}
        <div className="max-w-[760px] lg:py-12">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 shrink-0 bg-[#00A4E4]" />

            <p className="m-0! text-xs font-bold uppercase tracking-[0.2em] text-[#0077B6] sm:text-sm">
              {eyebrow}
            </p>
          </div>

          <h1 className="mt-7 mb-0! max-w-[780px] text-[43px] leading-[1.06] font-bold tracking-[-0.045em] text-[#123B56] sm:text-[55px] lg:text-[64px] xl:text-[70px]">
            {title}
          </h1>

          <p className="mt-7 mb-0! max-w-[650px] text-[15px] leading-8 text-[#57778C] sm:text-base lg:text-[17px]">
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primaryAction && (
                <HeroAction action={primaryAction} variant="primary" />
              )}

              {secondaryAction && (
                <HeroAction action={secondaryAction} variant="secondary" />
              )}
            </div>
          )}
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-[720px] lg:mr-0">
          <div
            aria-hidden="true"
            className="absolute top-12 -right-8 h-[82%] w-[88%] rounded-[52px_52px_140px_52px] bg-[#8DD7EF]/35"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-5 left-[-24px] size-36 rounded-full border-[24px] border-white/55"
          />

          <div className="relative aspect-[6/7] overflow-hidden rounded-[46px_46px_140px_46px] bg-[#DCEFF7] shadow-[0_35px_90px_rgba(18,59,86,0.16)]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={priority}
              sizes="
                (max-width: 1024px) 100vw,
                (max-width: 1536px) 48vw,
                720px
              "
              style={{
                objectPosition: imagePosition,
              }}
              className="object-cover"
            />

            {badge && (
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(18,59,86,0.82))] px-6 pt-28 pb-7 sm:px-8">
                <div className="flex items-center gap-4 text-white">
                  {badge.icon && (
                    <span className="flex size-11 shrink-0 items-center justify-center bg-white/15 backdrop-blur-sm">
                      {badge.icon}
                    </span>
                  )}

                  <div>
                    <p className="m-0! text-xs font-semibold uppercase tracking-[0.13em] text-white/70">
                      {badge.eyebrow}
                    </p>

                    <p className="mt-1 mb-0! text-base leading-6 font-semibold text-white">
                      {badge.value}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="relative -mb-px block h-[60px] w-full text-white sm:h-[90px]"
      >
        <path
          d="M0 68C270 115 420 20 720 48c300 28 475 92 720 28v24H0Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}

type HeroActionProps = {
  action: PageHeroAction;
  variant: "primary" | "secondary";
};

function HeroAction({ action, variant }: HeroActionProps) {
  const className =
    variant === "primary"
      ? "inline-flex h-14 items-center justify-center gap-3 bg-[#0077B6] px-7 text-sm font-semibold text-white! no-underline! shadow-[0_14px_30px_rgba(0,119,182,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#005F92] hover:shadow-[0_18px_36px_rgba(0,119,182,0.25)]"
      : "inline-flex h-14 items-center justify-center gap-3 border border-[#B8D8E5] bg-white/70 px-7 text-sm font-semibold text-[#123B56]! no-underline! backdrop-blur-md transition-all duration-300 hover:border-[#0077B6] hover:bg-white hover:text-[#0077B6]!";

  const nativeLink =
    action.external ||
    action.href.startsWith("#") ||
    action.href.startsWith("tel:") ||
    action.href.startsWith("mailto:");

  const content = (
    <>
      {action.icon}

      <span>{action.label}</span>
    </>
  );

  if (nativeLink) {
    return (
      <a
        href={action.href}
        aria-label={action.ariaLabel ?? action.label}
        target={action.external ? "_blank" : undefined}
        rel={action.external ? "noopener noreferrer" : undefined}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={action.href}
      aria-label={action.ariaLabel ?? action.label}
      className={className}
    >
      {content}
    </Link>
  );
}
