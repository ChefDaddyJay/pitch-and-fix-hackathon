export default function Hero() {
  return (
    <section className="bg-neutral-500 bg-cover bg-center bg-[url(/images/hero_bg.jpg)] h-[500px] flex items-center justify-center text-white font-bold text-center">
      <div className="max-w-[800px] p-8 bg-black/80 rounded">
        <h1 className="text-5xl mb-4">Welcome to ShopEase</h1>
        <p className="text-xl mb-8">
          Find the best products at the best prices
        </p>
        <a
          href="/products"
          className="inline-block py-3 px-6 bg-amber-500 text-white rounded font-bold text-xl transition duration-300 hover:bg-amber-400"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
