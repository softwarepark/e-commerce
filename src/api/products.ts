import { ProductItemType, CategoriesItemType } from "@/ui/types";

type GraphQLResponse<T> =
  | { data?: undefined; errors: { message: string }[] }
  | { data: T; errors?: undefined };

type ProductsGraphQLResponseProps = {
  products: ProductItemType[];
};
type ProductGraphQLResponseProps = {
  product: ProductItemType;
};
type CategoriesGraphQLResponseProps = {
  categories: CategoriesItemType[];
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
          slug
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
  id: ProductItemType["id"]
): Promise<ProductItemType> => {
  const res = await fetch(`${process.env.HYGRAPH_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_API_KEY}`,
    },
    body: JSON.stringify({
      query: `
      query GetSingleProductById($id: ID) {
        product(where: {id: $id}, locales:[en]) {
          id
          name
          descriptionShort
          slug
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
      variables: { id },
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

export const getAllCategories = async (): Promise<CategoriesItemType[]> => {
  const res = await fetch(`${process.env.HYGRAPH_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_API_KEY}`,
    },
    body: JSON.stringify({
      query: `
      query getAllCategories{
        categories{
          id
          name
          slug
          image{
            url
            alt
            width
            height
          }
        }
      }
      `,
    }),
  });

  const graphQLResponse =
    (await res.json()) as GraphQLResponse<CategoriesGraphQLResponseProps>;

  if (graphQLResponse.errors) {
    throw new Error(graphQLResponse.errors[0].message);
  }

  const categories = graphQLResponse.data.categories;

  return categories;
};
