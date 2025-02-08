"use client"; // Required for client-side navigation

import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  imageUrl: string;
  price: string;
  slug: string; // ✅ Added slug for navigation
};

const Catalog = ({ name, imageUrl, price, slug }: Props) => {
  return (
    <Link href={`/singleproductpage/${slug}`} passHref>
      <div className="relative rounded-lg overflow-hidden cursor-pointer transition hover:scale-105">
        <Image
          alt={name}
          className="object-cover object-center rounded-lg"
          src={imageUrl}
          height={180}
          width={180}
        />
        <div className="flex justify-between items-center mt-2">
          <h2 className="text-[16px] text-primary">{name}</h2>
          <span className="font-bold">{price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Catalog;
