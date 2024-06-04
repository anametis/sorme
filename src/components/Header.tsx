"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Building,
  Gift,
  MapPin,
  MessagesSquare,
  Sparkles,
  SquarePen,
  UserIcon,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import ShoppingCartWithBadge from "./ShoppingCartWithBadge";
import SearchBar from "./ui/searchbar";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MegaMenu from "./MegaMenu";

const Header = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full sticky z-50 top-0 bg-white shadow-lg">
      <section className="flex flex-col items-center justify-center h-fll pt-2  w-full gap-4 mx-auto max-w-screen-2xl px-8 md:px-8 ">
        <nav className="flex items-center justify-between w-full max-w-screen-2xl">
          <div className="flex items-center gap-4">
            <Image
              src="/images/Artboard.png"
              alt="logo"
              width={100}
              height={40}
            />
            <div className="flex items-center">
              <SearchBar placeholder="Product search and..." />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">Seller</Button>
            <div className="h-8 w-[0.1rem] bg-zinc-400" />
            <Button variant="outline">
              Sign In / Sign Up
              <UserIcon />
            </Button>
            <div className="h-8 w-[0.1rem] bg-zinc-400" />
            <ShoppingCartWithBadge cartItemCount={0} />
          </div>
        </nav>
        <nav className="flex items-center justify-between w-full max-w-screen-2xl">
          <div className="flex items-center justify-start gap-4 transition-all duration-1000 ease-in-out">
            <Button
              variant="outline"
              className="border-none m-0 p-1  relative "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <MegaMenu open={isHovered} setIsHovered={setIsHovered} />
              products categorization
              <ChevronDown />
            </Button>
            <Link href="#">
              Brands <Sparkles className="inline" />
            </Link>
            <Link href="#">
              Organizations
              <Building className="inline" />
            </Link>
            <Link href="#">
              Counseling
              <MessagesSquare className="inline" />
            </Link>
            <Link href="#">
              Gift Card
              <Gift className="inline" />
            </Link>
            <Link href="#">
              Weblog
              <SquarePen className="inline" />
            </Link>
          </div>
          <div>
            <Link href="#">
              Branches Somme
              <MapPin className="inline" />
            </Link>
          </div>
        </nav>
        <div className="w-full pb-4 flex justify-start">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Documentation</DropdownMenuItem>
                    <DropdownMenuItem>Themes</DropdownMenuItem>
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs/components">
                  Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>
    </div>
  );
};

export default Header;
