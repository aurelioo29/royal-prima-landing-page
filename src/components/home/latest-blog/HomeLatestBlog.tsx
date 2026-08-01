import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

import { BlogArticleCard, BlogIcon, blogArticles } from "@/components/blog";

import type { ResolvedBlogArticle } from "@/components/blog";

import { Reveal } from "@/components/shared/motion";

const LATEST_ARTICLE_LIMIT = 3;

function formatBlogDate(value: string, locale: string): string {
  const date = new Date(`${value}T00:00:00+07:00`);

  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(date);
}

export default async function HomeLatestBlog() {
  const locale = await getLocale();

  const t = await getTranslations("HomeLatestBlog");

  const blogT = await getTranslations("BlogPage");

  const latestArticles: ResolvedBlogArticle[] = [...blogArticles]
    .sort(
      (firstArticle, secondArticle) =>
        new Date(secondArticle.publishedAt).getTime() -
        new Date(firstArticle.publishedAt).getTime(),
    )
    .slice(0, LATEST_ARTICLE_LIMIT)
    .map((article) => ({
      ...article,

      categoryLabel: blogT(`categories.${article.category}`),

      publishedAtLabel: formatBlogDate(article.publishedAt, locale),
    }));

  if (latestArticles.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="home-latest-blog-title"
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal direction="right" distance={30} className="max-w-[780px]">
            <div>
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-10 bg-[#00A4E4]" />

                <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                  {t("eyebrow")}
                </p>
              </div>

              <h2
                id="home-latest-blog-title"
                className="mt-5 mb-0! max-w-[720px] text-[36px] leading-[1.12] font-bold tracking-[-0.04em] text-[#123B56] sm:text-[46px] lg:text-[52px]"
              >
                {t("title")}
              </h2>

              <p className="mt-5 mb-0! max-w-[700px] text-[15px] leading-8 text-[#57778C] sm:text-base">
                {t("description")}
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" distance={24}>
            <Link
              href="/blog"
              className="group inline-flex h-13 items-center justify-center gap-4 border border-[#BFDDE9] bg-white px-6 text-sm font-semibold text-[#123B56]! no-underline! transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0077B6] hover:bg-[#F3FBFF] hover:text-[#0077B6]!"
            >
              {t("viewAll")}

              <span className="flex size-8 items-center justify-center bg-[#EAF7FC] text-[#0077B6] transition-all duration-300 group-hover:bg-[#0077B6] group-hover:text-white">
                <BlogIcon
                  name="arrow"
                  className="size-[17px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Articles */}
        <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          {latestArticles.map((article, index) => (
            <Reveal
              key={article.id}
              direction="up"
              distance={28}
              delay={index * 0.08}
              duration={0.65}
              className={`h-full ${
                index === latestArticles.length - 1
                  ? "md:col-span-2 md:max-w-[calc(50%-14px)] xl:col-span-1 xl:max-w-none"
                  : ""
              }`}
            >
              <BlogArticleCard
                article={article}
                readMoreLabel={t("readMore")}
                viewMode="grid"
              />
            </Reveal>
          ))}
        </div>

        {/* Mobile button */}
        <Reveal
          direction="up"
          distance={20}
          className="mt-12 flex justify-center lg:hidden"
        >
          <Link
            href="/blog"
            className="group inline-flex h-14 w-full max-w-[360px] items-center justify-between gap-5 bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_100%)] px-6 text-sm font-semibold text-white! no-underline! shadow-[0_14px_30px_rgba(0,119,182,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(0,119,182,0.28)]"
          >
            {t("viewAll")}

            <span className="flex size-9 items-center justify-center bg-white/15 transition-colors group-hover:bg-white group-hover:text-[#0077B6]">
              <BlogIcon name="arrow" className="size-[18px]" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
