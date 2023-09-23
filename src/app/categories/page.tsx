import { getAllCategories } from "@/api/products";
import { CategoriesList } from "@/ui/organisms/CategoriesList";
import React from "react";

const CategoriesPage = async () => {
  const categories = await getAllCategories();

  return <CategoriesList categories={categories} title="Categories" />;
};

export default CategoriesPage;
