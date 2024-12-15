import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { Machinery } from "@/lib/arigato/types";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import LoadingPlaceholder from "@/components/LoadingPlaceholder";
import ProductDetailsExpansion from "@/components/ProductDetailsExpansion";

interface Props {
  params: Promise<{ id: string; locale: string }>;
}

const ProductDetails = async ({ params }: Props) => {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Jay" });
  const productId = parseInt(await id, 10);

  const machineryData: { machinery: Machinery[] } = await import(
    `/messages/${locale}/machinery.json`
  );
  const products: Machinery[] = machineryData.machinery;
  const product = products.find((item) => item.id === productId);

  if (!product) return notFound();

  // const productJsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "Product",
  //   name: product.title,
  //   description: product.description,
  //   image: product.image,
  //   offers: {
  //     "@type": "AggregateOffer",
  //     availability: product.availability
  //       ? "https://schema.org/InStock"
  //       : "https://schema.org/OutOfStock",
  //   },
  // };

  // Detailed description values
  const productDetails = [
    { label: t("labels.size"), value: product.size },
    { label: t("labels.weight"), value: product.weight },
    { label: t("labels.power"), value: product.power },
    { label: t("labels.engineType"), value: product.engineType },
    { label: t("labels.maxDiggingDepth"), value: product.maxDiggingDepth },
    { label: t("labels.bucketCapacity"), value: product.bucketCapacity },
    { label: t("labels.operatingPressure"), value: product.operatingPressure },
    { label: t("labels.maxSpeed"), value: product.maxSpeed },
    { label: t("labels.fuelCapacity"), value: product.fuelCapacity },
    {
      label: t("labels.hydraulicSystemCapacity"),
      value: product.hydraulicSystemCapacity,
    },
    { label: t("labels.year"), value: product.year },
    { label: t("labels.country"), value: product.country },
    { label: t("labels.manufacturer"), value: product.manufacturer },
    { label: t("labels.price"), value: product.price },
    { label: t("labels.warranty"), value: product.warranty },
    { label: t("labels.features"), value: product.features },
  ];

  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <div className="flex flex-col min-h-screen">
        <h1 className="text-3xl font-bold mb-4 text-center">{product.title}</h1>
        <div className="flex flex-col md:flex-row justify-center items-center p-4 sm:p-6 max-w-4xl mx-auto">
          <div className="w-full md:w-7/12 flex justify-center items-center">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
            />
          </div>
          <div className="w-full md:w-5/12 mt-3 md:mt-0 pl-0 md:pl-6">
            <p className="text-gray-700 mb-4 text-center sm:text-left">
              {product.description}
            </p>
            <div className="flex justify-center">
              <button className="bg-slate-300 px-2 py-1 rounded-md text-blue-600 my-3 text-lg">
                {t("addToCart")}
              </button>
            </div>
            <ProductDetailsExpansion productDetails={productDetails} />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ProductDetails;
