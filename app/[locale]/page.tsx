import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageLayout from "@/components/PageLayout";

type Props = {
  params: { locale: string };
};

export default async function IndexPage({ params }: Props) {
  // Enable static rendering
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "IndexPage" });

  return (
    <PageLayout title={t("title")}>
      <p className="max-w-[590px]">
        {t.rich("description", {
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          ),
        })}
      </p>
    </PageLayout>
  );
}
