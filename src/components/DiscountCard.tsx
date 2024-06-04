'use client';
import React from "react";
import { useStore } from "@/hooks/zustand/store";

interface PriceCardProps {
  productId: string;
  originalPrice: number;
  discount: number;
  finalPrice: number;
  onAddToCart?: () => void;
}

const DiscountCard: React.FC<PriceCardProps> = ({
  originalPrice,
  discount,
  finalPrice,
  productId,
  onAddToCart,
}) => {

  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="flex flex-col items-center justify-center w-1/3 min-w-96 bg-[#FFFAFA] h-56 rounded-[2rem] border-[#F9CCD7] border gap-8 ">
      <div className="flex items-center justify-between relative w-full px-10 py-4">
        <div className="text-[#FFE3EA] font-bold text-4xl relative">
          {originalPrice}
          <span className="bg-[#F19AA6] absolute w-full h-[0.1rem] rounded-full -rotate-12 left-0 top-5"></span>
        </div>
        <div className="text-gray-100 bg-[#F19AA6] w-10 h-6 rounded-full p-1 flex items-center justify-center">
          {discount}
        </div>
        <div className="text-[#F19AA6] font-bold text-4xl">{finalPrice}</div>
      </div>
      <button
        onClick={()=> addToCart({id: productId, price: finalPrice})}
        className="w-1/2 px-4 py-2 rounded-full bg-[#F39AA7] text-white text-2xl font-semibold focus:outline-none focus:ring focus:ring-pink-200 focus:ring-opacity-50 hover:bg-pink-500 transition ease-in-out"
      >
        Add to cart
      </button>
    </div>
  );
};
export default DiscountCard;
