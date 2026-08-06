import Image from "next/image";

import type {
  InpatientResolvedRoomItem,
  InpatientRoomsProps,
} from "../types/inpatient.types";

import InpatientIcon from "./InpatientIcon";

export default function InpatientRooms({
  eyebrow,
  title,
  description,
  facilityLabel,
  disclaimer,
  items,
}: InpatientRoomsProps) {
  return (
    <section
      id="room-options"
      className="scroll-mt-[calc(var(--site-header-height)+32px)] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <header className="max-w-[850px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-9 bg-[#00A4E4]" />

            <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
              {eyebrow}
            </p>
          </div>

          <h2 className="mt-5 mb-0! text-[38px] leading-[1.08] font-bold tracking-[-0.045em] text-[#123B56] sm:text-[48px] lg:text-[56px]">
            {title}
          </h2>

          <p className="mt-5 mb-0! max-w-[720px] text-[15px] leading-8 text-[#57778C]">
            {description}
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <RoomItem
              key={item.key}
              item={item}
              facilityLabel={facilityLabel}
              index={index}
            />
          ))}
        </div>

        <p className="mt-10 mb-0! border-l-[3px] border-[#D7A448] pl-4 text-sm leading-7 text-[#718A9A]">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}

function RoomItem({
  item,
  facilityLabel,
  index,
}: {
  item: InpatientResolvedRoomItem;
  facilityLabel: string;
  index: number;
}) {
  return (
    <article className="group border-b border-[#D7E7EE] pb-8">
      <figure className="relative m-0! aspect-[4/3] overflow-hidden bg-[#E8EFF3]">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          loading="lazy"
          sizes="
            (max-width: 767px) calc(100vw - 40px),
            (max-width: 1279px) calc(50vw - 48px),
            33vw
          "
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          style={{
            objectPosition: item.imagePosition ?? "center center",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#0D5E91]/0 transition-colors duration-500 group-hover:bg-[#0D5E91]/25"
        />

        <span className="absolute top-0 left-0 z-10 bg-[#0077B6] px-4 py-3 text-[11px] font-bold tracking-[0.14em] text-white">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 border border-black/5"
        />
      </figure>

      <div className="pt-6">
        <h3 className="m-0! text-[25px] font-bold tracking-[-0.03em] text-[#123B56]">
          {item.title}
        </h3>

        <p className="mt-3 mb-0! text-sm leading-7 text-[#688497]">
          {item.description}
        </p>

        <p className="mt-6 mb-0! text-[11px] font-bold uppercase tracking-[0.16em] text-[#0077B6]">
          {facilityLabel}
        </p>

        <div className="mt-4 border-t border-[#DCEAF1]">
          {item.facilities.map((facility) => (
            <div
              key={`${item.key}-${facility}`}
              className="grid grid-cols-[24px_minmax(0,1fr)] gap-3 border-b border-[#E3EDF2] py-3"
            >
              <span className="mt-0.5 flex size-5 items-center justify-center text-[#00A4E4]">
                <InpatientIcon name="check" className="size-4" />
              </span>

              <p className="m-0! text-sm leading-6 text-[#57778C]">
                {facility}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
