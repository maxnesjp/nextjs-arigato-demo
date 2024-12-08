import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import BaseLayout from "@/components/BaseLayout";
import { routing } from "@/i18n/routing";

type Props = {
  children: ReactNode;
  locale: string;
};

// Generate static params for all available locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Generate metadata for the current locale
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locale: string }>;
// }) {
//   const l = (await params).locale; // Destructure correctly

//   if (!routing.locales.includes(l as any)) {
//     notFound();
//   }

//   const t = await getTranslations({ l, namespace: "LocaleLayout" });

//   return {
//     title: t("title"),
//   };
// }

// Main layout component
export default async function LocaleLayout({
  params,
}: {
  params: Promise<Props>;
}) {
  const c = (await params).children;
  const l = (await params).locale;
  if (!routing.locales.includes(l as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(l);

  return <BaseLayout locale={l}>{c}</BaseLayout>;
}
