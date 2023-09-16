import ActiveLink from "@/ui/atoms/ActiveLink";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Route } from "next";
import { Header } from "@/ui/organisms/Header";

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
        <Header />
        <section className="mx-auto flex flex-col items-center px-5 my-7">
          {children}
        </section>
      </body>
    </html>
  );
}
