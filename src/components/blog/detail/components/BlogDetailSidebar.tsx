import Image from "next/image";

import { Link } from "@/i18n/navigation";

import BlogIcon from "../../components/BlogIcon";

import type { BlogDetailSidebarProps } from "../types/blog-detail.types";

export default function BlogDetailSidebar({
  categories,
  activeCategory,
  popularArticles,
  labels,
}: BlogDetailSidebarProps) {
  return (
    <aside className="space-y-9 lg:sticky lg:top-[calc(var(--site-header-height)+32px)] lg:self-start">
      {/* Categories */}
      <section className="border border-[#DCEAF1] bg-white px-6 py-7">
        <h2 className="m-0! text-[24px] font-bold text-[#123B56]">
          {labels.categoryTitle}
        </h2>

        <ul className="mt-6! mb-0! flex list-none! flex-col p-0!">
          {categories
            .filter((category) => category.key !== "all")
            .map((category) => {
              const active = category.key === activeCategory;

              return (
                <li
                  key={category.key}
                  className="list-none! border-b border-[#E4EFF3] last:border-b-0"
                >
                  <Link
                    href={`/blog?category=${category.key}#articles`}
                    className={`flex min-h-14 items-center justify-between gap-5 py-3 text-sm font-semibold no-underline! transition-colors ${
                      active
                        ? "text-[#0077B6]!"
                        : "text-[#57778C]! hover:text-[#0077B6]!"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <BlogIcon name="category" className="size-[17px]" />

                      {category.label}
                    </span>

                    <span
                      className={`text-xs ${
                        active ? "text-[#0077B6]" : "text-[#8AA1AF]"
                      }`}
                    >
                      {category.count}
                    </span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </section>

      {/* Popular articles */}
      <section className="border border-[#DCEAF1] bg-white px-6 py-7">
        <h2 className="m-0! text-[24px] font-bold text-[#123B56]">
          {labels.popularTitle}
        </h2>

        <div className="mt-7 space-y-6">
          {popularArticles.map((article) => (
            <article
              key={article.id}
              className="group grid grid-cols-[96px_1fr] gap-4 border-b border-[#E4EFF3] pb-6 last:border-b-0 last:pb-0"
            >
              <Link
                href={`/blog/${article.slug}`}
                aria-label={article.title}
                className="relative block aspect-[4/3] overflow-hidden bg-[#EAF5FA] no-underline!"
              >
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  sizes="96px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="min-w-0">
                <p className="m-0! text-[10px] font-bold uppercase tracking-[0.12em] text-[#0077B6]">
                  {article.categoryLabel}
                </p>

                <h3 className="mt-2 mb-0! line-clamp-3 text-sm leading-6 font-bold text-[#123B56]">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-[#123B56]! no-underline! transition-colors hover:text-[#0077B6]!"
                  >
                    {article.title}
                  </Link>
                </h3>

                <p className="mt-2 mb-0! inline-flex items-center gap-2 text-[11px] text-[#8AA1AF]">
                  <BlogIcon name="calendar" className="size-3" />

                  {article.publishedAtLabel}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="overflow-hidden bg-[linear-gradient(145deg,#123B56_0%,#0077B6_100%)] px-7 py-8 text-white">
        <p className="m-0! text-xs font-bold uppercase tracking-[0.16em] text-[#7CE0FF]">
          {labels.appointmentEyebrow}
        </p>

        <h2 className="mt-4 mb-0! text-[27px] leading-[1.2] font-bold text-white">
          {labels.appointmentTitle}
        </h2>

        <p className="mt-4 mb-0! text-sm leading-7 text-white/72">
          {labels.appointmentDescription}
        </p>

        <Link
          href="/appointments"
          className="mt-7 inline-flex h-12 items-center justify-center gap-3 bg-white px-5 text-sm font-semibold text-[#0077B6]! no-underline! transition-transform hover:-translate-y-0.5"
        >
          {labels.appointmentAction}

          <BlogIcon name="arrow" className="size-[17px]" />
        </Link>
      </section>
    </aside>
  );
}
