import Image from "next/image";

import { Link } from "@/i18n/navigation";

import type { DoctorCardProps } from "../types/doctors.types";

import DoctorIcon from "./DoctorIcon";

export default function DoctorCard({
  doctor,
  view,
  profileLabel,
}: DoctorCardProps) {
  if (view === "list") {
    return <ListDoctorCard doctor={doctor} profileLabel={profileLabel} />;
  }

  return <CardDoctorCard doctor={doctor} />;
}

function CardDoctorCard({ doctor }: Pick<DoctorCardProps, "doctor">) {
  return (
    <article className="group h-full">
      <Link
        href={`/doctors/${doctor.slug}`}
        aria-label={doctor.name}
        className="block h-full no-underline!"
      >
        <div className="relative aspect-[633/735] w-full overflow-hidden bg-[#EAF7FC]">
          <Image
            src={doctor.image}
            alt={doctor.imageAlt}
            fill
            sizes="
              (max-width: 639px) calc(100vw - 40px),
              (max-width: 1023px) 50vw,
              (max-width: 1279px) 33vw,
              25vw
            "
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
          />

          <span className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(7,48,72,0.08))]" />
        </div>

        <div className="border-x border-b border-[#DCEAF1] bg-white px-5 py-5 transition-colors group-hover:border-[#A8D7E9]">
          <p className="m-0! text-[11px] font-bold uppercase tracking-[0.14em] text-[#0077B6]">
            {doctor.clinicLabel}
          </p>

          <h2 className="mt-2 mb-0! text-[20px] leading-[1.3] font-bold tracking-[-0.025em] text-[#123B56] transition-colors group-hover:text-[#0077B6]">
            {doctor.name}
          </h2>
        </div>
      </Link>
    </article>
  );
}

function ListDoctorCard({
  doctor,
  profileLabel,
}: Pick<DoctorCardProps, "doctor" | "profileLabel">) {
  return (
    <article className="group border-b border-[#DCEAF1] pb-7">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-[190px_minmax(0,1fr)] lg:grid-cols-[220px_minmax(0,1fr)]">
        <Link
          href={`/doctors/${doctor.slug}`}
          aria-label={doctor.name}
          className="block no-underline!"
        >
          <div className="relative aspect-[633/735] w-full overflow-hidden bg-[#EAF7FC]">
            <Image
              src={doctor.image}
              alt={doctor.imageAlt}
              fill
              sizes="
                (max-width: 639px) calc(100vw - 40px),
                (max-width: 1023px) 190px,
                220px
              "
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </Link>

        <div className="flex min-w-0 flex-col justify-center py-1">
          <p className="m-0! text-[11px] font-bold uppercase tracking-[0.16em] text-[#0077B6]">
            {doctor.clinicLabel}
          </p>

          <h2 className="mt-3 mb-0! text-[25px] leading-[1.2] font-bold tracking-[-0.035em] text-[#123B56] sm:text-[28px]">
            {doctor.name}
          </h2>

          <p className="mt-2 mb-0! text-[15px] font-medium text-[#57778C]">
            {doctor.specialty}
          </p>

          <p className="mt-4 mb-0! line-clamp-2 max-w-[760px] text-sm leading-7 text-[#7793A5]">
            {doctor.description}
          </p>

          <div className="mt-6">
            <Link
              href={`/doctors/${doctor.slug}`}
              className="group/profile inline-flex items-center gap-3 text-sm font-semibold text-[#0077B6]! no-underline!"
            >
              {profileLabel}

              <DoctorIcon
                name="arrow"
                className="size-4 transition-transform duration-200 group-hover/profile:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
