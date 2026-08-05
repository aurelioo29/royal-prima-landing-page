import Image from "next/image";

import type { AboutPosterProps } from "../types/about.types";

export default function AboutPoster({ image, imageAlt }: AboutPosterProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="relative aspect-[1618/852] w-full overflow-hidden bg-[#E7EEF2]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="
              (max-width: 639px) calc(100vw - 40px),
              (max-width: 1023px) calc(100vw - 64px),
              (max-width: 1279px) calc(100vw - 80px),
              (max-width: 1535px) calc(100vw - 96px),
              1632px
            "
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
