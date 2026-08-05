import Image from "next/image";

import type { AboutProfileProps } from "../types/about.types";

import AboutIcon from "./AboutIcon";

export default function AboutProfile({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: AboutProfileProps) {
  return (
    <section
      id="profile"
      className="scroll-mt-[calc(var(--site-header-height)+32px)] bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 xl:px-12 2xl:px-16">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#EAF7FC]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="
              (max-width: 1023px) calc(100vw - 40px),
              45vw
            "
            className="object-cover"
          />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center bg-[#EAF7FC] text-[#0077B6]">
              <AboutIcon name="hospital" className="size-[19px]" />
            </span>

            <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
              {eyebrow}
            </p>
          </div>

          <h2 className="mt-6 mb-0! max-w-[760px] text-[36px] leading-[1.1] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[46px] lg:text-[54px]">
            {title}
          </h2>

          <div className="mt-7 h-[3px] w-16 bg-[#00A4E4]" />

          <p className="mt-7 mb-0! text-[15px] leading-8 text-[#57778C] sm:text-[16px] lg:leading-9">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
