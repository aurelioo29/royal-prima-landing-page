import type { Metadata } from "next";

import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import {
  BLOG_CATEGORY_KEYS,
  BlogArticleCard,
  BlogCategoryNav,
  BlogHeroSlider,
  BlogPagination,
  BlogPosterSection,
  BlogViewSwitcher,
  blogArticles,
  blogPoster,
} from "@/components/blog";

import type {
  BlogCategoryKey,
  BlogCategoryOption,
  BlogViewMode,
  ResolvedBlogArticle,
} from "@/components/blog";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import { routing } from "@/i18n/routing";

const ARTICLES_PER_PAGE = 8;

type BlogPageSearchParams = {
  page?: string | string[];
  category?: string | string[];
  view?: string | string[];
};

type BlogPageProps = {
  params: Promise<{
    locale: string;
  }>;

  searchParams: Promise<BlogPageSearchParams>;
};

/**
 * Mengambil satu nilai dari search params.
 *
 * Contoh:
 * ?page=2
 * ?page=2&page=3
 */
function getSingleSearchParam(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

/**
 * Memastikan nilai kategori memang terdaftar
 * di BLOG_CATEGORY_KEYS.
 */
function isBlogCategory(value: string | undefined): value is BlogCategoryKey {
  if (!value) {
    return false;
  }

  return BLOG_CATEGORY_KEYS.includes(value as BlogCategoryKey);
}

/**
 * Mode default adalah grid.
 */
function resolveViewMode(value: string | undefined): BlogViewMode {
  return value === "list" ? "list" : "grid";
}

/**
 * Memastikan nomor halaman valid.
 */
function resolvePageNumber(value: string | undefined): number {
  const parsedValue = Number.parseInt(value ?? "1", 10);

  if (!Number.isFinite(parsedValue) || parsedValue < 1) {
    return 1;
  }

  return Math.floor(parsedValue);
}

/**
 * Mengubah tanggal menjadi format lokal.
 */
function formatBlogDate(value: string, locale: string): string {
  const date = new Date(`${value}T00:00:00+07:00`);

  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(date);
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "BlogPage.metadata",
  });

  return {
    title: t("title"),

    description: t("description"),

    alternates: {
      canonical: "/blog",
    },

    openGraph: {
      type: "website",
      url: "/blog",

      title: t("title"),

      description: t("description"),

      images: [
        {
          url: "/images/og/royal-prima-medan.png",

          alt: t("imageAlt"),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: t("title"),

      description: t("description"),

      images: ["/images/og/royal-prima-medan.png"],
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,

        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function BlogPage({
  params,
  searchParams,
}: BlogPageProps) {
  const { locale } = await params;
  const query = await searchParams;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("BlogPage");

  /*
   * Contoh URL:
   *
   * /blog
   * /blog?page=2
   * /blog?view=list
   * /blog?category=healthTips
   * /blog?category=healthTips&view=list
   * /blog?category=healthTips&page=2&view=list
   */

  const categoryQuery = getSingleSearchParam(query.category);

  const activeCategory: "all" | BlogCategoryKey = isBlogCategory(categoryQuery)
    ? categoryQuery
    : "all";

  const viewQuery = getSingleSearchParam(query.view);

  const viewMode = resolveViewMode(viewQuery);

  const requestedPage = resolvePageNumber(getSingleSearchParam(query.page));

  /*
   * Urutkan berita berdasarkan tanggal terbaru.
   */

  const sortedArticles = [...blogArticles].sort(
    (firstArticle, secondArticle) =>
      new Date(secondArticle.publishedAt).getTime() -
      new Date(firstArticle.publishedAt).getTime(),
  );

  /*
   * Menambahkan hasil translation kategori
   * dan tanggal yang sudah diformat.
   */

  function resolveArticle(
    article: (typeof blogArticles)[number],
  ): ResolvedBlogArticle {
    return {
      ...article,

      categoryLabel: t(`categories.${article.category}`),

      publishedAtLabel: formatBlogDate(article.publishedAt, locale),
    };
  }

  /*
   * Lima berita terbaru untuk hero.
   */

  const latestArticles = sortedArticles.slice(0, 5).map(resolveArticle);

  /*
   * Filter berita berdasarkan kategori.
   */

  const filteredArticles =
    activeCategory === "all"
      ? sortedArticles
      : sortedArticles.filter((article) => article.category === activeCategory);

  /*
   * Hitung pagination.
   */

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE),
  );

  /*
   * Jika page URL lebih besar dari total page,
   * tampilkan halaman terakhir.
   */

  const currentPage = Math.min(requestedPage, totalPages);

  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;

  const paginatedArticles = filteredArticles
    .slice(startIndex, startIndex + ARTICLES_PER_PAGE)
    .map(resolveArticle);

  /*
   * Daftar kategori dan jumlah artikelnya.
   */

  const categories: BlogCategoryOption[] = [
    {
      key: "all",

      label: t("categories.all"),

      count: sortedArticles.length,
    },

    ...BLOG_CATEGORY_KEYS.map((category) => ({
      key: category,

      label: t(`categories.${category}`),

      count: sortedArticles.filter((article) => article.category === category)
        .length,
    })),
  ];

  return (
    <>
      <PageScrollProgress />

      {/* HERO SWIPER */}
      <Reveal trigger="load" direction="up" distance={12} duration={0.7}>
        <BlogHeroSlider
          articles={latestArticles}
          readMoreLabel={t("hero.readMore")}
          previousLabel={t("hero.previous")}
          nextLabel={t("hero.next")}
          paginationLabel={t("hero.pagination")}
        />
      </Reveal>

      <main>
        {/* CATEGORY NAVIGATION */}
        <section className="border-b border-[#E1EDF2] bg-white">
          <div className="mx-auto w-full max-w-[1760px] px-5 py-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <Reveal direction="up" distance={18} className="min-w-0">
              <BlogCategoryNav
                categories={categories}
                activeCategory={activeCategory}
                viewMode={viewMode}
              />
            </Reveal>
          </div>
        </section>

        {/* ARTICLE LIST */}
        <section
          id="articles"
          className="scroll-mt-[calc(var(--site-header-height)+24px)] overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            {/* Heading */}
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
              <Reveal direction="right" distance={30} className="max-w-[780px]">
                <div>
                  <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                    {t("articles.eyebrow")}
                  </p>

                  <h1 className="mt-4 mb-0! text-[36px] leading-[1.14] font-bold tracking-[-0.035em] text-[#123B56] sm:text-[46px]">
                    {activeCategory === "all"
                      ? t("articles.title")
                      : t("articles.categoryTitle", {
                          category: t(`categories.${activeCategory}`),
                        })}
                  </h1>

                  <p className="mt-5 mb-0! max-w-[700px] text-[15px] leading-8 text-[#57778C]">
                    {t("articles.description")}
                  </p>
                </div>
              </Reveal>

              {/* Result dan view switcher */}
              <Reveal direction="left" distance={20}>
                <div className="flex flex-wrap items-center gap-5">
                  <p className="m-0! text-sm font-semibold text-[#7793A5]">
                    {t("articles.resultCount", {
                      count: filteredArticles.length,
                    })}
                  </p>

                  <BlogViewSwitcher
                    viewMode={viewMode}
                    activeCategory={activeCategory}
                    currentPage={currentPage}
                    gridLabel={t("view.grid")}
                    listLabel={t("view.list")}
                  />
                </div>
              </Reveal>
            </div>

            {/* Empty state */}
            {paginatedArticles.length === 0 ? (
              <Reveal direction="up" distance={24} className="mt-14">
                <div className="border-y border-[#DCEAF1] py-16 text-center">
                  <h2 className="m-0! text-2xl font-bold text-[#123B56]">
                    {t("articles.emptyTitle")}
                  </h2>

                  <p className="mx-auto mt-4 mb-0! max-w-[560px] text-sm leading-7 text-[#57778C]">
                    {t("articles.emptyDescription")}
                  </p>
                </div>
              </Reveal>
            ) : (
              <>
                {/* GRID / LIST ARTICLES */}
                <div
                  className={
                    viewMode === "grid"
                      ? "mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-7 xl:gap-y-14"
                      : "mt-14 grid grid-cols-1 gap-y-7"
                  }
                >
                  {paginatedArticles.map((article, index) => (
                    <Reveal
                      key={article.id}
                      direction="up"
                      distance={28}
                      delay={Math.min(index * 0.055, 0.3)}
                      className="h-full"
                    >
                      <BlogArticleCard
                        article={article}
                        readMoreLabel={t("articles.readMore")}
                        viewMode={viewMode}
                      />
                    </Reveal>
                  ))}
                </div>

                {/* PAGINATION */}
                <Reveal direction="up" distance={20}>
                  <BlogPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    activeCategory={activeCategory}
                    viewMode={viewMode}
                    previousLabel={t("pagination.previous")}
                    nextLabel={t("pagination.next")}
                    pageLabel={t("pagination.page")}
                  />
                </Reveal>
              </>
            )}
          </div>
        </section>

        {/* POSTER / CTA */}
        <Reveal direction="up" distance={36} amount={0.08}>
          <BlogPosterSection
            poster={blogPoster}
            eyebrow={t("poster.eyebrow")}
            title={t("poster.title")}
            description={t("poster.description")}
            actionLabel={t("poster.action")}
          />
        </Reveal>
      </main>
    </>
  );
}
