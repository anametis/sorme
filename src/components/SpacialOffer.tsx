import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "lucide-react";

const SpacialOffer = () => {
  return (
    <section className="w-full h-12 bg-[url('/images/ad-1.png')]">
      <div className="relative flex items-center justify-around w-full h-full px-8 md:px-8">
        <span className="font-semibold text-green-800">70 $ off + Gift</span>
        <Button variant="link" className="bg-[#C6A86C] text-gray-100 h-8">
          Register Now
        </Button>
      </div>
      {/* ToDo1: make it to appear */}
      <Image
        src="/images/ad-1.png"
        alt="background image"
        fill
        objectFit="cover"
        className="object-cover -z-10"
      />
    </section>
  );
};

export default SpacialOffer;
