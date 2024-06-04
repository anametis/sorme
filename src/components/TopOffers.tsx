import Image from "next/image";
import { Card } from "./ui/card";

const TopOffers = ({}): JSX.Element => {
  const images = [
      { src: "/images/t1.png", alt: "Photo 1" },
      { src: "/images/t2.png", alt: "Photo 2" },
      { src: "/images/t3.png", alt: "Photo 3" },
    { src: "/images/t4.png", alt: "Photo 4" },
  ];

  return (
    <section className="flex items-center justify-center w-full gap-4 my-12">
      {images.map((image, index) => (
        <Card key={index} className="w-full max-w-sm rounded-[2.7rem] shadow-lg">
          <Image
            src={image.src}
            alt={image.alt}
            width={1000}
            height={1080}
            layout="responsive" 
            quality={100} //need to read more about
          />
        </Card>
      ))}
    </section>
  );
};

export default TopOffers;
