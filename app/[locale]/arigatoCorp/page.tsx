import { getTranslations, setRequestLocale } from "next-intl/server";
import React from "react";

type Props = {
  params: { locale: string };
};

const ArigatoCorpHome = async ({ params }: { params: Promise<Props> }) => {
  const { locale } = (await params).params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Arigato" });

  return <div>{t("description")}</div>;
};

export default ArigatoCorpHome;
