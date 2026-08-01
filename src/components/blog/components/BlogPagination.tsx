import { Link } from "@/i18n/navigation";

import type { BlogPaginationProps, BlogViewMode } from "../types/blog.types";

import BlogIcon from "./BlogIcon";

function createPageHref(
  page: number,
  category: string,
  viewMode: BlogViewMode,
) {
  const searchParams = new URLSearchParams();

  if (category !== "all") {
    searchParams.set("category", category);
  }

  if (page > 1) {
    searchParams.set("page", String(page));
  }

  if (viewMode === "list") {
    searchParams.set("view", "list");
  }

  const query = searchParams.toString();

  return query ? `/blog?${query}#articles` : "/blog#articles";
}

function getVisiblePages(currentPage: number, totalPages: number) {
  const pages = new Set<number>([
    1,
    totalPages,
    currentPage - 1,
    currentPage,
    currentPage + 1,
  ]);

  return [...pages]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);
}

export default function BlogPagination({
  currentPage,
  totalPages,
  activeCategory,
  viewMode,
  previousLabel,
  nextLabel,
  pageLabel,
}: BlogPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <nav
      aria-label={pageLabel}
      className="mt-14 flex flex-wrap items-center justify-center gap-2"
    >
      {currentPage > 1 && (
        <Link
          href={createPageHref(currentPage - 1, activeCategory, viewMode)}
          aria-label={previousLabel}
          className="inline-flex size-12 items-center justify-center border border-[#D8E8EF] bg-white text-[#123B56]! no-underline! transition-all hover:border-[#0077B6] hover:bg-[#F3FBFF] hover:text-[#0077B6]!"
        >
          <BlogIcon name="chevronLeft" className="size-5" />
        </Link>
      )}

      {visiblePages.map((page, index) => {
        const previousPage = visiblePages[index - 1];

        const showEllipsis = previousPage && page - previousPage > 1;

        const active = page === currentPage;

        return (
          <div key={page} className="flex items-center gap-2">
            {showEllipsis && (
              <span className="px-2 text-sm text-[#8AA1AF]">…</span>
            )}

            <Link
              href={createPageHref(page, activeCategory, viewMode)}
              aria-label={`${pageLabel} ${page}`}
              aria-current={active ? "page" : undefined}
              className={`inline-flex size-12 items-center justify-center border text-sm font-semibold no-underline! transition-all ${
                active
                  ? "border-[#0077B6] bg-[#0077B6] text-white! shadow-[0_8px_22px_rgba(0,119,182,0.18)]"
                  : "border-[#D8E8EF] bg-white text-[#123B56]! hover:border-[#0077B6] hover:bg-[#F3FBFF] hover:text-[#0077B6]!"
              }`}
            >
              {page}
            </Link>
          </div>
        );
      })}

      {currentPage < totalPages && (
        <Link
          href={createPageHref(currentPage + 1, activeCategory, viewMode)}
          aria-label={nextLabel}
          className="inline-flex size-12 items-center justify-center border border-[#D8E8EF] bg-white text-[#123B56]! no-underline! transition-all hover:border-[#0077B6] hover:bg-[#F3FBFF] hover:text-[#0077B6]!"
        >
          <BlogIcon name="chevronRight" className="size-5" />
        </Link>
      )}
    </nav>
  );
}
