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
          <a href={link.href}>{link.text}</a>
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
