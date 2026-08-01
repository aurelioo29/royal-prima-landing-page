import { Link } from "@/i18n/navigation";

import type { BlogViewMode, BlogViewSwitcherProps } from "../types/blog.types";

import BlogIcon from "./BlogIcon";

function createViewHref(
  viewMode: BlogViewMode,
  activeCategory: string,
  currentPage: number,
) {
  const searchParams = new URLSearchParams();

  if (activeCategory !== "all") {
    searchParams.set("category", activeCategory);
  }

  if (currentPage > 1) {
    searchParams.set("page", String(currentPage));
  }

  if (viewMode === "list") {
    searchParams.set("view", "list");
  }

  const query = searchParams.toString();

  return query ? `/blog?${query}#articles` : "/blog#articles";
}

export default function BlogViewSwitcher({
  viewMode,
  activeCategory,
  currentPage,
  gridLabel,
  listLabel,
}: BlogViewSwitcherProps) {
  return (
    <div
      role="group"
      aria-label={`${gridLabel} / ${listLabel}`}
      className="flex items-center border border-[#D8E8EF] bg-white p-1"
    >
      <ViewButton
        mode="grid"
        currentMode={viewMode}
        href={createViewHref("grid", activeCategory, currentPage)}
        label={gridLabel}
      />

      <ViewButton
        mode="list"
        currentMode={viewMode}
        href={createViewHref("list", activeCategory, currentPage)}
        label={listLabel}
      />
    </div>
  );
}

type ViewButtonProps = {
  mode: BlogViewMode;
  currentMode: BlogViewMode;
  href: string;
  label: string;
};

function ViewButton({ mode, currentMode, href, label }: ViewButtonProps) {
  const active = mode === currentMode;

  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      aria-current={active ? "page" : undefined}
      className={`flex size-10 items-center justify-center no-underline! transition-all duration-200 ${
        active
          ? "bg-[#0077B6] text-white!"
          : "bg-white text-[#8AA1AF]! hover:bg-[#F3FBFF] hover:text-[#0077B6]!"
      }`}
    >
      <BlogIcon
        name={mode === "grid" ? "grid" : "list"}
        className="size-[19px]"
      />
    </Link>
  );
}
