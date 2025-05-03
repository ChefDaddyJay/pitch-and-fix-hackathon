"use client";

import Image from "next/image";
import CartDropdown from "./Cart";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar({
  links,
}: {
  links: { text: string; href: string }[];
}) {
  const path = usePathname();

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow z-10">
      <div className="flex items-center">
        <Image
          src="/images/ShopEase-logo.svg"
          alt="ShopEase Logo"
          width={50}
          height={50}
          className="h-[50px]"
        />
      </div>
      <nav className="block">
        <ul className="flex flex-row list-none gap-6">
          {links.map((link, i) => (
            <li key={`navlink-${i}`}>
              <Link
                href={link.href}
                className={`p-2 hover:text-blue-600 ${
                  path === link.href ? "text-blue-600" : ""
                }`}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <CartDropdown />
    </header>
  );
}
