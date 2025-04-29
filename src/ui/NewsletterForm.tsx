export default function NewsletterForm() {
  return (
    <section className="bg-gray-300 py-16 px-8 text-center">
      <div className="max-w-[600px] my-0 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8">
          Get updates on new products, special offers, and more.
        </p>
        <form className="flex" id="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
            id="newsletter-email"
            className="flex-1 p-3 border border-neutral-300 rounded-tl rounded-bl bg-white"
          />
          <button
            type="submit"
            className="py-3 px-6 bg-blue-500 text-white border-none rounded-tr rounded-br cursor-pointer"
          >
            Subscribe
          </button>
        </form>
        <div id="newsletter-success"></div>
      </div>
    </section>
  );
}
