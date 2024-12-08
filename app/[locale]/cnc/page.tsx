import { getTranslations, setRequestLocale } from "next-intl/server";
import React from "react";

type Props = {
  params: { locale: string };
};

const page = async ({ params }: { params: Promise<Props> }) => {
  const { locale } = (await params).params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "CNC" });
  return <div>{t("description")}</div>;
};

export default page;
