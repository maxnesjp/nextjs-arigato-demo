import { getTranslations, setRequestLocale } from "next-intl/server";
import React from "react";

type Props = {
  locale: string;
};

const page = async ({ params }: { params: Promise<Props> }) => {
  const l = (await params).locale;
  setRequestLocale(l);

  const t = await getTranslations({ l, namespace: "CNC" });
  return <div>{t("description")}</div>;
};

export default page;
