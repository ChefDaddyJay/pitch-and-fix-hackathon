"use client";

import Image from "next/image";
import { Product } from "@/lib/definitions";
import { CartContext } from "@/lib/Cart";
import { useContext } from "react";
import AddToCartBtn from "./AddToCartBtn";

export default function ProductCard({ product }: { product: Product }) {
  const cart = useContext(CartContext);
  return (
    <div className="border border-gray-200 bg-white rounded-lg overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={product.img}
          alt="Product 1"
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
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl">{product.name}</h3>
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
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <span className="text-neutral-500 text-sm ml-2">(42)</span>
        </div>
        <AddToCartBtn product={product} />
      </div>
    </div>
  );
}
