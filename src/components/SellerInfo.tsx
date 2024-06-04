import Image from "next/image";
import React from "react";

interface ProductDetailsProps {
  seller: string;
  brand: string;
  shippingLocation: string;
}

const SellerInfo: React.FC<ProductDetailsProps> = ({
  seller,
  brand,
  shippingLocation,
}) => {
  return (
    <div className="flex items-center justify-center w-1/2 bg-[#FFFAFA] h-56 rounded-[2rem] border-[#F9CCD7] border gap-8 p-4 min-w-96">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-center w-full">
          <Image
            src={"/images/shop-location.svg"}
            alt="shop-location icon"
            width={80}
            height={80}
          />
          <p>Seller: {seller}</p>
        </div>
        <div className="flex items-center justify-center w-full">
          <Image
            src={"/images/approval.svg"}
            alt="approval icon"
            width={80}
            height={800}
          />
          <p>Brand : {brand} </p>
        </div>
      </div>
      
      <div className="flex items-center justify-center w-full">
        <Image
          src={"/images/delivery.svg"}
          alt="delivery icon"
          width={80}
          height={80}
        />
        <p>Free Shipping to {shippingLocation}</p>
      </div>
    </div>
  );
};

export default SellerInfo;
