import { fetchProducts } from "@/lib/data";
import CardGrid from "@/ui/CardGrid";
import CategoryCard from "@/ui/CategoryCard";
import Hero from "@/ui/Hero";
import NewsletterForm from "@/ui/NewsletterForm";
import ProductCard from "@/ui/ProductCard";

export default async function Home() {
  const products =
    (await fetchProducts()).map((prod) => {
      return <ProductCard product={prod} />;
    }) || [];
  return (
    <>
      <Hero />
      <CardGrid title="Featured Products">{...products}</CardGrid>
      <CardGrid title="Shop by Category">
        <CategoryCard
          name="Electronics"
          src="/images/category1.jpg"
          href="categories.html#electronics"
        />
        <CategoryCard
          name="Clothing"
          src="/images/category2.jpg"
          href="categories.html#clothing"
        />
        <CategoryCard
          name="Home & Kitchen"
          src="/images/category3.jpg"
          href="categories.html#home"
        />
        <CategoryCard
          name="Sports & Outdoors"
          src="/images/category4.jpg"
          href="categories.html#sports"
        />
      </CardGrid>
      <NewsletterForm />
    </>
  );
}
