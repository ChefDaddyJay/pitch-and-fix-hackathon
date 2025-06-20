import Link from "next/link";

export default function Hero({
  image,
  welcome,
  text,
  buttonText,
  buttonLink,
}: {
  image?: string;
  welcome?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
}) {
  const defaultImage = "/images/hero_bg.jpg";
  return (
    <section
      style={{ backgroundImage: `url(${image || defaultImage})` }}
      className={`bg-neutral-500 bg-cover bg-center h-[300px] md:h-[500px] flex items-center justify-center text-white font-bold text-center`}
    >
      <div className="max-w-[800px] p-4 bg-black/50 h-min w-full rounded">
        <h1 className="text-3xl md:text-5xl mb-4">
          {welcome || "Welcome to ShopEase"}
        </h1>
        <p className="text-lg md:text-xl mb-8">
          {text || "Find the best products at the best prices"}
        </p>
        <Link
          href={buttonLink || "/products"}
          className="inline-block py-3 px-6 bg-amber-500 text-white rounded font-bold text-xl transition duration-300 hover:bg-amber-400"
        >
          {buttonText || "Shop Now"}
        </Link>
      </div>
    </section>
  );
}
