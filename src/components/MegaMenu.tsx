"use client";
import Link from 'next/link'

type Props = {
  open: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
};
const MegaMenu = (props: Props) => {
  const myItems = [
    { 
      name: "Cosmetics",
      href: "/products/cosmetics",
    },
    {
      name: "Skin products",
      href: "/products/skin",
    },
    {
      name: "Hair products",
      href: "/products/hair",
    },
    {
      name: "Bathroom products",
      href: "/products/bathroom",
    },
    {
      name: "Health products",
      href: "/products/health",
    },
    {
      name: "Appliances",
      href: "/products/appliances",
    },
  ];

  return (
    <div
      onMouseEnter={() => props.setIsHovered(true)}
      onMouseLeave={() => props.setIsHovered(false)}
      className={`absolute bg-white shadow-lg rounded-[2rem] mt-2 p-4 grid grid-cols-2 gap-4 w-[40rem] ${
        props.open ? "block opacity-100" : "invisible opacity-0"
      } top-6 left-10 transition-all duration-300 ease-in-out `}
    >
      <div>
        <ul className="border-r-2 border-gray-300 pr-8">
          {myItems.map((item) => (
            <li
              className="mt-4 text-lg font-semibold hover:text-pink-500"
              key={item.name}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default MegaMenu;
