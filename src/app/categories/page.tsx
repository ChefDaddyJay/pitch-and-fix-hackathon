import { fetchProductsByCategory } from "@/lib/data";
import { categories, Product } from "@/lib/definitions";
import ProductCard from "@/ui/ProductCard";
import { PageSection } from "@/ui/UtilComponents";

export default async function CategoriesPage() {
  return (
    <div className="m-4 flex flex-col gap-4">
      {categories.map(async (category) => (
        <PageSection title={category} key={category}>
          <div className="overflow-x-scroll w-full">
            <div className="flex w-max gap-4 p-4 -z-10">
              {(await fetchProductsByCategory(category)).map((product) => (
                <ProductCard product={product as Product} key={product.id} />
              ))}
            </div>
          </div>
        </PageSection>
      ))}
    </div>
  );
}
