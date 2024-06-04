'use client';
import SpacialOffer from "@/components/SpacialOffer";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductInfo from "@/components/ProductInfo";
import DiscountCard from "@/components/DiscountCard";
import SellerInfo from "@/components/SellerInfo";
import ProductImg from "@/components/ProductImg";
import { useParams } from "next/navigation";
import products from "@/data/products";

export default function ProductDetails(): JSX.Element {
  const {productId} = useParams();
  const product = products.find((p) => p.id === productId);

  return (
    <div className="flex flex-col min-h-screen flex-wrap ">
      <SpacialOffer />
      <Header />
      <MaxWithWrapper className="flex flex-col items-center justify-center">
        <div className="flex justify-between items-center flex-wrap">
          <ProductImg />
          <ProductInfo
            title={product?.name}
            productId={product?.id}
            description={product?.description}
            rating={product?.rating}
            ratingCount={product?.rating}
            className="w-1/2 min-w-96"
          />
        </div>
        <div className="flex items-center w-full justify-between flex-wrap">
          <DiscountCard productId={product.id} originalPrice={product.price} discount={product.discount} finalPrice={product.price * product.discount} />
          <SellerInfo
            seller="sorme"
            brand="Follero"
            shippingLocation="New York"
          />
        </div>
      </MaxWithWrapper>
      <Footer />
    </div>
  );
}
