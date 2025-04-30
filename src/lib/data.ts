import { products } from "./definitions";

// Mock database calls
export async function fetchProducts() {
  return products;
}

export async function fetchProductById(id: string) {
  const product = products.find((product) => product.id === id);
  if (product) {
    return product;
  }
  throw new Error(`Product id ${id} not found.`);
}
