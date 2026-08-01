"use client";

import { useEffect, useRef, useState } from "react";

import { useTranslations } from "next-intl";

import { A11y, Autoplay, EffectFade, Keyboard } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import type { Swiper as SwiperInstance } from "swiper";

import { Link } from "@/i18n/navigation";

import HeroSliderArrow from "./components/HeroSliderArrow";
import ResponsiveHeroImage from "./components/ResponsiveHeroImage";

import { HERO_SLIDES } from "./data/hero-slider.data";

export default function HeroSlider() {
  const t = useTranslations("HomeHeroSlider");

  const swiperRef = useRef<SwiperInstance | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const [autoplayPaused, setAutoplayPaused] = useState(false);

  const [reducedMotion, setReducedMotion] = useState(false);

  const hasMultipleSlides = HERO_SLIDES.length > 1;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updateMotionPreference() {
      setReducedMotion(mediaQuery.matches);
    }

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  function goToPreviousSlide() {
    swiperRef.current?.slidePrev();
  }

  function goToNextSlide() {
    swiperRef.current?.slideNext();
  }

  function goToSlide(index: number) {
    const swiper = swiperRef.current;

    if (!swiper) {
      return;
    }

    if (hasMultipleSlides) {
      swiper.slideToLoop(index);

      return;
    }

    swiper.slideTo(index);
  }

  function toggleAutoplay() {
    const swiper = swiperRef.current;

    if (!swiper?.autoplay) {
      return;
    }

    if (autoplayPaused) {
      swiper.autoplay.start();

      setAutoplayPaused(false);

      return;
    }

    swiper.autoplay.stop();

    setAutoplayPaused(true);
  }

  return (
    <section
      aria-label={t("regionLabel")}
      className="relative w-full overflow-hidden bg-[#EAF8FE]"
    >
      <Swiper
        modules={[A11y, Autoplay, EffectFade, Keyboard]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;

          setActiveSlide(swiper.realIndex);
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
        onAutoplayPause={() => {
          setAutoplayPaused(true);
        }}
        onAutoplayResume={() => {
          setAutoplayPaused(false);
        }}
        onAutoplayStart={() => {
          setAutoplayPaused(false);
        }}
        onAutoplayStop={() => {
          setAutoplayPaused(true);
        }}
        slidesPerView={1}
        loop={hasMultipleSlides}
        speed={reducedMotion ? 0 : 900}
        effect={reducedMotion ? "slide" : "fade"}
        fadeEffect={{
          crossFade: true,
        }}
        keyboard={{
          enabled: true,

          onlyInViewport: true,
        }}
        autoplay={
          reducedMotion || !hasMultipleSlides
            ? false
            : {
                delay: 6000,

                disableOnInteraction: false,

                pauseOnMouseEnter: true,
              }
        }
        a11y={{
          enabled: true,

          prevSlideMessage: t("previousSlide"),

          nextSlideMessage: t("nextSlide"),

          firstSlideMessage: t("firstSlide"),

          lastSlideMessage: t("lastSlide"),
        }}
        className="w-full"
      >
        {HERO_SLIDES.map((slide, index) => {
          const image = (
            <ResponsiveHeroImage
              image={slide.image}
              mobileImage={slide.mobileImage}
              alt={t(`slides.${slide.translationKey}.alt`)}
              desktopObjectPosition={slide.desktopObjectPosition}
              mobileObjectPosition={slide.mobileObjectPosition}
              eager={index <= 1}
              highPriority={index === 0}
            />
          );

          return (
            <SwiperSlide
              key={slide.id}
              data-swiper-autoplay={slide.autoplayDelay ?? 6000}
              className="relative w-full overflow-hidden"
            >
              {slide.href ? (
                <Link
                  href={slide.href}
                  aria-label={t(`slides.${slide.translationKey}.actionLabel`)}
                  className="block w-full no-underline!"
                >
                  {image}
                </Link>
              ) : (
                image
              )}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-[linear-gradient(180deg,transparent,rgba(0,54,84,0.16))] sm:h-24 lg:h-28"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Tombol navigasi desktop */}
      {hasMultipleSlides && (
        <>
          <button
            type="button"
            onClick={goToPreviousSlide}
            aria-label={t("previousSlide")}
            className="absolute top-1/2 left-5 z-30 hidden size-13 -translate-y-1/2 cursor-pointer items-center justify-center border border-white/65 bg-[#006D9D]/75 text-white shadow-[0_12px_30px_rgba(0,91,143,0.22)] backdrop-blur-md transition-all hover:-translate-x-1 hover:bg-[#00A4E4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:flex"
          >
            <HeroSliderArrow direction="left" className="size-6" />
          </button>

          <button
            type="button"
            onClick={goToNextSlide}
            aria-label={t("nextSlide")}
            className="absolute top-1/2 right-5 z-30 hidden size-13 -translate-y-1/2 cursor-pointer items-center justify-center border border-white/65 bg-[#006D9D]/75 text-white shadow-[0_12px_30px_rgba(0,91,143,0.22)] backdrop-blur-md transition-all hover:translate-x-1 hover:bg-[#00A4E4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:flex"
          >
            <HeroSliderArrow direction="right" className="size-6" />
          </button>
        </>
      )}

      {/* Kontrol bagian bawah */}
      {hasMultipleSlides && (
        <div className="pointer-events-none absolute inset-x-0 bottom-2 z-30 px-4 sm:bottom-4 sm:px-8 lg:bottom-6 lg:px-10">
          <div className="mx-auto flex w-full max-w-[1760px] items-end justify-between gap-3">
            {/* Indicators */}
            <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2">
              {HERO_SLIDES.map((slide, index) => {
                const active = index === activeSlide;

                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={t("goToSlide", {
                      number: index + 1,
                    })}
                    aria-current={active ? "true" : undefined}
                    className={`h-1.5 cursor-pointer border-0! p-0! shadow-[0_1px_4px_rgba(0,0,0,0.18)] transition-all duration-300 ${
                      active
                        ? "w-10 bg-[#00A4E4] sm:w-12"
                        : "w-5 bg-white/80 hover:bg-white sm:w-6"
                    }`}
                  />
                );
              })}
            </div>

            {/* Counter dan pause */}
            <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2">
              <div
                aria-live="polite"
                className="flex h-9 items-center bg-[#003B5D]/82 px-3 text-[11px] font-semibold text-white shadow-lg backdrop-blur-md sm:h-10 sm:px-4 sm:text-xs"
              >
                <span>{String(activeSlide + 1).padStart(2, "0")}</span>

                <span className="mx-2 text-white/45">/</span>

                <span className="text-white/65">
                  {String(HERO_SLIDES.length).padStart(2, "0")}
                </span>
              </div>

              {!reducedMotion && (
                <button
                  type="button"
                  onClick={toggleAutoplay}
                  aria-label={autoplayPaused ? t("play") : t("pause")}
                  aria-pressed={autoplayPaused}
                  className="flex size-9 cursor-pointer items-center justify-center border-0! bg-[#003B5D]/82 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-[#00A4E4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:size-10"
                >
                  {autoplayPaused ? <PlayIcon /> : <PauseIcon />}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4">
      <path
        d="M9 6v12M15 6v12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4">
      <path
        d="m9 6 9 6-9 6V6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
