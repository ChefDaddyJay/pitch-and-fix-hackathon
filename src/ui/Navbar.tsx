"use client";

import Image from "next/image";
import CartDropdown from "./Cart";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Dropdown, DropdownButton, DropdownContent } from "./Dropdown";

export default function Navbar({
  links,
}: {
  links: { text: string; href: string }[];
}) {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow z-10">
      <div className="flex items-center">
        <NavDropdown links={links} />
      </div>
      <nav className="hidden md:block">
        <NavLinks links={links} />
      </nav>
      <CartDropdown />
    </header>
  );
}

export function NavDropdown({
  links,
}: {
  links: { text: string; href: string }[];
}) {
  return (
    <Dropdown>
      <DropdownButton>
        <Image
          src="/images/ShopEase-logo.svg"
          alt="ShopEase Logo"
          width={50}
          height={50}
          className="h-[50px]"
        />
      </DropdownButton>

      <div className="md:invisible">
        <DropdownContent>
          <div className="px-2 py-1 flex flex-wrap justify-between">
            <NavLinks links={links} />
          </div>
        </DropdownContent>
      </div>
    </Dropdown>
  );
}

export function NavLinks({
  links,
}: {
  links: { text: string; href: string }[];
}) {
  const path = usePathname();

  return (
    <ul className="flex flex-col md:flex-row list-none gap-6">
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
  );
}
