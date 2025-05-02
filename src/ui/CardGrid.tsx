import Image from "next/image";
import ProductCard from "./ProductCard";

export default function CardGrid({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="py-16 px-8 flex flex-col items-center justify-around">
      <h2 className="text-3xl text-center font-bold mb-8 leading-tight">
        {title}
      </h2>
      <div className="grid grid-cols-4 gap-8">{children}</div>
    </section>
  );
}
