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
  const activeClassName = pathname === href;

  return (
    <Link
      href={href}
      prefetch={true}
      className={clsx(
        `text-neutral-900 h-full flex items-center`,
        activeClassName && `border-b-2 border-b-blue-600`
      )}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
