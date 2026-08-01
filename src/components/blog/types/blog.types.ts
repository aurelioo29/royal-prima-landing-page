export type BlogCategoryKey =
  | "healthTips"
  | "hospitalNews"
  | "medicalEducation"
  | "community";

export type BlogViewMode = "grid" | "list";

export type BlogArticle = {
  id: string;
  slug: string;

  title: string;
  excerpt: string;

  image: string;
  imageAlt: string;

  category: BlogCategoryKey;

  publishedAt: string;
  author: string;
};

export type ResolvedBlogArticle = BlogArticle & {
  categoryLabel: string;
  publishedAtLabel: string;
};

export type BlogCategoryOption = {
  key: "all" | BlogCategoryKey;

  label: string;
  count: number;
};

export type BlogIconName =
  | "arrow"
  | "calendar"
  | "user"
  | "chevronLeft"
  | "chevronRight"
  | "external"
  | "category"
  | "grid"
  | "list";

export type BlogIconProps = {
  name: BlogIconName;
  className?: string;
};

export type BlogHeroSliderProps = {
  articles: readonly ResolvedBlogArticle[];

  readMoreLabel: string;
  previousLabel: string;
  nextLabel: string;
  paginationLabel: string;
};

export type BlogArticleCardProps = {
  article: ResolvedBlogArticle;
  readMoreLabel: string;
  viewMode: BlogViewMode;
};

export type BlogCategoryNavProps = {
  categories: readonly BlogCategoryOption[];

  activeCategory: "all" | BlogCategoryKey;

  viewMode: BlogViewMode;
};

export type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;

  activeCategory: "all" | BlogCategoryKey;

  viewMode: BlogViewMode;

  previousLabel: string;
  nextLabel: string;
  pageLabel: string;
};

export type BlogViewSwitcherProps = {
  viewMode: BlogViewMode;

  activeCategory: "all" | BlogCategoryKey;

  currentPage: number;

  gridLabel: string;
  listLabel: string;
};

export type BlogPoster = {
  image: string;
  imageAlt: string;
  href: string;
};

export type BlogPosterSectionProps = {
  poster: BlogPoster;

  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
};
