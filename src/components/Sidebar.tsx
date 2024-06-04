"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Favorites from "./Favorites";
import Orders from "./Orders";
import Support from "./Support";
import Wallet from "./Wallet";
import {
  Wallet as WalletIcon,
  ShoppingCart,
  LayoutDashboard,
  Settings as SettingsIcon,
  Heart,
  Headset,
} from "lucide-react";
import Settings from "./Settings";
import { Nav } from "./ui/nav";
import { usePathname } from "next/navigation";

type Props = {
  userName?: string;
  userEmail?: string;
};

const Sidebar = ({ userName, userEmail }: Props) => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="w-1/5 h-screen flex flex-col items-center shadow-2xl">
      <Avatar className="mt-6 mb-1 mx-auto">
        <AvatarImage src="https://github.com/shadcn.png" alt="@Ali" />
        <AvatarFallback>Ali{userName}</AvatarFallback>
      </Avatar>
      <p className="font-semibold text-center">Ali{userName}</p>
      <p className="text-xs font-light w-48 md:w-56 text-center">
        alioriginal@gmail.com{userEmail}
      </p>
      <div className="mt-4 flex">
        <Nav
          isCollapsed={false}
          links={[
            {
              title: "Dashboard",
              label: "",
              icon: LayoutDashboard,
              variant: "default",
              href: "/",
            },
            {
              title: "Orders",
              label: "",
              icon: ShoppingCart,
              variant: "default",
              href: "/dashboard/[user-kind]?user-kind=1/orders",
            },
            {
              title: "Favorites",
              label: "",
              icon: Heart,
              variant: "default",
              href: "/",
            },
            {
              title: "Wallet",
              label: "",
              icon: WalletIcon,
              variant: "default",
              href: "/",
            },
            {
              title: "Support",
              label: "",
              icon: Headset,
              variant: "default",
              href: "/",
            },
            {
              title: "Settings",
              label: "",
              icon: SettingsIcon,
              variant: "default",
              href: "/",
            },
          ]}
        />
      </div>
    </div>
  ) : null;
};
export default Sidebar;
