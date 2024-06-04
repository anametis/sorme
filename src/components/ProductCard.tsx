import Image from "next/image";
import React from "react";

interface ProductCardProps {
  imageSrc: string;
  productName: string;
  price: number;
  rating: number;
  reviewers: number;
  productDescription: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  productName,
  price,
  rating,
  reviewers,
  productDescription,
}) => {
  return (
    <div className="flex items-center  justify-between p-10 bg-white rounded-lg shadow-sm w-[30%] border-gray-200 border-[1px] min-w-[400px] max-w-[800px]">
      {/* {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill={i < rating ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-5 h-5 ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.062 6.352a1 1 0 00.95.69h6.708c.969 0 1.371 1.24.588 1.81l-5.427 3.94a1 1 0 00-.364 1.118l2.062 6.352c.3.921-.755 1.688-1.54 1.118l-5.427-3.94a1 1 0 00-1.175 0l-5.427 3.94c-.784.57-1.838-.197-1.539-1.118l2.062-6.352a1 1 0 00-.364-1.118l-5.427-3.94c-.783-.57-.38-1.81.588-1.81h6.708a1 1 0 00.95-.69l2.062-6.352z"
                />
              </svg>
            ))} */}
      <div className="flex flex-col">
        <Image
          src={imageSrc}
          alt={productName}
          width={240}
          height={240}
          className="object-cover rounded-md"
        />
        <p>{productDescription}</p>
      </div>
      <div className="flex flex-col h-full justify-end mb-1 font-bold text-pink-300 text-3xl">
        {price}$
      </div>
      <div className="flex flex-col justify-center items-center">
        {reviewers} {reviewers === 1 ? "person" : "people"}
        <Image
          src="/images/Gstars.svg"
          alt={productName}
          width={50}
          height={50}
          className="object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ProductCard;
