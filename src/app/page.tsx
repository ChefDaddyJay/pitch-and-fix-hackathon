import CardGrid from "@/ui/CardGrid";
import CategoryCard from "@/ui/CategoryCard";
import Footer from "@/ui/Footer";
import FooterColumn from "@/ui/FooterColumn";
import Hero from "@/ui/Hero";
import NewsletterForm from "@/ui/NewsletterForm";
import ProductCard from "@/ui/ProductCard";

export default function Home() {
  return (
    <>
      <Hero />
      <CardGrid title="Featured Products">
        <ProductCard
          src="/images/product1.jpg"
          name="Wireless Headphones"
          tag="Sale"
          price={99.99}
          origPrice={120}
          rating={42}
        />
        <ProductCard
          src="/images/product2.jpg"
          name="Smart Watch"
          price={199.99}
          rating={28}
        />
        <ProductCard
          src="/images/product3.jpg"
          name="Bluetooth Speaker"
          tag="New"
          price={79.99}
          rating={17}
        />
        <ProductCard
          src="/images/product4.jpg"
          name="Laptop Bag"
          price={49.99}
          rating={35}
        />
      </CardGrid>
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
