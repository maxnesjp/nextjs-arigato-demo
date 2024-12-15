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
  locale: string;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export const dynamic = "force-dynamic";

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
  params: Promise<{ locale: string }>;
}) {
  const searchParams = await props.searchParams;
  const { locale } = await props.params;
  // Set the locale for translations

  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = [
    {
      id: 1,
      category: "jay",
      title: "Excavator",
      description: "Used for digging trenches, demolition, and heavy lifting.",
      size: "Large",
      availability: true,
      image: "/images/escavator.jpeg",
      dimensions: {
        length: "10.5m",
        width: "3.5m",
        height: "3.7m",
      },
      weight: "20,000 kg",
      power: "150 kW",
      engineType: "Diesel",
      maxDiggingDepth: "7.0m",
      bucketCapacity: "1.2 m³",
      operatingPressure: "35 MPa",
      maxSpeed: "5.5 km/h",
      fuelCapacity: "400 liters",
      hydraulicSystemCapacity: "200 liters",
      year: 2022,
      country: "Japan",
      manufacturer: "Komatsu",
      price: "$150,000",
      warranty: "2 years / 2000 hours",
      features: [
        "360-degree rotation",
        "Automatic lubrication system",
        "Heavy-duty undercarriage",
        "Advanced hydraulic control",
      ],
    },
  ];
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
