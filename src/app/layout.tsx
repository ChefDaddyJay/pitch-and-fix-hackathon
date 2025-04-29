import type { Metadata } from "next";
import Navbar from "@/ui/Navbar";
import "./globals.css";
import Footer from "@/ui/Footer";
import FooterColumn from "@/ui/FooterColumn";

export const metadata: Metadata = {
  title: "ShopEase - Your One Stop Shop",
  description: "Your One Stop Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}

        <Footer>
          <FooterColumn
            title="Shop"
            links={[
              { text: "All Products", href: "/products" },
              { text: "Categories", href: "/categories" },
              { text: "Deals", href: "/deals" },
              { text: "New Arrivals", href: "/new-arrivals" },
            ]}
          />
          <FooterColumn
            title="Customer Service"
            links={[
              { text: "Contact Us", href: "/contact" },
              { text: "FAQ", href: "/faq" },
              { text: "Shipping & Returns", href: "/shipping" },
              { text: "Terms & Conditions", href: "/terms" },
            ]}
          />
          <FooterColumn
            title="About Us"
            links={[
              { text: "Our Story", href: "/about" },
              { text: "Blog", href: "/blog" },
              { text: "Careers", href: "/careers" },
              { text: "Partners", href: "/partners" },
            ]}
          />
          <FooterColumn
            title="Follow Us"
            links={[
              { text: "Facebook", href: "#" },
              { text: "Twitter", href: "#" },
              { text: "Instagram", href: "#" },
              { text: "Pinterest", href: "#" },
            ]}
          />
        </Footer>
      </body>
    </html>
  );
}
