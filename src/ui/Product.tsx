"use client";

import Image from "next/image";
import { Product } from "@/lib/definitions";
import AddToCartBtn from "./AddToCartBtn";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import Link from "next/link";
import { HorizontalDivider, PageSection } from "./UtilComponents";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}/`}>
      <div className="border border-neutral-200 bg-white flex flex-col max-w-[300px] min-w-[300px] rounded-lg overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg w-full">
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={product.img}
            alt={`Image of ${product.name}`}
            width={300}
            height={200}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          {product.tag ? (
            <div className="absolute top-2.5 left-2.5 py-1 px-2 bg-amber-500 text-white text-sm rounded">
              {product.tag}
            </div>
          ) : (
            ""
          )}
          {
            <div className="absolute bottom-2.5 right-2.5 py-1 px-2 bg-blue-500 text-white font-bold text-sm rounded">
              {product.category}
            </div>
          }
        </div>
        <div className="p-4 flex flex-col flex-grow justify-end">
          <h3 className="mb-2 text-xl flex flex-grow items-center">
            {product.name}
          </h3>
          <div className="flex items-center mb-2">
            {product.origPrice ? (
              <span className="line-through text-neutral-500 mr-2">
                ${product.origPrice.toString()}
              </span>
            ) : (
              ""
            )}
            <span className="text-blue-500 font-bold">
              ${product.price.toString()}
            </span>
          </div>
          <ProductRating rating={3.7} numRatings={product.rating} />
          <div className="w-full flex justify-center">
            <HorizontalDivider />
          </div>
          <AddToCartBtn product={product} />
        </div>
      </div>
    </Link>
  );
}

export function ProductRating({
  rating,
  numRatings,
}: {
  rating: number;
  numRatings?: number;
}) {
  const stars = () => {
    const res = [];
    let i;
    for (i = 0; i < Math.floor(rating); i++) {
      res.push(<FaStar key={rating - i} />);
    }
    if (rating - i > 0) {
      res.push(<FaStarHalf key={rating - i} />);
    }
    return res;
  };
  return (
    <div className="flex items-center text-amber-500">
      {stars()}
      <span className="font-bold">{rating.toFixed(1)}</span>
      <span className="text-neutral-500 text-sm ml-2">
        {numRatings && `(${numRatings})`}
      </span>
    </div>
  );
}

export function ProductReview({
  name,
  rating,
  review,
}: {
  name: string;
  rating: number;
  review: string;
}) {
  return (
    <PageSection>
      <div className="w-4/5 flex flex-col gap-4 py-4">
        <div className="w-full flex gap-4 items-center justify-between">
          <div className="flex justify-between w-full">
            <div className="font-bold text-lg">{name}</div>
            <ProductRating rating={rating} />
          </div>
          <div className="text-neutral-400 text-sm">{`(05/03/25)`}</div>
        </div>
        <div className="w-full px-4">{review}</div>
      </div>
    </PageSection>
  );
}
