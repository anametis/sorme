import React from "react";
import Image from "next/image";

const MainFeatures = () => {
  return (
    <section className="w-full flex items-center justify-center md:justify-between gap-6 my-12 flex-wrap">
      <div className="flex items-center justify-center gap-4 w-70">
        <Image
          src="/images/refund.svg"
          alt="Person review image"
          width={80}
          height={80}
          className="border rounded-2xl border-[#202020] p-1"
        />
        <div className="flex flex-col">
          <p className="font-semibold">money back</p>
          <span className="text-xs font-light w-48 md:w-56">Refund in case of dissatisfaction</span>
        </div>
      </div>
      <div className="flex items-center  justify-center gap-4 w-70">
        <Image
          src="/images/gift.svg"
          alt="Person review image"
          width={80}
          height={80}
          className="border rounded-2xl border-[#202020] p-1"
        />
        <div className="flex flex-col">
          <p className="font-semibold">send a gift</p>
          <span className="text-xs font-light w-48 md:w-56">Send a Gift to your friends</span>
        </div>
      </div>
      <div className="flex items-center  justify-center gap-4 w-70">
        <Image
          src="/images/badge.svg"
          alt="Person review image"
          width={80}
          height={80}
          className="border rounded-2xl border-[#202020] p-1"
        />
        <div className="flex flex-col">
          <p className="font-semibold">originality</p>
          <span className="text-xs font-light w-48 md:w-56">All goods are guaranteed to be original</span>
        </div>
      </div>
      <div className="flex items-center  justify-center gap-4 w-70">
        <Image
          src="/images/clock-truck.svg"
          alt="Person review image"
          width={80}
          height={80}
          className="border rounded-2xl border-[#202020] p-1"
        />
        <div className="flex flex-col">
          <p className="font-semibold">Instant delivery</p>
          <span className="text-xs font-light w-48 md:w-56">Immediate delivery under 48 hours</span>
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
