import { createContext } from "react";
import { Product } from "./definitions";
import { fetchProductById } from "./data";

export class Cart {
  static LOCAL_STORAGE_ITEM = "ShopEaseCart";
  products: CartEntry[] = [];
  add(product: Product, save = false) {
    const current = this.products.find(
      (entry) => entry.product.id === product.id
    );
    if (current) {
      current.amount++;
    } else {
      this.products.push({ product: product, amount: 1 });
    }
    if (save) {
      this.save();
    }
    return this;
  }
  save() {
    const entries = [
      this.products.map((entry) => ({
        id: entry.product.id,
        amount: entry.amount,
      })),
    ];
    localStorage.setItem(Cart.LOCAL_STORAGE_ITEM, JSON.stringify(entries));
    console.log("saved", localStorage.getItem(Cart.LOCAL_STORAGE_ITEM));
  }
  static async read() {
    const storedCart = new Cart();
    const fromStorage = localStorage?.getItem(Cart.LOCAL_STORAGE_ITEM);
    if (fromStorage) {
      const entries = JSON.parse(fromStorage || "[]");
      console.log("Entries:", entries);
      for (const entry of entries[0]) {
        console.log("Entry:", entry);
        try {
          storedCart.add(await fetchProductById(entry.id));
        } catch (Error) {
          console.log(Error, "Invalid product ID in local storage.");
        }
      }
    }
    return storedCart;
  }
}

type CartEntry = {
  product: Product;
  amount: number;
};

export const CartContext = createContext({
  cart: new Cart(),
  updateCart: function (newCart: Cart) {},
});
