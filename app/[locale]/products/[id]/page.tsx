import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { Machinery } from "@/lib/arigato/types";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import LoadingPlaceholder from "@/components/LoadingPlaceholder";

interface Props {
  params: Promise<{ id: string; locale: string }>;
}

const ProductDetails = async ({ params }: Props) => {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Arigato" });
  const productId = parseInt(await id, 10);

  // Retrieve the products list and find the matching product
  const products: Machinery[] = t.raw("machinery");
  const product = products.find((item) => item.id === productId);

  if (!product) return notFound();

  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">{product.title}</h1>

        <div className="relative w-full h-56 sm:h-72 md:h-80 mb-6">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <p className="text-gray-700 mb-4 text-center">{product.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <p>
              <strong>Size:</strong> {product.size}
            </p>
            <p>
              <strong>Weight:</strong> {product.weight}
            </p>
            <p>
              <strong>Power:</strong> {product.power}
            </p>
            <p>
              <strong>Engine Type:</strong> {product.engineType}
            </p>
            <p>
              <strong>Manufacturer:</strong> {product.manufacturer}
            </p>
            <p>
              <strong>Year:</strong> {product.year}
            </p>
            <p>
              <strong>Country:</strong> {product.country}
            </p>
          </div>

          <div className="space-y-2">
            <p>
              <strong>Max Digging Depth:</strong> {product.maxDiggingDepth}
            </p>
            <p>
              <strong>Bucket Capacity:</strong> {product.bucketCapacity}
            </p>
            <p>
              <strong>Price:</strong> {product.price}
            </p>
            <p>
              <strong>Availability:</strong>{" "}
              {product.availability ? "✅ Available" : "❌ Out of Stock"}
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ProductDetails;
