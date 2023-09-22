import { ProductItemType } from "@/ui/types";
import { type } from "os";

type GraphQLResponse<T> =
  | { data?: undefined; errors: { message: string }[] }
  | { data: T; errors?: undefined };

type ProductsGraphQLResponseProps = {
  products: ProductItemType[];
};
type ProductGraphQLResponseProps = {
  product: ProductItemType;
};

export const getAllProducts = async (): Promise<ProductItemType[]> => {
  const res = await fetch(`${process.env.HYGRAPH_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_API_KEY}`,
    },
    body: JSON.stringify({
      query: `query GetAllProducts{
        products(first: 30, locales: [en]){
          id
          name
          descriptionShort
          images {
            url
            alt
            height
            width
          }
          price
          categories {
            name
            id
            slug
          }
          promotion
        }
      }`,
    }),
  });

  const graphQLResponse =
    (await res.json()) as GraphQLResponse<ProductsGraphQLResponseProps>;

  if (graphQLResponse.errors) {
    throw new Error(graphQLResponse.errors[0].message);
  }

  const products = graphQLResponse.data.products;

  return products;
};

export const getSingleProductById = async (
  productId: ProductItemType["id"]
): Promise<ProductItemType> => {
  const res = await fetch(`${process.env.HYGRAPH_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_API_KEY}`,
    },
    body: JSON.stringify({
      query: `
      query GetSingleProductById($productId: ID) {
        product(where: {id: $productId}, locales:[en]) {
          id
          name
          descriptionShort
          images {
            url
            alt
            height
            width
          }
          price
          categories {
            name
            id
            slug
          }
          promotion
        }
    }`,
      variables: { productId },
    }),
  });

  const graphQLResponse =
    (await res.json()) as GraphQLResponse<ProductGraphQLResponseProps>;

  if (graphQLResponse.errors) {
    throw new Error(graphQLResponse.errors[0].message);
  }

  const product = graphQLResponse.data.product;

  return product;
};
