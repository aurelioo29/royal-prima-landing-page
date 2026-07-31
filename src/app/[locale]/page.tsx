import { getTranslations, setRequestLocale } from "next-intl/server";

import HeroSlider, { type HeroSlide } from "@/components/home/HeroSlider";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("HomePage");

  const slides: HeroSlide[] = [
    {
      id: 1,
      title: t("slider.slideOne.title"),
      description: t("slider.slideOne.description"),
    },
    {
      id: 2,
      title: t("slider.slideTwo.title"),
      description: t("slider.slideTwo.description"),
    },
    {
      id: 3,
      title: t("slider.slideThree.title"),
      description: t("slider.slideThree.description"),
    },
  ];

  return (
    <main>
      <HeroSlider slides={slides} />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            {t("badge")}
          </span>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {t("title")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {t("description")}
          </p>
        </div>
      </section>
    </main>
  );
}
