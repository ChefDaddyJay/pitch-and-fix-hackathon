"use client";

import { CartContext } from "@/lib/Cart";
import { useContext, useState } from "react";

export default function CartDropdown() {
  const [active, setActive] = useState(false);
  const { cart, updateCart } = useContext(CartContext);
  const products = cart.products.map((entry) => {
    return <div>{entry.product.name}</div>;
  });

  return (
    <div className="relative">
      <div
        className="text-base cursor-pointer relative"
        onClick={() => setActive(!active)}
      >
        <i className="fas fa-shopping-cart"></i>
        <span className="absolute -top-2.5 -right-2.5 bg-amber-500 text-white rounded-[50%] w-5 h-5 flex justify-center items-center font-xs">
          {cart.products.length}
        </span>
      </div>
      <div
        className={`absolute right-0 top-full w-[300px] bg-white shadow-md rounded p-4 z-10 ${
          active ? "block" : "hidden"
        }`}
      >
        <div className="max-h-[300px] overflow-y-auto mb-4">{...products}</div>
        <div className="border-t border-gray-200 pt-2 mb-4 text-right">
          <p>
            Total: $<span id="cart-total-amount">0.00</span>
          </p>
        </div>
        <button
          onClick={() => (location.href = "/checkout")}
          className="block w-full p-3 bg-blue-600 text-white border-0 rounded-sm font-bold cursor-pointer transition duration-300 "
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
