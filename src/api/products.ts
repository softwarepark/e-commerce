import {
  ProductGetSingleByIdDocument,
  ProductsGetListDocument,
  CategoriesGetListDocument,
  ProductGetProductFromCategoryDocument,
} from "@/gql/graphql";
import { executeGraphql } from "./graphglApi";
import { notFound } from "next/navigation";

export const getAllProducts = async (count: number, skip: number) => {
  const graphQLResponse = await executeGraphql(ProductsGetListDocument, {
    count,
    skip,
  });
  const products = graphQLResponse.products;
  return products;
};

export const getSingleProductById = async (id: string) => {
  const graphQLResponse = await executeGraphql(ProductGetSingleByIdDocument, {
    id,
  });
  const product = graphQLResponse.product;
  if (!product) {
    throw notFound();
  }
  return product;
};

export const getAllCategories = async () => {
  const graphQLResponse = await executeGraphql(CategoriesGetListDocument, {});
  const categories = graphQLResponse.categories;
  return categories;
};

export const getProductFromCategory = async (slug: string) => {
  const graphQLResponse = await executeGraphql(
    ProductGetProductFromCategoryDocument,
    {
      slug,
    }
  );
  const category = graphQLResponse.categories;
  return category;
};
