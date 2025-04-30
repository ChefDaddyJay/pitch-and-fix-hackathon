"use client";

import { Product } from "@/lib/definitions";
import { CartContext } from "@/lib/Cart";
import { useContext } from "react";

export default function AddToCartBtn({ product }: { product: Product }) {
  const { cart, updateCart } = useContext(CartContext);

  return (
    <button
      className="block w-full p-2 bg-blue-500 text-white border-none rounded cursor-pointer transition-colors duration-300"
      onClick={() => updateCart(cart.add(product, true))}
    >
      Add to Cart
    </button>
  );
}
