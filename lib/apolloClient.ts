import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  credentials: 'same-origin',
  headers: {
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET as string,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
