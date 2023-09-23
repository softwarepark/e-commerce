import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/ui/organisms/Header";
import { Footer } from "@/ui/organisms/Footer";

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
        <section className="mx-auto flex flex-col items-center container px-2 sm:px-4 lg:px-8 gap-y-7 py-14">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
