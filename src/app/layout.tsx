import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpacialOffer from "@/components/SpacialOffer";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The best online shopping experience",
  description: "have it all with SORME",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-[#F3F4F2]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
