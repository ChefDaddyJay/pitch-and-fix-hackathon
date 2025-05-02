"use client";

import Image from "next/image";
import { Product } from "@/lib/definitions";
import { CartContext } from "@/lib/Cart";
import { useContext } from "react";
import AddToCartBtn from "./AddToCartBtn";
import { FaStar, FaStarHalf } from "react-icons/fa6";

export default function ProductCard({ product }: { product: Product }) {
  const cart = useContext(CartContext);
  return (
    <div className="border border-neutral-200 bg-white flex flex-col rounded-lg overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg w-[200px] xl:w-[300px]">
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
        <div className="flex items-center mb-4 text-amber-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          <span className="text-neutral-500 text-sm ml-2">
            ({product.rating})
          </span>
        </div>
        <AddToCartBtn product={product} />
      </div>
    </div>
  );
}
