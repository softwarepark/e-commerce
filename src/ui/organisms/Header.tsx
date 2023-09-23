import React from "react";
import ActiveLink from "../atoms/ActiveLink";
import { Route } from "next";
import { Card } from "@/ui/molecules/Card";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-white border-b bg-opacity-60 backdrop-blur-lg z-50">
      <div className="mx-auto container px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between gap-x-4 flex-row items-center pb-0">
          <nav className="scrolling-touch scroll-shadows flex overflow-x-scrolllg:h-16 lg:overflow-x-auto">
            <ul className="flex h-16 max-w-full space-x-4 whitespace-nowrap">
              <li>
                <ActiveLink exact={false} href="/">
                  Home
                </ActiveLink>
              </li>
              <li>
                <ActiveLink exact={false} href={"/products/1" as Route}>
                  All
                </ActiveLink>
              </li>
              <li>
                <ActiveLink exact={false} href={"/categories" as Route}>
                  Categories
                </ActiveLink>
              </li>
            </ul>
          </nav>
          <Card />
        </div>
      </div>
    </header>
  );
};
