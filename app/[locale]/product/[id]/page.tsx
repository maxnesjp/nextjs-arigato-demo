import React, { Suspense, useState } from "react";
import { notFound } from "next/navigation";
import { Machinery, ProductDetailsLabelValue } from "@/lib/arigato/types";
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
        <div className="flex-1 p-4 sm:p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">
            {product.title}
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            {/* Image Section */}
            <div className="relative w-full md:w-2/3 h-56 sm:h-72 md:h-80 mb-6 md:mb-0">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="rounded-lg"
              />
            </div>

            {/* Product Details Section */}
            <div className="w-full md:w-1/3 pl-0 md:pl-6">
              <p className="text-gray-700 mb-4 text-center">
                {product.description}
              </p>

              <ProductDetailsExpansion productDetails={productDetails} />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ProductDetails;
