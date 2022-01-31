import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const getApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://rickandmortyapi.com/graphql/',
    name: 'Rick&MortyGraphQl',
    version: '1.0',
  });
};
