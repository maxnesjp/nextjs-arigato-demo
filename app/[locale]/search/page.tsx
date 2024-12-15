import Grid from "@/components/grid";
import ProductGridItems from "@/components/ProductGridItems";
import { Machinery } from "@/lib/arigato/types";
import { defaultSort, sorting } from "@/lib/constants";
import { setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

type Props = {
  params: {
    locale: Promise<string>;
  };
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const dynamic = "force-dynamic";

export default async function SearchPage({ params, searchParams }: Props) {
  const locale = await params.locale;
  const search = await searchParams;

  // Set the locale for translations
  setRequestLocale(locale);
  const { sort, q: searchValue } = search as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const machineryData: { machinery: Machinery[] } = await import(
    `/messages/${locale}/machinery.json`
  );
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
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
