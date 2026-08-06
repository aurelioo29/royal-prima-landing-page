import Image from "next/image";

import type {
  SurgeryGalleryProps,
  SurgeryResolvedGalleryItem,
} from "../types/surgery.types";

export default function SurgeryGallery({
  eyebrow,
  title,
  description,
  items,
}: SurgeryGalleryProps) {
  return (
    <section className="border-y border-[#DCEAF1] bg-[#F7FBFD] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <header className="max-w-[820px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-9 bg-[#00A4E4]" />

            <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
              {eyebrow}
            </p>
          </div>

          <h2 className="mt-5 mb-0! max-w-[780px] text-[38px] leading-[1.08] font-bold tracking-[-0.045em] text-[#123B56] sm:text-[48px] lg:text-[56px]">
            {title}
          </h2>

          <p className="mt-5 mb-0! max-w-[700px] text-[15px] leading-8 text-[#57778C]">
            {description}
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((item) => (
            <GalleryImage key={item.key} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryImage({ item }: { item: SurgeryResolvedGalleryItem }) {
  return (
    <figure className="group relative m-0! aspect-[16/10] overflow-hidden bg-[#E6EDF1]">
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        loading="lazy"
        sizes="
          (max-width: 767px) calc(100vw - 40px),
          50vw
        "
        style={{
          objectPosition: item.imagePosition ?? "center center",
        }}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[#126CA5]/0 transition-colors duration-500 group-hover:bg-[#126CA5]/35" />

      <div className="pointer-events-none absolute right-0 bottom-0 left-0 translate-y-4 bg-[linear-gradient(180deg,transparent,rgba(8,43,65,0.94))] px-6 pt-20 pb-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="m-0! text-[11px] font-bold uppercase tracking-[0.16em] text-[#69DBFF]">
          Bedah Sentral
        </p>

        <h3 className="mt-1.5 mb-0! text-[21px] font-bold text-white">
          {item.title}
        </h3>
      </div>

      <span className="pointer-events-none absolute inset-0 border border-black/5" />
    </figure>
  );
}
