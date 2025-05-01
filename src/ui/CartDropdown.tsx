"use client";

import { CartContext } from "@/lib/Cart";
import { Product } from "@/lib/definitions";
import { useContext, useEffect, useRef, useState } from "react";

export default function CartDropdown() {
  const [active, setActive] = useState(false);
  const { cart, updateCart } = useContext(CartContext);
  const ref = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Cart Icon */}
      <div
        className="text-base cursor-pointer relative flex items-center"
        onClick={() => setActive(!active)}
      >
        <div className="bg-amber-500 text-white rounded-[50%] w-5 h-5 flex justify-center items-center font-xs mr-2">
          {cart.products.length}
        </div>
        <div>$ {cart.calcTotal()}</div>
      </div>

      <CartDropdownContent active={active} />
    </div>
  );
}

export function CartDropdownContent({ active }: { active: boolean }) {
  const { cart, updateCart } = useContext(CartContext);

  const products = cart.products.map((entry) => {
    return (
      <CartDropdownItem
        key={entry.product.id}
        product={entry.product}
        amount={entry.amount}
      />
    );
  });

  return (
    <div
      className={`absolute right-0 top-full w-[300px] bg-white shadow-md rounded p-4 z-10 ${
        active ? "block" : "hidden"
      }`}
    >
      <div className="max-h-[300px] overflow-y-auto mb-4 flex flex-col gap-2">
        {...products}
      </div>
      <div className="border-t border-gray-200 pt-2 mb-4 text-right">
        <p>
          Total: $<span id="cart-total-amount">{cart.calcTotal()}</span>
        </p>
      </div>
      <button
        onClick={() => (location.href = "/checkout")}
        className="block w-full p-3 bg-blue-600 text-white border-0 rounded-sm font-bold cursor-pointer transition duration-300 "
      >
        Checkout
      </button>
    </div>
  );
}

export function CartDropdownItem({
  product,
  amount,
}: {
  product: Product;
  amount: number;
}) {
  return (
    <div
      key={product.id}
      className="border px-2 py-1 flex flex-wrap justify-between"
    >
      <div className="w-full">{product.name}</div>
      <div className="font-bold">
        ({amount}) {(product.price * amount).toFixed(2)}
      </div>
      <CartDropdownItemControls product={product} />
    </div>
  );
}

export function CartDropdownItemControls({ product }: { product: Product }) {
  const { cart, updateCart } = useContext(CartContext);
  return (
    <div className="flex gap-2">
      <button
        className="w-6 h-6 font-bold text-neutral-800 bg-neutral-200 hover:bg-neutral-100 rounded-sm border flex justify-center items-center transition-colors duration-300 hover:shadow"
        onClick={() => updateCart(cart.add(product))}
      >
        +
      </button>

      <button
        className="w-6 h-6 font-bold text-neutral-800 bg-neutral-200 hover:bg-neutral-100 rounded-sm border flex justify-center items-center transition-colors duration-300 hover:shadow"
        onClick={() => updateCart(cart.remove(product))}
      >
        -
      </button>
      <button
        className="w-6 h-6 font-bold text-neutral-800 bg-neutral-200 hover:bg-neutral-100 rounded-sm border flex justify-center items-center transition-colors duration-300 hover:shadow"
        onClick={() => updateCart(cart.removeAll(product))}
      >
        X
      </button>
    </div>
  );
}
