import Grid from "@/components/grid";
import ProductGridItems from "@/components/ProductGridItems";
import { Machinery } from "@/lib/arigato/types";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export const dynamic = "force-dynamic";

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
  params: Promise<{ locale: string }>;
}) {
  const searchParams = await props.searchParams;
  const { locale } = await props.params;
  // Set the locale for translations

  //  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { q: searchValue } = searchParams as { [key: string]: string };
  // const { sortKey, reverse } =
  //   sorting.find((item) => item.slug === sort) || defaultSort;

  const machineryData = await import(`/messages/${locale}/machinery.json`);
  const products: Machinery[] = machineryData.machinery;

  const resultsText = products.length > 1 ? "results" : "result";

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? "There are no products that match "
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} locale={locale} />
        </Grid>
      ) : null}
    </>
  );
}
