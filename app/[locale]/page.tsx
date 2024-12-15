import { getTranslations, setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function IndexPage({ params }: Props) {
  // Fetch translations for the IndexPage
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "IndexPage" });

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-lg">{t("description")}</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t("labels.companyInfo.industry")}
        </h2>
        <div className="flex-col gap-2">
          <div>
            <p>
              <strong>{t("labels.companyInfo.name")}:</strong>{" "}
              {t("companyInfo.name")}
            </p>
            <p>
              <strong>{t("labels.companyInfo.industry")}:</strong>{" "}
              {t("companyInfo.industry")}
            </p>
            <p>
              <strong>{t("labels.companyInfo.established")}:</strong>{" "}
              {t("companyInfo.established")}
            </p>
            <p>
              <strong>{t("labels.companyInfo.headquarters")}:</strong>{" "}
              {t("companyInfo.headquarters")}
            </p>
            <p>
              <strong>{t("labels.companyInfo.mission")}:</strong>{" "}
              {t("companyInfo.mission")}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t("labels.contact.title")}
        </h2>
        <div className="flex-col gap-2">
          <p>
            <strong>{t("labels.contact.email")}:</strong>{" "}
            <a href={`mailto:${t("contact.email")}`} className="text-blue-500">
              {t("contact.email")}
            </a>
          </p>
          <p>
            <strong>{t("labels.contact.phone")}:</strong>{" "}
            <a href={`tel:${t("contact.phone")}`} className="text-blue-500">
              {t("contact.phone")}
            </a>
          </p>
          <p>
            <strong>{t("labels.contact.address")}:</strong>{" "}
            {t("contact.address")}
          </p>
        </div>
      </section>
    </div>
  );
}
