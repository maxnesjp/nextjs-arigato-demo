import { Metadata } from "next";
import { notFound } from "next/navigation";

import Grid from "@/components/grid";
import ProductGridItems from "@/components/ProductGridItems";
import { defaultSort, sorting } from "@/lib/constants";
import { ListItem } from "@/components/filter";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Machinery } from "@/lib/arigato/types";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Default Title",
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
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

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
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
