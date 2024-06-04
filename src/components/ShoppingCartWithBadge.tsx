import { ShoppingCart } from "lucide-react";
import React from "react";

interface ShoppingCartWithBadgeProps {
  cartItemCount: number;
}

const ShoppingCartWithBadge: React.FC<ShoppingCartWithBadgeProps> = ({
  cartItemCount,
}) => {
  return (
    <div className="relative flex items-center ">
      <ShoppingCart className="" />
      <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-red-500 rounded-full -mt-2 -mr-2 flex items-center justify-center">
        {cartItemCount}
      </span>
    </div>
  );
};

export default ShoppingCartWithBadge;
