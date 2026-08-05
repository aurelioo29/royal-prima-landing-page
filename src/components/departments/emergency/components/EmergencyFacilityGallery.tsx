import Image from "next/image";

import type {
  EmergencyFacilityGalleryItem,
  EmergencyFacilityGalleryProps,
} from "../types/emergency.types";

export default function EmergencyFacilityGallery({
  eyebrow,
  title,
  description,
  items,
}: EmergencyFacilityGalleryProps) {
  const galleryItems = items.slice(0, 5);

  const [first, second, third, fourth, fifth] = galleryItems;

  return (
    <section className="border-y border-[#DCEAF1] bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* HEADER */}
        <header className="max-w-[820px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-9 bg-[#00A4E4]" />

            <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
              {eyebrow}
            </p>
          </div>

          <h2 className="mt-5 mb-0! max-w-[760px] text-[38px] leading-[1.08] font-bold tracking-[-0.045em] text-[#123B56] sm:text-[48px] lg:text-[56px]">
            {title}
          </h2>

          <p className="mt-5 mb-0! max-w-[680px] text-[15px] leading-8 text-[#7793A5]">
            {description}
          </p>
        </header>

        {/* =============================
            MOBILE / TABLET
        ============================== */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {galleryItems.map((item, index) => (
            <FacilityImage
              key={item.id}
              item={item}
              className={index === 0 ? "sm:col-span-2" : ""}
              imageClassName={index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}
            />
          ))}
        </div>

        {/* =============================
            DESKTOP
        ============================== */}
        <div className="mt-12 hidden grid-cols-12 grid-rows-2 gap-5 lg:grid lg:h-[590px] xl:h-[680px]">
          {/* FOTO BESAR */}
          {first && (
            <FacilityImage
              item={first}
              className="col-span-6 row-span-2"
              imageClassName="h-full"
              priority
            />
          )}

          {/* FOTO 02 */}
          {second && (
            <FacilityImage
              item={second}
              className="col-span-3"
              imageClassName="h-full"
            />
          )}

          {/* FOTO 03 */}
          {third && (
            <FacilityImage
              item={third}
              className="col-span-3"
              imageClassName="h-full"
            />
          )}

          {/* FOTO 04 */}
          {fourth && (
            <FacilityImage
              item={fourth}
              className="col-span-3"
              imageClassName="h-full"
            />
          )}

          {/* FOTO 05 */}
          {fifth && (
            <FacilityImage
              item={fifth}
              className="col-span-3"
              imageClassName="h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}

type FacilityImageProps = {
  item: EmergencyFacilityGalleryItem;

  className?: string;

  imageClassName?: string;

  priority?: boolean;
};

function FacilityImage({
  item,
  className = "",
  imageClassName = "",
  priority = false,
}: FacilityImageProps) {
  return (
    <figure
      className={`group relative m-0! overflow-hidden bg-[#E6EDF1] ${className}`}
    >
      <div className={`relative w-full overflow-hidden ${imageClassName}`}>
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          priority={priority}
          sizes="
            (max-width: 639px) calc(100vw - 40px),
            (max-width: 1023px) 50vw,
            50vw
          "
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* BLUE OVERLAY */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#1978B9]/0 transition-colors duration-500 group-hover:bg-[#1978B9]/38"
        />

        {/* RIGHT STRIP */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-full w-[68px] translate-x-full bg-[#1676C4]/92 transition-transform duration-500 ease-out group-hover:translate-x-0 sm:w-[76px]"
        />

        {/* TITLE */}
        {item.title && (
          <div className="pointer-events-none absolute right-[90px] bottom-6 left-6 z-10 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="m-0! text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
              Fasilitas IGD
            </p>

            <h3 className="mt-1.5 mb-0! text-[18px] leading-6 font-bold text-white sm:text-[20px]">
              {item.title}
            </h3>
          </div>
        )}

        {/* EXPAND BUTTON */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-[34px] z-20 flex size-12 translate-x-[160%] -translate-y-1/2 scale-90 items-center justify-center rounded-full bg-white text-[#1676C4] opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 sm:right-[38px] sm:size-14"
        >
          <ExpandIcon className="size-5" />
        </div>

        {/* BORDER */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 border border-black/5 transition-colors duration-300 group-hover:border-[#1676C4]/30"
        />
      </div>
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
