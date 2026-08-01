import type { Metadata, Viewport } from "next";

import type { ReactNode } from "react";

import { Figtree, Poppins } from "next/font/google";

import { hasLocale, NextIntlClientProvider } from "next-intl";

import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { notFound } from "next/navigation";

import Header from "@/components/layout/header";

import { routing } from "@/i18n/routing";

import "../globals.css";
import Footer from "@/components/layout/footer";

const SITE_URL = process.env.SITE_URL ?? "https://beta.royalprima.com";

const OG_IMAGE = "/images/og/royal-prima-medan.png";

const LOGO_IMAGE = "/images/navbar/logo-royal.svg";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-secondary",
  display: "swap",
});

const OPEN_GRAPH_LOCALES: Record<string, string> = {
  id: "id_ID",
  en: "en_US",
};

type LocaleParams = {
  params: Promise<{
    locale: string;
  }>;
};

type LocaleLayoutProps = Readonly<{
  children: ReactNode;
}> &
  LocaleParams;

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  const siteName = t("siteName");
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(SITE_URL),

    title: {
      default: title,
      template: `%s | ${siteName}`,
    },

    description,

    applicationName: siteName,

    generator: "Next.js",

    referrer: "origin-when-cross-origin",

    keywords: [
      "RSU Royal Prima Medan",
      "Royal Prima Hospital",
      "rumah sakit Medan",
      "rumah sakit umum Medan",
      "dokter spesialis Medan",
      "jadwal dokter Medan",
      "layanan kesehatan Medan",
      "rumah sakit Sumatera Utara",
      "RSU Royal Prima",
      "Royal Prima Medan",
    ],

    authors: [
      {
        name: siteName,
        url: SITE_URL,
      },
    ],

    creator: siteName,
    publisher: siteName,

    category: "healthcare",

    formatDetection: {
      telephone: false,
      address: false,
      email: false,
    },

    openGraph: {
      type: "website",

      locale: OPEN_GRAPH_LOCALES[locale] ?? locale,

      siteName,

      title,

      description,

      images: [
        {
          url: OG_IMAGE,
          alt: t("openGraphAlt"),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [OG_IMAGE],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",

  themeColor: "#ffffff",

  colorScheme: "light",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const [messages, metadataT] = await Promise.all([
    getMessages(),

    getTranslations({
      locale,
      namespace: "Metadata",
    }),
  ]);

  const hospitalJsonLd = {
    "@context": "https://schema.org",

    "@type": "Hospital",

    "@id": `${SITE_URL}/#hospital`,

    name: metadataT("siteName"),

    alternateName: "Royal Prima Hospital",

    url: SITE_URL,

    logo: `${SITE_URL}${LOGO_IMAGE}`,

    image: `${SITE_URL}${OG_IMAGE}`,

    description: metadataT("description"),

    telephone: "+62-61-888-13182",

    email: "contact@royalprima.com",

    address: {
      "@type": "PostalAddress",

      streetAddress: "Jl. Ayahanda No. 68A, Sei Putih Tengah",

      addressLocality: "Medan",

      addressRegion: "Sumatera Utara",

      postalCode: "20118",

      addressCountry: "ID",
    },

    sameAs: [
      "https://www.tiktok.com/@rsuroyalprima",
      "https://www.instagram.com/royalprima.mdn/",
      "https://www.facebook.com/RSURoyalPrimaMedanOfficial/",
    ],
  };

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${figtree.variable} ${poppins.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen overflow-x-hidden bg-white text-[#123B56] antialiased"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(hospitalJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header logoSrc={LOGO_IMAGE} />

          <div className="min-h-screen pt-[var(--site-header-height)]">
            {children}

            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
