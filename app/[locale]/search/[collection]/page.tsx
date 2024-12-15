import { Metadata } from "next";
import { notFound } from "next/navigation";
import Grid from "@/components/grid";
import ProductGridItems from "@/components/ProductGridItems";
import { getTranslations } from "next-intl/server";
import { Machinery } from "@/lib/arigato/types";

type Category = {
  title: string;
  path: string;
};

export async function generateMetadata(props: {
  params: Promise<{ locale: string; collection: string }>;
}): Promise<Metadata> {
  const { locale, collection } = await props.params;

  const t = await getTranslations({
    locale: locale,
    namespace: "Filters",
  });

  const items: Category[] = t.raw("items");

  if (items.length === 0) return notFound();

  // Find the collection matching the category
  const currentCategory = items.find((m) => m.path === collection);
  if (!currentCategory) return notFound();

  return {
    title: currentCategory.title || "Default Title",
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ locale: string; collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { locale, collection } = await props.params;
  //const searchParams = await props;
  const t = await getTranslations({ locale, namespace: "Jay" });

  // Debugging logs
  //console.log("Params in CategoryPage:", await props.params);

  //const { sort } = searchParams as unknown as { [key: string]: string };
  // const { sortKey, reverse } =
  //   sorting.find((item) => item.slug === sort) || defaultSort;

  const machineryData = await import(`/messages/${locale}/machinery.json`);

  const products: Machinery[] = machineryData.machinery;
  //console.log(products);
  // console.log(params.collection);
  const productsFromCurrentCategory: Machinery[] = products.filter(
    (m) => m.category == collection
  );
  //console.log(productsFromCurrentCategory);

  // Render the results
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p className="text-gray-600 mb-6">{t("description")}</p> */}
      {/* <ProductsDisplay
        params={{
          locale: locale,
        }}
      /> */}
      <section>
        {productsFromCurrentCategory.length === 0 ? (
          <p className="py-3 text-lg">{t("notFound")}</p>
        ) : (
          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProductGridItems
              products={productsFromCurrentCategory}
              locale={locale}
            />
          </Grid>
        )}
      </section>
    </div>
  );
}

// const products = await getCollectionProducts({
//   collection,
//   sortKey,
//   reverse,
// });
