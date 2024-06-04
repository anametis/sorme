"use client";

import DashHeader from "@/components/DashHeader";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="">
      <body className={`flex items-center justify-between `}>
        <DashHeader />
        <Sidebar />
        <main className="w-full h-full ">{children}</main>
      </body>
    </html>
  );
}
