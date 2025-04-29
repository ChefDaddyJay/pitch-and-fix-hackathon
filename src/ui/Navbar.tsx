import Image from "next/image";
import CartDropdown from "./CartDropdown";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow z-10">
      <div className="flex items-center">
        <Image
          src="images/ShopEase-logo.svg"
          alt="ShopEase Logo"
          width={50}
          height={50}
          className="h-[50px]"
        />
      </div>
      <nav className="block">
        <ul className="flex flex-row list-none gap-6">
          <li>
            <a href="/" className="p-2 text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="/products" className="p-2 hover:text-blue-600">
              Products
            </a>
          </li>
          <li>
            <a href="/categories" className="p-2 hover:text-blue-600">
              Categories
            </a>
          </li>
          <li>
            <a href="/about" className="p-2 hover:text-blue-600">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="p-2 hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <CartDropdown />
    </header>
  );
}
