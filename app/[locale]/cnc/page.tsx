import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import React from "react";

type Props = {
  params: { locale: string };
};

const page = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "CNC" });
  return <div>{t("description")}</div>;
};

export default page;
