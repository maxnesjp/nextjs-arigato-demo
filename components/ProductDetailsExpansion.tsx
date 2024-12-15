"use client";
import { ProductDetailsLabelValue } from "@/lib/arigato/types";
import React, { useState } from "react";
import ShowMoreButton from "./ShowMoreButton"; // Import the new button component

const ProductDetailsExpansion = ({
  productDetails,
}: ProductDetailsLabelValue) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        {productDetails.slice(0, 4).map((detail, index) => (
          <p key={index} className="text-sm text-gray-600">
            <strong>{detail.label}:</strong> {detail.value}
          </p>
        ))}
        {!showAll && (
          <ShowMoreButton
            toggleShowAll={() => setShowAll(true)}
            showAll={showAll}
          />
        )}
      </div>

      <div
        className={`space-y-2 col-span-2 overflow-hidden transition-all duration-300 ease-in-out ${
          showAll ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {productDetails.slice(4).map((detail, index) => (
          <p key={index} className="text-sm text-gray-600">
            <strong>{detail.label}:</strong> {detail.value}
          </p>
        ))}
        {showAll && (
          <ShowMoreButton
            toggleShowAll={() => setShowAll(false)}
            showAll={showAll}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetailsExpansion;
