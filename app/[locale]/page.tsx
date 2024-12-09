import { getTranslations } from "next-intl/server";

interface Props {
  locale: string;
}

export default async function IndexPage({
  params,
}: {
  params: Promise<Props>;
}) {
  // Resolve params and get locale
  const { locale } = await params;
  console.log("Locale:", locale);

  // Fetch translations for the IndexPage
  const t = await getTranslations("IndexPage");
  const title = t("title");
  console.log("Fetched title:", title);

  // Pass the title as params to PageLayout after resolving it
  return <h1>pp</h1>;
}
