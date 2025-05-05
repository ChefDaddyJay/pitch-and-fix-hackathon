import { fetchProductById } from "@/lib/data";
import Image from "next/image";
import ProductCard, { ProductRating, ProductReview } from "@/ui/Product";
import { HorizontalDivider, PageSection } from "@/ui/LayoutComponents";
import { fetchProducts } from "@/lib/data";
import { RefundPolicy } from "@/app/returns/page";
import { Accordion } from "@/ui/Accordion";
import { ColorBlock } from "@/ui/FormComponents";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProductById(id!);
  const otherProducts = await fetchProducts();
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
    <div className="w-full flex justify-center p-4 gap-4">
      <div className="w-1/4 flex-col sticky top-4 h-min hidden xl:flex">
        <ProductCard product={product} />
      </div>
      <div className="w-full flex flex-col gap-4">
        <PageSection>
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <div className="w-full min-w-[200px] md:w-1/2 xl:hidden">
              <Image
                src={product.img}
                width={400}
                height={200}
                alt={`${product.name} image`}
              />
            </div>
            <div className="p-4 w-full flex flex-col gap-4">
              <div className="border-b border-neutral-300 w-full flex justify-between">
                <div className="w-full flex items-end gap-2 pb-2 ">
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
          </div>
          {/* Ideally each of these images would be the product from a different angle/perspective */}
          <div className="w-full p-4 overflow-hidden">
            <div className="flex w-full overflow-x-scroll gap-4 p-4">
              <Image
                src={product.img}
                width={250}
                height={200}
                alt={`${product.name} image`}
              />
              <Image
                src={product.img}
                width={250}
                height={200}
                alt={`${product.name} image`}
              />
              <Image
                src={product.img}
                width={250}
                height={200}
                alt={`${product.name} image`}
              />
              <Image
                src={product.img}
                width={250}
                height={200}
                alt={`${product.name} image`}
              />
            </div>
          </div>
        </PageSection>
        <PageSection title="Color Options">
          <div className="w-full p-4 flex justify-center gap-4">
            <ColorBlock color="Blue" />
            <ColorBlock color="Green" />
            <ColorBlock color="Purple" />
            <ColorBlock color="Red" />
          </div>
        </PageSection>
        <PageSection title="Product Information">
          <div className="w-full p-4 flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
              explicabo recusandae dolorem delectus fuga numquam distinctio
              voluptate harum cum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Impedit, nam aperiam. Esse facere saepe aliquid
              provident explicabo molestias aliquam eius numquam odit.
              Similique, ipsa? Nisi consequuntur qui quaerat nesciunt sit.
            </p>
            <ul className="list-disc px-8">
              <li>Lorem ipsum</li>
              <li>Dolor sit amet</li>
              <li>Consectetur adipisicing</li>
            </ul>
            <div className="w-full flex justify-center">
              <HorizontalDivider text="Technical Information" />
            </div>
            <div className="w-full flex justify-center">
              <table className="w-1/2 min-w-[400px]">
                <tbody>
                  <tr className="w-full flex flex-col sm:flex-row items-center justify-between p-2">
                    <th>Driver Size</th>
                    <td>40mm</td>
                  </tr>
                  <tr className="w-full flex flex-col sm:flex-row items-center justify-between p-2">
                    <th>Frequency Response</th>
                    <td>20Hz - 20kHz</td>
                  </tr>
                  <tr className="w-full flex flex-col sm:flex-row items-center justify-between p-2">
                    <th>Impedance</th>
                    <td>32 Ohms</td>
                  </tr>
                  <tr className="w-full flex flex-col sm:flex-row items-center justify-between p-2">
                    <th>Bluetooth Version</th>
                    <td>5.0</td>
                  </tr>
                  <tr className="w-full flex flex-col sm:flex-row items-center justify-between p-2">
                    <th>Battery Life</th>
                    <td>30 hours (ANC on), 40 hours (ANC off)</td>
                  </tr>
                  <tr className="w-full flex flex-col sm:flex-row items-center justify-between p-2">
                    <th>Charging Time</th>
                    <td>2 hours</td>
                  </tr>
                  <tr className="w-full flex flex-col sm:flex-row items-center justify-between p-2">
                    <th>Weight</th>
                    <td>1lb.</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
        <RefundPolicy />
        <Warranty />
        <PageSection title="You might also like">
          <div className="w-full flex flex-wrap justify-center gap-4 m-4">
            {...otherProducts
              .slice(0, 3)
              .map((prod) => <ProductCard product={prod} />)}
          </div>
        </PageSection>
      </div>
    </div>
  );
}

export function Warranty() {
  return (
    <div className="w-full flex flex-col gap-4">
      <PageSection>
        <Accordion title="Warranty">
          <div className="w-full flex justify-center">
            <div className="w-9/10 flex flex-col gap-2 text-justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore dolorum corporis, maxime iure eius ipsum qui
                voluptatem quas ea beatae quae consequuntur autem aspernatur
                recusandae adipisci error voluptatibus ducimus repellendus eaque
                a? Quam labore praesentium enim vel temporibus architecto autem
                cupiditate dolorum illum, corporis blanditiis modi quod unde
                corrupti qui, esse ratione nisi et nesciunt, quas sequi
                voluptatibus? Temporibus, dolorem saepe esse officia
                reprehenderit minima?
              </p>
              <p>
                Assumenda nemo incidunt neque natus iste. Natus dolore ullam
                obcaecati quod. Praesentium, officia nisi. Laborum ducimus
                libero corporis reprehenderit exercitationem odit praesentium
                dolores ab cupiditate nihil repellat quasi a nostrum maxime,
                officia recusandae quae impedit dolorem ut iste veniam,
                excepturi eius. Id voluptatibus iusto dolorum odio velit laborum
                eveniet natus doloremque, beatae quam quisquam libero quidem
                vitae ipsa nam mollitia ad nemo sint dolore dolores. Aliquid
                nostrum temporibus repudiandae quos accusantium, porro expedita.{" "}
              </p>
              <p>
                Eveniet nihil distinctio voluptatum doloremque temporibus
                dolorum beatae excepturi fugiat libero labore provident eos
                earum maiores porro, eaque alias quasi sequi officiis error
                voluptate sapiente dolorem! Neque esse iure quas earum provident
                saepe, quis officia, debitis voluptates veniam distinctio sunt
                aliquid ratione nemo iusto dolorem cupiditate, reiciendis id!
                Voluptatum, iste temporibus sed eius illum est iure repellendus!
                Magni, labore. Nulla, cum iste!
              </p>
            </div>
          </div>
        </Accordion>
      </PageSection>
    </div>
  );
}
