import React from "react";
import Image from "next/image";
import { Machinery } from "@/lib/arigato/types";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";

interface Props {
  products: Machinery[];
  locale: string;
}

const ProductsDisplay = async ({ params }: { params: Props }) => {
  const { locale, products } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-row gap-2">
      {products.map((item) => (
        <Link key={item.id} href={`/${locale}/products/${item.id}`}>
          <div className="w-full sm:w-1/2 border rounded-lg p-4 shadow-md">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Size:</strong> {item.size}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Availability:</strong>{" "}
              {item.availability ? "✅ Available" : "❌ Out of Stock"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsDisplay;
