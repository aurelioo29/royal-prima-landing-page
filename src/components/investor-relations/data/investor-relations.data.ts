import type { InvestorDocumentItem } from "../types/investor-relations.types";

export const investorRelationsConfig = {
  heroImage: "/images/investor-relations/investor-relations-hero.webp",
} as const;

export const investorDocuments = [
  // Prospectus
  {
    id: "prospectus-2018",
    category: "prospectus",
    year: 2018,
    featured: true,
    href: "/documents/investor-relations/prospectus/prospectus-pt-royal-prima-2018.pdf",
  },

  // Annual Reports
  {
    id: "annual-report-2025",
    category: "annualReport",
    year: 2025,
    href: "/documents/investor-relations/annual-reports/annual-report-2025.pdf",
  },
  {
    id: "annual-report-2024",
    category: "annualReport",
    year: 2024,
    href: "/documents/investor-relations/annual-reports/annual-report-2024.pdf",
  },
  {
    id: "annual-report-2023",
    category: "annualReport",
    year: 2023,
    href: "/documents/investor-relations/annual-reports/annual-report-2023.pdf",
  },
  {
    id: "annual-report-2022",
    category: "annualReport",
    year: 2022,
    href: "/documents/investor-relations/annual-reports/annual-report-2022.pdf",
  },
  {
    id: "annual-report-2021",
    category: "annualReport",
    year: 2021,
    href: "/documents/investor-relations/annual-reports/annual-report-2021.pdf",
  },
  {
    id: "annual-report-2020",
    category: "annualReport",
    year: 2020,
    href: "/documents/investor-relations/annual-reports/annual-report-2020.pdf",
  },
  {
    id: "annual-report-2019",
    category: "annualReport",
    year: 2019,
    href: "/documents/investor-relations/annual-reports/annual-report-2019.pdf",
  },
  {
    id: "annual-report-2018",
    category: "annualReport",
    year: 2018,
    href: "/documents/investor-relations/annual-reports/annual-report-2018.pdf",
  },

  // Financial Statements — 2026
  {
    id: "financial-statement-2026-03-31",
    category: "financialStatement",
    year: 2026,
    period: "march31",
    href: "/documents/investor-relations/financial-statements/2026/financial-statement-2026-03-31.pdf",
  },

  // Financial Statements — 2025
  {
    id: "financial-statement-2025-12-31",
    category: "financialStatement",
    year: 2025,
    period: "december31",
    href: "/documents/investor-relations/financial-statements/2025/financial-statement-2025-12-31.pdf",
  },
  {
    id: "financial-statement-2025-09-30",
    category: "financialStatement",
    year: 2025,
    period: "september30",
    href: "/documents/investor-relations/financial-statements/2025/financial-statement-2025-09-30.pdf",
  },
  {
    id: "financial-statement-2025-06-30",
    category: "financialStatement",
    year: 2025,
    period: "june30",
    href: "/documents/investor-relations/financial-statements/2025/financial-statement-2025-06-30.pdf",
  },
  {
    id: "financial-statement-2025-03-31",
    category: "financialStatement",
    year: 2025,
    period: "march31",
    href: "/documents/investor-relations/financial-statements/2025/financial-statement-2025-03-31.pdf",
  },

  // Financial Statements — 2024
  {
    id: "financial-statement-2024-12-31",
    category: "financialStatement",
    year: 2024,
    period: "december31",
    href: "/documents/investor-relations/financial-statements/2024/financial-statement-2024-12-31.pdf",
  },
  {
    id: "financial-statement-2024-09-30",
    category: "financialStatement",
    year: 2024,
    period: "september30",
    href: "/documents/investor-relations/financial-statements/2024/financial-statement-2024-09-30.pdf",
  },
  {
    id: "financial-statement-2024-06-30",
    category: "financialStatement",
    year: 2024,
    period: "june30",
    href: "/documents/investor-relations/financial-statements/2024/financial-statement-2024-06-30.pdf",
  },
  {
    id: "financial-statement-2024-03-31",
    category: "financialStatement",
    year: 2024,
    period: "march31",
    href: "/documents/investor-relations/financial-statements/2024/financial-statement-2024-03-31.pdf",
  },

  // Financial Statements — 2023
  {
    id: "financial-statement-2023-12-31",
    category: "financialStatement",
    year: 2023,
    period: "december31",
    href: "/documents/investor-relations/financial-statements/2023/financial-statement-2023-12-31.pdf",
  },
  {
    id: "financial-statement-2023-09-30",
    category: "financialStatement",
    year: 2023,
    period: "september30",
    href: "/documents/investor-relations/financial-statements/2023/financial-statement-2023-09-30.pdf",
  },
  {
    id: "financial-statement-2023-06-30",
    category: "financialStatement",
    year: 2023,
    period: "june30",
    href: "/documents/investor-relations/financial-statements/2023/financial-statement-2023-06-30.pdf",
  },
  {
    id: "financial-statement-2023-03-31",
    category: "financialStatement",
    year: 2023,
    period: "march31",
    href: "/documents/investor-relations/financial-statements/2023/financial-statement-2023-03-31.pdf",
  },

  // Financial Statements — 2022
  {
    id: "financial-statement-2022-12-31",
    category: "financialStatement",
    year: 2022,
    period: "december31",
    href: "/documents/investor-relations/financial-statements/2022/financial-statement-2022-12-31.pdf",
  },
  {
    id: "financial-statement-2022-09-30",
    category: "financialStatement",
    year: 2022,
    period: "september30",
    href: "/documents/investor-relations/financial-statements/2022/financial-statement-2022-09-30.pdf",
  },
  {
    id: "financial-statement-2022-06-30",
    category: "financialStatement",
    year: 2022,
    period: "june30",
    href: "/documents/investor-relations/financial-statements/2022/financial-statement-2022-06-30.pdf",
  },
  {
    id: "financial-statement-2022-03-31",
    category: "financialStatement",
    year: 2022,
    period: "march31",
    href: "/documents/investor-relations/financial-statements/2022/financial-statement-2022-03-31.pdf",
  },

  // Financial Statements — 2021
  {
    id: "financial-statement-2021-12-31",
    category: "financialStatement",
    year: 2021,
    period: "december31",
    href: "/documents/investor-relations/financial-statements/2021/financial-statement-2021-12-31.pdf",
  },
  {
    id: "financial-statement-2021-09-30",
    category: "financialStatement",
    year: 2021,
    period: "september30",
    href: "/documents/investor-relations/financial-statements/2021/financial-statement-2021-09-30.pdf",
  },
  {
    id: "financial-statement-2021-06-30",
    category: "financialStatement",
    year: 2021,
    period: "june30",
    href: "/documents/investor-relations/financial-statements/2021/financial-statement-2021-06-30.pdf",
  },
  {
    id: "financial-statement-2021-03-31",
    category: "financialStatement",
    year: 2021,
    period: "march31",
    href: "/documents/investor-relations/financial-statements/2021/financial-statement-2021-03-31.pdf",
  },

  // Financial Statements — 2020
  {
    id: "financial-statement-2020-12-31",
    category: "financialStatement",
    year: 2020,
    period: "december31",
    href: "/documents/investor-relations/financial-statements/2020/financial-statement-2020-12-31.pdf",
  },
  {
    id: "financial-statement-2020-09-30",
    category: "financialStatement",
    year: 2020,
    period: "september30",
    href: "/documents/investor-relations/financial-statements/2020/financial-statement-2020-09-30.pdf",
  },
  {
    id: "financial-statement-2020-06-30",
    category: "financialStatement",
    year: 2020,
    period: "june30",
    href: "/documents/investor-relations/financial-statements/2020/financial-statement-2020-06-30.pdf",
  },
  {
    id: "financial-statement-2020-03-31",
    category: "financialStatement",
    year: 2020,
    period: "march31",
    href: "/documents/investor-relations/financial-statements/2020/financial-statement-2020-03-31.pdf",
  },
] satisfies readonly InvestorDocumentItem[];
