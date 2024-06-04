"use client";
import { useReducer, useEffect, useState } from "react";
import Hero from "@/components/Hero";
import SpacialOffer from "@/components/SpacialOffer";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import OrderBy from "@/components/OrderBy";
import products from "@/data/products";

export default function Productcategory({ params }: { params: { productcategory: string } }) {
  const { productcategory } = params;
  const [sortOption, setSortOption] = useState("mostPopular");

  const orderObj = {
    cheapest: (a: { price: number; }, b: { price: number; }) => a.price - b.price,
    mostPopular: (a: { rating: number; }, b: { rating: number; }) => a.rating - b.rating,
    newest: (a: { id: number; }, b: { id: number; }) => a.id - b.id,
    expensive: (a: { price: number; }, b: { price: number; }) => b.price - a.price,
    nameAZ: (a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name),
    nameZA: (a: { name: string; }, b: { name: string; }) => b.name.localeCompare(a.name),
  }
  const handleSortChange = (sortOption: string) => {
    setSortOption(sortOption)
  };

  return (
    <>
      <SpacialOffer />
      <Header />
      <MaxWithWrapper>
        <OrderBy onSortChange={handleSortChange} sortOption={sortOption} className="my-4" />
        <div className="flex gap-10 flex-wrap justify-between">
          {products.filter((product) => product.category === productcategory).sort(orderObj[sortOption]).map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.image}
              productName={product.name}
              price={product.price}
              rating={product.rating}
              reviewers={product.rating}
              productDescription={product.description}

            />
          ))}
        </div>
      </MaxWithWrapper>
      <Footer />
    </>
  );
}
