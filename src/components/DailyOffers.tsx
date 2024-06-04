import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import CountDown from "./CountDown";


const DailyOffers = () => {
  return (
    <Carousel className="flex items-center mx-auto my-12 justify-start w-full bg-[#F19AA6] rounded-3xl p-4">
      <Card className="flex flex-col items-center justify-center font-semibold bg-inherit border-none shadow-none text-white text-xl">
        <Image src={"/images/box.png"} width={200} height={200} alt="Offer" />
        <h2 className="mt-4">Daily Off</h2>
      </Card>

      <CountDown className="-rotate-90 text-white text-xl font-semibold p-0 m-0 w-32"/>

      <CarouselContent className="-ml-1">
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default DailyOffers;
