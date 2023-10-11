/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetList {\n  categories(orderBy: name_ASC) {\n    ...CategoryGetCateogry\n  }\n}": types.CategoriesGetListDocument,
    "fragment CategoryGetCateogry on Category {\n  name\n  id\n  description\n  slug\n  ...CategoryImage\n  products {\n    id\n    name\n    descriptionShort\n    slug\n    ...ProductImage\n    price\n    categories {\n      name\n      id\n      slug\n    }\n    promotion\n  }\n}": types.CategoryGetCateogryFragmentDoc,
    "fragment CategoryImage on Category {\n  image {\n    id\n    url\n    width\n    height\n    alt\n  }\n}": types.CategoryImageFragmentDoc,
    "fragment ProductGetProduct on Product {\n  id\n  name\n  descriptionShort\n  slug\n  ...ProductImage\n  price\n  categories {\n    name\n    id\n    slug\n  }\n  promotion\n}": types.ProductGetProductFragmentDoc,
    "query ProductGetProductFromCategory($slug: String!) {\n  categories(where: {slug: $slug}, locales: en) {\n    ...CategoryGetCateogry\n  }\n}": types.ProductGetProductFromCategoryDocument,
    "query ProductGetSingleByID($id: ID) {\n  product(where: {id: $id}) {\n    ...ProductGetProduct\n  }\n}": types.ProductGetSingleByIdDocument,
    "fragment ProductImage on Product {\n  images {\n    url\n    alt\n    height\n    width\n  }\n}": types.ProductImageFragmentDoc,
    "query ProductsGetList($count: Int, $skip: Int) {\n  products(first: $count, skip: $skip, locales: en) {\n    ...ProductGetProduct\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories(orderBy: name_ASC) {\n    ...CategoryGetCateogry\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryGetCateogry on Category {\n  name\n  id\n  description\n  slug\n  ...CategoryImage\n  products {\n    id\n    name\n    descriptionShort\n    slug\n    ...ProductImage\n    price\n    categories {\n      name\n      id\n      slug\n    }\n    promotion\n  }\n}"): typeof import('./graphql').CategoryGetCateogryFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryImage on Category {\n  image {\n    id\n    url\n    width\n    height\n    alt\n  }\n}"): typeof import('./graphql').CategoryImageFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductGetProduct on Product {\n  id\n  name\n  descriptionShort\n  slug\n  ...ProductImage\n  price\n  categories {\n    name\n    id\n    slug\n  }\n  promotion\n}"): typeof import('./graphql').ProductGetProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetProductFromCategory($slug: String!) {\n  categories(where: {slug: $slug}, locales: en) {\n    ...CategoryGetCateogry\n  }\n}"): typeof import('./graphql').ProductGetProductFromCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetSingleByID($id: ID) {\n  product(where: {id: $id}) {\n    ...ProductGetProduct\n  }\n}"): typeof import('./graphql').ProductGetSingleByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductImage on Product {\n  images {\n    url\n    alt\n    height\n    width\n  }\n}"): typeof import('./graphql').ProductImageFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($count: Int, $skip: Int) {\n  products(first: $count, skip: $skip, locales: en) {\n    ...ProductGetProduct\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
