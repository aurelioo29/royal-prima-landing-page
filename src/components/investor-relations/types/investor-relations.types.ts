export type InvestorDocumentCategory =
  | "prospectus"
  | "annualReport"
  | "financialStatement";

export type FinancialPeriodKey =
  | "march31"
  | "june30"
  | "september30"
  | "december31";

export type InvestorDocumentItem = {
  id: string;
  category: InvestorDocumentCategory;
  year: number;
  period?: FinancialPeriodKey;
  href: string;
  featured?: boolean;
};

export type ResolvedInvestorDocumentItem = InvestorDocumentItem & {
  eyebrow: string;
  title: string;
  description: string;
};

export type InvestorDocumentCardProps = {
  document: ResolvedInvestorDocumentItem;
  openLabel: string;
  pdfLabel: string;
  featured?: boolean;
};

export type InvestorIconName =
  | "document"
  | "download"
  | "arrow"
  | "report"
  | "financial"
  | "calendar"
  | "building";

export type InvestorIconProps = {
  name: InvestorIconName;
  className?: string;
};
