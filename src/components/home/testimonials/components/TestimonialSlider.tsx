"use client";

import { useEffect, useState } from "react";

import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import type { TestimonialSliderProps } from "../types/testimonials.types";

import TestimonialCard from "./TestimonialCard";

export default function TestimonialSlider({
  items,
  labels,
}: TestimonialSliderProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  const hasMultipleSlides = items.length > 1;

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

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <Swiper
        modules={[A11y, Autoplay, Keyboard, Pagination]}
        slidesPerView={1}
        spaceBetween={18}
        speed={reducedMotion ? 0 : 750}
        loop={items.length > 3}
        grabCursor
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={
          reducedMotion || !hasMultipleSlides
            ? false
            : {
                delay: 5500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        a11y={{
          enabled: true,

          prevSlideMessage: labels.previousSlide,

          nextSlideMessage: labels.nextSlide,

          firstSlideMessage: labels.firstSlide,

          lastSlideMessage: labels.lastSlide,

          slideLabelMessage: labels.slideLabel,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.25,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },

          1200: {
            slidesPerView: 3,
            spaceBetween: 26,
          },
        }}
        className="home-testimonials-swiper"
      >
        {items.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="h-auto!">
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
