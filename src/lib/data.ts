import SampleProducts from "@/lib/SampleData.json";
import { Product } from "./definitions";
import { isEmpty } from "./utils";

// Mock database calls
export async function fetchProducts() {
  return SampleProducts.map((product) => product as Product);
}

export async function fetchProductById(id: string) {
  const product = SampleProducts.find((product) => product.id === id);
  if (product) {
    return product;
  }
  throw new Error(`Product id ${id} not found.`);
}

export async function fetchProductsByCategory(category: string) {
  return SampleProducts.filter((product) => product.category === category);
}

export async function fetchFilteredProducts(
  query: string,
  tags: string[],
  price: number,
  categories: string[]
) {
  // Ideally, searching would be handled on the server side
  let res = SampleProducts;
  if (!isEmpty(categories)) {
    res = res.filter((product) => categories.includes(product.category));
  }
  if (!isEmpty(tags)) {
    res = res.filter((product) => tags.includes(product.tag));
  }
  if (!isEmpty([query])) {
    res = res.filter((product) => product.name.includes(query));
  }
  res = res.filter((product) => product.price < price);

  return res;
}
