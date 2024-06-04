"use client";
import Hero from "@/components/Hero";
import SpacialOffer from "@/components/SpacialOffer";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import OrderBy from "@/components/OrderBy";

export default function Productcategory() {
  const handleSortChange = (sortOption: string) => {
    console.log(`Selected sort option: `);
    // Add your sorting logic here
  };

  return (
    <>
      <SpacialOffer />
      <Header />
      <MaxWithWrapper>
        <OrderBy onSortChange={handleSortChange} className="my-4" />
        <div className="flex gap-10 flex-wrap justify-between">
          <ProductCard
            imageSrc="/images/p1.png"
            productName="Fix Arcanil powder"
            price={60}
            rating={5}
            reviewers={20}
            productDescription="Lorem ipsum dolor sit amet, "
          />
          <ProductCard
            imageSrc="/images/p1.png"
            productName="Fix Arcanil powder"
            price={60}
            rating={5}
            reviewers={20}
            productDescription="Lorem ipsum dolor sit amet, "
          />
          <ProductCard
            imageSrc="/images/p1.png"
            productName="Fix Arcanil powder"
            price={60}
            rating={5}
            reviewers={20}
            productDescription="Lorem ipsum dolor sit amet, "
          />
          <ProductCard
            imageSrc="/images/p1.png"
            productName="Fix Arcanil powder"
            price={60}
            rating={5}
            reviewers={20}
            productDescription="Lorem ipsum dolor sit amet, "
          />
        </div>
      </MaxWithWrapper>
      <Footer />
    </>
  );
}
