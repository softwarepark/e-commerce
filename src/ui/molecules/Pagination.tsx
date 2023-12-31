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
    "border-b-transparent hover:text-slate-700 hover:border-b-gray-300 ";

  return (
    <ul
      className="flex justify-center space-x-2 w-fit mx-auto min-h-[3rem] mt-6"
      aria-label="pagination"
    >
      {[...Array(paginationLenght)].map((_, pageNumber) => (
        <li key={pageNumber}>
          <ActiveLink
            href={("/products/" + (pageNumber + 1)) as Route}
            className={clsx(className, currentPagination == pageNumber + 1)}
          >
            {pageNumber + 1}
          </ActiveLink>
        </li>
      ))}
    </ul>
  );
};
