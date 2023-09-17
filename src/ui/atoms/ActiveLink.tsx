"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { Route } from "next";

type ActiveLinkProps<T extends string> = {
  href: Route<T>;
  children: React.ReactNode;
  exact?: boolean;
  className?: string;
  activeClassName?: string;
};

const ActiveLink = <T extends string>({
  href,
  children,
  exact = false,
  className = "text-slate-500 hover:text-slate-700 hover:border-gray-300 border-b-transparent ",
  activeClassName = "border-blue-500 border-b-2",
}: ActiveLinkProps<T>) => {
  const pathname = usePathname();

  const isActive = exact
    ? pathname === href
    : pathname.startsWith(href) && pathname.length === href.length;

  console.log(pathname, href, isActive);

  return (
    <Link
      href={href}
      prefetch={true}
      className={clsx(
        `flex h-full w-full min-w-[3rem] items-center justify-center px-1 pt-1 text-center text-sm font-medium border-b-2`,
        isActive ? activeClassName : className
      )}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
