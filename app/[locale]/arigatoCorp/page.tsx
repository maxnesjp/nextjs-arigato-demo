import { getTranslations, setRequestLocale } from "next-intl/server";
import React from "react";

type Props = {
  params: { locale: string };
};

export async function ArigatoCorpHome({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Arigato" });

  return <div>{t("description")}</div>;
}

export default ArigatoCorpHome;
