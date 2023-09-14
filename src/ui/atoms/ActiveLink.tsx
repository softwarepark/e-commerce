"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { Route } from "next";

type ActiveLinkProps = {
  children: React.ReactNode;
  href: Route;
};

const ActiveLink = ({ href, children }: ActiveLinkProps) => {
  const pathname = usePathname();
  const activeLink = pathname === href;

  return (
    <Link
      href={href}
      prefetch={true}
      className={clsx(`text-blue-400`, activeLink && `text-blue-700 underline`)}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
