import Link from "next/link";
import { ReactNode } from "react";

export default function Footer({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <footer className="bg-neutral-800 text-white pt-12 px-8 pb-4">
      <div className="w-full flex flex-wrap justify-stretch gap-8 mb-8">
        {children}
      </div>
      <div className="border-t border-neutral-700 pt-4 text-center text-sm text-neutral-400">
        <p>&copy; 2025 ShopEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { text: string; href: string }[];
}) {
  const buildLinks = () => {
    let formattedLinks: ReactNode[] = [];
    for (const link of links) {
      formattedLinks.push(
        <li>
          <Link href={link.href}>{link.text}</Link>
        </li>
      );
    }
    return formattedLinks;
  };

  return (
    <div className="w-1/5 min-w-[300px]">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="list-none">{...buildLinks()}</ul>
    </div>
  );
}
