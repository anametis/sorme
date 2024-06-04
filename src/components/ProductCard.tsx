"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface ProductCardProps {
  imageSrc: string;
  productName: string;
  price: number;
  rating: number;
  reviewers: number;
  productDescription: string;
  id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  productName,
  price,
  rating,
  reviewers,
  productDescription,
  id,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      onClick={() => router.push(`${pathname}/${id}`)}
      className="flex items-center justify-between p-10 bg-white rounded-lg shadow-sm w-[30%] border-gray-200 border-[1px] min-w-[450px] max-w-[800px]"
    >
      <div className="flex flex-col">
        <Image
          src={imageSrc}
          alt={productName}
          width={240}
          height={240}
          className="object-cover rounded-md"
        />
        <p>{productDescription}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        {reviewers} {reviewers === 1 ? "person" : "people"}
        <Image
          src="/images/Gstars.svg"
          alt={productName}
          width={50}
          height={50}
          className="object-cover rounded-md"
        />
      <div className="flex flex-col h-full justify-end mb-1 font-bold text-pink-300 text-3xl">
        {price}$
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
