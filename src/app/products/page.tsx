import { fetchFilteredProducts } from "@/lib/data";
import Search from "@/ui/Search";
import { PageSection } from "@/ui/LayoutComponents";
import Filters from "@/ui/Filters";
import ProductCard from "@/ui/Product";
import { categories } from "@/lib/definitions";

export default async function ProductsPage(props: {
  searchParams?: Promise<{
    query?: string;
    tag?: string;
    price?: string;
    category?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const products = await fetchFilteredProducts(
    searchParams?.query || "",
    searchParams?.tag?.split(",") || [],
    Number(searchParams?.price) || 1000,
    searchParams?.category?.split(",") || []
  );

  const filters = [
    { filter: "tag", option: "New" },
    { filter: "tag", option: "Sale" },
    { filter: "price", option: "1000" },
    ...categories.map((category) => ({
      filter: "category",
      option: category,
    })),
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center p-4 w-full h-max px-auto">
      <div className="md:sticky top-4 h-max flex flex-col gap-4 items-center w-full md:w-1/5 min-w-[200px]">
        <PageSection>
          <div className="p-4 w-full flex justify-center">
            <Search placeholder="Search products..." />
          </div>
        </PageSection>
        <Filters filters={filters} />
      </div>
      <PageSection>
        <div className="m-4 flex flex-wrap justify-center gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          ) : (
            <h2 className="w-full text-2xl font-bold text-neutral-400">
              No products found
            </h2>
          )}
        </div>
      </PageSection>
    </div>
  );
}
