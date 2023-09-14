import ActiveLink from "@/ui/atoms/ActiveLink";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <nav>
          <ul className="flex justify-center mt-3 gap-3">
            <li>
              <ActiveLink href="/">Homepage</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/products">Products</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/polityka-prywatnosci">
                Polityka prywatności
              </ActiveLink>
            </li>
          </ul>
        </nav>
        <section className="mx-auto flex flex-col items-center px-5 my-7">
          {children}
        </section>
      </body>
    </html>
  );
}
