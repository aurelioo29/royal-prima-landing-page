"use client";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type HeroSlide = {
  id: number;
  title: string;
  description: string;
};

type HeroSliderProps = {
  slides: HeroSlide[];
};

export default function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <section aria-label="Slider informasi rumah sakit">
      <Swiper
        modules={[A11y, Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        loop={slides.length > 1}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={700}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <article
              className={[
                "flex min-h-[520px] items-center",
                "bg-slate-900 px-6 py-20 text-white",
                "md:min-h-[620px] md:px-12",
                index % 2 === 1 ? "bg-blue-900" : "bg-slate-900",
              ].join(" ")}
            >
              <div className="mx-auto w-full max-w-7xl">
                <div className="max-w-3xl">
                  <span className="mb-5 inline-block border border-white/30 px-4 py-2 text-sm font-medium">
                    Royal Prima Hospital
                  </span>

                  <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
                    {slide.title}
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#appointment"
                      className="bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
                    >
                      Buat Janji Temu
                    </a>

                    <a
                      href="#services"
                      className="border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                    >
                      Lihat Layanan
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
