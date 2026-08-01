import type { Metadata } from "next";

import Image from "next/image";

import { hasLocale } from "next-intl";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import {
  BlogArticleCard,
  BlogIcon,
  BLOG_CATEGORY_KEYS,
  blogArticles,
} from "@/components/blog";

import type {
  BlogCategoryOption,
  ResolvedBlogArticle,
} from "@/components/blog";

import {
  BlogArticleBody,
  BlogDetailSidebar,
  BlogShareButtons,
  getBlogArticleDetail,
} from "@/components/blog/detail";

import { PageScrollProgress, Reveal } from "@/components/shared/motion";

import { Link } from "@/i18n/navigation";

import { routing } from "@/i18n/routing";

const SITE_URL = "https://beta.royalprima.com";

type BlogDetailPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogArticles.map((article) => ({
      locale,
      slug: article.slug,
    })),
  );
}

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
}: BlogDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const canonicalPath = `/blog/${article.slug}`;

  return {
    title: article.title,

    description: article.excerpt,

    alternates: {
      canonical: canonicalPath,
    },

    openGraph: {
      type: "article",

      url: canonicalPath,

      title: article.title,

      description: article.excerpt,

      publishedTime: article.publishedAt,

      authors: [article.author],

      images: [
        {
          url: article.image,
          alt: article.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: article.title,

      description: article.excerpt,

      images: [article.image],
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

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const t = await getTranslations("BlogDetailPage");

  const blogT = await getTranslations("BlogPage");

  const detail = getBlogArticleDetail(article);

  function resolveArticle(
    item: (typeof blogArticles)[number],
  ): ResolvedBlogArticle {
    return {
      ...item,

      categoryLabel: blogT(`categories.${item.category}`),

      publishedAtLabel: formatBlogDate(item.publishedAt, locale),
    };
  }

  const resolvedArticle = resolveArticle(article);

  const sortedArticles = [...blogArticles].sort(
    (firstArticle, secondArticle) =>
      new Date(secondArticle.publishedAt).getTime() -
      new Date(firstArticle.publishedAt).getTime(),
  );

  const popularArticles = sortedArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 4)
    .map(resolveArticle);

  const relatedFromCategory = sortedArticles.filter(
    (item) => item.slug !== article.slug && item.category === article.category,
  );

  const relatedFallback = sortedArticles.filter(
    (item) => item.slug !== article.slug && item.category !== article.category,
  );

  const relatedArticles = [...relatedFromCategory, ...relatedFallback]
    .slice(0, 3)
    .map(resolveArticle);

  const categories: BlogCategoryOption[] = BLOG_CATEGORY_KEYS.map(
    (category) => ({
      key: category,

      label: blogT(`categories.${category}`),

      count: blogArticles.filter((item) => item.category === category).length,
    }),
  );

  const articleUrl = `${SITE_URL}/blog/${article.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    headline: article.title,

    description: article.excerpt,

    image: [`${SITE_URL}${article.image}`],

    datePublished: article.publishedAt,

    dateModified: article.publishedAt,

    author: {
      "@type": "Organization",

      name: article.author,
    },

    publisher: {
      "@type": "Hospital",

      name: "RSU Royal Prima Medan",

      logo: {
        "@type": "ImageObject",

        url: `${SITE_URL}/images/navbar/logo-royal.svg`,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id": articleUrl,
    },
  };

  return (
    <>
      <PageScrollProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <article>
        {/* ARTICLE HEADER */}
        <header className="overflow-hidden bg-[linear-gradient(180deg,#F3FAFD_0%,#FFFFFF_100%)] py-14 sm:py-18 lg:py-24">
          <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <Reveal trigger="load" direction="up" distance={18} duration={0.7}>
              <nav aria-label={t("breadcrumb.label")}>
                <ol className="m-0! flex list-none! flex-wrap items-center gap-2 p-0! text-sm text-[#7793A5]">
                  <li className="list-none!">
                    <Link
                      href="/"
                      className="text-[#7793A5]! no-underline! transition-colors hover:text-[#0077B6]!"
                    >
                      {t("breadcrumb.home")}
                    </Link>
                  </li>

                  <li aria-hidden="true" className="list-none! text-[#B0C3CE]">
                    /
                  </li>

                  <li className="list-none!">
                    <Link
                      href="/blog"
                      className="text-[#7793A5]! no-underline! transition-colors hover:text-[#0077B6]!"
                    >
                      {t("breadcrumb.blog")}
                    </Link>
                  </li>

                  <li aria-hidden="true" className="list-none! text-[#B0C3CE]">
                    /
                  </li>

                  <li
                    aria-current="page"
                    className="max-w-[520px] truncate list-none! font-semibold text-[#123B56]"
                  >
                    {article.title}
                  </li>
                </ol>
              </nav>

              <h1 className="mt-8 mb-0! max-w-[1450px] text-[40px] leading-[1.08] font-bold tracking-[-0.045em] text-[#123B56] sm:text-[54px] lg:text-[68px] xl:text-[76px]">
                {article.title}
              </h1>

              <p className="mt-7 mb-0! max-w-[900px] text-[16px] leading-8 text-[#57778C] sm:text-[17px]">
                {article.excerpt}
              </p>

              <div className="mt-9 flex flex-col justify-between gap-7 border-t border-[#DCEAF1] pt-7 xl:flex-row xl:items-center">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                  <Link
                    href={`/blog?category=${article.category}#articles`}
                    className="inline-flex h-10 items-center bg-[#0077B6] px-4 text-xs font-bold uppercase tracking-[0.13em] text-white! no-underline!"
                  >
                    {resolvedArticle.categoryLabel}
                  </Link>

                  <span className="inline-flex items-center gap-2 text-sm text-[#7793A5]">
                    <BlogIcon
                      name="calendar"
                      className="size-4 text-[#0077B6]"
                    />

                    {resolvedArticle.publishedAtLabel}
                  </span>

                  <span className="inline-flex items-center gap-2 text-sm text-[#7793A5]">
                    <BlogIcon name="user" className="size-4 text-[#0077B6]" />

                    {article.author}
                  </span>
                </div>

                <BlogShareButtons
                  articleTitle={article.title}
                  articleUrl={articleUrl}
                  labels={{
                    title: t("share.title"),

                    facebook: t("share.facebook"),

                    linkedin: t("share.linkedin"),

                    whatsapp: t("share.whatsapp"),

                    copy: t("share.copy"),

                    copied: t("share.copied"),
                  }}
                />
              </div>
            </Reveal>
          </div>
        </header>

        {/* FEATURED IMAGE */}
        <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
          <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <Reveal trigger="load" direction="up" distance={24} delay={0.08}>
              <figure className="m-0!">
                <div className="relative aspect-[16/8.4] min-h-[310px] overflow-hidden bg-[#EAF5FA] sm:min-h-[420px]">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
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
                    className="object-cover object-center"
                  />
                </div>

                <figcaption className="mt-3 text-xs leading-6 text-[#8AA1AF]">
                  {article.imageAlt}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ARTICLE CONTENT */}
        <section className="overflow-hidden bg-white pb-20 sm:pb-24 lg:pb-28">
          <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14 lg:px-10 xl:grid-cols-[minmax(0,1fr)_390px] xl:gap-20 xl:px-12 2xl:px-16">
            <Reveal direction="right" distance={30} amount={0.05}>
              <BlogArticleBody
                detail={detail}
                labels={{
                  keyPoints: t("article.keyPoints"),

                  author: t("article.author"),

                  medicalNotice: t("article.medicalNotice"),
                }}
              />
            </Reveal>

            <Reveal direction="left" distance={28} amount={0.05}>
              <BlogDetailSidebar
                categories={categories}
                activeCategory={article.category}
                popularArticles={popularArticles}
                labels={{
                  categoryTitle: t("sidebar.categories"),

                  popularTitle: t("sidebar.popular"),

                  appointmentEyebrow: t("sidebar.appointment.eyebrow"),

                  appointmentTitle: t("sidebar.appointment.title"),

                  appointmentDescription: t("sidebar.appointment.description"),

                  appointmentAction: t("sidebar.appointment.action"),
                }}
              />
            </Reveal>
          </div>
        </section>

        {/* RELATED ARTICLES */}
        <section className="overflow-hidden bg-[#F3F9FC] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <Reveal direction="up" className="max-w-[780px]">
              <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
                {t("related.eyebrow")}
              </p>

              <h2 className="mt-4 mb-0! text-[36px] leading-[1.14] font-bold tracking-[-0.035em] text-[#123B56] sm:text-[46px]">
                {t("related.title")}
              </h2>

              <p className="mt-5 mb-0! max-w-[690px] text-[15px] leading-8 text-[#57778C]">
                {t("related.description")}
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
              {relatedArticles.map((relatedArticle, index) => (
                <Reveal
                  key={relatedArticle.id}
                  direction="up"
                  distance={26}
                  delay={index * 0.07}
                  className="h-full"
                >
                  <BlogArticleCard
                    article={relatedArticle}
                    readMoreLabel={blogT("articles.readMore")}
                    viewMode="grid"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
