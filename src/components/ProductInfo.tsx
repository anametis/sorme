import React from "react";

interface ProductInfoProps {
  title: string;
  productId: string;
  description: string;
  rating: number;
  ratingCount: number;
  className?: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  productId,
  description,
  rating,
  ratingCount,
  className
}) => {
  return (
    <div className={`p-4 h-full bg-[#FFFAFA] rounded-[2rem] border border-pink-200 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-400">Product ID : {productId}</p>
      <p className="my-4 text-gray-700 text-2xl font-light">{description}</p>
        <div className="flex items-center justify-start gap-4">
          <p>Product rating:</p>
          <span className="text-yellow-400 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < rating ? "fill-current" : "fill-current text-gray-300"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
          </span>
          <span className="ml-2 text-gray-500">{ratingCount} {ratingCount > 1 ? "people" : "person"} rated</span>
        </div>
    </div>
  );
};

export default ProductInfo;
