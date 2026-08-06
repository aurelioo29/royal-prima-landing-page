import Image from "next/image";

import type {
  SupportingGalleryProps,
  SupportingResolvedGalleryItem,
} from "../types/supporting.types";

export default function SupportingGallery({
  eyebrow,
  title,
  description,
  items,
}: SupportingGalleryProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
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

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <FacilityImage key={item.key} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityImage({ item }: { item: SupportingResolvedGalleryItem }) {
  return (
    <article className="group">
      <figure className="relative m-0! aspect-[4/3] overflow-hidden bg-[#E6EDF1]">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          loading="lazy"
          sizes="
            (max-width: 639px) calc(100vw - 40px),
            (max-width: 1279px) calc(50vw - 48px),
            33vw
          "
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{
            objectPosition: item.imagePosition ?? "center center",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#126CA5]/0 transition-colors duration-500 group-hover:bg-[#126CA5]/35"
        />

        <div className="pointer-events-none absolute right-0 bottom-0 left-0 translate-y-full bg-[linear-gradient(180deg,rgba(8,43,65,0)_0%,rgba(8,43,65,0.92)_100%)] px-6 pt-14 pb-6 transition-transform duration-500 group-hover:translate-y-0">
          <p className="m-0! text-[11px] font-bold uppercase tracking-[0.16em] text-[#69DBFF]">
            Penunjang Medis
          </p>

          <h3 className="mt-1.5 mb-0! text-[20px] font-bold text-white">
            {item.title}
          </h3>
        </div>

        <span className="pointer-events-none absolute inset-0 border border-black/5" />
      </figure>

      <div className="border-b border-[#DCEAF1] py-5">
        <h3 className="m-0! text-[19px] font-bold text-[#123B56]">
          {item.title}
        </h3>

        <p className="mt-2 mb-0! text-sm leading-7 text-[#688497]">
          {item.description}
        </p>
      </div>
    </article>
  );
}
