export type Product = {
  id: string;
  img: string;
  name: string;
  category: string;
  tag?: string;
  price: number;
  origPrice?: number;
  rating: number;
};

// Generate Sample Products - ran once to create SampleProjects.json
function generateProducts(count = 4) {
  const generated = [];
  const names = [
    "Wireless Headphones",
    "Smart Watch",
    "Bluetooth Speaker",
    "Laptop Bag",
  ];
  for (let i = 0; i < count; i++) {
    const rand = Math.ceil(Math.random() * 4);
    generated.push({
      id: (i + 1).toString(),
      img: `/images/product${rand}.jpg`,
      name: names[rand - 1],
      tag: rand % 2 === 0 ? "Sale" : "New",
      price: rand * 100 - 0.01,
      origPrice: rand % 2 === 0 ? rand * 100 + 20 : null,
      rating: rand * rand,
    } as Product);
  }
  console.log(JSON.stringify(generated));
  return generated;
}

export const categories = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Sports & Outdoor",
];
