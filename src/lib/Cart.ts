import { createContext } from "react";
import { Product } from "./definitions";
import { fetchProductById } from "./data";

export class Cart {
  static LOCAL_STORAGE_ITEM = "ShopEaseCart";
  products: CartEntry[] = [];
  constructor(base?: Cart) {
    this.products = base?.products || [];
  }
  calcTotal() {
    let total = 0;
    for (const entry of this.products) {
      total += entry.product.price * entry.amount;
      console.log(total);
    }
    return total.toFixed(2);
  }
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
    return new Cart(this);
  }
  remove(product: Product) {
    const remIndex = this.products.findIndex(
      (entry) => entry.product === product
    );
    if (this.products[remIndex].amount > 1) {
      this.products[remIndex].amount--;
    } else {
      this.products = [
        ...this.products.slice(0, remIndex),
        ...this.products.slice(remIndex + 1),
      ];
    }
    this.save();
    return new Cart(this);
  }
  removeAll(product: Product) {
    const rem = this.products.find((entry) => entry.product === product);
    if (rem) {
      rem.amount = 0;
    }
    return this.remove(product);
  }
  save() {
    const entries = [
      this.products.map((entry) => ({
        id: entry.product.id,
        amount: entry.amount,
      })),
    ];
    localStorage.setItem(Cart.LOCAL_STORAGE_ITEM, JSON.stringify(entries));
  }
  static async read() {
    const storedCart = new Cart();
    const fromStorage = localStorage?.getItem(Cart.LOCAL_STORAGE_ITEM);
    if (fromStorage) {
      const entries = JSON.parse(fromStorage || "[]");
      for (const entry of entries[0]) {
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
