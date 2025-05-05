"use client";

import Navbar from "@/ui/Navbar";
import "./globals.css";
import Footer, { FooterColumn } from "@/ui/Footer";
import { Cart, CartContext } from "@/lib/Cart";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cart, setCart] = useState(new Cart());
  const updateCart = (newCart: Cart) => {
    setCart(newCart);
  };
  useEffect(() => {
    Cart.read().then((storedCart) => {
      if (storedCart !== cart) {
        setCart(storedCart);
      }
    });
  }, []);

  const navlinks = [
    { text: "Home", href: "/" },
    { text: "Products", href: "/products" },
    { text: "Categories", href: "/categories" },
    { text: "About Us", href: "/about" },
    { text: "Contact Us", href: "/contact" },
  ];

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      <html lang="en">
        <head>
          <title>ShopEase - Your One Stop Shop</title>
        </head>
        <body className="bg-neutral-200">
          <Navbar links={navlinks} />
          {children}
          <Footer>
            <FooterColumn
              title="Shop"
              links={[
                { text: "All Products", href: "/products" },
                { text: "Categories", href: "/categories" },
                { text: "Deals", href: "/products?tag=Sale" },
                { text: "New Arrivals", href: "/products?tag=New" },
              ]}
            />
            <FooterColumn
              title="Customer Service"
              links={[
                { text: "Contact Us", href: "/contact" },
                { text: "FAQ", href: "/faq" },
                { text: "Refunds & Returns", href: "/returns" },
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
                {
                  text: "Facebook",
                  href: "http://www.facebook.com",
                  target: "_blank",
                },
                {
                  text: "Twitter",
                  href: "http://www.twitter.com",
                  target: "_blank",
                },
                {
                  text: "Instagram",
                  href: "http://www.instagram.com",
                  target: "_blank",
                },
                {
                  text: "Pinterest",
                  href: "http://www.pinterest.com",
                  target: "_blank",
                },
              ]}
            />
          </Footer>
        </body>
      </html>
    </CartContext.Provider>
  );
}
