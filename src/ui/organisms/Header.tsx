import React from "react";
import ActiveLink from "../atoms/ActiveLink";
import { Route } from "next";
import { Card } from "@/ui/molecules/Card";

const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "All",
    path: "/products/1",
  },
  {
    label: "Categories",
    path: "/categories",
  },
  {
    label: "T-shirts",
    path: "/category/t-shirts",
  },
  {
    label: "Hoodies",
    path: "/category/hoodies",
  },
];

export const Header = () => {
  return (
    <header className="sticky top-0 bg-white border-b bg-opacity-60 backdrop-blur-lg z-50">
      <div className="mx-auto container px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between gap-x-4 flex-row items-center pb-0">
          <nav className="scrolling-touch scroll-shadows flex overflow-x-scrolllg:h-16 lg:overflow-x-auto scrollbar-none max-w-[15rem] sm:max-w-none overflow-x-auto">
            <ul className="flex h-16 max-w-full space-x-4 whitespace-nowrap">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <ActiveLink exact={false} href={item.path as Route}>
                    {item.label}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </nav>
          <Card />
        </div>
      </div>
    </header>
  );
};
