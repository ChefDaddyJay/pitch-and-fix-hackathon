import { fetchProducts } from "@/lib/data";
import CategoryCard from "@/ui/CategoryCard";
import Hero from "@/ui/Hero";
import NewsletterForm from "@/ui/NewsletterForm";
import ProductCard from "@/ui/Product";
import { PageSection } from "@/ui/UtilComponents";

export default async function Home() {
  const products =
    (await fetchProducts()).map((prod) => {
      return <ProductCard product={prod} key={prod.id} />;
    }) || [];
  return (
    <>
      <Hero />
      <div className="w-9/10 flex flex-col items-center gap-4 my-4 mx-auto">
        <PageSection title="Featured Products">
          <div className="w-full flex flex-wrap justify-center gap-4 m-4">
            {...products.slice(0, 4)}
          </div>
        </PageSection>
        <PageSection title="Shop by Category">
          <div className="w-full flex flex-wrap justify-center gap-4 m-4">
            <CategoryCard
              name="Electronics"
              src="/images/category1.jpg"
              href="/products?category=Electronics"
            />
            <CategoryCard
              name="Clothing"
              src="/images/category2.jpg"
              href="/products?category=Clothing"
            />
            <CategoryCard
              name="Home & Kitchen"
              src="/images/category3.jpg"
              href="/products?category=Home+%26+Kitchen"
            />
            <CategoryCard
              name="Sports & Outdoors"
              src="/images/category4.jpg"
              href="/products?category=Sports+%26+Outdoor"
            />
          </div>
        </PageSection>
        <NewsletterForm />
      </div>
    </>
  );
}
