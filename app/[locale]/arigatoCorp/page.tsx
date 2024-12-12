import { Machinery } from "@/lib/arigato/types";
import { getTranslations, setRequestLocale } from "next-intl/server";
import React from "react";
import ProductsDisplay from "@/components/product/ProductsDisplay";
import ProductsListScreenLayout from "@/components/ProductsListScreenLayout";

type Props = {
  locale: string;
};

const ArigatoCorpHome = async ({ params }: { params: Promise<Props> }) => {
  const l = (await params).locale;
  setRequestLocale(l);

  const t = await getTranslations({ l, namespace: "Arigato" });
  const machinery: Machinery[] = t.raw("machinery");

  return (
    <ProductsListScreenLayout>
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-gray-600 mb-6">{t("description")}</p>
        <ProductsDisplay
          params={{
            products: machinery,
            locale: l,
          }}
        />
      </div>
    </ProductsListScreenLayout>
  );
};

export default ArigatoCorpHome;
