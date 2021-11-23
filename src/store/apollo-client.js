import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://square-dove-73.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "15S69DEMAIaP6CSxytqQbQPdBLBLF8viC2olz6lTt5jUjDLAw34omV1f4vIH8mhj",
  },
});

export default client;
