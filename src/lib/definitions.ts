export type Product = {
  id: string;
  img: string;
  name: string;
  tag?: string;
  price: number;
  origPrice?: number;
  rating: number;
};

// sample Products
export const products: Product[] = [
  {
    id: "1",
    img: "/images/product1.jpg",
    name: "Wireless Headphones",
    tag: "Sale",
    price: 99.99,
    origPrice: 120,
    rating: 42,
  },
  {
    id: "2",
    img: "/images/product2.jpg",
    name: "Smart Watch",
    price: 199.99,
    rating: 28,
  },
  {
    id: "3",
    img: "/images/product3.jpg",
    name: "Bluetooth Speaker",
    tag: "New",
    price: 79.99,
    rating: 17,
  },
  {
    id: "4",
    img: "/images/product4.jpg",
    name: "Laptop Bag",
    price: 49.99,
    rating: 35,
  },
];
