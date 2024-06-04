import Image from "next/image";
import MaxWithWrapper from "./MaxWithWrapper";

const thisYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between bg-[#F9D6DC] mt-12 pt-10 bottom-0  w-full">
      <MaxWithWrapper className="flex flex-col md:flex-row items-center gap-20 justify-between my-12">
        <div className="flex flex-col gap-8 ">
          <Image
            src={"/images/c-brand.svg"}
            width={200}
            height={200}
            alt="Offer"
          />
          <div className="flex items-center justify-between w-24">
            <Image
              src={"/images/valid1.png"}
              width={100}
              height={200}
              alt="Offer"
            />
            <Image
              src={"/images/valid2.png"}
              width={100}
              height={200}
              alt="Offer"
            />
            <Image
              src={"/images/valid3.png"}
              width={100}
              height={200}
              alt="Offer"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <Image
              src={"/images/email.svg"}
              width={50}
              height={200}
              alt="Offer"
            />
            <h2 className="text-[#787878] font-semibold text-3xl">
              Email Address
            </h2>
          </div>
          <h2 className="text-[#787878] font-semibold text-3xl">
            alisafarpour@gmail.com
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <Image
              src={"/images/call.svg"}
              width={50}
              height={200}
              alt="Offer"
            />
            <h2 className="text-[#787878] font-semibold text-3xl">
              Email Address
            </h2>
          </div>
          <h2 className="text-[#787878] font-semibold text-3xl">
            0912010110101
          </h2>
        </div>
      </MaxWithWrapper>
      <p className="text-xs font-light mt-12 pb-4">
        All material and intellectual rights of this website are reserved for
        Sorme ©2020-{thisYear}
      </p>
    </footer>
  );
};

export default Footer;

