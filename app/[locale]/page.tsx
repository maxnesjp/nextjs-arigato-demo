import { getTranslations, setRequestLocale } from "next-intl/server";
import PageLayout from "@/components/PageLayout";

type Props = {
  locale: string;
};

export default async function IndexPage({
  params,
}: {
  params: Promise<Props>;
}) {
  // Enable static rendering
  const l = (await params).locale;
  setRequestLocale(l);

  const t = await getTranslations({ l, namespace: "IndexPage" });

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
