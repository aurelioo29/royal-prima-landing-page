import { Link } from "@/i18n/navigation";

import type { BlogCategoryNavProps } from "../types/blog.types";

function createCategoryHref(category: string, viewMode: string) {
  const searchParams = new URLSearchParams();

  if (category !== "all") {
    searchParams.set("category", category);
  }

  if (viewMode === "list") {
    searchParams.set("view", "list");
  }

  const query = searchParams.toString();

  return query ? `/blog?${query}#articles` : "/blog#articles";
}

export default function BlogCategoryNav({
  categories,
  activeCategory,
  viewMode,
}: BlogCategoryNavProps) {
  return (
    <nav aria-label="Kategori berita" className="overflow-x-auto">
      <ul className="m-0! flex min-w-max list-none! items-center gap-2 p-0!">
        {categories.map((category) => {
          const active = category.key === activeCategory;

          return (
            <li key={category.key} className="list-none!">
              <Link
                href={createCategoryHref(category.key, viewMode)}
                aria-current={active ? "page" : undefined}
                className={`inline-flex h-11 items-center gap-3 border px-4 text-sm font-semibold no-underline! transition-all duration-200 ${
                  active
                    ? "border-[#0077B6] bg-[linear-gradient(135deg,#00A4E4_0%,#0077B6_100%)] text-white! shadow-[0_8px_22px_rgba(0,119,182,0.18)]"
                    : "border-[#D5EAF3] bg-white text-[#57778C]! hover:border-[#00A4E4] hover:bg-[#F3FBFF] hover:text-[#0077B6]!"
                }`}
              >
                {category.label}

                <span
                  className={`text-[11px] ${
                    active ? "text-white/72" : "text-[#8AA1AF]"
                  }`}
                >
                  {category.count}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
