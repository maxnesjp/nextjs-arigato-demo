import { Metadata } from "next";
import { notFound } from "next/navigation";

import Grid from "@/components/grid";
import ProductGridItems from "@/components/ProductGridItems";
import { defaultSort, sorting } from "@/lib/constants";
import { ListItem } from "@/components/filter";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Machinery } from "@/lib/arigato/types";

type Props = {
  locale: Promise<string>;
  category: Promise<{ collection: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale, category } = await props;

  // Resolve both promises
  const resolvedLocale = await locale;
  const resolvedCategory = await category;

  if (!resolvedCategory || !resolvedCategory.collection) {
    return notFound();
  }

  const t = await getTranslations({
    locale: resolvedLocale,
    namespace: "Filters",
  });

  const collection: ListItem[] = Array.isArray(t.raw("items"))
    ? t.raw("items")
    : [];

  // If collections are empty, return notFound
  if (collection.length === 0) return notFound();

  // Find the collection matching the category
  const currentCategory = collection.find(
    (m) => m.title === resolvedCategory.collection
  );

  if (!currentCategory) return notFound();

  return {
    title: currentCategory.title || "Default Title",
  };
}

type Props2 = {
  title: string;
  searchParams?: { [key: string]: string | string[] | undefined };
  locale: string;
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<Props2>;
}) {
  // Resolve all promises
  console.log("123");
  const { title, searchParams = {}, locale } = await params;

  // Ensure searchParams has a default value to prevent destructuring errors
  const { sort = "" } = searchParams as { [key: string]: string };

  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  // Import machinery data with proper error handling
  let machineryData: { machinery: Machinery[] };
  try {
    machineryData = await import(`/messages/${locale}/machinery.json`);
  } catch (error) {
    console.error("Error importing machinery data:", error);
    return notFound(); // Return notFound on failure
  }

  const products: Machinery[] = machineryData.machinery;
  const productsFromCurrentCategory: Machinery[] = products.filter(
    (m) => m.title === title
  );

  // Render the results
  return (
    <section>
      {productsFromCurrentCategory.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={productsFromCurrentCategory} />
        </Grid>
      )}
    </section>
  );
}

// const products = await getCollectionProducts({
//   collection,
//   sortKey,
//   reverse,
// });
