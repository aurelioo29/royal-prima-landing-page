import Image from "next/image";

import { Link } from "@/i18n/navigation";

import type { BlogArticleCardProps } from "../types/blog.types";

import BlogIcon from "./BlogIcon";

export default function BlogArticleCard({
  article,
  readMoreLabel,
  viewMode,
}: BlogArticleCardProps) {
  if (viewMode === "list") {
    return <ListArticleCard article={article} readMoreLabel={readMoreLabel} />;
  }

  return <GridArticleCard article={article} readMoreLabel={readMoreLabel} />;
}

type ArticleVariantProps = {
  article: BlogArticleCardProps["article"];

  readMoreLabel: string;
};

function GridArticleCard({ article, readMoreLabel }: ArticleVariantProps) {
  return (
    <article className="group flex h-full flex-col border-b border-[#D8E8EF] pb-8">
      <ArticleImage
        article={article}
        sizes="
          (max-width: 639px) calc(100vw - 40px),
          (max-width: 1279px) calc(50vw - 44px),
          390px
        "
        className="aspect-[16/10]"
      />

      <ArticleMeta article={article} className="mt-6" />

      <h3 className="mt-4 mb-0! text-[21px] leading-[1.32] font-bold tracking-[-0.02em] text-[#123B56] sm:text-[23px]">
        <ArticleTitle article={article} />
      </h3>

      <p className="mt-4 mb-0! flex-1 text-sm leading-7 text-[#57778C]">
        {article.excerpt}
      </p>

      <ArticleLink article={article} label={readMoreLabel} className="mt-6" />
    </article>
  );
}

function ListArticleCard({ article, readMoreLabel }: ArticleVariantProps) {
  return (
    <article className="group grid overflow-hidden border border-[#D8E8EF] bg-white transition-all duration-300 hover:border-[#A9D8EA] hover:shadow-[0_22px_60px_rgba(18,59,86,0.08)] md:grid-cols-[330px_1fr] xl:grid-cols-[410px_1fr]">
      <ArticleImage
        article={article}
        sizes="
          (max-width: 767px) calc(100vw - 40px),
          (max-width: 1279px) 330px,
          410px
        "
        className="aspect-[16/10] md:aspect-auto md:min-h-[300px]"
      />

      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <ArticleMeta article={article} />

        <h3 className="mt-5 mb-0! max-w-[850px] text-[26px] leading-[1.22] font-bold tracking-[-0.025em] text-[#123B56] sm:text-[30px]">
          <ArticleTitle article={article} />
        </h3>

        <p className="mt-5 mb-0! max-w-[850px] text-[15px] leading-8 text-[#57778C]">
          {article.excerpt}
        </p>

        <ArticleLink article={article} label={readMoreLabel} className="mt-7" />
      </div>
    </article>
  );
}

type ArticleImageProps = {
  article: BlogArticleCardProps["article"];

  sizes: string;
  className: string;
};

function ArticleImage({ article, sizes, className }: ArticleImageProps) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      aria-label={article.title}
      className={`relative block overflow-hidden bg-[#EAF5FA] no-underline! ${className}`}
    >
      <Image
        src={article.image}
        alt={article.imageAlt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(18,59,86,0.28)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  );
}

type ArticleMetaProps = {
  article: BlogArticleCardProps["article"];

  className?: string;
};

function ArticleMeta({ article, className = "" }: ArticleMetaProps) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${className}`}>
      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0077B6]">
        {article.categoryLabel}
      </span>

      <span className="h-1 w-1 rounded-full bg-[#ABC0CC]" />

      <span className="inline-flex items-center gap-2 text-xs text-[#7793A5]">
        <BlogIcon name="calendar" className="size-3.5" />

        {article.publishedAtLabel}
      </span>
    </div>
  );
}

function ArticleTitle({
  article,
}: {
  article: BlogArticleCardProps["article"];
}) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="text-[#123B56]! no-underline! transition-colors hover:text-[#0077B6]!"
    >
      {article.title}
    </Link>
  );
}

type ArticleLinkProps = {
  article: BlogArticleCardProps["article"];

  label: string;
  className?: string;
};

function ArticleLink({ article, label, className = "" }: ArticleLinkProps) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className={`inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#0077B6]! no-underline! transition-colors hover:text-[#123B56]! ${className}`}
    >
      {label}

      <BlogIcon
        name="arrow"
        className="size-[17px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}
