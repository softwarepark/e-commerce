import { TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TResults, TVariables>(
  query: TypedDocumentString<TResults, TVariables>,
  variables: TVariables
): Promise<TResults> => {
  if (!process.env.HYGRAPH_API_URL)
    throw new Error("HYGRAPH_API_URL is not defined");
  const res = await fetch(process.env.HYGRAPH_API_URL, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  type graphQLResponse<T> =
    | { data?: undefined; errors: { message: string }[] }
    | { data: T; errors?: undefined };

  const graphQLResponse = (await res.json()) as graphQLResponse<TResults>;

  if (graphQLResponse.errors) {
    throw new Error("GraphQL Error", { cause: graphQLResponse.errors });
  }

  return graphQLResponse.data;
};
