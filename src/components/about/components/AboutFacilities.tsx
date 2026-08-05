import Image from "next/image";

import type { AboutFacilitiesProps } from "../types/about.types";

export default function AboutFacilities({
  eyebrow,
  title,
  description,
  items,
}: AboutFacilitiesProps) {
  return (
    <section className="border-t border-[#DCEAF1] bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* HEADER */}
        <header className="max-w-[820px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-9 bg-[#00A4E4]" />

            <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
              {eyebrow}
            </p>
          </div>

          <h2 className="mt-5 mb-0! max-w-[760px] text-[40px] leading-[1.08] font-bold tracking-[-0.045em] text-[#123B56] sm:text-[50px] lg:text-[58px]">
            {title}
          </h2>

          <p className="mt-5 mb-0! max-w-[650px] text-[15px] leading-8 text-[#7793A5]">
            {description}
          </p>
        </header>

        {/* 2 X 2 */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {items.map((item) => (
            <FacilityGalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityGalleryItem({
  item,
}: {
  item: AboutFacilitiesProps["items"][number];
}) {
  return (
    <figure className="group relative m-0! aspect-[791/644] overflow-hidden bg-[#E6EDF1]">
      {/* IMAGE */}
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        loading="lazy"
        sizes="
          (max-width: 767px) calc(100vw - 40px),
          (max-width: 1023px) calc(50vw - 42px),
          (max-width: 1535px) calc(50vw - 60px),
          800px
        "
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* OVERLAY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#397CB9]/0 transition-colors duration-500 group-hover:bg-[#397CB9]/40"
      />

      {/* RIGHT BLUE STRIP */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-full w-[72px] translate-x-full bg-[#1676C4]/92 transition-transform duration-500 ease-out group-hover:translate-x-0 sm:w-[80px]"
      />

      {/* BUTTON */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[36px] z-10 flex size-13 translate-x-[160%] -translate-y-1/2 scale-90 items-center justify-center rounded-full bg-white text-[#1676C4] opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.14)] transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 sm:right-[40px] sm:size-14"
      >
        <ExpandIcon className="size-5" />
      </div>

      {/* BORDER */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 border border-black/5 transition-colors duration-300 group-hover:border-[#1676C4]/30"
      />
    </figure>
  );
}

function ExpandIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 3v18M3 12h18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="m9 6 3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
