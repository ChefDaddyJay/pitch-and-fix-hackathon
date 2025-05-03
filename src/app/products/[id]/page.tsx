import { fetchProductById } from "@/lib/data";
import { Product } from "@/lib/definitions";
import ProductCard, { ProductRating, ProductReview } from "@/ui/Product";
import { HorizontalDivider, PageSection } from "@/ui/UtilComponents";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProductById(id!);
  const reviews = [
    {
      name: "Ree Viewer",
      rating: 5,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, natus amet. Possimus minima atque repellat obcaecati est, error vero dolore, recusandae ab illo placeat soluta.",
    },
    {
      name: "Common Tater",
      rating: 4.2,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, natus amet. Possimus minima atque repellat obcaecati est, error vero dolore, recusandae ab illo placeat soluta.",
    },
    {
      name: "Qua Li Te",
      rating: 3.9,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, natus amet. Possimus minima atque repellat obcaecati est, error vero dolore, recusandae ab illo placeat soluta.",
    },
  ];

  return (
    <div className="w-full flex justify-center m-4">
      <div className="w-4/5 flex justify-center gap-4">
        <div className="w-1/4 flex flex-col sticky top-4 h-min">
          <PageSection>
            <ProductCard product={product as Product} />
          </PageSection>
        </div>
        <div className="w-full flex flex-col gap-4">
          <PageSection>
            <div className="p-4 w-full flex flex-col gap-4">
              <div className="border-b border-neutral-300 flex justify-between">
                <div className="flex items-center gap-2 pb-2">
                  <h1 className="font-bold text-3xl text-neutral-800">
                    {product.name}{" "}
                  </h1>
                  {product.tag ? (
                    <div className="w-min py-1 px-2 bg-amber-500 text-white text-sm rounded">
                      {product.tag}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="px-4 flex justify-between">
                <div>
                  <span className="text-xl font-bold text-amber-500 w-max">
                    $ {product.price}
                  </span>{" "}
                  <span className="line-through">{product.origPrice}</span>
                </div>
                <div className="flex-grow flex justify-end">
                  <ProductRating rating={4.2} numRatings={product.rating} />
                </div>
              </div>
            </div>
          </PageSection>
          <PageSection title="Product Information">
            <div className="w-full p-4 flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                et explicabo recusandae dolorem delectus fuga numquam distinctio
                voluptate harum cum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Impedit, nam aperiam. Esse facere saepe
                aliquid provident explicabo molestias aliquam eius numquam odit.
                Similique, ipsa? Nisi consequuntur qui quaerat nesciunt sit.
              </p>
              <ul className="list-disc px-8">
                <li>Lorem ipsum</li>
                <li>Dolor sit amet</li>
                <li>Consectetur adipisicing</li>
              </ul>
            </div>
          </PageSection>
          <div className="w-full flex justify-center">
            <HorizontalDivider text="Reviews" />
          </div>
          {reviews.map((review) => (
            <ProductReview
              name={review.name}
              rating={review.rating}
              review={review.review}
              key={review.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
