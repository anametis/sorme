import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface ImageData {
  src: string;
  alt: string;
  caption?: string;
}

const images: ImageData[] = [
  { src: "/images/slider.png", alt: "Description of Photo 1" },
  { src: "/images/slider2.png", alt: "Description of Photo 2" },
  { src: "/images/slider3.png", alt: "Description of Photo 3" },
];

const Hero = () => {
  return (
    //ToDo6: make it to be sized
    <Carousel className="w-full  mx-auto my-12" opts={{
        align: "start",
        loop: true,
      }} >
      <CarouselContent >
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image src={image.src} alt={image.alt} width={1920} height={100} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Hero;
