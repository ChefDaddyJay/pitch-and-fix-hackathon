import Link from "next/link";
import { ReactNode } from "react";

export default function FooterColumn({
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
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="list-none">{...buildLinks()}</ul>
    </div>
  );
}
