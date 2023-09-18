import React from "react";
import ActiveLink from "../atoms/ActiveLink";
import { Route } from "next";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-white border-b bg-opacity-60 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
          <nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
            <ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
