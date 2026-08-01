import Image from "next/image";

import { Link } from "@/i18n/navigation";

import type { BlogPosterSectionProps } from "../types/blog.types";

import BlogIcon from "./BlogIcon";

export default function BlogPosterSection({
  poster,
  eyebrow,
  title,
  description,
  actionLabel,
}: BlogPosterSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <article className="relative min-h-[380px] overflow-hidden bg-[#123B56] sm:min-h-[430px] lg:min-h-[480px]">
          <Image
            src={poster.image}
            alt={poster.imageAlt}
            fill
            sizes="
                (max-width: 639px) calc(100vw - 40px),
                (max-width: 1023px) calc(100vw - 64px),
                (max-width: 1279px) calc(100vw - 80px),
                (max-width: 1535px) calc(100vw - 96px),
                (max-width: 1759px) calc(100vw - 128px),
                1632px
            "
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,43,65,0.96)_0%,rgba(8,43,65,0.85)_43%,rgba(8,43,65,0.30)_75%,rgba(8,43,65,0.15)_100%)]" />

          <div className="relative z-10 flex min-h-[380px] items-center px-6 py-14 sm:min-h-[430px] sm:px-10 lg:min-h-[480px] lg:px-16">
            <div className="max-w-[670px]">
              <p className="m-0! text-xs font-bold uppercase tracking-[0.19em] text-[#74DDFF]">
                {eyebrow}
              </p>

              <h2 className="mt-5 mb-0! text-[34px] leading-[1.12] font-bold tracking-[-0.035em] text-white sm:text-[44px] lg:text-[54px]">
                {title}
              </h2>

              <p className="mt-5 mb-0! max-w-[590px] text-[15px] leading-8 text-white/75 sm:text-base">
                {description}
              </p>

              <Link
                href={poster.href}
                className="mt-8 inline-flex h-14 items-center justify-center gap-3 bg-[#00A4E4] px-7 text-sm font-semibold text-white! no-underline! shadow-[0_14px_30px_rgba(0,164,228,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#008BC2]"
              >
                {actionLabel}

                <BlogIcon name="arrow" className="size-[18px]" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
