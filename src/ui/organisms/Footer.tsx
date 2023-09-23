import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full border-t py-4">
      <div className="mx-auto container px-2 sm:px-4 lg:px-8 flex items-center justify-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} E-commerce
        </p>
      </div>
    </footer>
  );
};
