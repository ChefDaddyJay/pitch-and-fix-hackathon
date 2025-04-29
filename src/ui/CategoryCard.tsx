import Image from "next/image";

export default function CategoryGrid({
  name,
  src,
  href,
}: {
  src: string;
  name: string;
  href: string;
}) {
  return (
    <div className="relative h-[200px] rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={`${name} Category`}
        width={300}
        height={200}
        className="w-full h-full object-cover"
      />
      <h3 className="absolute bottom-0 left-0 right-0 bg-black/70 text-2xl font-bold text-white p-2 m-0 text-center">
        {name}
      </h3>
      <a
        href={href}
        className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/50 text-white opacity-0 transition duration-300 hover:opacity-100"
      >
        View All
      </a>
    </div>
  );
}
