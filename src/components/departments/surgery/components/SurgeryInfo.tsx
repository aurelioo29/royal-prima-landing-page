import type { SurgeryIconName, SurgeryInfoProps } from "../types/surgery.types";

import SurgeryIcon from "./SurgeryIcon";

export default function SurgeryInfo({
  eyebrow,
  title,
  description,
  servicesLabel,
  servicesValue,
  emergencyLabel,
  emergencyValue,
  teamLabel,
  teamValue,
  phoneLabel,
  phoneValue,
  phoneHref,
  actionLabel,
}: SurgeryInfoProps) {
  return (
    <section
      id="surgery-info"
      className="scroll-mt-[calc(var(--site-header-height)+32px)] bg-[#F7FBFD] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-10 xl:px-12 2xl:px-16">
        <header>
          <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
            {eyebrow}
          </p>

          <h2 className="mt-4 mb-0! text-[36px] leading-[1.08] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[46px]">
            {title}
          </h2>

          <p className="mt-5 mb-0! text-[15px] leading-8 text-[#57778C]">
            {description}
          </p>
        </header>

        <div className="border-t border-[#D7E7EE]">
          <InfoRow icon="surgery" label={servicesLabel} value={servicesValue} />

          <InfoRow icon="clock" label={emergencyLabel} value={emergencyValue} />

          <InfoRow icon="doctor" label={teamLabel} value={teamValue} />

          <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-5 border-b border-[#D7E7EE] py-6 sm:grid-cols-[54px_180px_minmax(0,1fr)_auto] sm:items-center">
            <span className="flex size-11 items-center justify-center bg-white text-[#0077B6]">
              <SurgeryIcon name="phone" className="size-5" />
            </span>

            <span className="text-sm font-semibold text-[#7892A3]">
              {phoneLabel}
            </span>

            <strong className="text-[19px] font-bold text-[#123B56]">
              {phoneValue}
            </strong>

            <a
              href={phoneHref}
              className="col-start-2 inline-flex w-fit items-center gap-3 bg-[#0077B6] px-5 py-3 text-sm font-semibold text-white! no-underline! transition-colors hover:bg-[#00669D] sm:col-start-auto"
            >
              {actionLabel}

              <SurgeryIcon name="arrow" className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: SurgeryIconName;
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-5 border-b border-[#D7E7EE] py-6 sm:grid-cols-[54px_180px_minmax(0,1fr)] sm:items-center">
      <span className="flex size-11 items-center justify-center bg-white text-[#0077B6]">
        <SurgeryIcon name={icon} className="size-5" />
      </span>

      <span className="text-sm font-semibold text-[#7892A3]">{label}</span>

      <strong className="text-[17px] leading-7 font-bold text-[#123B56]">
        {value}
      </strong>
    </div>
  );
}
