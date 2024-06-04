import { Heart, Share } from "lucide-react";
import Image from "next/image";

type Props = {};
const ProductImg = (props: Props) => {
  return (
    <div className="flex justify-start items-center w-1/3 min-w-96">
      <div className="flex flex-col items-center gap-8">
        <Heart className="h-16 w-16 text-[#F19AAF] bg-[#FFEFEF] rounded-xl p-[0.2rem]" />
        <Share className="h-16 w-16 text-[#F19AAF] bg-[#FFEFEF] rounded-xl p-[0.2rem]" />
      </div>
      <Image
        src="/images/p1.png"
        alt="product-1"
        width={500}
        height={500}
        className="rounded-lg min-w-96"
      />
    </div>
  );
};
export default ProductImg;
