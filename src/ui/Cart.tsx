"use client";

import { CartContext } from "@/lib/Cart";
import { Product } from "@/lib/definitions";
import { Dropdown, DropdownButton, DropdownContent } from "@/ui/Dropdown";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function CartDropdown() {
  const { cart, updateCart } = useContext(CartContext);

  return (
    <Dropdown>
      <DropdownButton>
        <FaShoppingCart className="mr-2" />
        <div className="bg-amber-500 text-white rounded-[50%] w-5 h-5 flex justify-center items-center font-xs mr-2">
          {cart.products.length}
        </div>
        <div>$ {cart.calcTotal()}</div>
      </DropdownButton>
      <CartDropdownContent />
    </Dropdown>
  );
}

export function CartSummary() {
  const { cart, updateCart } = useContext(CartContext);

  return (
    <div>
      <div className="flex flex-col w-full border-b border-neutral-300 mb-4">
        {cart.products.map((entry) => {
          return (
            <div key={entry.product.id} className="flex justify-between py-1">
              <div>
                {entry.amount}x {entry.product.name}
              </div>
              <div>{(entry.product.price * entry.amount).toFixed(2)}</div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center font-bold">
        <div className="text-lg">Subtotal</div>
        <div>{cart.calcTotal()}</div>
      </div>
    </div>
  );
}

export function CartDropdownContent() {
  const { cart, updateCart } = useContext(CartContext);

  const products = cart.products.map((entry) => {
    return (
      <CartItem
        key={entry.product.id}
        product={entry.product}
        amount={entry.amount}
      />
    );
  });

  return (
    <DropdownContent hDir="left">
      <div className="max-h-[300px] overflow-y-auto mb-4 flex flex-col gap-2">
        {...products}
      </div>
      <div className="border-t border-gray-200 pt-2 mb-4 text-right">
        <p>
          Total: $<span id="cart-total-amount">{cart.calcTotal()}</span>
        </p>
      </div>
      <button
        onClick={() => redirect("/checkout")}
        className="block w-full p-3 bg-blue-600 text-white border-0 rounded-sm font-bold cursor-pointer transition duration-300 "
      >
        Checkout
      </button>
    </DropdownContent>
  );
}

export function CartItem({
  product,
  amount,
}: {
  product: Product;
  amount: number;
}) {
  return (
    <div className="px-2 py-1 flex flex-wrap justify-between">
      <div className="w-full flex items-center gap-2 pb-2">
        <Image src={product.img} width={50} height={50} alt={product.name} />
        {product.name}
      </div>
      <div className="font-bold text-sm flex items-center">
        ({amount}) {(product.price * amount).toFixed(2)}
      </div>
      <CartItemControls product={product} />
    </div>
  );
}

export function CartItemControls({ product }: { product: Product }) {
  const { cart, updateCart } = useContext(CartContext);
  return (
    <div className="flex gap-2">
      <button
        className="w-5 h-5 font-bold text-neutral-800 bg-neutral-200 hover:bg-neutral-100 rounded-sm border flex justify-center items-center transition-colors duration-300 hover:shadow border-neutral-500"
        onClick={() => updateCart(cart.add(product, true))}
      >
        +
      </button>

      <button
        className="w-5 h-5 font-bold text-neutral-800 bg-neutral-200 hover:bg-neutral-100 rounded-sm border flex justify-center items-center transition-colors duration-300 hover:shadow border-neutral-500"
        onClick={() => updateCart(cart.remove(product))}
      >
        -
      </button>
      <button
        className="w-5 h-5 font-bold text-neutral-800 bg-neutral-200 hover:bg-neutral-100 rounded-sm border flex justify-center items-center transition-colors duration-300 hover:shadow border-neutral-500"
        onClick={() => updateCart(cart.removeAll(product))}
      >
        x
      </button>
    </div>
  );
}
