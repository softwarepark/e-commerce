"use client";
import { Route } from "next";
import ActiveLink from "../atoms/ActiveLink";
import clsx from "clsx";

export const Pagination = ({
  paginationLenght,
  currentPagination,
}: {
  paginationLenght: number;
  currentPagination: number;
}) => {
  const className =
    "border-b-transparent border-t-transparent border-t-2 hover:text-slate-700 hover:border-t-gray-300";
  const activeClassName = "border-t-2 border-t-blue-500 border-b-";

  return (
    <ul
      className="flex justify-center space-x-2 w-fit mx-auto mt-12"
      aria-label="pagination"
    >
      {[...Array(paginationLenght)].map((_, pageNumber) => (
        <li key={pageNumber}>
          <ActiveLink
            href={("/products/" + (pageNumber + 1)) as Route}
            className={clsx(
              className,
              currentPagination == pageNumber + 1 && activeClassName
            )}
          >
            {pageNumber + 1}
          </ActiveLink>
        </li>
      ))}
    </ul>
  );
};
