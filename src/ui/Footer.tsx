import { ReactNode } from "react";

export default function Footer({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <footer className="bg-neutral-800 text-white pt-12 px-8 pb-4">
      <div className="grid grid-cols-4 gap-8 mb-8">{children}</div>
      <div className="border-t border-neutral-700 pt-4 text-center text-sm text-neutral-400">
        <p>&copy; 2025 ShopEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
