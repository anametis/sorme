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
      <MaxWithWrapper >
        <div></div>


      </MaxWithWrapper>
      <Footer />
    </>
  );
}
