import SpacialOffer from "@/components/SpacialOffer";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductInfo from "@/components/ProductInfo";
import DiscountCard from "@/components/DiscountCard";
import SellerInfo from "@/components/SellerInfo";
import ProductImg from "@/components/ProductImg";

export default function productDetails(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen flex-wrap ">
      <SpacialOffer />
      <Header />
      <MaxWithWrapper className="flex flex-col items-center justify-center">
        <div className="flex justify-between items-center flex-wrap">
          <ProductImg />
          <ProductInfo
            title="Matte floral pancake"
            productId="654659"
            description="Floral pancake, which is made of natural materials, is soft, very light on the skin and does not feel heavy on the skin in any way. Also, this pancake does not dry the skin, does not rub on the skin, has a high durability and a velvety and natural look. gives to the face"
            rating={5}
            ratingCount={20}
            className="w-1/2 min-w-96"
          />
        </div>
        <div className="flex items-center w-full justify-between flex-wrap">
          <DiscountCard
            originalPrice="120$"
            discount="25%"
            finalPrice="67$"
            // onAddToCart={handleAddToCart}
          />
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
