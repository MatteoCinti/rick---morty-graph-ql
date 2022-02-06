import { gql } from '@apollo/client';

export const typeDefs = gql`
  type Location {
    __typename: string
    id: string
    name: string
  }

  type Origin {
    __typename: string
    id: string
    name: string
  }

  type Character {
    name: string
    id: string
    location: Location
    origin: Origin
    episode: [string]
    image: string
  }

  type Query {
    characters: [Character]!
  }
`
