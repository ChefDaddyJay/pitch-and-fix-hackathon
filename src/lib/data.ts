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

export async function fetchBlogPosts() {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.                Repellat est cumque placeat iure labore sapiente ducimus                tempora, voluptate nihil? Rem, id enim sed earum in odit                adipisci est repellendus laborum, exercitationem sint                laudantium. Eveniet in ea obcaecati, temporibus, est quae                consectetur velit, veniam earum illum minus magni quis labore                eligendi minima dolorem a ipsum blanditiis tenetur vel provident                saepe. Illum inventore explicabo saepe earum sapiente, similique                hic quae voluptates laborum quod tenetur unde aspernatur                tempora, doloremque iure? Repudiandae illum aut fugit,                necessitatibus itaque nostrum laudantium, cumque, inventore vel                ut reprehenderit quo eaque sit veniam maxime delectus                temporibus. Ipsam sequi quis delectus nostrum dolorem sapiente                aspernatur voluptates. Architecto cumque minus aliquam vel quasi                rerum quibusdam! Sit maiores dignissimos recusandae, impedit,                atque vitae nam maxime aliquid sapiente et voluptatibus? Dicta                reprehenderit id dolores vero molestiae voluptates perspiciatis                a quia sint, commodi quis modi impedit sunt consequuntur eos                itaque at explicabo iste aspernatur facilis vitae obcaecati.                Suscipit quos quia eos quasi blanditiis voluptates hic rem! Esse                assumenda, suscipit at placeat repudiandae recusandae fugiat nam                fugit, aut sunt nobis veritatis corporis ullam? Iusto provident                culpa, omnis animi, molestias quasi veniam aliquid temporibus                dolorum sequi nisi cum possimus officia architecto amet                corrupti, esse nesciunt dicta.";
  return [
    {
      title: "Lorem Ipsum Dolor",
      image: "/images/product1.jpg",
      body: lorem,
    },
    {
      title: "Lorem Ipsum Dolor",
      image: "/images/product2.jpg",
      body: lorem,
    },
    {
      title: "Consectetur Adipisicing Elit",
      image: "/images/category1.jpg",
      body: lorem,
    },
    {
      title: "Repellat est Cumque",
      image: "/images/product3.jpg",
      body: lorem,
    },
    {
      title: "Lorem Ipsum Dolor",
      image: "/images/category4.jpg",
      body: lorem,
    },
  ];
}
