import type {
  BlogArticle,
  BlogCategoryKey,
  BlogCategoryOption,
  ResolvedBlogArticle,
} from "../../types/blog.types";

export type BlogArticleDetailSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  items?: readonly string[];
};

export type BlogArticleDetailQuote = {
  text: string;
  source?: string;
};

export type BlogArticleAuthor = {
  name: string;
  role: string;
  initials: string;
  biography: string;
};

export type BlogArticleDetail = {
  slug: string;
  lead: string;

  tags: readonly string[];
  keyPoints: readonly string[];

  sections: readonly BlogArticleDetailSection[];

  quote?: BlogArticleDetailQuote;

  author: BlogArticleAuthor;
};

export type BlogArticleBodyLabels = {
  keyPoints: string;
  author: string;
  medicalNotice: string;
};

export type BlogArticleBodyProps = {
  detail: BlogArticleDetail;
  labels: BlogArticleBodyLabels;
};

export type BlogShareLabels = {
  title: string;
  facebook: string;
  linkedin: string;
  whatsapp: string;
  copy: string;
  copied: string;
};

export type BlogShareButtonsProps = {
  articleTitle: string;
  articleUrl: string;
  labels: BlogShareLabels;
};

export type BlogDetailSidebarLabels = {
  categoryTitle: string;
  popularTitle: string;
  appointmentEyebrow: string;
  appointmentTitle: string;
  appointmentDescription: string;
  appointmentAction: string;
};

export type BlogDetailSidebarProps = {
  categories: readonly BlogCategoryOption[];

  activeCategory: BlogCategoryKey;

  popularArticles: readonly ResolvedBlogArticle[];

  labels: BlogDetailSidebarLabels;
};

export type BlogDetailTemplateFactory = (
  article: BlogArticle,
) => Omit<BlogArticleDetail, "slug" | "author">;
