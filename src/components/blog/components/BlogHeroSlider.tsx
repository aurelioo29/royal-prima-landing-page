"use client";

import Image from "next/image";

import { useRef, useState } from "react";

import type { Swiper as SwiperInstance } from "swiper";

import { A11y, Autoplay, EffectFade, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "@/i18n/navigation";

import type { BlogHeroSliderProps } from "../types/blog.types";

import BlogIcon from "./BlogIcon";

function formatSlideNumber(value: number) {
  return String(value).padStart(2, "0");
}

export default function BlogHeroSlider({
  articles,
  readMoreLabel,
  previousLabel,
  nextLabel,
  paginationLabel,
}: BlogHeroSliderProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  if (articles.length === 0) {
    return null;
  }

  return (
    <section
      aria-label={paginationLabel}
      className="relative overflow-hidden bg-[#082B41]"
    >
      <Swiper
        modules={[A11y, Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={900}
        loop={articles.length > 1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        a11y={{
          prevSlideMessage: previousLabel,

          nextSlideMessage: nextLabel,

          paginationBulletMessage: `${paginationLabel} {{index}}`,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="blog-hero-swiper h-[640px] sm:h-[720px] lg:h-[clamp(760px,82vh,880px)]"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={article.id}>
            <article className="relative h-full overflow-hidden">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                sizes="100vw"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,25,39,0.97)_0%,rgba(4,25,39,0.90)_36%,rgba(4,25,39,0.55)_66%,rgba(4,25,39,0.22)_100%)]" />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.42)_100%)]" />

              <div className="relative z-10 mx-auto flex h-full w-full max-w-[1760px] items-center px-5 pt-16 pb-28 sm:px-8 sm:pt-20 sm:pb-32 lg:px-24 xl:px-32 2xl:px-36">
                <div className="blog-hero-content max-w-[900px]">
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                    <span className="inline-flex h-9 items-center bg-[#00A4E4] px-4 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(0,164,228,0.22)]">
                      {article.categoryLabel}
                    </span>

                    <span className="inline-flex items-center gap-2 text-sm text-white/70">
                      <BlogIcon name="calendar" className="size-4" />

                      {article.publishedAtLabel}
                    </span>
                  </div>

                  <h2 className="mt-7 mb-0! max-w-[900px] text-[40px] leading-[1.05] font-bold tracking-[-0.045em] text-white sm:text-[54px] lg:text-[68px] xl:text-[74px]">
                    {article.title}
                  </h2>

                  <p className="mt-7 mb-0! max-w-[720px] text-[15px] leading-8 text-white/76 sm:text-base lg:text-[17px]">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-9 inline-flex h-14 items-center justify-center gap-3 bg-[#00A4E4] px-7 text-sm font-semibold text-white! no-underline! shadow-[0_14px_30px_rgba(0,164,228,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#008BC2] hover:shadow-[0_18px_38px_rgba(0,164,228,0.32)]"
                  >
                    {readMoreLabel}

                    <BlogIcon name="arrow" className="size-[18px]" />
                  </Link>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom slider controls */}
      <div className="pointer-events-none absolute right-0 bottom-7 left-0 z-20 hidden sm:block">
        <div className="mx-auto flex w-full max-w-[1760px] justify-end px-8 lg:px-24 xl:px-32 2xl:px-36">
          <div className="pointer-events-auto flex items-center border border-white/22 bg-[#082B41]/45 p-1.5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div className="flex h-11 min-w-[96px] items-center justify-center px-4 text-xs font-semibold tracking-[0.16em]">
              <span className="text-white">
                {formatSlideNumber(activeIndex + 1)}
              </span>

              <span className="mx-2 text-white/35">/</span>

              <span className="text-white/60">
                {formatSlideNumber(articles.length)}
              </span>
            </div>

            <button
              type="button"
              aria-label={previousLabel}
              disabled={articles.length <= 1}
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex size-11 cursor-pointer items-center justify-center border-0 bg-white/8 text-white transition-all duration-200 hover:bg-white hover:text-[#123B56] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <BlogIcon name="chevronLeft" className="size-5" />
            </button>

            <button
              type="button"
              aria-label={nextLabel}
              disabled={articles.length <= 1}
              onClick={() => swiperRef.current?.slideNext()}
              className="ml-1 flex size-11 cursor-pointer items-center justify-center border-0 bg-white/8 text-white transition-all duration-200 hover:bg-white hover:text-[#123B56] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <BlogIcon name="chevronRight" className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
