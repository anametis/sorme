import Image, { StaticImageData } from "next/image";
import React from "react";
import favorites from "../../public/images/favorites.svg";
import b1 from "../../public/images/b1.svg";
import b2 from "../../public/images/b2.svg";
import b3 from "../../public/images/b3.svg";
import b4 from "../../public/images/b4.svg";
import b5 from "../../public/images/b5.svg";
import b6 from "../../public/images/b6.svg";
import b7 from "../../public/images/b7.svg";

const brands: (StaticImageData | any)[] = [b1, b2, b3, b4, b5, b6, b7];

const TopBrands = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 my-12">
      <h2 className="font-semibold text-xl">
        <Image
          src={favorites}
          alt="favorites"
          width={42}
          height={42}
          className="inline"
        />
        Top Brands
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        {brands.map((item, index) => (
          <Image src={item} alt="brand logo" key={index} className=""/>
        ))}
      </div>
    </section>
  );
};

export default TopBrands;
