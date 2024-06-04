"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import ShoppingCartWithBadge from "./ShoppingCartWithBadge";

const DashHeader = () => {
  return (
    <div className="flex items-center justify-between px-16 py-4 sticky top-0 shadow-xl">
      <Image
        src={"/images/Artboard.png"}
        width={200}
        height={200}
        alt="Offer"
        className="w-28 md:w-52"
      />
      <div className="flex items-center justify-center gap-4">
        <Button variant="outline">
          Sign In / Sign Up
          <UserIcon />
        </Button>
        <div className="h-8 w-[0.1rem] bg-zinc-400" />
        <ShoppingCartWithBadge cartItemCount={0} />
      </div>
    </div>
  );
};
export default DashHeader;
