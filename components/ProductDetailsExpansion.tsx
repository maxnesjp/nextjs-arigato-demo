"use client";
import { ProductDetailsLabelValue } from "@/lib/arigato/types";
import React, { useState } from "react";

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
          <button
            onClick={() => setShowAll(true)}
            className="text-blue-600 text-sm mt-2 transition-all duration-300 ease-in-out"
          >
            Show more
          </button>
        )}
      </div>

      {/* Animated section for showing more details */}
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
          <button
            onClick={() => setShowAll(false)}
            className="text-blue-600 text-sm mt-2 transition-all duration-300 ease-in-out"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsExpansion;
