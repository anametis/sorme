'use client';
import { ShoppingCart } from "lucide-react";
import React from "react";
import { useStore } from "@/hooks/zustand/store";

interface ShoppingCartWithBadgeProps {
  cartItemCount: number;
}

const ShoppingCartWithBadge: React.FC<ShoppingCartWithBadgeProps> = ({
  cartItemCount,
}) => {
  const cartProducts = useStore((state) => state.cartProducts)
  return (
    <div className="relative flex items-center ">
      <ShoppingCart className="" />
      <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-red-500 rounded-full -mt-2 -mr-2 flex items-center justify-center">
        {cartProducts.length > 0 ? cartProducts.length : 0}
      </span>
    </div>
  );
};

export default ShoppingCartWithBadge;
