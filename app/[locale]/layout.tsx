import type { Metadata } from "next";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BaseLayout from "@/components/BaseLayout";
import { routing } from "@/i18n/routing";
import Footer from "@/components/Footer";

type Locale = (typeof routing.locales)[number];

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// Generate static params for all available locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Generate metadata for the current locale
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params; // No need to await params

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}

// Main layout component
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
