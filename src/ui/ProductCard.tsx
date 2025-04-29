import Image from "next/image";

export default function ProductCard({
  src,
  name,
  tag,
  price,
  origPrice,
}: {
  src: string;
  name: string;
  tag?: string;
  price: Number;
  origPrice?: Number;
  rating: Number;
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={src}
          alt="Product 1"
          width={300}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        {tag ? (
          <div className="absolute top-2.5 left-2.5 py-1 px-2 bg-amber-500 text-white text-sm rounded">
            {tag}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-xl">{name}</h3>
        <div className="flex items-center mb-2">
          {origPrice ? (
            <span className="line-through text-neutral-500 mr-2">
              ${origPrice.toString()}
            </span>
          ) : (
            ""
          )}
          <span className="text-blue-500 font-bold">${price.toString()}</span>
        </div>
        <div className="flex items-center mb-4 text-amber-500">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <span className="text-neutral-500 text-sm ml-2">(42)</span>
        </div>
        <button
          className="block w-full p-2 bg-blue-500 text-white border-none rounded cursor-pointer transition-colors duration-300"
          data-product-id="1"
          data-product-name="Wireless Headphones"
          data-product-price="99.99"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
